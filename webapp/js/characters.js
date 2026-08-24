/* ============================================================
   NARUTO DRAFT — Complete 200-Character Database
   Stats: NIN, TAI, GEN, CHK, SPD, BIQ (1–99), OVR fixed per design doc.
   Images: resolved via the Narutopedia (Fandom) MediaWiki API to direct
   static.wikia.nocookie.net CDN URLs — the naruto.fandom.com wiki domain
   itself sits behind Cloudflare bot-mitigation that silently blocks
   hotlinked <img> requests, but the underlying asset CDN serves them
   fine. A CSS fallback avatar still renders if a URL ever fails to load.
   ============================================================ */

const TIERS = [
  { id: 'god',    label: 'God Tier',    min: 95 },
  { id: 'kage',   label: 'Kage Tier',   min: 88 },
  { id: 'elite',  label: 'Elite Jonin', min: 80 },
  { id: 'common', label: 'Chunin/Genin', min: 0 },
];

function tierOf(ovr) {
  return TIERS.find(t => ovr >= t.min).id;
}

/* C(name, title, ovr, NIN, TAI, GEN, CHK, SPD, BIQ, imgUrl) */
const CHARACTERS = [];
function C(name, title, ovr, nin, tai, gen, chk, spd, biq, img) {
  CHARACTERS.push({
    id: CHARACTERS.length + 1,
    name, title, ovr,
    stats: { NIN: nin, TAI: tai, GEN: gen, CHK: chk, SPD: spd, BIQ: biq },
    tier: tierOf(ovr),
    img,
  });
}

/* ---------- GROUP 1: THE JINCHŪRIKI & TAILED BEAST HOSTS ---------- */
C('Naruto Uzumaki', '9-Tails Jinchūriki', 98, 99, 92, 30, 99, 95, 78, 'https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png/revision/latest/scale-to-width-down/300?cb=20210811111154');
C('Gaara', '1-Tail Jinchūriki', 89, 93, 55, 40, 90, 70, 88, 'https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara_Part_II.png/revision/latest/scale-to-width-down/300?cb=20170914045727');
C('Yugito Nii', '2-Tails Jinchūriki', 85, 86, 84, 50, 88, 85, 75, 'https://static.wikia.nocookie.net/naruto/images/2/2f/Yugito.png/revision/latest/scale-to-width-down/300?cb=20220205121239');
C('Yagura Karatachi', '3-Tails Jinchūriki · 4th Mizukage', 87, 90, 75, 82, 89, 78, 80, 'https://static.wikia.nocookie.net/naruto/images/e/e0/Yagura.png/revision/latest/scale-to-width-down/300?cb=20220206065510');
C('Roshi', '4-Tails Jinchūriki · Lava Style', 86, 89, 80, 45, 88, 70, 74, 'https://static.wikia.nocookie.net/naruto/images/c/c9/Roshi.png/revision/latest/scale-to-width-down/300?cb=20140811230523');
C('Han', '5-Tails Jinchūriki · Steam Armour', 85, 84, 90, 40, 87, 75, 70, 'https://static.wikia.nocookie.net/naruto/images/3/3c/Han.png/revision/latest/scale-to-width-down/300?cb=20220205121445');
C('Utakata', '6-Tails Jinchūriki · Bubble Style', 86, 88, 60, 55, 87, 74, 78, 'https://static.wikia.nocookie.net/naruto/images/2/27/Utakata.png/revision/latest/scale-to-width-down/300?cb=20160223174142');
C('Fu', '7-Tails Jinchūriki', 84, 85, 70, 50, 86, 82, 68, 'https://static.wikia.nocookie.net/naruto/images/6/6e/F%C5%AB.png/revision/latest/scale-to-width-down/300?cb=20140811223244');
C('Killer Bee', '8-Tails Jinchūriki', 92, 90, 93, 35, 96, 88, 72, 'https://static.wikia.nocookie.net/naruto/images/6/63/Killer_B.png/revision/latest/scale-to-width-down/300?cb=20180425141557');
C('Minato Namikaze', 'Yin 9-Tails · Yellow Flash', 96, 97, 88, 60, 92, 99, 96, 'https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest/scale-to-width-down/300?cb=20160125175116');
C('Kushina Uzumaki', 'Former 9-Tails Jinchūriki', 85, 86, 70, 55, 93, 72, 76, 'https://static.wikia.nocookie.net/naruto/images/6/6c/Kid_Kushina.png/revision/latest/scale-to-width-down/300?cb=20260130205650');
C('Mito Uzumaki', 'First 9-Tails Jinchūriki', 92, 90, 60, 75, 97, 65, 90, 'https://static.wikia.nocookie.net/naruto/images/d/da/Mito_Uzumaki.png/revision/latest/scale-to-width-down/300?cb=20160123234625');
C('Rin Nohara', 'Former 3-Tails Jinchūriki', 72, 70, 60, 55, 75, 62, 74, 'https://static.wikia.nocookie.net/naruto/images/b/bc/Rin_Nohara.png/revision/latest/scale-to-width-down/300?cb=20220205122410');
C('Blue B', 'Former 8-Tails Jinchūriki · Fukai', 84, 85, 78, 50, 90, 75, 70, 'https://static.wikia.nocookie.net/naruto/images/b/bd/Blue_B.png/revision/latest/scale-to-width-down/300?cb=20220124124640');
C('Obito Uchiha', '10-Tails Jinchūriki', 97, 98, 85, 88, 99, 93, 90, 'https://static.wikia.nocookie.net/naruto/images/4/4a/Obito_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20220223045744');
C('Madara Uchiha', '10-Tails Jinchūriki · Ghost of the Uchiha', 97, 97, 95, 96, 97, 94, 96, 'https://static.wikia.nocookie.net/naruto/images/0/06/Kid_Madara.png/revision/latest/scale-to-width-down/300?cb=20230320174531');
C('Hagoromo Otsutsuki', 'First 10-Tails Jinchūriki · Sage of Six Paths', 99, 99, 90, 95, 99, 90, 99, 'https://static.wikia.nocookie.net/naruto/images/8/83/Kid_Hagoromo.png/revision/latest/scale-to-width-down/300?cb=20160528091016');
C('Kinkaku', 'Pseudo 9-Tails · Gold Brother', 86, 87, 84, 40, 92, 78, 60, 'https://static.wikia.nocookie.net/naruto/images/f/f4/Kinkaku_268.png/revision/latest/scale-to-width-down/300?cb=20160127045238');
C('Ginkaku', 'Pseudo 9-Tails · Silver Brother', 86, 86, 83, 42, 91, 78, 62, 'https://static.wikia.nocookie.net/naruto/images/0/03/Ginkaku_268.png/revision/latest/scale-to-width-down/300?cb=20160127044749');
C('Black Zetsu', "Kaguya's Will · Held Yin Kurama", 80, 78, 55, 70, 75, 60, 95, 'https://static.wikia.nocookie.net/naruto/images/e/e9/Black_Zetsu.png/revision/latest/scale-to-width-down/300?cb=20220215005248');

/* ---------- GROUP 2: AKATSUKI & TAKA ---------- */
C('Nagato', 'Pain · Rinnegan Wielder', 95, 99, 60, 80, 97, 55, 92, 'https://static.wikia.nocookie.net/naruto/images/4/46/Nagato.png/revision/latest/scale-to-width-down/300?cb=20150821081644');
C('Yahiko', 'Founder of Akatsuki', 82, 83, 78, 55, 76, 77, 80, 'https://static.wikia.nocookie.net/naruto/images/7/76/Yahiko.png/revision/latest/scale-to-width-down/300?cb=20230317232940');
C('Konan', 'Angel of Amegakure', 85, 88, 65, 70, 80, 76, 88, 'https://static.wikia.nocookie.net/naruto/images/3/36/Young_Konan_OL.png/revision/latest/scale-to-width-down/300?cb=20210414203307');
C('Itachi Uchiha', 'Clan Slayer · Genjutsu Master', 94, 93, 82, 99, 78, 90, 97, 'https://static.wikia.nocookie.net/naruto/images/e/e9/Itachi_Child_OL.png/revision/latest/scale-to-width-down/300?cb=20210415223303');
C('Kisame Hoshigaki', 'Monster of the Hidden Mist', 90, 91, 86, 50, 98, 75, 78, 'https://static.wikia.nocookie.net/naruto/images/f/f7/Kisame_Hoshigaki_full.png/revision/latest/scale-to-width-down/300?cb=20160304061903');
C('Sasori', 'Sasori of the Red Sand', 88, 92, 60, 55, 84, 70, 92, 'https://static.wikia.nocookie.net/naruto/images/f/f7/Sasori.png/revision/latest/scale-to-width-down/300?cb=20170127174522');
C('Deidara', 'Mad Bomber of Iwagakure', 87, 93, 55, 45, 85, 80, 82, 'https://static.wikia.nocookie.net/naruto/images/0/06/Deidara.png/revision/latest/scale-to-width-down/300?cb=20240604182145');
C('Kakuzu', 'Five Hearts · Earth Grudge Fear', 88, 90, 85, 45, 93, 70, 85, 'https://static.wikia.nocookie.net/naruto/images/5/57/Kakuzu.png/revision/latest/scale-to-width-down/300?cb=20160115192126');
C('Hidan', 'Immortal Zealot of Jashin', 83, 60, 88, 40, 80, 76, 55, 'https://static.wikia.nocookie.net/naruto/images/e/e3/Hidan.png/revision/latest/scale-to-width-down/300?cb=20210911225839');
C('White Zetsu', 'Spore Spy of Akatsuki', 75, 74, 55, 60, 70, 65, 72, 'https://static.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest/scale-to-width-down/300?cb=20220219044442');
C('Juzo Biwa', 'Former Seven Swordsman · Akatsuki', 81, 78, 86, 40, 80, 74, 65, 'https://static.wikia.nocookie.net/naruto/images/c/c2/J%C5%ABz%C5%8D_Biwa.png/revision/latest/scale-to-width-down/300?cb=20220223044843');
C('Sasuke Uchiha', 'Rinnegan · Last Uchiha', 98, 99, 90, 95, 96, 96, 92, 'https://static.wikia.nocookie.net/naruto/images/1/13/Sasuke_Part_2.png/revision/latest/scale-to-width-down/300?cb=20170716092003');
C('Suigetsu Hozuki', 'Second Coming of the Demon', 81, 80, 84, 40, 82, 76, 68, 'https://static.wikia.nocookie.net/naruto/images/3/3e/Suigetsu_H%C5%8Dzuki.png/revision/latest/scale-to-width-down/300?cb=20171012002428');
C('Karin', 'Sensor of Taka · Uzumaki Blood', 78, 65, 50, 55, 85, 60, 86, 'https://static.wikia.nocookie.net/naruto/images/7/72/Karin3.png/revision/latest/scale-to-width-down/300?cb=20170906102126');
C('Jugo', 'Origin of the Curse Mark', 82, 80, 87, 30, 88, 74, 45, 'https://static.wikia.nocookie.net/naruto/images/6/67/J%C5%ABgo.png/revision/latest/scale-to-width-down/300?cb=20160610220330');

/* ---------- GROUP 3: KONOHA 11, SENSEIS & SANNIN ---------- */
C('Sakura Haruno', 'Slug Princess · Medical Ninja', 88, 75, 92, 60, 94, 72, 88, 'https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170726101444');
C('Kakashi Hatake', 'Double Mangekyō · Copy Ninja', 97, 98, 90, 90, 92, 95, 98, 'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/300?cb=20251019002845');
C('Shikamaru Nara', 'Shadow Strategist', 84, 76, 55, 70, 65, 60, 99, 'https://static.wikia.nocookie.net/naruto/images/9/9a/Shikamaru_Nara.png/revision/latest/scale-to-width-down/300?cb=20180701024126');
C('Ino Yamanaka', 'Mind Transfer Specialist', 79, 74, 55, 80, 68, 62, 84, 'https://static.wikia.nocookie.net/naruto/images/d/dd/Ino.png/revision/latest/scale-to-width-down/300?cb=20170622102745');
C('Choji Akimichi', 'Butterfly Mode', 83, 78, 88, 30, 86, 55, 60, 'https://static.wikia.nocookie.net/naruto/images/7/7d/Ch%C5%8Dji_Akimichi.png/revision/latest/scale-to-width-down/300?cb=20200426204415');
C('Kiba Inuzuka', 'Fang Over Fang', 78, 70, 82, 30, 72, 84, 58, 'https://static.wikia.nocookie.net/naruto/images/0/03/Kiba.png/revision/latest/scale-to-width-down/300?cb=20180124105049');
C('Shino Aburame', 'Insect Master', 81, 84, 55, 60, 78, 62, 88, 'https://static.wikia.nocookie.net/naruto/images/9/9c/Shino.png/revision/latest/scale-to-width-down/300?cb=20160924021327');
C('Hinata Hyuga', 'Byakugan Princess', 81, 72, 85, 45, 74, 70, 76, 'https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png/revision/latest/scale-to-width-down/300?cb=20141010104729');
C('Neji Hyuga', 'Genius of the Hyuga', 84, 74, 90, 45, 75, 80, 85, 'https://static.wikia.nocookie.net/naruto/images/7/7e/Neji_Part_I.png/revision/latest/scale-to-width-down/300?cb=20160118081119');
C('Rock Lee', 'Gates · Handsome Devil of the Leaf', 86, 1, 98, 1, 70, 95, 62, 'https://static.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png/revision/latest/scale-to-width-down/300?cb=20181229065526');
C('Tenten', 'Weapons Mistress', 75, 72, 74, 35, 60, 70, 72, 'https://static.wikia.nocookie.net/naruto/images/d/da/Tenten_Part_1.png/revision/latest/scale-to-width-down/300?cb=20180510203032');
C('Might Guy', '8 Gates · Noble Blue Beast', 93, 10, 99, 5, 85, 92, 70, 'https://static.wikia.nocookie.net/naruto/images/3/31/Might_Guy.png/revision/latest/scale-to-width-down/300?cb=20150401084456');
C('Asuma Sarutobi', 'Chakra Blades · 12 Guardians', 83, 80, 86, 45, 78, 74, 80, 'https://static.wikia.nocookie.net/naruto/images/7/7c/Asuma.png/revision/latest/scale-to-width-down/300?cb=20150822043018');
C('Kurenai Yuhi', 'Genjutsu Mistress', 79, 70, 60, 92, 68, 65, 80, 'https://static.wikia.nocookie.net/naruto/images/6/67/Kurenai_Part_I.png/revision/latest/scale-to-width-down/300?cb=20150207094753');
C('Jiraiya', 'Toad Sage · Legendary Sannin', 91, 94, 82, 60, 92, 78, 86, 'https://static.wikia.nocookie.net/naruto/images/1/1f/Jiraiya_Young.png/revision/latest/scale-to-width-down/300?cb=20260220182003');
C('Tsunade', 'Legendary Sannin · 5th Hokage', 91, 84, 95, 60, 96, 70, 90, 'https://static.wikia.nocookie.net/naruto/images/6/62/Kid_Tsunade.png/revision/latest/scale-to-width-down/300?cb=20230407050656');
C('Orochimaru', 'Legendary Sannin · Snake Sage', 92, 96, 75, 85, 94, 78, 96, 'https://static.wikia.nocookie.net/naruto/images/1/14/Orochimaru_Infobox.png/revision/latest/scale-to-width-down/300?cb=20150925223113');
C('Sai', 'Root Ink Master', 80, 84, 76, 50, 70, 74, 80, 'https://static.wikia.nocookie.net/naruto/images/d/d3/Sai.png/revision/latest/scale-to-width-down/300?cb=20150825082721');
C('Yamato', 'Wood Style · ANBU Tenzo', 82, 88, 72, 55, 82, 70, 80, 'https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png/revision/latest/scale-to-width-down/300?cb=20180920062234');
C('Shizune', "Tsunade's Apprentice", 77, 72, 60, 55, 80, 65, 84, 'https://static.wikia.nocookie.net/naruto/images/0/0a/Shizune_Infobox.png/revision/latest/scale-to-width-down/300?cb=20170726101304');
C('Iruka Umino', 'Academy Instructor', 68, 65, 62, 45, 58, 60, 78, 'https://static.wikia.nocookie.net/naruto/images/b/bc/Iruka.png/revision/latest/scale-to-width-down/300?cb=20161013212102');
C('Anko Mitarashi', 'Snake Charmer', 78, 80, 72, 55, 70, 72, 74, 'https://static.wikia.nocookie.net/naruto/images/b/bd/Anko_Part_I.png/revision/latest/scale-to-width-down/300?cb=20170412103610');
C('Hayate Gekko', 'Kenjutsu Examiner', 76, 65, 84, 45, 58, 78, 70, 'https://static.wikia.nocookie.net/naruto/images/3/3a/Hayate_Gekk%C5%8D.png/revision/latest/scale-to-width-down/300?cb=20150118200748');
C('Genma Shiranui', 'Senbon Specialist', 78, 74, 78, 45, 68, 76, 76, 'https://static.wikia.nocookie.net/naruto/images/9/90/Genma_Shiranui.png/revision/latest/scale-to-width-down/300?cb=20160122112630');
C('Aoba Yamashiro', 'Crow Summoner', 77, 76, 65, 60, 64, 68, 78, 'https://static.wikia.nocookie.net/naruto/images/4/42/Aoba.png/revision/latest/scale-to-width-down/300?cb=20160122113145');

/* ---------- GROUP 4: KAGE (PAST & PRESENT) ---------- */
C('Hashirama Senju', '1st Hokage · God of Shinobi', 97, 99, 88, 70, 99, 82, 85, 'https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png/revision/latest/scale-to-width-down/300?cb=20160124040430');
C('Tobirama Senju', '2nd Hokage · Creator of Jutsu', 94, 97, 84, 70, 90, 96, 96, 'https://static.wikia.nocookie.net/naruto/images/b/be/Tobirama_Senju.png/revision/latest/scale-to-width-down/300?cb=20160115192559');
C('Hiruzen Sarutobi', '3rd Hokage · The Professor', 92, 96, 82, 75, 88, 76, 94, 'https://static.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png/revision/latest/scale-to-width-down/300?cb=20160125204719');
C('Danzo Shimura', 'The Darkness of Shinobi', 88, 90, 70, 82, 85, 68, 92, 'https://static.wikia.nocookie.net/naruto/images/1/17/Danz%C5%8D.png/revision/latest/scale-to-width-down/300?cb=20171028185149');
C('A (1st Raikage)', 'Founder of Kumogakure', 88, 82, 92, 30, 90, 85, 72, 'https://static.wikia.nocookie.net/naruto/images/2/27/First_Raikage.png/revision/latest/scale-to-width-down/300?cb=20170624184709');
C('A (2nd Raikage)', 'Second Lord of Lightning', 89, 85, 90, 32, 89, 88, 76, 'https://static.wikia.nocookie.net/naruto/images/3/3f/2nd_Raikage.png/revision/latest/scale-to-width-down/300?cb=20211214203620');
C('A (3rd Raikage)', 'Strongest Shield & Spear', 93, 88, 96, 25, 99, 90, 74, 'https://static.wikia.nocookie.net/naruto/images/f/f5/Raikage3.png/revision/latest/scale-to-width-down/300?cb=20160116123903');
C('A (4th Raikage)', 'Lightning Armour', 91, 84, 95, 25, 92, 97, 70, 'https://static.wikia.nocookie.net/naruto/images/6/6b/Fourth_Raikage_full.png/revision/latest/scale-to-width-down/300?cb=20160610220946');
C('Ishikawa', '1st Tsuchikage · Particle Pioneer', 88, 93, 70, 50, 86, 65, 84, 'https://static.wikia.nocookie.net/naruto/images/a/a1/Ishikawa.png/revision/latest/scale-to-width-down/300?cb=20141016130654');
C('Mu', '2nd Tsuchikage · The Non-Person', 92, 96, 60, 70, 88, 75, 90, 'https://static.wikia.nocookie.net/naruto/images/d/d5/M%C5%AB.png/revision/latest/scale-to-width-down/300?cb=20150602045412');
C('Ohnoki', '3rd Tsuchikage · Fence-Sitter', 91, 96, 55, 50, 87, 70, 90, 'https://static.wikia.nocookie.net/naruto/images/6/67/%C5%8Cnoki.png/revision/latest/scale-to-width-down/300?cb=20181203071043');
C('Byakuren', '1st Mizukage', 87, 89, 75, 55, 88, 70, 80, 'https://static.wikia.nocookie.net/naruto/images/2/27/Byakuren.png/revision/latest/scale-to-width-down/300?cb=20141016130336');
C('Gengetsu Hozuki', '2nd Mizukage · Mirage Master', 92, 94, 70, 90, 90, 75, 88, 'https://static.wikia.nocookie.net/naruto/images/9/9f/Gengetsu_H%C5%8Dzuki.png/revision/latest/scale-to-width-down/300?cb=20150417014745');
C('Mei Terumi', '5th Mizukage · Dual Kekkei Genkai', 87, 93, 60, 55, 86, 70, 82, 'https://static.wikia.nocookie.net/naruto/images/6/6f/Mei.png/revision/latest/scale-to-width-down/300?cb=20170927110950');
C('Reto', '1st Kazekage', 87, 86, 82, 45, 84, 76, 80, 'https://static.wikia.nocookie.net/naruto/images/0/05/Reto.png/revision/latest/scale-to-width-down/300?cb=20160417082625');
C('Shamon', '2nd Kazekage', 88, 87, 80, 45, 85, 74, 82, 'https://static.wikia.nocookie.net/naruto/images/1/12/2ndkazekage.png/revision/latest/scale-to-width-down/300?cb=20141016130951');
C('3rd Kazekage', 'Iron Sand · Strongest Kazekage', 90, 94, 65, 50, 87, 72, 86, 'https://static.wikia.nocookie.net/naruto/images/4/4f/Third_Kazekage.png/revision/latest/scale-to-width-down/300?cb=20160218115217');
C('Rasa', '4th Kazekage · Gold Dust', 86, 90, 60, 45, 84, 68, 84, 'https://static.wikia.nocookie.net/naruto/images/2/24/Yondaime_Kazekage.png/revision/latest/scale-to-width-down/300?cb=20210806012316');
C('Darui', '5th Raikage · Black Lightning', 87, 89, 82, 40, 84, 83, 80, 'https://static.wikia.nocookie.net/naruto/images/4/45/Darui.png/revision/latest/scale-to-width-down/300?cb=20170913102716');
C('Chojuro', '6th Mizukage · Hiramekarei', 83, 78, 87, 40, 82, 76, 72, 'https://static.wikia.nocookie.net/naruto/images/d/d8/Chojuro_2.png/revision/latest/scale-to-width-down/300?cb=20170913102939');

/* ---------- GROUP 5: UCHIHA & OTSUTSUKI CLANS ---------- */
C('Shisui Uchiha', 'Shisui of the Body Flicker', 91, 88, 84, 98, 80, 94, 90, 'https://static.wikia.nocookie.net/naruto/images/4/4c/Shisui_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20140418091747');
C('Fugaku Uchiha', 'Head of the Uchiha Clan', 88, 87, 80, 88, 82, 78, 88, 'https://static.wikia.nocookie.net/naruto/images/f/f2/Fugaku.png/revision/latest/scale-to-width-down/300?cb=20180502064054');
C('Mikoto Uchiha', 'Uchiha Matriarch', 76, 76, 70, 74, 68, 68, 74, 'https://static.wikia.nocookie.net/naruto/images/8/8e/Mikoto_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20150130135950');
C('Izuna Uchiha', "Madara's Brother", 90, 89, 86, 90, 84, 88, 84, 'https://static.wikia.nocookie.net/naruto/images/8/83/Izuna_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20170818214808');
C('Kagami Uchiha', 'Trusted by Tobirama', 87, 85, 80, 86, 78, 82, 85, 'https://static.wikia.nocookie.net/naruto/images/7/73/Kagami-Uchiha.png/revision/latest/scale-to-width-down/300?cb=20220607100358');
C('Tajima Uchiha', 'Warring States Patriarch', 86, 84, 82, 84, 80, 80, 82, 'https://static.wikia.nocookie.net/naruto/images/2/26/Tajima_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20140710125908');
C('Kaguya Otsutsuki', 'Rabbit Goddess · Progenitor', 99, 99, 90, 95, 99, 93, 80, 'https://static.wikia.nocookie.net/naruto/images/6/6c/Kaguya_%C5%8Ctsutsuki.png/revision/latest/scale-to-width-down/300?cb=20180824113908');
C('Hamura Otsutsuki', 'Moon Sage', 98, 98, 90, 90, 98, 90, 92, 'https://static.wikia.nocookie.net/naruto/images/4/4d/Hamura_%C5%8Ctsutsuki.png/revision/latest/scale-to-width-down/300?cb=20150711133055');
C('Indra Otsutsuki', 'Ancestor of the Uchiha', 96, 97, 85, 94, 94, 88, 92, 'https://static.wikia.nocookie.net/naruto/images/b/bd/Indra_%C5%8Ctsutsuki.png/revision/latest/scale-to-width-down/300?cb=20220214090844');
C('Asura Otsutsuki', 'Ancestor of the Senju', 96, 96, 90, 60, 98, 85, 84, 'https://static.wikia.nocookie.net/naruto/images/5/56/Asura_%C5%8Ctsutsuki.png/revision/latest/scale-to-width-down/300?cb=20220214090535');
C('Toneri Otsutsuki', 'Heir of Hamura', 94, 96, 75, 80, 95, 82, 86, 'https://static.wikia.nocookie.net/naruto/images/9/92/Toneri_-_The_Last.png/revision/latest/scale-to-width-down/300?cb=20160306081116');
C('Shin Uchiha', 'Experiment of Orochimaru', 85, 84, 78, 75, 80, 78, 76, 'https://static.wikia.nocookie.net/naruto/images/c/cd/Shin_uchiha.png/revision/latest/scale-to-width-down/300?cb=20170830100428');
C('Yashiro Uchiha', 'Uchiha Police Force', 75, 74, 70, 72, 66, 68, 74, 'https://static.wikia.nocookie.net/naruto/images/b/b7/Yashiro_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20220202115348');
C('Tekka Uchiha', 'Uchiha Police Force', 74, 73, 70, 70, 65, 67, 70, 'https://static.wikia.nocookie.net/naruto/images/9/9c/Tekka_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20220202121143');
C('Inabi Uchiha', 'Uchiha Police Force', 74, 73, 69, 71, 65, 68, 71, 'https://static.wikia.nocookie.net/naruto/images/5/52/Inabi.png/revision/latest/scale-to-width-down/300?cb=20220202120433');
C('Uruchi Uchiha', 'Senbei Shop Keeper', 65, 60, 50, 58, 52, 50, 68, 'https://static.wikia.nocookie.net/naruto/images/b/bd/Uruchi_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20150130164526');
C('Teyaki Uchiha', 'Senbei Shop Keeper', 65, 60, 52, 56, 52, 50, 66, 'https://static.wikia.nocookie.net/naruto/images/1/14/Teyaki_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20150130164352');
C('Setsuna Uchiha', 'Warring States Uchiha', 76, 75, 72, 72, 66, 70, 70, 'https://static.wikia.nocookie.net/naruto/images/b/b4/Setsuna_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20150517154444');
C('Naka Uchiha', 'Keeper of the Stone Tablet', 80, 79, 72, 78, 70, 72, 76, 'https://static.wikia.nocookie.net/naruto/images/a/ae/Naka_Uchiha.png/revision/latest/scale-to-width-down/300?cb=20131114131356');
C('Naori Uchiha', 'Wielder of Izanami', 82, 78, 70, 88, 72, 72, 84, 'https://static.wikia.nocookie.net/naruto/images/a/a1/Naori_Uchiha_preview.png/revision/latest/scale-to-width-down/300?cb=20200605182422');

/* ---------- GROUP 6: SEVEN SWORDSMEN & MIST SHINOBI ---------- */
C('Zabuza Momochi', 'Demon of the Hidden Mist', 83, 82, 88, 45, 78, 80, 76, 'https://static.wikia.nocookie.net/naruto/images/3/37/Zabuza_Momochi.png/revision/latest/scale-to-width-down/300?cb=20240922021336');
C('Haku', 'Ice Release · Crystal Mirrors', 81, 86, 70, 50, 74, 90, 78, 'https://static.wikia.nocookie.net/naruto/images/9/90/Haku.png/revision/latest/scale-to-width-down/300?cb=20240918032028');
C('Mangetsu Hozuki', 'Master of All Seven Blades', 85, 84, 88, 45, 84, 80, 74, 'https://static.wikia.nocookie.net/naruto/images/c/ce/Hozuki_Mangetsu.png/revision/latest/scale-to-width-down/300?cb=20160115164605');
C('Fuguki Suikazan', 'Wielder of Samehada', 83, 80, 85, 40, 88, 68, 70, 'https://static.wikia.nocookie.net/naruto/images/c/cc/Fuguki_Alive_OL.png/revision/latest/scale-to-width-down/300?cb=20210511061550');
C('Kushimaru Kuriarare', 'Wielder of Nuibari', 82, 74, 87, 42, 72, 84, 68, 'https://static.wikia.nocookie.net/naruto/images/4/4b/Kushimaru_Kuriarare.png/revision/latest/scale-to-width-down/300?cb=20160205051040');
C('Jinpachi Munashi', 'Wielder of Shibuki', 81, 80, 84, 40, 74, 72, 66, 'https://static.wikia.nocookie.net/naruto/images/4/4c/Jinpachi_Munashi.png/revision/latest/scale-to-width-down/300?cb=20171022045936');
C('Ameyuri Ringo', 'Wielder of the Kiba Blades', 82, 83, 84, 40, 73, 82, 65, 'https://static.wikia.nocookie.net/naruto/images/a/a1/Ameyuri_Ringo.png/revision/latest/scale-to-width-down/300?cb=20160214201145');
C('Jinin Akebino', 'Wielder of Kabutowari', 80, 72, 85, 38, 76, 68, 66, 'https://static.wikia.nocookie.net/naruto/images/2/25/Jinin.png/revision/latest/scale-to-width-down/300?cb=20211208195311');
C('Raiga Kurosuki', 'Thunder of the Kiba Blades', 81, 82, 80, 45, 74, 72, 60, 'https://static.wikia.nocookie.net/naruto/images/4/41/Raiga_Kurosuki.png/revision/latest/scale-to-width-down/300?cb=20150804163223');
C('Ao', 'Byakugan Hunter · Sensor', 79, 74, 68, 55, 66, 65, 88, 'https://static.wikia.nocookie.net/naruto/images/7/72/Ao.png/revision/latest/scale-to-width-down/300?cb=20171014133718');
C('Gozu', 'Demon Brother', 74, 68, 78, 35, 66, 70, 60, 'https://static.wikia.nocookie.net/naruto/images/c/cf/Gozu.png/revision/latest/scale-to-width-down/300?cb=20160425175815');
C('Meizu', 'Demon Brother', 74, 68, 77, 35, 65, 71, 60, 'https://static.wikia.nocookie.net/naruto/images/5/59/Meizu.png/revision/latest/scale-to-width-down/300?cb=20150116124718');
C('Chukichi', 'Silent Killing Sensor', 79, 74, 76, 45, 66, 72, 78, 'https://static.wikia.nocookie.net/naruto/images/1/19/Ch%C5%ABkichi_mugshot.png/revision/latest/scale-to-width-down/300?cb=20210918014604');
C('Gari', 'Explosion Release Jonin', 81, 85, 80, 38, 74, 74, 66, 'https://static.wikia.nocookie.net/naruto/images/0/03/Gari_Anime.png/revision/latest/scale-to-width-down/300?cb=20160307035105');
C('Pakura', 'Scorch Release Heroine', 82, 88, 62, 40, 76, 72, 74, 'https://static.wikia.nocookie.net/naruto/images/7/71/ParukaAnime.png/revision/latest/scale-to-width-down/300?cb=20160227001530');

/* ---------- GROUP 7: SOUND VILLAGE & OROCHIMARU'S FORCES ---------- */
C('Kabuto Yakushi', 'Sage Mode · Serpent Spy', 94, 95, 78, 84, 93, 82, 97, 'https://static.wikia.nocookie.net/naruto/images/c/c9/Kabuto_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170906101523');
C('Kimimaro', 'Kaguya Bloodline · Bone Dance', 85, 82, 92, 35, 80, 82, 68, 'https://static.wikia.nocookie.net/naruto/images/c/c8/Kimimaro_infobox.png/revision/latest/scale-to-width-down/300?cb=20210929024649');
C('Tayuya', 'Sound Four · Demon Flute', 77, 74, 55, 88, 70, 62, 74, 'https://static.wikia.nocookie.net/naruto/images/7/78/Tayuya_Shot.png/revision/latest/scale-to-width-down/300?cb=20260807021117');
C('Kidomaru', 'Sound Four · Spider Style', 78, 78, 72, 40, 70, 68, 84, 'https://static.wikia.nocookie.net/naruto/images/e/e8/Kid%C5%8Dmaru.png/revision/latest/scale-to-width-down/300?cb=20240902034037');
C('Jirobo', 'Sound Four · Earth Barrier', 75, 70, 82, 30, 76, 55, 55, 'https://static.wikia.nocookie.net/naruto/images/4/45/Jirobo_newshot.png/revision/latest/scale-to-width-down/300?cb=20260807020908');
C('Sakon & Ukon', 'Sound Four · Twin Demons', 79, 76, 82, 40, 74, 74, 65, 'https://static.wikia.nocookie.net/naruto/images/2/2e/Sakon_and_Ukon.png/revision/latest/scale-to-width-down/300?cb=20210726001946');
C('Dosu Kinuta', 'Sound Genin · Melody Arm', 72, 74, 66, 55, 60, 62, 74, 'https://static.wikia.nocookie.net/naruto/images/b/b0/Dosu_Kinuta.png/revision/latest/scale-to-width-down/300?cb=20210421154038');
C('Zaku Abumi', 'Sound Genin · Air Cutter', 69, 72, 62, 30, 58, 60, 50, 'https://static.wikia.nocookie.net/naruto/images/4/40/Zaku_Abumi.PNG/revision/latest/scale-to-width-down/300?cb=20241001021714');
C('Kin Tsuchi', 'Sound Genin · Bell Illusions', 67, 60, 55, 72, 52, 58, 56, 'https://static.wikia.nocookie.net/naruto/images/f/f3/Kin_Tsuchi.PNG/revision/latest/scale-to-width-down/300?cb=20241115003908');
C('Guren', 'Crystal Release', 82, 88, 68, 55, 80, 70, 74, 'https://static.wikia.nocookie.net/naruto/images/9/90/Guren.png/revision/latest/scale-to-width-down/300?cb=20160425181202');
C('Yukimaru', 'Link to the 3-Tails', 70, 72, 40, 45, 78, 50, 55, 'https://static.wikia.nocookie.net/naruto/images/2/2a/Yukimaru2.png/revision/latest/scale-to-width-down/300?cb=20160422164638');
C('Amachi', 'Sea Monster Scientist', 73, 74, 60, 45, 64, 60, 76, 'https://static.wikia.nocookie.net/naruto/images/4/44/Amachi.png/revision/latest/scale-to-width-down/300?cb=20150528184924');
C('Nonou Yakushi', 'Root Medic · Mother Figure', 76, 65, 55, 55, 78, 58, 84, 'https://static.wikia.nocookie.net/naruto/images/0/07/Non%C5%8D.png/revision/latest/scale-to-width-down/300?cb=20220220023039');
C('Urushi', 'Orphanage Companion', 65, 60, 58, 40, 52, 55, 60, 'https://static.wikia.nocookie.net/naruto/images/f/f7/Urushi_Part_II.png/revision/latest/scale-to-width-down/300?cb=20131114130417');
C('Mahiru', 'Kiri Ambusher', 75, 70, 74, 45, 60, 76, 68, 'https://static.wikia.nocookie.net/naruto/images/a/a3/Mahiru_Infobox.png/revision/latest/scale-to-width-down/300?cb=20161017151509');

/* ---------- GROUP 8: KONOHA VETERANS & CLAN LEADERS ---------- */
C('Shikaku Nara', 'Jonin Commander · Chief Strategist', 85, 78, 60, 70, 66, 60, 99, 'https://static.wikia.nocookie.net/naruto/images/e/e0/Shikaku_Nara.png/revision/latest/scale-to-width-down/300?cb=20210802192328');
C('Inoichi Yamanaka', 'Intel Division Head', 82, 74, 58, 84, 68, 60, 92, 'https://static.wikia.nocookie.net/naruto/images/d/d2/Inoichi_Yamanaka.png/revision/latest/scale-to-width-down/300?cb=20150409122740');
C('Choza Akimichi', 'Akimichi Clan Head', 83, 76, 90, 30, 87, 55, 70, 'https://static.wikia.nocookie.net/naruto/images/a/a8/Ch%C5%8Dza_Akimichi.png/revision/latest/scale-to-width-down/300?cb=20180304093618');
C('Hiashi Hyuga', 'Hyuga Clan Head', 84, 74, 92, 45, 76, 76, 82, 'https://static.wikia.nocookie.net/naruto/images/e/ee/Hiashi_Hyuga.png/revision/latest/scale-to-width-down/300?cb=20150109142633');
C('Hizashi Hyuga', 'Branch House Guardian', 83, 73, 90, 45, 74, 76, 80, 'https://static.wikia.nocookie.net/naruto/images/1/15/Young_Hizashi.png/revision/latest/scale-to-width-down/300?cb=20160428002530');
C('Shibi Aburame', 'Aburame Clan Head', 82, 85, 55, 60, 76, 60, 88, 'https://static.wikia.nocookie.net/naruto/images/b/b3/Shibi.png/revision/latest/scale-to-width-down/300?cb=20150315114902');
C('Tsume Inuzuka', 'Inuzuka Clan Head', 81, 70, 86, 35, 74, 84, 62, 'https://static.wikia.nocookie.net/naruto/images/f/f6/Tsume_Inuzuka.png/revision/latest/scale-to-width-down/300?cb=20160203222106');
C('Dan Kato', 'Spirit Transformation', 84, 87, 65, 55, 78, 68, 84, 'https://static.wikia.nocookie.net/naruto/images/1/13/Dan_HDshot.png/revision/latest/scale-to-width-down/300?cb=20131128171539');
C('Raido Namiashi', 'Black Blade Guard', 77, 70, 80, 40, 64, 72, 72, 'https://static.wikia.nocookie.net/naruto/images/d/d1/Raid%C5%8D_Namiashi_mugshot.png/revision/latest/scale-to-width-down/300?cb=20160115134651');
C('Kotetsu Hagane', 'Eternal Chunin · Gate Guard', 75, 70, 74, 40, 62, 66, 70, 'https://static.wikia.nocookie.net/naruto/images/8/81/Kotetsu_Hagane.png/revision/latest/scale-to-width-down/300?cb=20160115135316');
C('Izumo Kamizuki', 'Eternal Chunin · Gate Guard', 75, 72, 72, 40, 62, 66, 72, 'https://static.wikia.nocookie.net/naruto/images/5/5d/Izumo_Kamizuki.png/revision/latest/scale-to-width-down/300?cb=20140111135444');
C('Ibiki Morino', 'Head of Torture & Interrogation', 78, 66, 68, 78, 60, 55, 92, 'https://static.wikia.nocookie.net/naruto/images/4/4b/Ibiki_Part_I.png/revision/latest/scale-to-width-down/300?cb=20220218113218');
C('Ebisu', 'Elite Private Tutor', 72, 70, 64, 50, 58, 60, 76, 'https://static.wikia.nocookie.net/naruto/images/7/77/Ebisu.png/revision/latest/scale-to-width-down/300?cb=20160626182251');
C('Konohamaru Sarutobi', 'Honourable Grandson', 74, 78, 66, 40, 68, 64, 60, 'https://static.wikia.nocookie.net/naruto/images/3/37/Konohamaru_Sarutobi.png/revision/latest/scale-to-width-down/300?cb=20170624192530');
C('Moegi Kazamatsuri', 'Konohamaru Corps', 68, 64, 58, 40, 56, 58, 60, 'https://static.wikia.nocookie.net/naruto/images/b/b7/Moegi_p1.png/revision/latest/scale-to-width-down/300?cb=20150122130558');
C('Udon Ise', 'Konohamaru Corps', 68, 62, 55, 40, 54, 54, 68, 'https://static.wikia.nocookie.net/naruto/images/7/76/Udon_p1.png/revision/latest/scale-to-width-down/300?cb=20150122130939');
C('Nawaki', "Tsunade's Brother", 65, 60, 58, 35, 55, 58, 55, 'https://static.wikia.nocookie.net/naruto/images/a/a5/Nawaki_Infobox.png/revision/latest/scale-to-width-down/300?cb=20160630135236');
C('Biwako Sarutobi', 'Midwife of the Leaf', 70, 62, 50, 50, 66, 50, 80, 'https://static.wikia.nocookie.net/naruto/images/d/d0/Biwako_Sarutobi.png/revision/latest/scale-to-width-down/300?cb=20120206115404');
C('Koharu Utatane', 'Leaf Elder', 76, 70, 55, 60, 60, 50, 88, 'https://static.wikia.nocookie.net/naruto/images/9/9f/Koharu_Utatane.png/revision/latest/scale-to-width-down/300?cb=20150129220149');
C('Homura Mitokado', 'Leaf Elder', 76, 71, 56, 58, 61, 50, 88, 'https://static.wikia.nocookie.net/naruto/images/1/1b/Homura_Mitokado.png/revision/latest/scale-to-width-down/300?cb=20160115174641');

/* ---------- GROUP 9: ALLIED FORCES & OTHER VILLAGES ---------- */
C('C', 'Sensor Medic of Kumo · Shee', 79, 76, 60, 74, 68, 65, 86, 'https://static.wikia.nocookie.net/naruto/images/7/7a/Shee.png/revision/latest/scale-to-width-down/300?cb=20160124060948');
C('Omoi', 'Cautious Kenjutsu of Kumo', 79, 72, 82, 40, 66, 74, 78, 'https://static.wikia.nocookie.net/naruto/images/9/97/Omoi.png/revision/latest/scale-to-width-down/300?cb=20200919225856');
C('Karui', 'Fiery Blade of Kumo', 78, 68, 83, 35, 66, 74, 60, 'https://static.wikia.nocookie.net/naruto/images/c/c3/Karui.png/revision/latest/scale-to-width-down/300?cb=20170714025704');
C('Samui', 'Cool-Headed Captain', 80, 72, 82, 40, 68, 72, 82, 'https://static.wikia.nocookie.net/naruto/images/2/23/Samui.png/revision/latest/scale-to-width-down/300?cb=20230111063822');
C('Atsui', 'Hot-Blooded Swordsman', 77, 74, 78, 35, 66, 68, 58, 'https://static.wikia.nocookie.net/naruto/images/0/0f/Atsui.png/revision/latest/scale-to-width-down/300?cb=20220224085250');
C('Dodai', 'Rubber Style Veteran', 82, 84, 65, 45, 74, 62, 86, 'https://static.wikia.nocookie.net/naruto/images/9/92/Dodai_HDshot.png/revision/latest/scale-to-width-down/300?cb=20170125161312');
C('Kurotsuchi', 'Lava Style · Iwa Princess', 84, 87, 72, 45, 78, 74, 78, 'https://static.wikia.nocookie.net/naruto/images/2/29/Kurotsuchi_Part_II.png/revision/latest/scale-to-width-down/300?cb=20170913104850');
C('Akatsuchi', 'Golem Guard of the Tsuchikage', 81, 80, 78, 35, 84, 58, 64, 'https://static.wikia.nocookie.net/naruto/images/1/16/Akatsuchi_Part_II.png/revision/latest/scale-to-width-down/300?cb=20190209014302');
C('Kitsuchi', 'Mountain Splitter of Iwa', 85, 87, 78, 40, 82, 64, 76, 'https://static.wikia.nocookie.net/naruto/images/1/14/Kitsuchi1.png/revision/latest/scale-to-width-down/300?cb=20160115195913');
C('Baki', 'Wind Blade of Suna', 81, 83, 74, 50, 72, 72, 80, 'https://static.wikia.nocookie.net/naruto/images/0/04/Baki_Infobox.png/revision/latest/scale-to-width-down/300?cb=20160122172410');
C('Kankuro', 'Puppet Master of Suna', 81, 85, 55, 45, 72, 62, 84, 'https://static.wikia.nocookie.net/naruto/images/a/a5/Kankur%C5%8D.png/revision/latest/scale-to-width-down/300?cb=20241024105604');
C('Temari', 'Wind Mistress of Suna', 82, 86, 60, 45, 74, 70, 84, 'https://static.wikia.nocookie.net/naruto/images/b/bb/Temari_newshot.png/revision/latest/scale-to-width-down/300?cb=20180131102406');
C('Lady Chiyo', 'Honoured Puppeteer Granny', 86, 88, 55, 55, 80, 60, 92, 'https://static.wikia.nocookie.net/naruto/images/7/73/Chiyo.png/revision/latest/scale-to-width-down/300?cb=20160113171702');
C('Matsuri', "Gaara's Student", 71, 66, 64, 35, 56, 62, 58, 'https://static.wikia.nocookie.net/naruto/images/0/0e/Matsuri.png/revision/latest/scale-to-width-down/300?cb=20250121001327');
C('Yashamaru', 'Suna ANBU Medic', 77, 72, 66, 50, 64, 68, 78, 'https://static.wikia.nocookie.net/naruto/images/e/ef/YashamaruHD.PNG/revision/latest/scale-to-width-down/300?cb=20211030011747');
C('Karura', "Mother of the Sand Siblings", 79, 74, 50, 45, 76, 55, 72, 'https://static.wikia.nocookie.net/naruto/images/4/49/Karura.png/revision/latest/scale-to-width-down/300?cb=20150514121624');
C('Maki', 'Cloth Binding Kunoichi', 74, 72, 66, 40, 60, 64, 66, 'https://static.wikia.nocookie.net/naruto/images/2/21/Maki.png/revision/latest/scale-to-width-down/300?cb=20160115141031');
C('Hanzo of the Salamander', 'Legend of Amegakure', 90, 92, 84, 50, 88, 78, 84, 'https://static.wikia.nocookie.net/naruto/images/7/7a/Hanz%C5%8D.png/revision/latest/scale-to-width-down/300?cb=20220211073236');
C('Mifune', 'Samurai General of the Iron', 85, 40, 95, 60, 70, 88, 84, 'https://static.wikia.nocookie.net/naruto/images/e/ee/Mifune.png/revision/latest/scale-to-width-down/300?cb=20150514152216');
C('Chiriku', '12 Guardian Ninja · Fire Temple', 82, 80, 86, 40, 76, 70, 74, 'https://static.wikia.nocookie.net/naruto/images/5/5d/Chiriku.png/revision/latest/scale-to-width-down/300?cb=20211010002932');
C('Sora', 'Pseudo-Jinchūriki of Fire Temple', 78, 80, 74, 35, 82, 68, 55, 'https://static.wikia.nocookie.net/naruto/images/2/2d/Sora_full.png/revision/latest/scale-to-width-down/300?cb=20210829042720');
C('Okisuke', 'Samurai of the Iron', 76, 40, 84, 40, 60, 74, 66, 'https://static.wikia.nocookie.net/naruto/images/e/e3/Okisuke.png/revision/latest/scale-to-width-down/300?cb=20220211064142');
C('Urakaku', 'Samurai of the Iron', 76, 40, 84, 40, 60, 73, 68, 'https://static.wikia.nocookie.net/naruto/images/4/49/Urakaku.png/revision/latest/scale-to-width-down/300?cb=20220210090647');
C('Mabui', 'Heavenly Transfer Assistant', 77, 78, 45, 40, 62, 60, 86, 'https://static.wikia.nocookie.net/naruto/images/d/d3/Mabui.png/revision/latest/scale-to-width-down/300?cb=20160226234939');
C('Motoi', 'Keeper of the Falls of Truth', 78, 72, 74, 40, 64, 62, 78, 'https://static.wikia.nocookie.net/naruto/images/5/55/Motoi.png/revision/latest/scale-to-width-down/300?cb=20150518130039');

/* ---------- GROUP 10: LEGENDARY SUMMONS & MISCELLANEOUS ---------- */
C('Gamabunta', 'Chief Toad of Mount Myoboku', 84, 82, 86, 30, 88, 60, 74, 'https://static.wikia.nocookie.net/naruto/images/8/84/Gamabunta.png/revision/latest/scale-to-width-down/300?cb=20251223173249');
C('Gamakichi', 'Heir of the Toad Clan', 82, 80, 80, 30, 84, 58, 70, 'https://static.wikia.nocookie.net/naruto/images/0/08/Gamakichi.png/revision/latest/scale-to-width-down/300?cb=20140905190436');
C('Gamatatsu', 'Snack-Loving Toad', 73, 70, 60, 20, 78, 45, 40, 'https://static.wikia.nocookie.net/naruto/images/8/81/Gamatatsu.png/revision/latest/scale-to-width-down/300?cb=20240928164231');
C('Fukasaku', 'Great Sage Toad Elder', 86, 88, 74, 82, 84, 60, 90, 'https://static.wikia.nocookie.net/naruto/images/f/fc/Fukusaku.png/revision/latest/scale-to-width-down/300?cb=20160510201946');
C('Shima', 'Great Sage Toad Elder', 86, 88, 72, 82, 84, 58, 90, 'https://static.wikia.nocookie.net/naruto/images/6/69/Shima.png/revision/latest/scale-to-width-down/300?cb=20220223133940');
C('Katsuyu', 'Divine Slug of Shikkotsu Forest', 87, 84, 40, 30, 92, 30, 88, 'https://static.wikia.nocookie.net/naruto/images/6/6b/Katsuyu.png/revision/latest/scale-to-width-down/300?cb=20160623114853');
C('Manda', 'Serpent Lord of Ryuchi Cave', 85, 78, 88, 45, 86, 74, 76, 'https://static.wikia.nocookie.net/naruto/images/6/6f/Manda.png/revision/latest/scale-to-width-down/300?cb=20160623114807');
C('Aoda', 'Loyal Serpent of Sasuke', 83, 72, 82, 35, 82, 76, 70, 'https://static.wikia.nocookie.net/naruto/images/9/99/Aoda.png/revision/latest/scale-to-width-down/300?cb=20251110103924');
C('Enma', 'Monkey King · Adamantine Staff', 85, 76, 90, 35, 82, 76, 84, 'https://static.wikia.nocookie.net/naruto/images/a/aa/Enma.png/revision/latest/scale-to-width-down/300?cb=20160131185005');
C('Pakkun', 'Ninken Tracker', 70, 55, 45, 25, 50, 72, 88, 'https://static.wikia.nocookie.net/naruto/images/b/bc/Pakkun.png/revision/latest/scale-to-width-down/300?cb=20240902033238');
C('Garuda', "Sasuke's Hawk", 80, 68, 78, 30, 74, 92, 60, 'https://static.wikia.nocookie.net/naruto/images/7/78/Garuda.png/revision/latest/scale-to-width-down/300?cb=20141026205725');
C('Baku', 'Dream-Devouring Tapir', 83, 84, 78, 35, 84, 55, 62, 'https://static.wikia.nocookie.net/naruto/images/7/77/Baku_Anime.png/revision/latest/scale-to-width-down/300?cb=20151004004931');
C('Kamatari', "Temari's Sickle Weasel", 79, 74, 82, 30, 66, 86, 60, 'https://static.wikia.nocookie.net/naruto/images/b/bd/Kamatari.png/revision/latest/scale-to-width-down/300?cb=20160321041832');
C('Teuchi', 'Ramen Guy · Master of Ichiraku Arts', 99, 99, 99, 99, 99, 99, 99, 'https://static.wikia.nocookie.net/naruto/images/d/d6/Teuchi_Infobox.png/revision/latest/scale-to-width-down/300?cb=20160131060713');
C('Ayame', 'Ramen Princess of Ichiraku', 99, 98, 99, 99, 98, 99, 99, 'https://static.wikia.nocookie.net/naruto/images/4/4f/Ayame.png/revision/latest/scale-to-width-down/300?cb=20160115175059');
C('Menma Uzumaki', 'Masked Menace of the Genjutsu World', 88, 92, 82, 55, 94, 84, 70, 'https://static.wikia.nocookie.net/naruto/images/8/85/Menma_Uzumaki.png/revision/latest/scale-to-width-down/300?cb=20150130203326');
C('Shion', 'Priestess of the Land of Demons', 78, 72, 30, 66, 84, 45, 82, 'https://static.wikia.nocookie.net/naruto/images/e/e1/Shion.PNG/revision/latest/scale-to-width-down/300?cb=20150723223123');
C('Amaru', 'Apprentice of the Sky Country', 70, 55, 60, 40, 66, 62, 74, 'https://static.wikia.nocookie.net/naruto/images/3/3c/Amaru.PNG/revision/latest/scale-to-width-down/300?cb=20090426180016');
C('Doto Kazahana', 'Chakra Armour Tyrant', 78, 80, 76, 35, 74, 64, 68, 'https://static.wikia.nocookie.net/naruto/images/1/1c/Doto_Kazahana.png/revision/latest/scale-to-width-down/300?cb=20160116193114');
C('Shinno', 'Dark Chakra Doctor', 82, 86, 78, 55, 84, 68, 84, 'https://static.wikia.nocookie.net/naruto/images/e/e0/Shinn%C5%8D_Infobox.png/revision/latest/scale-to-width-down/300?cb=20210726024403');
C('Might Duy', '8 Gates · Eternal Genin', 86, 1, 97, 1, 88, 92, 60, 'https://static.wikia.nocookie.net/naruto/images/b/b7/Might_Duy.png/revision/latest/scale-to-width-down/300?cb=20150702114443');
C('Sakumo Hatake', 'White Fang of the Leaf', 91, 88, 93, 55, 84, 90, 86, 'https://static.wikia.nocookie.net/naruto/images/3/3f/Sakumo_Hatake.png/revision/latest/scale-to-width-down/300?cb=20150504191510');
C('Gato', 'Shipping Magnate Tyrant', 50, 1, 30, 20, 10, 25, 75, 'https://static.wikia.nocookie.net/naruto/images/d/d8/Gato.png/revision/latest/scale-to-width-down/300?cb=20150221135530');
C('Tazuna', 'Master Bridge Builder', 50, 1, 35, 5, 15, 25, 70, 'https://static.wikia.nocookie.net/naruto/images/4/46/Tazuna_Part_II.png/revision/latest/scale-to-width-down/300?cb=20180811083233');
C('Tonton', "Shizune's Legendary Pig", 99, 90, 85, 95, 92, 96, 99, 'https://static.wikia.nocookie.net/naruto/images/b/b7/Tonton.png/revision/latest/scale-to-width-down/300?cb=20150130150127');

/* ---------- Sanity guard ---------- */
if (CHARACTERS.length !== 200) {
  console.error('Character database corrupted: expected 200, got ' + CHARACTERS.length);
}
