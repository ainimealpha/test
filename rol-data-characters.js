// ═══════════════════════════════════════════════════════════════
// REALM OF LIGHT — DATA KARAKTER v2.0
// File: rol-data-characters.js
// ═══════════════════════════════════════════════════════════════

const ROLES = {

  // ── HERO ──────────────────────────────────────────────────────
  guardian: {
    name: 'Guardian',
    icon: '⚔️',
    team: 'hero',
    label: 'HERO',
    tag: 'tag-hero',
    card: 'guardian',
    color: '#1a3a6b',
    ability: 'Lindungi 1 orang dari eliminasi malam hari (tidak bisa melindungi diri sendiri).',
    passive: 'Jika berhasil melindungi Civilian/Hero yang diserang → skill dapat digunakan 1x lagi (maks 2x total, bonus hanya 1x).',
    win: 'Semua Villain (Assassin + Thief + Bomber) tereliminasi.',
  },

  visioner: {
    name: 'Visioner',
    icon: '🔮',
    team: 'hero',
    label: 'HERO',
    tag: 'tag-hero',
    card: 'visioner',
    color: '#4a1a6b',
    ability: 'Lihat role 1 pemain secara rahasia (1x selama game).',
    passive: 'Selama skill BELUM digunakan: jika diserang Villain → Villain tersebut tereliminasi, Visioner selamat. Setelah pasif aktif, skill otomatis terkunci.',
    win: 'Semua Villain (Assassin + Thief + Bomber) tereliminasi.',
  },

  healer: {
    name: 'Healer',
    icon: '💚',
    team: 'hero',
    label: 'HERO',
    tag: 'tag-hero',
    card: 'healer',
    color: '#1a5c2a',
    ability: 'Bangkitkan 1 Civilian/Hero yang gugur. Aktif mulai malam ke-2 setelah ada yang gugur. Hero dibangkitkan → jadi Civilian biasa (tanpa skill & pasif).',
    passive: 'Jika Healer gugur sebelum pakai skill → malam berikutnya dapat membangkitkan 1 orang. Hero yang dibangkitkan via pasif → hanya bisa gunakan skill (tanpa pasif).',
    win: 'Semua Villain (Assassin + Thief + Bomber) tereliminasi.',
  },

  archer: {
    name: 'Archer',
    icon: '🏹',
    team: 'hero',
    label: 'HERO',
    tag: 'tag-hero',
    card: 'archer',
    color: '#6b4a00',
    ability: 'Non-aktifkan skill 1 karakter selama 1 malam penuh.',
    passive: 'Jika target ternyata Villain → skill dapat digunakan 1x lagi ke target BERBEDA (maks 2x total, tidak bisa ke Villain yang sama).',
    win: 'Semua Villain (Assassin + Thief + Bomber) tereliminasi.',
  },

  // ── CIVILIAN ──────────────────────────────────────────────────
  civilian: {
    name: 'Civilian',
    icon: '👤',
    team: 'civil',
    label: 'CIVILIAN',
    tag: 'tag-civ',
    card: 'civilian',
    color: '#5c3e00',
    ability: 'Tidak ada kemampuan khusus.',
    passive: 'Kekuatanmu ada di voting! Civilian adalah kelompok terbesar — suaramu sangat menentukan.',
    win: 'Semua Villain (Assassin + Thief + Bomber) tereliminasi.',
  },

  // ── VILLAIN ───────────────────────────────────────────────────
  assassin: {
    name: 'Assassin',
    icon: '🗡️',
    team: 'villain',
    label: 'VILLAIN',
    tag: 'tag-villain',
    card: 'assassin',
    color: '#6b0f0f',
    ability: 'Eliminasi 1 pemain di malam hari (1x selama game).',
    passive: 'Jika Hero+Civilian awal ≥ 9 → skill dapat digunakan 2x selama game (dicek 1x di awal).',
    win: 'Villain hidup ≥ Hero+Civilian hidup ATAU 3 misi berhasil digagalkan.',
  },

  thief: {
    name: 'Thief',
    icon: '🥷',
    team: 'villain',
    label: 'VILLAIN',
    tag: 'tag-villain',
    card: 'thief',
    color: '#5c2500',
    ability: 'Curi skill 1 pemain hidup (1x). Target kehilangan skill & pasif sepenuhnya.',
    passive: 'Jika target Civilian → skill GAGAL & hangus (Civilian selamat). Jika target sudah memakai skillnya → target ikut tereliminasi.',
    win: 'Villain hidup ≥ Hero+Civilian hidup ATAU 3 misi berhasil digagalkan.',
  },

  bomber: {
    name: 'Bomber',
    icon: '💣',
    team: 'villain',
    label: 'VILLAIN',
    tag: 'tag-villain',
    card: 'bomber',
    color: '#3a1a00',
    ability: 'Jika Visioner menggunakan skill untuk melihat role Bomber → Visioner tereliminasi (bukan Bomber yang terungkap).',
    passive: 'Jika Bomber dieliminasi lewat voting → pilih 1 Civilian/Hero untuk ikut tereliminasi bersama.',
    win: 'Villain hidup ≥ Hero+Civilian hidup ATAU 3 misi berhasil digagalkan.',
  },

  // ── ANTI-HERO ─────────────────────────────────────────────────
  trickster: {
    name: 'Trickster',
    icon: '🃏',
    team: 'antihero',
    label: 'ANTI-HERO',
    tag: 'tag-anti',
    card: 'trickster',
    color: '#0a4a3a',
    ability: 'Tidak ada skill aktif. Andalkan pasifmu!',
    passive: 'P1: Jika dilihat Visioner → tampil sebagai Civilian (1x). P2: Jika ditarget Assassin → Assassin kehilangan 1 penggunaan skill (1x, Trickster selamat).',
    win: 'Kondisi menang Villain tercapai DAN Anti-Hero masih hidup → Anti-Hero menang, Villain kalah.',
  },

  dummy: {
    name: 'Dummy',
    icon: '🎭',
    team: 'antihero',
    label: 'ANTI-HERO',
    tag: 'tag-anti',
    card: 'dummy',
    color: '#4a0a4a',
    ability: 'Tidak ada skill aktif. Andalkan pasifmu!',
    passive: 'P1: Kebal 1x terhadap semua skill & pasif Hero/Villain (otomatis saat pertama ditarget). P2: Jika divoting keluar (mulai malam ke-2, min. 5 pemain hidup) → Anti-Hero menang otomatis.',
    win: 'Divoting keluar (min. malam ke-2, 5+ pemain hidup) ATAU kondisi Villain tercapai → Anti-Hero menang.',
  },
};

// ─── DISTRIBUSI PERAN (MAX 20 PEMAIN) ──────────────────────────
// h = Hero, c = Civilian, v = Villain, a = Anti-Hero
// Civilian selalu dominan. Anti-Hero muncul mulai 8 pemain.
// Villain maks 3 (semua tipe hadir di 12+).
// ─── DISTRIBUSI SEIMBANG (Opsi C) ───────────────────────────────
// Civilian tetap dominan, tapi tidak berlebihan.
// Hero max 5, Villain max 4, Anti-Hero max 3.
// Assassin passive 2x jika Hero+Civilian awal ≥ 9.
//
// Pemain | H  | C  | V  | A  | Total
// -------|----|----|----|----|------
//   5    |  2 |  2 |  1 |  0 |   5
//   6    |  2 |  2 |  2 |  0 |   6
//   7    |  2 |  3 |  2 |  0 |   7
//   8    |  2 |  3 |  2 |  1 |   8
//   9    |  3 |  3 |  2 |  1 |   9
//  10    |  3 |  4 |  2 |  1 |  10
//  11    |  3 |  4 |  3 |  1 |  11
//  12    |  3 |  5 |  3 |  1 |  12
//  13    |  4 |  5 |  3 |  1 |  13
//  14    |  4 |  5 |  3 |  2 |  14
//  15    |  4 |  6 |  3 |  2 |  15
//  16    |  4 |  7 |  3 |  2 |  16
//  17    |  5 |  7 |  3 |  2 |  17
//  18    |  5 |  7 |  4 |  2 |  18
//  19    |  5 |  8 |  4 |  2 |  19
//  20    |  5 |  8 |  4 |  3 |  20
const ROLE_TABLE = {
  5:  { h:2, c:2, v:1, a:0 },
  6:  { h:2, c:2, v:2, a:0 },
  7:  { h:2, c:3, v:2, a:0 },
  8:  { h:2, c:3, v:2, a:1 },
  9:  { h:3, c:3, v:2, a:1 },
  10: { h:3, c:4, v:2, a:1 },
  11: { h:3, c:4, v:3, a:1 },
  12: { h:3, c:5, v:3, a:1 },
  13: { h:4, c:5, v:3, a:1 },
  14: { h:4, c:5, v:3, a:2 },
  15: { h:4, c:6, v:3, a:2 },
  16: { h:4, c:7, v:3, a:2 },
  17: { h:5, c:7, v:3, a:2 },
  18: { h:5, c:7, v:4, a:2 },
  19: { h:5, c:8, v:4, a:2 },
  20: { h:5, c:8, v:4, a:3 },
};

function getRoles(n) {
  const dist = ROLE_TABLE[Math.min(Math.max(n, 5), 20)];
  const heroPool = shuffle(['guardian', 'visioner', 'healer', 'archer']);
  const vilPool  = shuffle(['assassin', 'thief', 'bomber']);
  const antiPool = shuffle(['trickster', 'dummy']);
  const roles = [];
  for (let i = 0; i < dist.h; i++) roles.push(heroPool[i % heroPool.length]);
  for (let i = 0; i < dist.c; i++) roles.push('civilian');
  for (let i = 0; i < dist.v; i++) roles.push(vilPool[i % vilPool.length]);
  for (let i = 0; i < dist.a; i++) roles.push(antiPool[i % antiPool.length]);
  return shuffle(roles);
}

// ─── ASSASSIN MAX SKILL ─────────────────────────────────────────
// Dicek 1x di awal game dari Hero+Civilian count awal.
function getAssassinMaxSkill(heroCivilCount) {
  return heroCivilCount >= 9 ? 2 : 1;
}

// ─── UKURAN TIM MISI ────────────────────────────────────────────
// Jika total pemain < 8 → wajib 3 orang. Maks absolut = 8.
function getMissionTeamSize(totalPlayers) {
  if (totalPlayers < 8)  return { min: 3, max: 3 };
  if (totalPlayers < 12) return { min: 3, max: 4 };
  if (totalPlayers < 16) return { min: 3, max: 5 };
  return { min: 4, max: Math.min(8, totalPlayers) };
}
