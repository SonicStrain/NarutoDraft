/* ============================================================
   NARUTO DRAFT — Complete 200-Character Database
   Stats: NIN, TAI, GEN, CHK, SPD, BIQ (1–99), OVR fixed per design doc.
   Images: Narutopedia (Fandom) via Special:FilePath redirect, with a
   CSS fallback avatar rendered when the image fails to load.
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

function imgUrl(file) {
  return 'https://naruto.fandom.com/wiki/Special:FilePath/' + encodeURIComponent(file);
}

/* C(name, title, ovr, NIN, TAI, GEN, CHK, SPD, BIQ [, imageFileOverride]) */
const CHARACTERS = [];
function C(name, title, ovr, nin, tai, gen, chk, spd, biq, file) {
  const imageFile = file || (name.replace(/\s*\(.*\)\s*/g, '') + '.png');
  CHARACTERS.push({
    id: CHARACTERS.length + 1,
    name, title, ovr,
    stats: { NIN: nin, TAI: tai, GEN: gen, CHK: chk, SPD: spd, BIQ: biq },
    tier: tierOf(ovr),
    img: imgUrl(imageFile),
  });
}

/* ---------- GROUP 1: THE JINCHŪRIKI & TAILED BEAST HOSTS ---------- */
C('Naruto Uzumaki', '9-Tails Jinchūriki', 98, 99, 92, 30, 99, 95, 78, 'Naruto Part II.png');
C('Gaara', '1-Tail Jinchūriki', 89, 93, 55, 40, 90, 70, 88, 'Gaara Part II.png');
C('Yugito Nii', '2-Tails Jinchūriki', 85, 86, 84, 50, 88, 85, 75);
C('Yagura Karatachi', '3-Tails Jinchūriki · 4th Mizukage', 87, 90, 75, 82, 89, 78, 80, 'Yagura.png');
C('Roshi', '4-Tails Jinchūriki · Lava Style', 86, 89, 80, 45, 88, 70, 74, 'Rōshi.png');
C('Han', '5-Tails Jinchūriki · Steam Armour', 85, 84, 90, 40, 87, 75, 70);
C('Utakata', '6-Tails Jinchūriki · Bubble Style', 86, 88, 60, 55, 87, 74, 78);
C('Fu', '7-Tails Jinchūriki', 84, 85, 70, 50, 86, 82, 68, 'Fū.png');
C('Killer Bee', '8-Tails Jinchūriki', 92, 90, 93, 35, 96, 88, 72, 'Killer B.png');
C('Minato Namikaze', 'Yin 9-Tails · Yellow Flash', 96, 97, 88, 60, 92, 99, 96);
C('Kushina Uzumaki', 'Former 9-Tails Jinchūriki', 85, 86, 70, 55, 93, 72, 76);
C('Mito Uzumaki', 'First 9-Tails Jinchūriki', 92, 90, 60, 75, 97, 65, 90);
C('Rin Nohara', 'Former 3-Tails Jinchūriki', 72, 70, 60, 55, 75, 62, 74);
C('Blue B', 'Former 8-Tails Jinchūriki · Fukai', 84, 85, 78, 50, 90, 75, 70, 'Blue B.png');
C('Obito Uchiha', '10-Tails Jinchūriki', 97, 98, 85, 88, 99, 93, 90);
C('Madara Uchiha', '10-Tails Jinchūriki · Ghost of the Uchiha', 99, 99, 95, 96, 99, 94, 96);
C('Hagoromo Otsutsuki', 'First 10-Tails Jinchūriki · Sage of Six Paths', 99, 99, 90, 95, 99, 90, 99, 'Hagoromo Ōtsutsuki.png');
C('Kinkaku', 'Pseudo 9-Tails · Gold Brother', 86, 87, 84, 40, 92, 78, 60);
C('Ginkaku', 'Pseudo 9-Tails · Silver Brother', 86, 86, 83, 42, 91, 78, 62);
C('Black Zetsu', "Kaguya's Will · Held Yin Kurama", 80, 78, 55, 70, 75, 60, 95);

/* ---------- GROUP 2: AKATSUKI & TAKA ---------- */
C('Nagato', 'Pain · Rinnegan Wielder', 95, 99, 60, 80, 97, 55, 92);
C('Yahiko', 'Founder of Akatsuki', 82, 83, 78, 55, 76, 77, 80);
C('Konan', 'Angel of Amegakure', 85, 88, 65, 70, 80, 76, 88);
C('Itachi Uchiha', 'Clan Slayer · Genjutsu Master', 94, 93, 82, 99, 78, 90, 97);
C('Kisame Hoshigaki', 'Monster of the Hidden Mist', 90, 91, 86, 50, 98, 75, 78);
C('Sasori', 'Sasori of the Red Sand', 88, 92, 60, 55, 84, 70, 92);
C('Deidara', 'Mad Bomber of Iwagakure', 87, 93, 55, 45, 85, 80, 82);
C('Kakuzu', 'Five Hearts · Earth Grudge Fear', 88, 90, 85, 45, 93, 70, 85);
C('Hidan', 'Immortal Zealot of Jashin', 83, 60, 88, 40, 80, 76, 55);
C('White Zetsu', 'Spore Spy of Akatsuki', 75, 74, 55, 60, 70, 65, 72);
C('Juzo Biwa', 'Former Seven Swordsman · Akatsuki', 81, 78, 86, 40, 80, 74, 65, 'Jūzō Biwa.png');
C('Sasuke Uchiha', 'Rinnegan · Last Uchiha', 98, 99, 90, 95, 96, 96, 92, 'Sasuke Part 2.png');
C('Suigetsu Hozuki', 'Second Coming of the Demon', 81, 80, 84, 40, 82, 76, 68, 'Suigetsu Hōzuki.png');
C('Karin', 'Sensor of Taka · Uzumaki Blood', 78, 65, 50, 55, 85, 60, 86);
C('Jugo', 'Origin of the Curse Mark', 82, 80, 87, 30, 88, 74, 45, 'Jūgo.png');

/* ---------- GROUP 3: KONOHA 11, SENSEIS & SANNIN ---------- */
C('Sakura Haruno', 'Slug Princess · Medical Ninja', 88, 75, 92, 60, 94, 72, 88, 'Sakura Part II.png');
C('Kakashi Hatake', 'Double Mangekyō · Copy Ninja', 97, 98, 90, 90, 92, 95, 98, 'Kakashi Hatake.png');
C('Shikamaru Nara', 'Shadow Strategist', 84, 76, 55, 70, 65, 60, 99);
C('Ino Yamanaka', 'Mind Transfer Specialist', 79, 74, 55, 80, 68, 62, 84);
C('Choji Akimichi', 'Butterfly Mode', 83, 78, 88, 30, 86, 55, 60, 'Chōji Akimichi.png');
C('Kiba Inuzuka', 'Fang Over Fang', 78, 70, 82, 30, 72, 84, 58);
C('Shino Aburame', 'Insect Master', 81, 84, 55, 60, 78, 62, 88);
C('Hinata Hyuga', 'Byakugan Princess', 81, 72, 85, 45, 74, 70, 76, 'Hinata Hyūga.png');
C('Neji Hyuga', 'Genius of the Hyuga', 84, 74, 90, 45, 75, 80, 85, 'Neji Hyūga.png');
C('Rock Lee', 'Gates · Handsome Devil of the Leaf', 86, 1, 98, 1, 70, 95, 62);
C('Tenten', 'Weapons Mistress', 75, 72, 74, 35, 60, 70, 72);
C('Might Guy', '8 Gates · Noble Blue Beast', 97, 10, 99, 5, 92, 99, 75);
C('Asuma Sarutobi', 'Chakra Blades · 12 Guardians', 83, 80, 86, 45, 78, 74, 80);
C('Kurenai Yuhi', 'Genjutsu Mistress', 79, 70, 60, 92, 68, 65, 80, 'Kurenai Yūhi.png');
C('Jiraiya', 'Toad Sage · Legendary Sannin', 91, 94, 82, 60, 92, 78, 86);
C('Tsunade', 'Legendary Sannin · 5th Hokage', 91, 84, 95, 60, 96, 70, 90);
C('Orochimaru', 'Legendary Sannin · Snake Sage', 92, 96, 75, 85, 94, 78, 96);
C('Sai', 'Root Ink Master', 80, 84, 76, 50, 70, 74, 80);
C('Yamato', 'Wood Style · ANBU Tenzo', 82, 88, 72, 55, 82, 70, 80);
C('Shizune', "Tsunade's Apprentice", 77, 72, 60, 55, 80, 65, 84);
C('Iruka Umino', 'Academy Instructor', 68, 65, 62, 45, 58, 60, 78);
C('Anko Mitarashi', 'Snake Charmer', 78, 80, 72, 55, 70, 72, 74);
C('Hayate Gekko', 'Kenjutsu Examiner', 76, 65, 84, 45, 58, 78, 70, 'Hayate Gekkō.png');
C('Genma Shiranui', 'Senbon Specialist', 78, 74, 78, 45, 68, 76, 76);
C('Aoba Yamashiro', 'Crow Summoner', 77, 76, 65, 60, 64, 68, 78);

/* ---------- GROUP 4: KAGE (PAST & PRESENT) ---------- */
C('Hashirama Senju', '1st Hokage · God of Shinobi', 97, 99, 88, 70, 99, 82, 85);
C('Tobirama Senju', '2nd Hokage · Creator of Jutsu', 94, 97, 84, 70, 90, 96, 96);
C('Hiruzen Sarutobi', '3rd Hokage · The Professor', 92, 96, 82, 75, 88, 76, 94);
C('Danzo Shimura', 'The Darkness of Shinobi', 88, 90, 70, 82, 85, 68, 92, 'Danzō Shimura.png');
C('A (1st Raikage)', 'Founder of Kumogakure', 88, 82, 92, 30, 90, 85, 72, 'First Raikage.png');
C('A (2nd Raikage)', 'Second Lord of Lightning', 89, 85, 90, 32, 89, 88, 76, 'Second Raikage.png');
C('A (3rd Raikage)', 'Strongest Shield & Spear', 93, 88, 96, 25, 99, 90, 74, 'Third Raikage.png');
C('A (4th Raikage)', 'Lightning Armour', 91, 84, 95, 25, 92, 97, 70, 'Fourth Raikage.png');
C('Ishikawa', '1st Tsuchikage · Particle Pioneer', 88, 93, 70, 50, 86, 65, 84);
C('Mu', '2nd Tsuchikage · The Non-Person', 92, 96, 60, 70, 88, 75, 90, 'Mū.png');
C('Ohnoki', '3rd Tsuchikage · Fence-Sitter', 91, 96, 55, 50, 87, 70, 90, 'Ōnoki.png');
C('Byakuren', '1st Mizukage', 87, 89, 75, 55, 88, 70, 80);
C('Gengetsu Hozuki', '2nd Mizukage · Mirage Master', 92, 94, 70, 90, 90, 75, 88, 'Gengetsu Hōzuki.png');
C('Mei Terumi', '5th Mizukage · Dual Kekkei Genkai', 87, 93, 60, 55, 86, 70, 82, 'Mei Terumī.png');
C('Reto', '1st Kazekage', 87, 86, 82, 45, 84, 76, 80, 'Reto.png');
C('Shamon', '2nd Kazekage', 88, 87, 80, 45, 85, 74, 82);
C('3rd Kazekage', 'Iron Sand · Strongest Kazekage', 90, 94, 65, 50, 87, 72, 86, 'Third Kazekage.png');
C('Rasa', '4th Kazekage · Gold Dust', 86, 90, 60, 45, 84, 68, 84);
C('Darui', '5th Raikage · Black Lightning', 87, 89, 82, 40, 84, 83, 80);
C('Chojuro', '6th Mizukage · Hiramekarei', 83, 78, 87, 40, 82, 76, 72, 'Chōjūrō.png');

/* ---------- GROUP 5: UCHIHA & OTSUTSUKI CLANS ---------- */
C('Shisui Uchiha', 'Shisui of the Body Flicker', 91, 88, 84, 98, 80, 94, 90);
C('Fugaku Uchiha', 'Head of the Uchiha Clan', 88, 87, 80, 88, 82, 78, 88);
C('Mikoto Uchiha', 'Uchiha Matriarch', 76, 76, 70, 74, 68, 68, 74);
C('Izuna Uchiha', "Madara's Brother", 90, 89, 86, 90, 84, 88, 84);
C('Kagami Uchiha', 'Trusted by Tobirama', 87, 85, 80, 86, 78, 82, 85);
C('Tajima Uchiha', 'Warring States Patriarch', 86, 84, 82, 84, 80, 80, 82);
C('Kaguya Otsutsuki', 'Rabbit Goddess · Progenitor', 99, 99, 90, 95, 99, 93, 80, 'Kaguya Ōtsutsuki.png');
C('Hamura Otsutsuki', 'Moon Sage', 98, 98, 90, 90, 98, 90, 92, 'Hamura Ōtsutsuki.png');
C('Indra Otsutsuki', 'Ancestor of the Uchiha', 96, 97, 85, 94, 94, 88, 92, 'Indra Ōtsutsuki.png');
C('Asura Otsutsuki', 'Ancestor of the Senju', 96, 96, 90, 60, 98, 85, 84, 'Asura Ōtsutsuki.png');
C('Toneri Otsutsuki', 'Heir of Hamura', 94, 96, 75, 80, 95, 82, 86, 'Toneri Ōtsutsuki.png');
C('Shin Uchiha', 'Experiment of Orochimaru', 85, 84, 78, 75, 80, 78, 76);
C('Yashiro Uchiha', 'Uchiha Police Force', 75, 74, 70, 72, 66, 68, 74);
C('Tekka Uchiha', 'Uchiha Police Force', 74, 73, 70, 70, 65, 67, 70);
C('Inabi Uchiha', 'Uchiha Police Force', 74, 73, 69, 71, 65, 68, 71);
C('Uruchi Uchiha', 'Senbei Shop Keeper', 65, 60, 50, 58, 52, 50, 68);
C('Teyaki Uchiha', 'Senbei Shop Keeper', 65, 60, 52, 56, 52, 50, 66);
C('Setsuna Uchiha', 'Warring States Uchiha', 76, 75, 72, 72, 66, 70, 70);
C('Naka Uchiha', 'Keeper of the Stone Tablet', 80, 79, 72, 78, 70, 72, 76, 'Naka Uchiha.png');
C('Naori Uchiha', 'Wielder of Izanami', 82, 78, 70, 88, 72, 72, 84);

/* ---------- GROUP 6: SEVEN SWORDSMEN & MIST SHINOBI ---------- */
C('Zabuza Momochi', 'Demon of the Hidden Mist', 83, 82, 88, 45, 78, 80, 76);
C('Haku', 'Ice Release · Crystal Mirrors', 81, 86, 70, 50, 74, 90, 78);
C('Mangetsu Hozuki', 'Master of All Seven Blades', 85, 84, 88, 45, 84, 80, 74, 'Mangetsu Hōzuki.png');
C('Fuguki Suikazan', 'Wielder of Samehada', 83, 80, 85, 40, 88, 68, 70);
C('Kushimaru Kuriarare', 'Wielder of Nuibari', 82, 74, 87, 42, 72, 84, 68);
C('Jinpachi Munashi', 'Wielder of Shibuki', 81, 80, 84, 40, 74, 72, 66);
C('Ameyuri Ringo', 'Wielder of the Kiba Blades', 82, 83, 84, 40, 73, 82, 65);
C('Jinin Akebino', 'Wielder of Kabutowari', 80, 72, 85, 38, 76, 68, 66);
C('Raiga Kurosuki', 'Thunder of the Kiba Blades', 81, 82, 80, 45, 74, 72, 60);
C('Ao', 'Byakugan Hunter · Sensor', 79, 74, 68, 55, 66, 65, 88);
C('Gozu', 'Demon Brother', 74, 68, 78, 35, 66, 70, 60, 'Gōzu.png');
C('Meizu', 'Demon Brother', 74, 68, 77, 35, 65, 71, 60);
C('Chukichi', 'Silent Killing Sensor', 79, 74, 76, 45, 66, 72, 78, 'Chūkichi.png');
C('Gari', 'Explosion Release Jonin', 81, 85, 80, 38, 74, 74, 66);
C('Pakura', 'Scorch Release Heroine', 82, 88, 62, 40, 76, 72, 74);

/* ---------- GROUP 7: SOUND VILLAGE & OROCHIMARU'S FORCES ---------- */
C('Kabuto Yakushi', 'Sage Mode · Serpent Spy', 94, 95, 78, 84, 93, 82, 97);
C('Kimimaro', 'Kaguya Bloodline · Bone Dance', 85, 82, 92, 35, 80, 82, 68);
C('Tayuya', 'Sound Four · Demon Flute', 77, 74, 55, 88, 70, 62, 74);
C('Kidomaru', 'Sound Four · Spider Style', 78, 78, 72, 40, 70, 68, 84, 'Kidōmaru.png');
C('Jirobo', 'Sound Four · Earth Barrier', 75, 70, 82, 30, 76, 55, 55, 'Jirōbō.png');
C('Sakon & Ukon', 'Sound Four · Twin Demons', 79, 76, 82, 40, 74, 74, 65, 'Sakon.png');
C('Dosu Kinuta', 'Sound Genin · Melody Arm', 72, 74, 66, 55, 60, 62, 74);
C('Zaku Abumi', 'Sound Genin · Air Cutter', 69, 72, 62, 30, 58, 60, 50);
C('Kin Tsuchi', 'Sound Genin · Bell Illusions', 67, 60, 55, 72, 52, 58, 56);
C('Guren', 'Crystal Release', 82, 88, 68, 55, 80, 70, 74);
C('Yukimaru', 'Link to the 3-Tails', 70, 72, 40, 45, 78, 50, 55);
C('Amachi', 'Sea Monster Scientist', 73, 74, 60, 45, 64, 60, 76);
C('Nonou Yakushi', 'Root Medic · Mother Figure', 76, 65, 55, 55, 78, 58, 84, 'Nonō Yakushi.png');
C('Urushi', 'Orphanage Companion', 65, 60, 58, 40, 52, 55, 60);
C('Mahiru', 'Kiri Ambusher', 75, 70, 74, 45, 60, 76, 68);

/* ---------- GROUP 8: KONOHA VETERANS & CLAN LEADERS ---------- */
C('Shikaku Nara', 'Jonin Commander · Chief Strategist', 85, 78, 60, 70, 66, 60, 99);
C('Inoichi Yamanaka', 'Intel Division Head', 82, 74, 58, 84, 68, 60, 92);
C('Choza Akimichi', 'Akimichi Clan Head', 83, 76, 90, 30, 87, 55, 70, 'Chōza Akimichi.png');
C('Hiashi Hyuga', 'Hyuga Clan Head', 84, 74, 92, 45, 76, 76, 82, 'Hiashi Hyūga.png');
C('Hizashi Hyuga', 'Branch House Guardian', 83, 73, 90, 45, 74, 76, 80, 'Hizashi Hyūga.png');
C('Shibi Aburame', 'Aburame Clan Head', 82, 85, 55, 60, 76, 60, 88);
C('Tsume Inuzuka', 'Inuzuka Clan Head', 81, 70, 86, 35, 74, 84, 62);
C('Dan Kato', 'Spirit Transformation', 84, 87, 65, 55, 78, 68, 84, 'Dan Katō.png');
C('Raido Namiashi', 'Black Blade Guard', 77, 70, 80, 40, 64, 72, 72, 'Raidō Namiashi.png');
C('Kotetsu Hagane', 'Eternal Chunin · Gate Guard', 75, 70, 74, 40, 62, 66, 70);
C('Izumo Kamizuki', 'Eternal Chunin · Gate Guard', 75, 72, 72, 40, 62, 66, 72);
C('Ibiki Morino', 'Head of Torture & Interrogation', 78, 66, 68, 78, 60, 55, 92);
C('Ebisu', 'Elite Private Tutor', 72, 70, 64, 50, 58, 60, 76);
C('Konohamaru Sarutobi', 'Honourable Grandson', 74, 78, 66, 40, 68, 64, 60);
C('Moegi Kazamatsuri', 'Konohamaru Corps', 68, 64, 58, 40, 56, 58, 60);
C('Udon Ise', 'Konohamaru Corps', 68, 62, 55, 40, 54, 54, 68);
C('Nawaki', "Tsunade's Brother", 65, 60, 58, 35, 55, 58, 55);
C('Biwako Sarutobi', 'Midwife of the Leaf', 70, 62, 50, 50, 66, 50, 80);
C('Koharu Utatane', 'Leaf Elder', 76, 70, 55, 60, 60, 50, 88);
C('Homura Mitokado', 'Leaf Elder', 76, 71, 56, 58, 61, 50, 88);

/* ---------- GROUP 9: ALLIED FORCES & OTHER VILLAGES ---------- */
C('C', 'Sensor Medic of Kumo · Shee', 79, 76, 60, 74, 68, 65, 86, 'C.png');
C('Omoi', 'Cautious Kenjutsu of Kumo', 79, 72, 82, 40, 66, 74, 78);
C('Karui', 'Fiery Blade of Kumo', 78, 68, 83, 35, 66, 74, 60);
C('Samui', 'Cool-Headed Captain', 80, 72, 82, 40, 68, 72, 82);
C('Atsui', 'Hot-Blooded Swordsman', 77, 74, 78, 35, 66, 68, 58);
C('Dodai', 'Rubber Style Veteran', 82, 84, 65, 45, 74, 62, 86, 'Dodai.png');
C('Kurotsuchi', 'Lava Style · Iwa Princess', 84, 87, 72, 45, 78, 74, 78);
C('Akatsuchi', 'Golem Guard of the Tsuchikage', 81, 80, 78, 35, 84, 58, 64);
C('Kitsuchi', 'Mountain Splitter of Iwa', 85, 87, 78, 40, 82, 64, 76);
C('Baki', 'Wind Blade of Suna', 81, 83, 74, 50, 72, 72, 80);
C('Kankuro', 'Puppet Master of Suna', 81, 85, 55, 45, 72, 62, 84, 'Kankurō.png');
C('Temari', 'Wind Mistress of Suna', 82, 86, 60, 45, 74, 70, 84);
C('Lady Chiyo', 'Honoured Puppeteer Granny', 86, 88, 55, 55, 80, 60, 92, 'Chiyo.png');
C('Matsuri', "Gaara's Student", 71, 66, 64, 35, 56, 62, 58);
C('Yashamaru', 'Suna ANBU Medic', 77, 72, 66, 50, 64, 68, 78);
C('Karura', "Mother of the Sand Siblings", 79, 74, 50, 45, 76, 55, 72);
C('Maki', 'Cloth Binding Kunoichi', 74, 72, 66, 40, 60, 64, 66);
C('Hanzo of the Salamander', 'Legend of Amegakure', 90, 92, 84, 50, 88, 78, 84, 'Hanzō.png');
C('Mifune', 'Samurai General of the Iron', 85, 40, 95, 60, 70, 88, 84);
C('Chiriku', '12 Guardian Ninja · Fire Temple', 82, 80, 86, 40, 76, 70, 74);
C('Sora', 'Pseudo-Jinchūriki of Fire Temple', 78, 80, 74, 35, 82, 68, 55);
C('Okisuke', 'Samurai of the Iron', 76, 40, 84, 40, 60, 74, 66);
C('Urakaku', 'Samurai of the Iron', 76, 40, 84, 40, 60, 73, 68);
C('Mabui', 'Heavenly Transfer Assistant', 77, 78, 45, 40, 62, 60, 86);
C('Motoi', 'Keeper of the Falls of Truth', 78, 72, 74, 40, 64, 62, 78);

/* ---------- GROUP 10: LEGENDARY SUMMONS & MISCELLANEOUS ---------- */
C('Gamabunta', 'Chief Toad of Mount Myoboku', 84, 82, 86, 30, 88, 60, 74);
C('Gamakichi', 'Heir of the Toad Clan', 82, 80, 80, 30, 84, 58, 70);
C('Gamatatsu', 'Snack-Loving Toad', 73, 70, 60, 20, 78, 45, 40);
C('Fukasaku', 'Great Sage Toad Elder', 86, 88, 74, 82, 84, 60, 90);
C('Shima', 'Great Sage Toad Elder', 86, 88, 72, 82, 84, 58, 90);
C('Katsuyu', 'Divine Slug of Shikkotsu Forest', 87, 84, 40, 30, 92, 30, 88);
C('Manda', 'Serpent Lord of Ryuchi Cave', 85, 78, 88, 45, 86, 74, 76);
C('Aoda', 'Loyal Serpent of Sasuke', 83, 72, 82, 35, 82, 76, 70);
C('Enma', 'Monkey King · Adamantine Staff', 85, 76, 90, 35, 82, 76, 84);
C('Pakkun', 'Ninken Tracker', 70, 55, 45, 25, 50, 72, 88);
C('Garuda', "Sasuke's Hawk", 80, 68, 78, 30, 74, 92, 60);
C('Baku', 'Dream-Devouring Tapir', 83, 84, 78, 35, 84, 55, 62);
C('Kamatari', "Temari's Sickle Weasel", 79, 74, 82, 30, 66, 86, 60);
C('Teuchi', 'Ramen Guy · Master of Ichiraku Arts', 99, 99, 99, 99, 99, 99, 99);
C('Ayame', 'Ramen Princess of Ichiraku', 99, 98, 99, 99, 98, 99, 99);
C('Menma Uzumaki', 'Masked Menace of the Genjutsu World', 88, 92, 82, 55, 94, 84, 70, 'Menma Uzumaki.png');
C('Shion', 'Priestess of the Land of Demons', 78, 72, 30, 66, 84, 45, 82);
C('Amaru', 'Apprentice of the Sky Country', 70, 55, 60, 40, 66, 62, 74);
C('Doto Kazahana', 'Chakra Armour Tyrant', 78, 80, 76, 35, 74, 64, 68, 'Dotō Kazahana.png');
C('Shinno', 'Dark Chakra Doctor', 82, 86, 78, 55, 84, 68, 84, 'Shinnō.png');
C('Might Duy', '8 Gates · Eternal Genin', 86, 1, 97, 1, 88, 92, 60);
C('Sakumo Hatake', 'White Fang of the Leaf', 91, 88, 93, 55, 84, 90, 86);
C('Gato', 'Shipping Magnate Tyrant', 50, 1, 30, 20, 10, 25, 75, 'Gatō.png');
C('Tazuna', 'Master Bridge Builder', 50, 1, 35, 5, 15, 25, 70);
C('Tonton', "Shizune's Legendary Pig", 99, 90, 85, 95, 92, 96, 99, 'Tonton.png');

/* ---------- Sanity guard ---------- */
if (CHARACTERS.length !== 200) {
  console.error('Character database corrupted: expected 200, got ' + CHARACTERS.length);
}
