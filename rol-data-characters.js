// ═══════════════════════════════════════════════════════════════
// REALM OF LIGHT — DATA KARAKTER
// File: rol-data-characters.js
// Edit file ini untuk: update karakter, tambah karakter baru,
// ubah ability, buff/nerf, atau kondisi menang.
// ═══════════════════════════════════════════════════════════════

const ROLES = {
  knight: {
    name: 'Knight',
    icon: '⚔️',
    team: 'hero',
    label: 'HERO',
    tag: 'tag-hero',
    card: 'knight',
    color: '#1a3a6b',
    ability: 'Lindungi 1 orang dari eliminasi (1x). Kebal serangan Assassin 1x.',
    win: 'Semua Villain tereliminasi.',
  },
  wizard: {
    name: 'Wizard',
    icon: '🔮',
    team: 'hero',
    label: 'HERO',
    tag: 'tag-hero',
    card: 'wizard',
    color: '#4a1a6b',
    ability: 'Lihat peran 1 pemain secara rahasia (1x). Jika dibunuh Assassin → Assassin ikut mati!',
    win: 'Semua Villain tereliminasi.',
  },
  healer: {
    name: 'Healer',
    icon: '💚',
    team: 'hero',
    label: 'HERO',
    tag: 'tag-hero',
    card: 'healer',
    color: '#1a5c2a',
    ability: 'Bangkitkan 1 pemain mati (1x). Kemampuan ini AKTIF hanya setelah ada yang gugur!',
    win: 'Semua Villain tereliminasi.',
  },
  civilian: {
    name: 'Civilian',
    icon: '👤',
    team: 'civil',
    label: 'CIVILIAN',
    tag: 'tag-civ',
    card: 'civilian',
    color: '#5c3e00',
    ability: 'Tidak ada kemampuan khusus. Kekuatanmu ada di voting!',
    win: 'Semua Villain tereliminasi.',
  },
  assassin: {
    name: 'Assassin',
    icon: '🗡️',
    team: 'villain',
    label: 'VILLAIN',
    tag: 'tag-villain',
    card: 'assassin',
    color: '#6b0f0f',
    // Ability text diupdate otomatis saat game start berdasarkan jumlah pemain
    ability: 'Eliminasi pemain di malam hari. Hati-hati: membunuh Wizard = ikut mati!',
    // maxSkill: ditentukan dinamis oleh getRoles() berdasarkan jumlah pemain
    // 5–6 pemain  → maxSkill: 1 (default)
    // 7–10 pemain → maxSkill: 2 (BUFF)
    // 11+ pemain  → maxSkill: 1 (kembali normal)
    win: 'Villain ≥ Hero+Civilian yang hidup.',
  },
  thief: {
    name: 'Thief',
    icon: '🥷',
    team: 'villain',
    label: 'VILLAIN',
    tag: 'tag-villain',
    card: 'thief',
    color: '#5c2500',
    ability: 'Curi kemampuan 1 pemain yang masih hidup (1x). Kemampuan mereka menjadi milikmu!',
    win: 'Villain ≥ Hero+Civilian yang hidup.',
  },
  trickster: {
    name: 'Trickster',
    icon: '🃏',
    team: 'solo',
    label: 'ANTI-HERO',
    tag: 'tag-anti',
    card: 'trickster',
    color: '#0a4a3a',
    ability: 'Bisa Sabotase misi seperti Villain. MENANG jika semua Villain masih hidup saat game berakhir!',
    win: 'Semua Villain selamat hingga akhir game.',
  },
};

// ─── DISTRIBUSI PERAN ───────────────────────────────────────────
// Ubah fungsi ini untuk mengatur komposisi peran per jumlah pemain.
// hasTrick: apakah Trickster muncul (default: n >= 8)
// vCount: jumlah Villain
// hCount: jumlah Hero (Knight/Wizard/Healer)
// cCount: sisanya = Civilian
function getRoles(n) {
  const hasTrick = n >= 8;
  let rem = n - (hasTrick ? 1 : 0);
  const vCount = Math.max(1, Math.floor(rem * 2 / 8));
  const rem2 = rem - vCount;
  const hCount = Math.min(3, Math.max(1, Math.ceil(rem2 * 3 / 6)));
  const cCount = Math.max(0, rem2 - hCount);

  const heroPool = shuffle(['knight', 'wizard', 'healer']);
  const vilPool = shuffle(['assassin', 'thief']);

  const roles = [];
  for (let i = 0; i < hCount; i++) roles.push(heroPool[i % 3]);
  for (let i = 0; i < cCount; i++) roles.push('civilian');
  for (let i = 0; i < vCount; i++) roles.push(vilPool[i % 2]);
  if (hasTrick) roles.push('trickster');
  return shuffle(roles);
}

// ─── JUMLAH SKILL ASSASSIN BERDASARKAN PEMAIN ──────────────────
// 5–6 pemain  → 1x
// 7–10 pemain → 2x  ← BUFF
// 11+ pemain  → 1x
function getAssassinMaxSkill(totalPlayers) {
  if (totalPlayers >= 7 && totalPlayers <= 10) return 2;
  return 1;
}

// ─── DESKRIPSI ABILITY ASSASSIN (dinamis) ─────────────────────
function getAssassinAbility(totalPlayers) {
  const max = getAssassinMaxSkill(totalPlayers);
  if (max === 2) {
    return `Eliminasi pemain di malam hari (2x — berlaku karena pemain 7–10). Hati-hati: membunuh Wizard = ikut mati!`;
  }
  return `Eliminasi pemain di malam hari (1x). Hati-hati: membunuh Wizard = ikut mati!`;
}
