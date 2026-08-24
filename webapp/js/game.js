/* ============================================================
   NARUTO DRAFT — Game Engine
   Modes: Single Player (vs AI) & Two Player (local hotseat)
   Draft: 6 role slots per team, 2 discards per player, no duplicates.
   ============================================================ */

const ROLES = [
  { id: 'leader',   label: 'Leader',   icon: '🎖️', keys: ['BIQ', 'OVR'] },
  { id: 'attacker', label: 'Attacker', icon: '⚔️', keys: ['NIN', 'TAI'] },
  { id: 'defender', label: 'Defender', icon: '🛡️', keys: ['CHK', 'TAI'] },
  { id: 'support',  label: 'Support',  icon: '🌀', keys: ['BIQ', 'GEN'] },
  { id: 'healer',   label: 'Healer',   icon: '💚', keys: ['CHK', 'BIQ'] },
  { id: 'wildcard', label: 'Wildcard', icon: '🃏', keys: ['OVR'] },
];
const MAX_DISCARDS = 2;

/* ---------------- Audio (WebAudio, no external assets) ---------------- */
const Sound = (() => {
  let ctx = null;
  function ac() {
    if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* no audio */ } }
    if (ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, start, dur, type, vol) {
    const a = ac(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type || 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, a.currentTime + start);
    g.gain.exponentialRampToValueAtTime(vol || 0.15, a.currentTime + start + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
    o.connect(g).connect(a.destination);
    o.start(a.currentTime + start); o.stop(a.currentTime + start + dur + 0.05);
  }
  return {
    reveal()  { tone(300, 0, 0.15, 'triangle'); tone(600, 0.08, 0.2, 'triangle'); tone(900, 0.16, 0.3, 'sine', 0.1); },
    godReveal(){ [440, 554, 659, 880].forEach((f, i) => tone(f, i * 0.09, 0.5, 'sine', 0.12)); },
    draft()   { tone(523, 0, 0.12, 'triangle'); tone(784, 0.1, 0.25, 'triangle'); },
    discard() { tone(220, 0, 0.18, 'sawtooth', 0.08); tone(140, 0.1, 0.25, 'sawtooth', 0.08); },
    victory() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.4, 'triangle', 0.14)); },
    click()   { tone(660, 0, 0.06, 'square', 0.05); },
  };
})();

/* ---------------- Game state ---------------- */
const G = {
  mode: null,          // 'ai' | '2p'
  deck: [],            // shuffled character objects
  players: [],         // [{name, isAI, slots:{roleId:card|null}, discardsLeft}]
  turn: 0,             // index into players
  currentCard: null,
  busy: false,
};

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function newPlayer(name, isAI) {
  const slots = {};
  ROLES.forEach(r => slots[r.id] = null);
  return { name, isAI, slots, discardsLeft: MAX_DISCARDS };
}

function openRoles(p)  { return ROLES.filter(r => !p.slots[r.id]); }
function teamFull(p)   { return openRoles(p).length === 0; }
function teamCards(p)  { return ROLES.map(r => p.slots[r.id]).filter(Boolean); }

/* Role fit: 0–99, avg of the role's key attributes (OVR counts as a stat). */
function roleFit(card, role) {
  const vals = role.keys.map(k => k === 'OVR' ? card.ovr : card.stats[k]);
  return Math.round(vals.reduce((s, v) => s + v, 0) / vals.length);
}
function bestRoleFor(card, p) {
  let best = null, bestFit = -1;
  openRoles(p).forEach(r => {
    const f = roleFit(card, r);
    if (f > bestFit) { bestFit = f; best = r; }
  });
  return { role: best, fit: bestFit };
}
function chemistryPct(fit) { return Math.max(5, Math.min(100, Math.round(fit * 100 / 95))); }
function teamChemistry(p) {
  const entries = ROLES.filter(r => p.slots[r.id]);
  if (!entries.length) return 0;
  return Math.round(entries.reduce((s, r) => s + chemistryPct(roleFit(p.slots[r.id], r)), 0) / entries.length);
}
function teamAggregate(p) {
  const cards = teamCards(p);
  const agg = { NIN: 0, TAI: 0, GEN: 0, CHK: 0, SPD: 0, BIQ: 0, OVR: 0 };
  cards.forEach(c => {
    Object.keys(c.stats).forEach(k => agg[k] += c.stats[k]);
    agg.OVR += c.ovr;
  });
  const n = Math.max(1, cards.length);
  Object.keys(agg).forEach(k => agg[k] = Math.round(agg[k] / n));
  return agg;
}

/* ---------------- Screens & rendering ---------------- */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
function show(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  $('#' + screenId).classList.remove('hidden');
}

const TIER_LABELS = { god: 'GOD', kage: 'KAGE', elite: 'ELITE', common: 'CHUNIN' };

function initials(name) {
  return name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function cardHTML(card, opts) {
  opts = opts || {};
  const s = card.stats;
  return `
  <div class="ut-card tier-${card.tier} ${opts.mini ? 'mini' : ''} ${opts.reveal ? 'reveal' : ''}">
    <div class="card-top">
      <div class="card-ovr">
        <span class="ovr-num">${card.ovr}</span>
        <span class="ovr-tier">${TIER_LABELS[card.tier]}</span>
      </div>
      <div class="card-art">
        <img src="${card.img}" alt="${card.name}" loading="lazy" referrerpolicy="no-referrer"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="art-fallback" style="display:none">${initials(card.name)}</div>
      </div>
    </div>
    <div class="card-name">${card.name}</div>
    <div class="card-title">${card.title}</div>
    <div class="card-stats">
      <div><b>${s.NIN}</b> NIN</div><div><b>${s.TAI}</b> TAI</div>
      <div><b>${s.GEN}</b> GEN</div><div><b>${s.CHK}</b> CHK</div>
      <div><b>${s.SPD}</b> SPD</div><div><b>${s.BIQ}</b> BIQ</div>
    </div>
  </div>`;
}

/* Belt-and-braces image fallback: onerror covers fast HTTP failures,
   this timeout covers slow/hanging connections (e.g. bot-challenge
   pages that never resolve to a real image response). */
function armImageFallbacks(root) {
  root.querySelectorAll('.card-art img').forEach(img => {
    setTimeout(() => {
      if (!img.complete || img.naturalWidth === 0) {
        img.style.display = 'none';
        const fb = img.nextElementSibling;
        if (fb) fb.style.display = 'flex';
      }
    }, 3000);
  });
}

function rosterHTML(p, idx) {
  const chem = teamChemistry(p);
  const agg = teamAggregate(p);
  const slotRows = ROLES.map(r => {
    const c = p.slots[r.id];
    if (!c) {
      return `<div class="slot empty"><span class="slot-role">${r.icon} ${r.label}</span><span class="slot-hint">— empty —</span></div>`;
    }
    const fit = roleFit(c, r);
    return `<div class="slot filled tier-${c.tier}">
      <span class="slot-role">${r.icon} ${r.label}</span>
      <span class="slot-name">${c.name}</span>
      <span class="slot-ovr">${c.ovr}</span>
      <span class="slot-fit" title="Role chemistry">${chemistryPct(fit)}%</span>
    </div>`;
  }).join('');
  return `
    <h3 class="roster-title ${G.turn === idx ? 'active' : ''}">${p.name}</h3>
    <div class="discard-counter">Discards Remaining: <b>${p.discardsLeft}/${MAX_DISCARDS}</b></div>
    ${slotRows}
    <div class="chem-meter">
      <div class="chem-label">Team Chemistry <b>${chem}%</b></div>
      <div class="chem-bar"><div class="chem-fill" style="width:${chem}%"></div></div>
      <div class="agg-row">
        <span>NIN ${agg.NIN}</span><span>TAI ${agg.TAI}</span><span>GEN ${agg.GEN}</span>
        <span>CHK ${agg.CHK}</span><span>SPD ${agg.SPD}</span><span>BIQ ${agg.BIQ}</span>
      </div>
    </div>`;
}

function renderRosters() {
  $('#roster-p1').innerHTML = rosterHTML(G.players[0], 0);
  $('#roster-p2').innerHTML = rosterHTML(G.players[1], 1);
}

function renderTurn() {
  const p = G.players[G.turn];
  $('#turn-banner').textContent = p.isAI ? '🤖 AI Opponent is drafting…' : `🌀 ${p.name} — your pick!`;
  const btnDiscard = $('#btn-discard');
  btnDiscard.textContent = `Discard (${p.discardsLeft} left)`;
  btnDiscard.disabled = p.discardsLeft === 0 || p.isAI;
  $('#btn-draft').disabled = p.isAI;
  if (p.discardsLeft === 0 && !p.isAI) {
    btnDiscard.textContent = 'Discard (0 left — must draft!)';
  }
}

/* ---------------- Draft flow ---------------- */
function startGame(mode) {
  Sound.click();
  G.mode = mode;
  G.deck = shuffled(CHARACTERS);
  const p1Name = ($('#name-p1').value || 'Player 1').trim().slice(0, 20) || 'Player 1';
  const p2Name = mode === 'ai' ? 'AI Opponent' : (($('#name-p2').value || 'Player 2').trim().slice(0, 20) || 'Player 2');
  G.players = [newPlayer(p1Name, false), newPlayer(p2Name, mode === 'ai')];
  G.turn = 0;
  G.busy = false;
  show('screen-draft');
  renderRosters();
  drawCard();
}

function drawCard() {
  if (G.players.every(teamFull)) return startBattle();
  if (teamFull(G.players[G.turn])) G.turn = 1 - G.turn;

  G.currentCard = G.deck.pop();
  const stage = $('#card-stage');
  stage.innerHTML = cardHTML(G.currentCard, { reveal: true });
  armImageFallbacks(stage);
  (G.currentCard.tier === 'god' ? Sound.godReveal : Sound.reveal)();
  renderRosters();
  renderTurn();

  const p = G.players[G.turn];
  if (p.isAI) {
    G.busy = true;
    setTimeout(aiDecide, 1100);
  } else {
    G.busy = false;
  }
}

function draftCurrentTo(roleId) {
  const p = G.players[G.turn];
  const role = ROLES.find(r => r.id === roleId);
  if (!role || p.slots[roleId]) return;
  p.slots[roleId] = G.currentCard;
  Sound.draft();
  closeRoleModal();
  announce(`${p.name} drafted ${G.currentCard.name} as ${role.label}!`);
  G.turn = 1 - G.turn;
  setTimeout(drawCard, 500);
}

function discardCurrent() {
  const p = G.players[G.turn];
  if (p.discardsLeft <= 0) return;
  p.discardsLeft--;
  Sound.discard();
  announce(`${p.name} discarded ${G.currentCard.name}. (${p.discardsLeft} discard${p.discardsLeft === 1 ? '' : 's'} left)`);
  setTimeout(drawCard, 400); // same player re-rolls
}

function announce(msg) {
  const el = $('#announce');
  el.textContent = msg;
  el.classList.remove('pop');
  void el.offsetWidth; // restart animation
  el.classList.add('pop');
}

/* ---------------- AI logic ---------------- */
function aiDecide() {
  const p = G.players[G.turn];
  const { role, fit } = bestRoleFor(G.currentCard, p);
  // Discard when the card fits poorly and we can still afford to be picky.
  // Threshold relaxes as slots fill up so the AI never gets stranded.
  const slotsLeft = openRoles(p).length;
  const threshold = 68 + Math.min(14, slotsLeft * 2) - (MAX_DISCARDS - p.discardsLeft) * 6;
  if (p.discardsLeft > 0 && fit < threshold && G.currentCard.ovr < 88) {
    G.busy = false;
    discardCurrent();
  } else {
    G.busy = false;
    draftCurrentTo(role.id);
  }
}

/* ---------------- Role modal ---------------- */
function openRoleModal() {
  const p = G.players[G.turn];
  if (p.isAI || !G.currentCard) return;
  Sound.click();
  const list = openRoles(p).map(r => {
    const fit = roleFit(G.currentCard, r);
    const pct = chemistryPct(fit);
    return `<button class="role-option" data-role="${r.id}">
      <span class="ro-icon">${r.icon}</span>
      <span class="ro-label">${r.label}<small>${r.keys.join(' / ')}</small></span>
      <span class="ro-fit ${pct >= 85 ? 'great' : pct >= 70 ? 'good' : 'poor'}">${pct}%</span>
    </button>`;
  }).join('');
  $('#role-options').innerHTML = list;
  $('#role-modal-card-name').textContent = `Draft ${G.currentCard.name} to which role?`;
  $('#role-modal').classList.remove('hidden');
}
function closeRoleModal() { $('#role-modal').classList.add('hidden'); }

/* ---------------- Battle simulation ---------------- */
const MATCHUPS = [
  { label: 'Leadership Duel', a: 'leader',   b: 'leader',   weight: 1.3, icon: '🎖️' },
  { label: 'Offense I — attack vs defense',  a: 'attacker', b: 'defender', weight: 1.2, icon: '⚔️' },
  { label: 'Offense II — defense vs attack', a: 'defender', b: 'attacker', weight: 1.2, icon: '🛡️' },
  { label: 'Support Arts', a: 'support', b: 'support', weight: 1.0, icon: '🌀' },
  { label: 'Medical Corps', a: 'healer', b: 'healer', weight: 1.0, icon: '💚' },
  { label: 'Wildcard Clash', a: 'wildcard', b: 'wildcard', weight: 1.1, icon: '🃏' },
];

function roleScore(p, roleId) {
  const role = ROLES.find(r => r.id === roleId);
  const card = p.slots[roleId];
  const fit = roleFit(card, role);
  // Support raises the whole squad; leaders raise morale.
  const supportBoost = roleId !== 'support' ? roleFit(p.slots.support, ROLES.find(r => r.id === 'support')) * 0.06 : 0;
  return fit * 0.6 + card.ovr * 0.4 + supportBoost;
}

function simulateBattle() {
  const [A, B] = G.players;
  const rounds = MATCHUPS.map(m => {
    const sa = roleScore(A, m.a) + Math.random() * 8;
    const sb = roleScore(B, m.b) + Math.random() * 8;
    return { ...m, cardA: A.slots[m.a], cardB: B.slots[m.b], sa, sb, ptsA: sa * m.weight, ptsB: sb * m.weight };
  });
  let totalA = rounds.reduce((s, r) => s + r.ptsA, 0);
  let totalB = rounds.reduce((s, r) => s + r.ptsB, 0);
  // Chemistry seals the deal: up to +8% team-wide.
  const chemA = teamChemistry(A), chemB = teamChemistry(B);
  totalA *= 1 + chemA * 0.0008;
  totalB *= 1 + chemB * 0.0008;
  return { rounds, totalA, totalB, chemA, chemB, winner: totalA >= totalB ? 0 : 1 };
}

function startBattle() {
  const result = simulateBattle();
  const [A, B] = G.players;

  const roundsHTML = result.rounds.map(r => {
    const aWins = r.ptsA >= r.ptsB;
    const max = Math.max(r.ptsA, r.ptsB);
    return `<div class="battle-round">
      <div class="br-side ${aWins ? 'win' : ''}">
        <span class="br-name">${r.cardA.name}</span>
        <div class="br-bar"><div class="br-fill a" style="width:${Math.round(r.ptsA / max * 100)}%"></div></div>
        <span class="br-pts">${r.ptsA.toFixed(1)}</span>
      </div>
      <div class="br-label">${r.icon}<br><small>${r.label}<br>×${r.weight}</small></div>
      <div class="br-side right ${!aWins ? 'win' : ''}">
        <span class="br-pts">${r.ptsB.toFixed(1)}</span>
        <div class="br-bar"><div class="br-fill b" style="width:${Math.round(r.ptsB / max * 100)}%"></div></div>
        <span class="br-name">${r.cardB.name}</span>
      </div>
    </div>`;
  }).join('');

  const winner = G.players[result.winner];
  const mvpPool = ROLES.map(r => ({ card: winner.slots[r.id], score: roleScore(winner, r.id) }));
  const mvp = mvpPool.sort((x, y) => y.score - x.score)[0].card;

  $('#battle-content').innerHTML = `
    <div class="battle-header">
      <div class="bh-team"><h3>${A.name}</h3><div class="bh-total">${result.totalA.toFixed(1)}</div><div class="bh-chem">Chemistry ${result.chemA}%</div></div>
      <div class="bh-vs">VS</div>
      <div class="bh-team"><h3>${B.name}</h3><div class="bh-total">${result.totalB.toFixed(1)}</div><div class="bh-chem">Chemistry ${result.chemB}%</div></div>
    </div>
    <div class="battle-rounds">${roundsHTML}</div>
    <div class="winner-banner">🏆 ${winner.name} WINS THE MATCH! 🏆</div>
    <div class="mvp-block"><div class="mvp-label">Match MVP</div>${cardHTML(mvp, { mini: false })}</div>
    <div class="battle-teams">
      <div class="bt-col"><h4>${A.name}</h4>${ROLES.map(r => cardHTML(A.slots[r.id], { mini: true })).join('')}</div>
      <div class="bt-col"><h4>${B.name}</h4>${ROLES.map(r => cardHTML(B.slots[r.id], { mini: true })).join('')}</div>
    </div>`;
  armImageFallbacks($('#battle-content'));
  show('screen-battle');
  Sound.victory();
}

/* ---------------- Explore Cards ---------------- */
const Explore = { tier: 'all', search: '', sort: 'ovr-desc' };

function renderExplore() {
  let list = CHARACTERS.filter(c => {
    if (Explore.tier !== 'all' && c.tier !== Explore.tier) return false;
    if (Explore.search) {
      const q = Explore.search.toLowerCase();
      if (!c.name.toLowerCase().includes(q) && !c.title.toLowerCase().includes(q)) return false;
    }
    return true;
  });
  list = list.slice().sort((a, b) => {
    if (Explore.sort === 'ovr-desc') return b.ovr - a.ovr;
    if (Explore.sort === 'ovr-asc') return a.ovr - b.ovr;
    return a.name.localeCompare(b.name);
  });

  $('#explore-count').textContent = `${list.length} / ${CHARACTERS.length} characters`;
  const grid = $('#explore-grid');
  grid.innerHTML = list.length
    ? list.map(c => cardHTML(c, {})).join('')
    : `<div class="explore-empty">No characters match your search.</div>`;
  armImageFallbacks(grid);
}

function openExplore() {
  Sound.click();
  show('screen-explore');
  renderExplore();
}

/* ---------------- Wiring ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#btn-mode-ai').addEventListener('click', () => { $('#name-p2-wrap').classList.add('hidden'); startGame('ai'); });
  $('#btn-mode-2p').addEventListener('click', () => {
    if ($('#name-p2-wrap').classList.contains('hidden')) {
      $('#name-p2-wrap').classList.remove('hidden');
      $('#name-p2').focus();
      return;
    }
    startGame('2p');
  });
  $('#btn-draft').addEventListener('click', openRoleModal);
  $('#btn-discard').addEventListener('click', () => { if (!G.busy) discardCurrent(); });
  $('#role-options').addEventListener('click', e => {
    const btn = e.target.closest('.role-option');
    if (btn) draftCurrentTo(btn.dataset.role);
  });
  $('#role-modal-close').addEventListener('click', closeRoleModal);
  $('#role-modal').addEventListener('click', e => { if (e.target.id === 'role-modal') closeRoleModal(); });
  $('#btn-rematch').addEventListener('click', () => startGame(G.mode));
  $('#btn-home').addEventListener('click', () => show('screen-home'));

  $('#btn-mode-explore').addEventListener('click', openExplore);
  $('#btn-explore-back').addEventListener('click', () => { Sound.click(); show('screen-home'); });
  $('#explore-search').addEventListener('input', e => { Explore.search = e.target.value; renderExplore(); });
  $('#explore-sort').addEventListener('change', e => { Explore.sort = e.target.value; renderExplore(); });
  $('#explore-tiers').addEventListener('click', e => {
    const chip = e.target.closest('.tier-chip');
    if (!chip) return;
    Explore.tier = chip.dataset.tier;
    $$('.tier-chip').forEach(el => el.classList.toggle('active', el === chip));
    renderExplore();
  });
});
