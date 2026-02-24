// ═══════════════════════════════════════════════════════════════
// REALM OF LIGHT — BANK SOAL
// File: rol-data-questions.js
// Edit file ini untuk: tambah soal baru, edit soal, hapus soal.
// Cukup edit file ini, tidak perlu ubah file lain!
//
// FORMAT SOAL:
// Multiple Choice → { q: "pertanyaan", c: ["A. ...", "B. ...", ...], a: indexJawaban }
// Timed Challenge → { q: "tantangan", time: detik }
//
// a: 0 = A, 1 = B, 2 = C, 3 = D
// ═══════════════════════════════════════════════════════════════

const QB = {

  // ── BIBLE Q&A (Multiple Choice) ─────────────────────────────
  // Tambah soal Alkitab di sini
  bible: [
    {q:"Siapakah yang membangun bahtera besar untuk selamatkan keluarganya dari banjir?",c:["A. Abraham","B. Musa","C. Nuh","D. Daud"],a:2},
    {q:'Lengkapi: "...supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan..."',c:["A. diselamatkan","B. diampuni","C. beroleh hidup yang kekal","D. masuk surga"],a:2},
    {q:"Berapa lama Yesus berpuasa di padang gurun sebelum dicobai?",c:["A. 7 hari","B. 30 hari","C. 3 hari","D. 40 hari"],a:3},
    {q:"Siapakah murid Yesus yang mengkhianati-Nya dengan ciuman?",c:["A. Petrus","B. Yohanes","C. Yudas Iskariot","D. Tomas"],a:2},
    {q:"Di kota manakah Yesus dilahirkan?",c:["A. Nazaret","B. Yerusalem","C. Kapernaum","D. Betlehem"],a:3},
    {q:"Siapakah yang membunuh Goliat dengan batu dan ketapel?",c:["A. Saul","B. Yonatan","C. Daud","D. Samuel"],a:2},
    {q:"Berapa banyak murid yang dipilih Yesus?",c:["A. 10","B. 7","C. 12","D. 11"],a:2},
    {q:"Mujizat pertama Yesus dalam Injil Yohanes adalah?",c:["A. Sembuhkan orang buta","B. Bangkitkan Lazarus","C. Beri makan 5000","D. Ubah air jadi anggur"],a:3},
    {q:'Lengkapi: "TUHAN adalah gembalaku, takkan kekurangan ___"',c:["A. apapun","B. sesuatu","C. kasih","D. makanan"],a:1},
    {q:"Siapakah yang ditelan ikan besar selama 3 hari 3 malam?",c:["A. Elia","B. Yunus","C. Daniel","D. Yesaya"],a:1},
    {q:"Di gunung manakah Musa menerima Sepuluh Perintah Allah?",c:["A. Gunung Zion","B. Gunung Karmel","C. Gunung Sinai","D. Gunung Hermon"],a:2},
    {q:"Raja Israel manakah yang paling terkenal dengan hikmatnya?",c:["A. Saul","B. Daud","C. Rehabeam","D. Salomo"],a:3},
    {q:"Berapa roti dan ikan yang Yesus pakai memberi makan 5000 orang?",c:["A. 7 roti, 3 ikan","B. 3 roti, 1 ikan","C. 5 roti, 2 ikan","D. 10 roti, 5 ikan"],a:2},
    {q:'Lengkapi: "Aku adalah jalan dan kebenaran dan ___"',c:["A. kasih","B. terang","C. damai","D. hidup"],a:3},
    {q:"Siapakah yang menyangkal Yesus tiga kali sebelum ayam berkokok?",c:["A. Yudas","B. Petrus","C. Yohanes","D. Tomas"],a:1},
    {q:"Nabi manakah yang dilempar ke gua singa karena tetap berdoa?",c:["A. Elia","B. Yeremia","C. Yesaya","D. Daniel"],a:3},
    {q:"Siapakah perempuan yang menyembunyikan mata-mata Israel di Yerikho?",c:["A. Debora","B. Delila","C. Rahab","D. Rut"],a:2},
    {q:"Siapakah yang menafsirkan mimpi Firaun tentang 7 lembu gemuk dan kurus?",c:["A. Musa","B. Daniel","C. Samuel","D. Yusuf"],a:3},
    {q:"Berapa lama Yesus dalam kubur sebelum bangkit?",c:["A. 1 hari","B. 7 hari","C. 3 hari","D. 2 hari"],a:2},
    {q:"Siapakah yang menulis sebagian besar surat dalam Perjanjian Baru?",c:["A. Petrus","B. Yohanes","C. Lukas","D. Paulus"],a:3},
    {q:"Di sungai manakah Yesus dibaptis?",c:["A. Sungai Nil","B. Sungai Efrat","C. Sungai Yordan","D. Sungai Tigris"],a:2},
    {q:"Kitab apakah yang menjadi kitab pertama dalam Alkitab?",c:["A. Keluaran","B. Mazmur","C. Kejadian","D. Imamat"],a:2},
    {q:"Siapakah ibu Yesus Kristus?",c:["A. Martha","B. Elizabeth","C. Rut","D. Maria"],a:3},
    {q:"Dalam berapa hari dunia diciptakan menurut Kejadian?",c:["A. 3 hari","B. 7 hari","C. 6 hari (hari ke-7 istirahat)","D. 10 hari"],a:2},
    {q:"Siapakah manusia pertama yang diciptakan Allah?",c:["A. Abel","B. Kain","C. Hawa","D. Adam"],a:3},
    {q:"Taman manakah tempat Adam dan Hawa tinggal?",c:["A. Taman Yerusalem","B. Taman Eden","C. Taman Getsemani","D. Taman Bunga Yerikho"],a:1},
    {q:"Siapakah anak Nuh yang menjadi leluhur bangsa-bangsa?",c:["A. Kain, Abel, Set","B. Sem, Ham, Yafet","C. Ruben, Simeon, Lewi","D. Petrus, Yohanes, Yakobus"],a:1},
    {q:"Berapa tahun Israel mengembara di padang gurun?",c:["A. 20 tahun","B. 30 tahun","C. 40 tahun","D. 50 tahun"],a:2},
    {q:"Siapakah hakim perempuan yang memimpin Israel dalam Alkitab?",c:["A. Rut","B. Ester","C. Debora","D. Hana"],a:2},
    {q:"Raja manakah yang menulis Kitab Mazmur sebagian besarnya?",c:["A. Salomo","B. Saul","C. Daud","D. Hizkia"],a:2},
    {q:"Berapa nama kitab Injil dalam Perjanjian Baru?",c:["A. 3","B. 5","C. 4","D. 6"],a:2},
    {q:"Di mana Yesus disalibkan?",c:["A. Bukit Zion","B. Taman Getsemani","C. Gunung Golgota","D. Betlehem"],a:2},
    {q:"Siapakah orang pertama yang melihat Yesus setelah kebangkitan-Nya?",c:["A. Petrus","B. Maria Magdalena","C. Yohanes","D. Tomas"],a:1},
    {q:"Siapakah Bapa dari bangsa Israel?",c:["A. Yakub","B. Ishak","C. Musa","D. Abraham"],a:3},
    {q:"Berapa lama Lazarus berada di kubur sebelum dibangkitkan Yesus?",c:["A. 1 hari","B. 2 hari","C. 3 hari","D. 4 hari"],a:3},
    {q:"Dengan apa Simson mengalahkan musuhnya di Lehi?",c:["A. Pedang","B. Panah","C. Tulang rahang keledai","D. Batu"],a:2},
    {q:"Siapakah perempuan yang setia mengikuti mertuanya Naomi?",c:["A. Ester","B. Rahab","C. Debora","D. Rut"],a:3},
    {q:"Dalam mimpi Yusuf, berapa berkas yang bersujud kepadanya?",c:["A. 10","B. 11","C. 12","D. 7"],a:1},
    {q:'Lengkapi: "Kasihilah Tuhan, Allahmu, dengan segenap hatimu dan dengan segenap ___"',c:["A. imanmu","B. jiwamu","C. kehidupanmu","D. kekuatanmu"],a:1},
    {q:"Di kota manakah Paulus dilahirkan?",c:["A. Roma","B. Antiokhia","C. Tarsus","D. Efesus"],a:2},
    {q:"Kitab apakah terakhir dalam Alkitab?",c:["A. Yudas","B. 2 Petrus","C. Wahyu","D. 1 Yohanes"],a:2},
    {q:"Siapakah bapak Yohanes Pembaptis?",c:["A. Heli","B. Zakaria","C. Simeon","D. Yusuf"],a:1},
    {q:"Berapa buah-buahan yang dibawa pengintai dari tanah Kanaan?",c:["A. Ara, delima, dan gandum","B. Anggur, delima, dan ara","C. Jeruk, mangga, dan zaitun","D. Kurma, ara, dan anggur"],a:1},
    {q:"Kepada siapakah Allah pertama kali berbicara dalam Perjanjian Baru?",c:["A. Musa","B. Yusuf","C. Maria","D. Zakharia"],a:3},
  ],

  // ── FIND OBJECT (Timed Hunt) ─────────────────────────────────
  // Tambah tantangan cari benda di sini (format: { q, time })
  find: [
    {q:"🔵 Temukan benda berwarna BIRU dan bawa ke sini!",time:30},
    {q:"🔴 Temukan benda berwarna MERAH dalam 30 detik!",time:30},
    {q:"🟡 Temukan benda berwarna KUNING dalam 30 detik!",time:30},
    {q:"🟢 Temukan benda berwarna HIJAU dalam 25 detik!",time:25},
    {q:"⚫ Temukan benda berwarna HITAM dalam 25 detik!",time:25},
    {q:"⚪ Temukan benda berwarna PUTIH dalam 25 detik!",time:25},
    {q:"🟤 Temukan benda berwarna COKELAT dalam 30 detik!",time:30},
    {q:"🔷 Temukan benda berbentuk BULAT dalam 30 detik!",time:30},
    {q:"🔲 Temukan benda berbentuk KOTAK / PERSEGI dalam 25 detik!",time:25},
    {q:"📏 Temukan benda yang lebih panjang dari 10 cm dalam 30 detik!",time:30},
    {q:"🤏 Temukan benda yang bisa muat di telapak tanganmu dalam 20 detik!",time:20},
    {q:"💎 Temukan benda yang mengkilap / memantulkan cahaya!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf A dalam 30 detik!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf B dalam 30 detik!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf C dalam 30 detik!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf D dalam 30 detik!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf M dalam 30 detik!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf S dalam 30 detik!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf T dalam 30 detik!",time:30},
    {q:"🔠 Temukan benda yang namanya diawali huruf P dalam 30 detik!",time:30},
    {q:"📱 Temukan benda yang menggunakan baterai atau listrik!",time:30},
    {q:"📄 Temukan benda yang bisa ditulis / ditulisi dalam 20 detik!",time:20},
    {q:"🌿 Temukan sesuatu yang berasal dari alam / tumbuhan!",time:30},
    {q:"👕 Temukan benda yang terbuat dari kain dalam 25 detik!",time:25},
    {q:"🔩 Temukan benda yang terbuat dari logam / besi dalam 30 detik!",time:30},
    {q:"💧 Temukan benda yang berhubungan dengan AIR dalam 30 detik!",time:30},
    {q:"🍎 Temukan benda yang bisa dimakan dalam 25 detik!",time:25},
    {q:"📚 Temukan sesuatu yang bertuliskan huruf dalam 20 detik!",time:20},
    {q:"🧊 Temukan benda yang terasa DINGIN ketika disentuh!",time:25},
    {q:"🔥 Temukan benda yang berhubungan dengan CAHAYA atau API!",time:30},
  ],

  // ── VERBAL CHALLENGE ─────────────────────────────────────────
  // Tambah tantangan verbal di sini (format: { q, time })
  verbal: [
    {q:"🐾 Sebutkan 5 nama HEWAN yang berawalan huruf A dalam 15 detik!",time:15},
    {q:"🐾 Sebutkan 5 nama HEWAN yang berawalan huruf B dalam 15 detik!",time:15},
    {q:"🐾 Sebutkan 5 nama HEWAN yang berawalan huruf K dalam 15 detik!",time:15},
    {q:"🐾 Sebutkan 5 nama HEWAN yang berawalan huruf S dalam 15 detik!",time:15},
    {q:"🐾 Sebutkan 3 nama HEWAN yang hidup di laut dalam 10 detik!",time:10},
    {q:"🌆 Sebutkan 5 nama KOTA di Indonesia yang berawalan huruf B dalam 15 detik!",time:15},
    {q:"🌆 Sebutkan 5 nama KOTA di Indonesia yang berawalan huruf S dalam 15 detik!",time:15},
    {q:"🌆 Sebutkan 5 nama KOTA yang berawalan huruf M dalam 15 detik!",time:15},
    {q:"📖 Sebutkan 5 nama TOKOH dalam Alkitab Perjanjian Lama dalam 15 detik!",time:15},
    {q:"📖 Sebutkan 5 nama TOKOH dalam Alkitab Perjanjian Baru dalam 15 detik!",time:15},
    {q:"📖 Sebutkan 4 nama kitab INJIL dengan benar dalam 10 detik!",time:10},
    {q:"📖 Sebutkan 5 nama kitab dari Perjanjian Lama dalam 15 detik!",time:15},
    {q:"🍎 Sebutkan 5 nama BUAH yang berawalan huruf A, M, atau J dalam 15 detik!",time:15},
    {q:"🥦 Sebutkan 5 nama SAYURAN dalam 10 detik!",time:10},
    {q:"🎨 Sebutkan 7 nama WARNA dalam 10 detik!",time:10},
    {q:"💼 Sebutkan 5 nama PROFESI / PEKERJAAN dalam 10 detik!",time:10},
    {q:"🌍 Sebutkan 5 nama NEGARA yang berawalan huruf I dalam 15 detik!",time:15},
    {q:"🌍 Sebutkan 5 nama NEGARA di Asia dalam 15 detik!",time:15},
    {q:"🌍 Sebutkan 5 nama NEGARA di Eropa dalam 15 detik!",time:15},
    {q:"🏃 Sebutkan 5 nama OLAHRAGA dalam 10 detik!",time:10},
    {q:"🎵 Sebutkan 3 lagu ROHANI / PUJIAN dalam 15 detik!",time:15},
    {q:"⛪ Sebutkan 3 nama GEREJA yang kamu tahu dalam 15 detik!",time:15},
    {q:"🔢 Hitung mundur dari 30 sampai 1 dalam 20 detik!",time:20},
    {q:"🔤 Ucapkan alfabet A sampai Z dalam 20 detik!",time:20},
    {q:"📚 Sebutkan 5 nama pelajaran di sekolah dalam 10 detik!",time:10},
    {q:"🏠 Sebutkan 7 benda yang ada di dalam DAPUR dalam 15 detik!",time:15},
    {q:"🏠 Sebutkan 7 benda yang ada di dalam KAMAR TIDUR dalam 15 detik!",time:15},
    {q:"✝️ Sebutkan 5 kata yang berhubungan dengan ibadah/gereja dalam 15 detik!",time:15},
    {q:"🌱 Sebutkan 5 nama POHON atau TANAMAN dalam 10 detik!",time:10},
    {q:"🧪 Sebutkan 5 nama BENDA di laboratorium / sekolah dalam 15 detik!",time:15},
  ],

  // ── PHYSICAL ACTION ──────────────────────────────────────────
  // Tambah tantangan fisik di sini (format: { q, time })
  physical: [
    {q:"💪 Lakukan 10 JUMPING JACK sekarang!",time:20},
    {q:"🙏 Ucapkan Doa Bapa Kami bersama seluruh tim dengan lantang!",time:35},
    {q:"🤝 Jabat tangan semua pemain sambil ucapkan 'Shalom!' dalam 30 detik!",time:30},
    {q:"🎭 Peragakan ekspresi GEMBIRA → SEDIH → KAGET dalam 10 detik!",time:10},
    {q:"🧍 Berdiri dengan satu kaki sambil hitungan 10 detik!",time:12},
    {q:"🔄 Putar tangan kanan ke depan & tangan kiri ke belakang secara bersamaan selama 5 detik!",time:12},
    {q:"👋 Tepuk tangan 20 kali secepat mungkin!",time:15},
    {q:"🚶 Jalan ke dinding terdekat dan balik dalam 10 detik!",time:10},
    {q:"😂 Tertawakan sesuatu yang lucu selama 5 detik — tertawa asli, bukan pura-pura!",time:8},
    {q:"🎤 Nyanyikan satu baris lagu 'Yesus Cinta Padaku' dengan penuh semangat!",time:15},
    {q:"🔢 Sebutkan perkalian 7 dari 7×1 sampai 7×5 dalam 15 detik!",time:15},
    {q:"🎭 Peragakan gaya Musa membelah Laut Merah tanpa kata-kata!",time:10},
    {q:"🦁 Tirukan 3 suara hewan yang berbeda dalam 10 detik!",time:10},
    {q:"⏱️ Tahan napas selama 10 detik — TANPA BERPURA-PURA!",time:13},
    {q:"🤸 Lakukan gerakan peregangan: raih ujung kaki kamu dalam 10 detik!",time:12},
  ],

  // ── TRIVIA UMUM ──────────────────────────────────────────────
  // Tambah soal trivia di sini
  trivia: [
    {q:"Berapa jumlah hari dalam satu tahun (bukan tahun kabisat)?",c:["A. 355","B. 360","C. 365","D. 366"],a:2},
    {q:"Ibukota Indonesia adalah?",c:["A. Surabaya","B. Bandung","C. Jakarta (akan pindah ke Nusantara)","D. Medan"],a:2},
    {q:"Berapa jumlah planet dalam tata surya kita?",c:["A. 7","B. 8","C. 9","D. 10"],a:1},
    {q:"Siapakah Presiden pertama Indonesia?",c:["A. Soeharto","B. Soekarno","C. Habibie","D. Megawati"],a:1},
    {q:"Air terdiri dari unsur apa saja?",c:["A. Hidrogen dan Nitrogen","B. Oksigen dan Karbon","C. Hidrogen dan Oksigen","D. Nitrogen dan Karbon"],a:2},
    {q:"Berapa jumlah warna dalam pelangi?",c:["A. 5","B. 6","C. 7","D. 8"],a:2},
    {q:"Gunung tertinggi di dunia adalah?",c:["A. Gunung Kilimanjaro","B. Gunung Andes","C. Gunung Everest","D. Gunung Himalaya"],a:2},
    {q:"Hewan manakah yang dikenal sebagai 'raja hutan'?",c:["A. Harimau","B. Gajah","C. Singa","D. Serigala"],a:2},
    {q:"Berapa jumlah sisi segitiga?",c:["A. 2","B. 3","C. 4","D. 5"],a:1},
    {q:"Bahasa resmi yang digunakan di Brasil adalah?",c:["A. Spanyol","B. Inggris","C. Portugis","D. Latin"],a:2},
    {q:"Siapakah penemu bola lampu listrik?",c:["A. Albert Einstein","B. Thomas Edison","C. Nikola Tesla","D. Benjamin Franklin"],a:1},
    {q:"Berapa jumlah sisi kubus?",c:["A. 4","B. 6","C. 8","D. 12"],a:1},
    {q:"Planet terdekat dengan matahari adalah?",c:["A. Venus","B. Mars","C. Bumi","D. Merkurius"],a:3},
    {q:"Tanggal Kemerdekaan Indonesia adalah?",c:["A. 17 Agustus 1944","B. 17 Agustus 1945","C. 17 Juli 1945","D. 17 Agustus 1946"],a:1},
    {q:"Berapa sisi heksagon (segi enam)?",c:["A. 5","B. 6","C. 7","D. 8"],a:1},
    {q:"Organ tubuh manakah yang berfungsi memompa darah?",c:["A. Paru-paru","B. Ginjal","C. Hati","D. Jantung"],a:3},
    {q:"Berapa jumlah wajah kartu joker dalam satu deck standar?",c:["A. 1","B. 2","C. 3","D. 4"],a:1},
    {q:"Benua manakah yang terbesar di dunia?",c:["A. Amerika","B. Afrika","C. Asia","D. Eropa"],a:2},
    {q:"Hewan apakah yang mempunyai leher terpanjang?",c:["A. Unta","B. Jerapah","C. Kudanil","D. Gajah"],a:1},
    {q:"Berapa jumlah huruf dalam alfabet Indonesia (standar)?",c:["A. 24","B. 25","C. 26","D. 27"],a:2},
  ],

  // ── BIBLE FILL THE BLANK ─────────────────────────────────────
  // Tambah soal lengkapi ayat di sini
  fillblank: [
    {q:'Lengkapi ayat: "Kuatkan dan teguhkan hatimu, janganlah takut dan jangan gemetar karena mereka, sebab ___ Allahmu, Dialah yang berjalan menyertai engkau"',c:["A. TUHAN","B. Roh","C. Yesus","D. Malaikat"],a:0},
    {q:'Lengkapi: "Karena itu janganlah kamu khawatir tentang hari esok, karena hari esok mempunyai kesusahannya sendiri. Kesusahan sehari ___ sudah cukup untuk sehari."',c:["A. saja","B. pula","C. itu","D. penuh"],a:1},
    {q:'Lengkapi: "Serahkanlah hidupmu kepada TUHAN dan percayalah kepada-Nya, dan Ia akan ___"',c:["A. menolong kamu","B. bertindak","C. menjagamu","D. memberkatimu"],a:1},
    {q:'Lengkapi: "Sebab Allah tidak memberikan kepada kita roh ketakutan, melainkan roh yang membangkitkan kekuatan, ___ dan ketertiban."',c:["A. kasih","B. iman","C. kedamaian","D. harapan"],a:0},
    {q:'Lengkapi: "Mintalah maka akan diberikan kepadamu; ___, maka kamu akan mendapat; ketoklah, maka pintu akan dibukakan bagimu."',c:["A. berdoalah","B. percayalah","C. carilah","D. tunggulah"],a:2},
    {q:'Lengkapi: "Berbahagialah orang yang ___ di hadapan Allah, karena merekalah yang empunya Kerajaan Sorga."',c:["A. kaya","B. miskin","C. rendah hati","D. sabar"],a:1},
    {q:'Lengkapi: "Kasih itu sabar; kasih itu murah hati; ia tidak ___, ia tidak memegahkan diri dan tidak sombong."',c:["A. marah","B. cemburu","C. berdusta","D. bertengkar"],a:1},
    {q:'Lengkapi: "Sebab rencana-Ku bukanlah rancanganmu, dan jalanmu bukanlah ___-Ku, demikianlah firman TUHAN."',c:["A. jalanKu","B. pikiranKu","C. rencanaku","D. kemauanKu"],a:0},
    {q:'Lengkapi: "Tetapi carilah dahulu ___ Allah dan kebenaran-Nya, maka semuanya itu akan ditambahkan kepadamu."',c:["A. kuasa","B. kasih","C. Kerajaan","D. berkat"],a:2},
    {q:'Lengkapi: "Sebab itu siapa yang ada di dalam Kristus, ia adalah ___; yang lama sudah berlalu, sesungguhnya yang baru sudah datang."',c:["A. ciptaan baru","B. manusia baru","C. orang suci","D. anak Allah"],a:0},
  ],

}; // ← JANGAN HAPUS BARIS INI

// ─── URUTAN TEMA MISI ────────────────────────────────────────────
// Ubah urutan atau tambah tema sesuai kebutuhan.
// Tema akan diulang setelah habis.
// Pilihan: 'bible', 'trivia', 'fillblank', 'verbal', 'find', 'physical'
const MISSION_THEMES = [
  'bible',
  'trivia',
  'fillblank',
  'verbal',
  'find',
  'physical',
  'bible',
  'trivia',
  'verbal',
  'find',
];
