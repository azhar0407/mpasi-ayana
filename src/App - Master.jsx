import React, { useState, useMemo } from 'react';
import { 
  Home, 
  BookOpen, 
  CalendarDays, 
  Heart, 
  Search, 
  Clock, 
  ChefHat, 
  Info, 
  ArrowLeft, 
  X,
  Star,
  BookText,
  ChevronRight
} from 'lucide-react';

// Database Dummy Resep (Perwakilan dari 105 Resep)
const recipesDB = [
  {
    id: 1,
    title: "Stik Kentang Panggang",
    category: "Karbohidrat",
    age: "6+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 buah kentang ukuran sedang, kupas",
      "1 sdt Extra Virgin Olive Oil (EVOO)"
    ],
    instructions: [
      "Potong kentang memanjang seukuran jari telunjuk orang dewasa.",
      "Cuci bersih kentang untuk menghilangkan getahnya, lalu tiriskan.",
      "Baluri kentang dengan EVOO secara merata.",
      "Panggang dalam oven atau air fryer bersuhu 180°C selama 20 menit hingga bagian dalamnya sangat empuk."
    ],
    nutrition: "Kaya karbohidrat kompleks untuk energi harian si kecil.",
    tips: "Letakkan 2-3 stik di piring suction bayi dan biarkan ia mengambilnya sendiri."
  },
  {
    id: 2,
    title: "Patty Daging Sapi Lembut",
    category: "Protein Hewani",
    age: "6+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "150 gram daging sapi giling berkualitas baik",
      "1 sdm bawang bombai, parut halus",
      "1 sdm breadcrumbs/tepung roti halus",
      "1 sdt butter untuk menumis"
    ],
    instructions: [
      "Campur daging sapi giling, bawang bombai parut, dan breadcrumbs. Uleni rata.",
      "Bentuk adonan memanjang menyerupai sosis tebal (ukuran dua jari dewasa).",
      "Panaskan butter di wajan, masak patty dengan api sedang.",
      "Tutup wajan agar daging matang hingga ke dalam. Bolak-balik hingga matang sempurna (sekitar 8-10 menit)."
    ],
    nutrition: "Sumber utama zat besi heme dan zinc untuk mencegah anemia.",
    tips: "Berikan 1 buah patty memanjang utuh di hadapan si kecil."
  },
  {
    id: 3,
    title: "Brokoli Kukus Keju Lumer",
    category: "Sayuran",
    age: "6+ Bulan",
    time: "10 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "2 kuntum brokoli (sertakan batangnya)",
      "1 sdt keju quick melt parut / keju parmesan"
    ],
    instructions: [
      "Cuci bersih brokoli di bawah air mengalir.",
      "Kukus brokoli selama 7-9 menit (jangan terlalu lembek).",
      "Taburi keju parut panas-panas di atas brokoli hingga meleleh."
    ],
    nutrition: "Kalsium ganda dari brokoli dan keju, tinggi zat besi non-heme.",
    tips: "Bayi akan memegang tangkainya dan memakan bunganya. Tangkai keras berguna untuk meredakan gusi gatal."
  },
  {
    id: 4,
    title: "Alpukat Balur Oat Sangrai",
    category: "Buah",
    age: "6+ Bulan",
    time: "5 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1/4 buah alpukat mentega matang",
      "1 sdm oat instan (disangrai sebentar)"
    ],
    instructions: [
      "Potong alpukat menjadi stik memanjang setebal 2 cm.",
      "Gulingkan alpukat licin ini ke atas bubuk oat sangrai.",
      "Sajikan langsung sebelum teroksidasi menghitam."
    ],
    nutrition: "Lemak otak utama (brain booster).",
    tips: "Baluran oat mengunci alpukat agar mudah dipegang dan tidak licin merosot."
  },
  {
    id: 5,
    title: "Pancake Oat Pisang",
    category: "Sarapan",
    age: "6+ Bulan",
    time: "15 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 buah pisang ambon matang",
      "3 sdm rolled oat (blender jadi tepung)",
      "1 butir telur ayam",
      "Minyak kelapa secukupnya"
    ],
    instructions: [
      "Lumatkan pisang menggunakan garpu.",
      "Masukkan telur dan tepung oat, aduk rata jadi adonan kental.",
      "Panaskan wajan dengan minyak kelapa.",
      "Tuang 1 sdm adonan untuk membuat pancake mini. Balik jika kecokelatan."
    ],
    nutrition: "Karbohidrat kompleks dari oat, kalium dari pisang, dan protein telur.",
    tips: "Potong memanjang seperti stik agar mudah digenggam bayi 6 bulan."
  },
  {
    id: 6,
    title: "Edamame Tumbuk Lumat",
    category: "Protein Nabati",
    age: "7+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 genggam kacang edamame utuh",
      "1 sdt unsalted butter"
    ],
    instructions: [
      "Rebus edamame utuh hingga matang (10 menit).",
      "Keluarkan biji, lalu kupas kulit ari tipisnya (wajib agar tidak tersedak).",
      "Lumatkan biji edamame dengan garpu hingga hancur.",
      "Campurkan butter selagi hangat. Bentuk kepalan silinder kecil."
    ],
    nutrition: "Protein nabati tinggi dan asam folat.",
    tips: "Jangan berikan edamame utuh bulat karena rawan tersedak."
  },
  {
    id: 7,
    title: "Pasta Bolognese Bayi",
    category: "Makan Siang",
    age: "9+ Bulan",
    time: "30 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 genggam pasta fusilli",
      "50 gram daging sapi cincang halus",
      "1 buah tomat kupas cincang",
      "Bawang putih & bombai secukupnya",
      "1 sdt butter"
    ],
    instructions: [
      "Rebus pasta hingga sangat empuk (overcooked).",
      "Tumis duo bawang, masukkan daging sapi.",
      "Masukkan tomat kupas dan air, slow cook 20 menit hingga kental.",
      "Siram saus ke atas pasta."
    ],
    nutrition: "Kombinasi penyerapan zat besi paripurna (daging + vitamin C tomat).",
    tips: "Bentuk fusilli (spiral) sangat mudah digenggam bayi."
  },
  {
    id: 8,
    title: "Risotto Nasi Merah Santan",
    category: "Makan Malam",
    age: "9+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "3 sdm nasi merah",
      "150 ml santan encer manis gurih",
      "1 sdm ayam cincang lembut",
      "Sedikit jamur kancing cincang halus"
    ],
    instructions: [
      "Rebus santan. Masukkan nasi merah, ayam, dan jamur.",
      "Masak api sangat kecil (simmer) sambil diaduk sesekali selama 30 menit.",
      "Masak hingga nasi merah pecah, kental, dan lengket lumer."
    ],
    nutrition: "Lemak gurih dan karbo padat B kompleks menahan lapar semalaman.",
    tips: "Tekstur akan sangat lengket dan mudah dicengkeram bayi."
  }
];

const categories = ["Semua", "Karbohidrat", "Protein Hewani", "Protein Nabati", "Sayuran", "Buah", "Sarapan", "Makan Siang", "Makan Malam"];

const bookData = [
  {
    id: 1,
    title: "BAB 1: Mengenal MPASI dan BLW",
    excerpt: "Dasar-dasar MPASI, metode BLW, manfaat, dan risiko tersedak.",
    content: (
      <>
        <p>Selamat datang di fase baru yang luar biasa dalam perjalanan pengasuhan Anda, Ayah dan Bunda! Memasuki usia enam bulan, bayi Anda bukan lagi bayi baru lahir yang hanya mengandalkan ASI atau susu formula.</p>
        
        <h3>Apa itu MPASI?</h3>
        <p>MPASI adalah singkatan dari Makanan Pendamping ASI. Berfungsi untuk mendampingi ASI, karena seiring bertambahnya usia, kebutuhan nutrisi bayi (terutama energi, zat besi, dan zinc) meningkat pesat dan tidak lagi bisa dipenuhi hanya dari cairan.</p>
        
        <h3>Apa itu Baby Led Weaning (BLW)?</h3>
        <p>BLW adalah metode pengenalan MPASI yang membiarkan bayi memimpin proses makannya sendiri sejak hari pertama. Bayi langsung diperkenalkan pada makanan padat seukuran genggaman tangannya (finger food) tanpa disuapi bubur saring (puree).</p>
        
        <h3>Manfaat BLW</h3>
        <ul>
          <li><strong>Melatih Motorik:</strong> Bayi belajar koordinasi mata dan tangan, serta melatih rahang mengunyah.</li>
          <li><strong>Mencegah Picky Eater:</strong> Bayi yang terpapar berbagai tekstur utuh sejak awal cenderung lebih mudah menerima makanan di kemudian hari.</li>
          <li><strong>Membangun Kemandirian:</strong> Bayi merasa dihargai dan mengatur porsinya sendiri.</li>
        </ul>

        <h3>Risiko Tersedak (Choking vs Gagging)</h3>
        <p>Sangat penting membedakan keduanya. <strong>Gagging</strong> adalah muntah refleks yang aman (wajah merah, batuk, masih bersuara). Sedangkan <strong>Choking</strong> (tersedak) berbahaya (jalan napas tertutup, wajah biru, tanpa suara). Untuk mencegah choking, pastikan bayi duduk tegak 90 derajat dan makanan dipotong sesuai aturan.</p>
      </>
    )
  },
  {
    id: 2,
    title: "BAB 2: Panduan Gizi Bayi",
    excerpt: "Makronutrien, mikronutrien, serta bahan makanan yang wajib dihindari.",
    content: (
      <>
        <p>Memasuki masa MPASI, peran Anda ibarat arsitek. Makanan yang disajikan adalah batu bata penyusun fisik dan kecerdasan otak si kecil.</p>
        
        <h3>Pilar Makronutrien</h3>
        <ul>
          <li><strong>Karbohidrat:</strong> Bahan bakar utama (Nasi, kentang, oat, ubi).</li>
          <li><strong>Protein Hewani:</strong> Singgasana MPASI! Kaya zat besi heme (Daging sapi, hati ayam, salmon, telur).</li>
          <li><strong>Protein Nabati:</strong> Pelengkap nutrisi (Tahu, tempe, edamame).</li>
          <li><strong>Lemak Sehat:</strong> Sangat krusial untuk otak bayi (EVOO, unsalted butter, alpukat, santan).</li>
        </ul>

        <h3>Makanan yang Harus Dihindari (&lt; 1 Tahun)</h3>
        <ul>
          <li><strong>Garam & Gula:</strong> Ginjal bayi belum kuat. Gula buatan merusak gigi dan menekan nafsu makan bernutrisi.</li>
          <li><strong>Madu:</strong> SANGAT DILARANG! Mengandung spora botulisme yang bisa melumpuhkan otot bayi.</li>
          <li><strong>Makanan Bulat Keras:</strong> Anggur utuh, sosis potong koin, tomat ceri utuh (risiko tersedak tinggi). Selalu potong memanjang.</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    title: "BAB 3: Panduan Memulai BLW",
    excerpt: "Tanda kesiapan, jadwal makan, dan cara memotong makanan.",
    content: (
      <>
        <h3>3 Tanda Bayi Siap Makan</h3>
        <ol>
          <li>Kepala tegak dan bisa duduk mandiri tanpa penyangga.</li>
          <li>Hilangnya refleks menjulurkan lidah (Tongue-Thrust).</li>
          <li>Koordinasi mata-tangan-mulut yang baik untuk meraih makanan.</li>
        </ol>

        <h3>Cara Memotong Sesuai Usia</h3>
        <ul>
          <li><strong>Usia 6–8 Bulan (Palmar Grasp):</strong> Bayi menggenggam dengan seluruh telapak tangan. Potong makanan <strong>memanjang (stik)</strong> seukuran jari telunjuk orang dewasa.</li>
          <li><strong>Usia 9–12 Bulan (Pincer Grasp):</strong> Bayi mulai menjepit dengan dua jari. Potong makanan menjadi <strong>dadu kecil</strong> sebesar ujung jari kelingking.</li>
        </ul>

        <h3>Food Chaining (Rantai Makanan)</h3>
        <p>Jika bayi suka ubi jalar bentuk stik (manis & empuk), perlahan ganti dengan wortel kukus stik (bentuk & tekstur sama, sedikit kurang manis), lalu ke kentang stik (gurih). Ini mencegah anak menjadi pemilih makanan (picky eater).</p>
      </>
    )
  },
  {
    id: 4,
    title: "BAB 4: 105 Resep MPASI BLW",
    excerpt: "Koleksi resep lengkap untuk eksplorasi rasa si kecil.",
    content: (
      <>
        <div className="bg-rose-100 p-5 rounded-2xl border border-rose-200 text-rose-800 text-center my-6">
          <ChefHat size={48} className="mx-auto mb-3 opacity-50" />
          <h3 className="text-xl font-bold mb-2 mt-0">Dapur BLW Terbuka!</h3>
          <p className="text-sm">Papa sudah menyusun dan memasukkan ke-105 resep ini ke dalam sistem aplikasi pintar kita. Mama bisa langsung mencarinya di tab <strong>Resep</strong> di bagian bawah layar.</p>
        </div>
        <p>Seluruh resep disusun tanpa penambahan garam, gula buatan, maupun madu, serta sangat mengutamakan tekstur dan bentuk yang aman agar Ayana terhindar dari risiko tersedak.</p>
        <p>Kategori yang tersedia: Karbohidrat, Protein Hewani, Nabati, Sayuran, Buah, Sarapan, Makan Siang, dan Makan Malam.</p>
      </>
    )
  },
  {
    id: 5,
    title: "BAB 5: Jadwal Menu 30 Hari",
    excerpt: "Panduan meal planner seimbang untuk satu bulan.",
    content: (
      <>
        <div className="bg-emerald-100 p-5 rounded-2xl border border-emerald-200 text-emerald-800 text-center my-6">
          <CalendarDays size={48} className="mx-auto mb-3 opacity-50" />
          <h3 className="text-xl font-bold mb-2 mt-0">Meal Planner Otomatis</h3>
          <p className="text-sm">Untuk memudahkan Mama, jadwal 30 hari ini sudah diintegrasikan ke dalam tab <strong>Jadwal</strong> di navigasi bawah. Mama bisa langsung melihat menu harian Ayana di sana!</p>
        </div>
        <p>Memiliki banyak resep terkadang justru membuat bingung. Meal planner ini dirancang khusus untuk memastikan rotasi gizi seimbang dan tekstur yang tidak membosankan.</p>
        <p><strong>Tips:</strong> Jadwal ini fleksibel. Jangan stres jika di Hari ke-15 Ayana tiba-tiba hanya ingin makan buah. Ulangi siklus, modifikasi bumbu, dan nikmati waktu di dapur tanpa tekanan!</p>
      </>
    )
  },
  {
    id: 6,
    title: "BAB 6: Panduan Mengatasi Tantangan",
    excerpt: "Trik P3K menghadapi GTM, picky eater, dan melempar makanan.",
    content: (
      <>
        <p>Menghadapi tantangan dalam BLW adalah hal normal. Ada saus di rambut anak, brokoli di lantai, dan kadang mulut terkunci rapat. Berikut panduan P3K Psikologis untuk Mama:</p>

        <h3>1. Mengatasi GTM (Gerakan Tutup Mulut)</h3>
        <ul>
          <li><strong>Evaluasi Jadwal:</strong> Mundurkan jadwal susu 2 jam sebelum makan agar Ayana benar-benar lapar.</li>
          <li><strong>Tumbuh Gigi:</strong> Jika gusi bengkak, berikan makanan berkuah dingin atau sayur empuk dingin.</li>
          <li><strong>Jangan Memaksa:</strong> Hentikan sesi makan setelah 15-20 menit jika ia menolak. Coba lagi nanti.</li>
        </ul>

        <h3>2. Bayi Bermain/Melempar Makanan</h3>
        <p>Bagi bayi, makanan adalah mainan sensorik untuk belajar gravitasi. Jika Ayana melempar makanan, katakan datar: <em>"Makanan untuk dimakan, bukan dilempar."</em> Jangan bereaksi heboh (ia akan mengira itu permainan). Berikan porsi sedikit demi sedikit di mejanya.</p>

        <h3>3. Kekhawatiran Porsi Sedikit</h3>
        <p>Fokus pada <strong>kualitas, bukan kuantitas</strong>. Jika Ayana hanya makan 3 gigitan, pastikan gigitan itu kaya kalori (mengandung butter, santan, alpukat). Pantau kurva KMS-nya, jangan bandingkan dengan anak lain.</p>
      </>
    )
  },
  {
    id: 7,
    title: "BAB 7: FAQ (Tanya Jawab Seputar BLW)",
    excerpt: "Jawaban atas kekhawatiran umum orang tua.",
    content: (
      <>
        <h3>1. Bayi saya belum punya gigi, apakah bisa BLW?</h3>
        <p>Bisa! Gusi bayi sangat keras dan kuat untuk menghancurkan daging empuk dan sayuran lunak.</p>

        <h3>2. Apakah BLW membuat anak menjadi lebih kurus?</h3>
        <p>Tidak, asalkan Mama menyediakan menu kaya kalori, lemak sehat, dan protein. Bayi BLW pandai meregulasi rasa lapar dan kenyangnya sendiri.</p>

        <h3>3. Pipis/Pup Ayana merah setelah makan buah naga. Bahayakah?</h3>
        <p>Sama sekali tidak. Warna merah itu adalah residu pigmen betasianin alami dari buah naga dan 100% aman.</p>

        <h3>4. Kapan anak boleh memegang sendoknya sendiri?</h3>
        <p>Biasanya akhir usia 11-18 bulan. Mama bisa melatihnya lebih awal dengan memberikan <em>pre-loaded spoon</em> (sendok yang sudah diisi makanan) untuk ia genggam sendiri.</p>
      </>
    )
  },
  {
    id: 8,
    title: "BAB 8: Penutup",
    excerpt: "Sebuah catatan cinta di meja makan khusus untuk Mama Ayana.",
    content: (
      <>
        <div className="bg-gradient-to-br from-pink-100 to-rose-50 p-6 rounded-3xl border border-rose-200 text-slate-800 my-4 shadow-sm relative overflow-hidden">
          <Heart size={100} className="absolute -bottom-5 -right-5 text-rose-200 opacity-50" />
          
          <h3 className="text-xl font-bold text-rose-500 mt-0 mb-4 font-serif">Teruntuk Istriku Tercinta, Mama Ayana</h3>
          
          <p className="mb-3 leading-relaxed">Buku "105 Resep MPASI BLW" ini, berikut dengan aplikasi yang ada di genggaman Mama sekarang, secara khusus Papa buat dan persembahkan untukmu.</p>
          
          <p className="mb-3 leading-relaxed">Papa tahu, menjadi seorang ibu baru adalah transisi yang luar biasa hebat, namun sekaligus menguras tenaga dan pikiran. Kekhawatiran mengenai <em>"Apakah nutrisinya terpenuhi?"</em> hingga <em>"Bagaimana kalau Ayana tersedak?"</em> adalah tanda betapa besarnya cintamu untuk putri kecil kita.</p>
          
          <p className="mb-3 leading-relaxed">Papa tidak ingin Mama merasa sendirian memikul beban kebingungan di fase MPASI ini. Aplikasi ini adalah bentuk dukungan nyata dari Papa. Mama tidak perlu lagi pusing mencari resep setiap malam saat lelah menyusui.</p>
          
          <h4 className="font-bold text-rose-600 mt-5 mb-2">Kita Adalah Tim di Meja Makan</h4>
          <p className="mb-3 leading-relaxed">Ketika Mama yang berkreasi meracik makanan dari aplikasi ini, biarkan Papa yang mengambil peran selanjutnya. Biarkan Papa yang memastikan postur duduk Ayana, dan yang terpenting, biarkan Papa yang mengambil alih tugas membersihkan kekacauan di lantai usai ia makan.</p>
          
          <p className="mb-3 leading-relaxed">Jalankanlah proses MPASI ini tanpa tekanan. Jangan merasa gagal saat ia menolak makan. Tugas kita hanyalah menyediakan makanan bergizi. Selebihnya, biarkan Ayana yang memimpin.</p>
          
          <p className="mb-0 font-bold italic text-rose-500 mt-6">Selamat merayakan kekacauan yang indah ini, Mama. Papa akan selalu ada di sini mendukung setiap langkah perjalanan ini.</p>
        </div>
      </>
    )
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null); // State untuk Bab Buku

  // Filter Logic
  const filteredRecipes = useMemo(() => {
    return recipesDB.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Semua" || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const renderHome = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Heart size={120} className="-mt-4 -mr-4" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Halo, Mama Ayana! 🌸</h2>
        <p className="text-pink-100 mb-4 text-sm leading-relaxed">
          Semangat menyiapkan nutrisi terbaik untuk Ayana hari ini. Papa selalu ada mendukung Mama. Jangan lupa tersenyum!
        </p>
        <button 
          onClick={() => setActiveTab('recipes')}
          className="bg-white text-rose-500 px-5 py-2 rounded-full font-semibold text-sm shadow flex items-center gap-2 hover:bg-rose-50 transition-colors"
        >
          <ChefHat size={16} /> Mulai Memasak
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div 
          onClick={() => setActiveTab('recipes')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-rose-100 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition"
        >
          <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center text-rose-500 mb-2">
            <BookOpen size={24} />
          </div>
          <span className="font-bold text-slate-800 text-lg">105</span>
          <span className="text-xs text-slate-500 font-medium">Resep Tersedia</span>
        </div>
        <div 
          onClick={() => setActiveTab('planner')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition"
        >
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center text-emerald-500 mb-2">
            <CalendarDays size={24} />
          </div>
          <span className="font-bold text-slate-800 text-lg">Hari Ini</span>
          <span className="text-xs text-slate-500 font-medium">Jadwal Menu</span>
        </div>
      </div>

      {/* Featured Recipe */}
      <div>
        <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Star className="text-amber-400" size={18} fill="currentColor" /> Rekomendasi Hari Ini
        </h3>
        <div 
          onClick={() => setActiveRecipe(recipesDB[0])}
          className="bg-white p-4 rounded-2xl shadow-sm border border-rose-100 flex gap-4 items-center cursor-pointer active:scale-95 transition-transform"
        >
          <div className="w-20 h-20 bg-rose-50 rounded-xl flex items-center justify-center text-rose-300">
            <ChefHat size={32} />
          </div>
          <div>
            <span className="text-xs font-bold text-rose-500 bg-rose-100 px-2 py-1 rounded-md">Karbohidrat</span>
            <h4 className="font-bold text-slate-800 mt-2">{recipesDB[0].title}</h4>
            <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1"><Clock size={12}/> {recipesDB[0].time}</span>
              <span>•</span>
              <span>{recipesDB[0].age}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecipes = () => (
    <div className="space-y-4 animate-in fade-in duration-300 h-full flex flex-col">
      <div className="sticky top-0 bg-rose-50 pt-2 pb-4 z-10 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari resep untuk Ayana..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-none rounded-xl py-3 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-rose-400 outline-none text-sm text-slate-700"
          />
        </div>
        
        {/* Categories (Horizontal Scroll) */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === cat 
                ? 'bg-rose-500 text-white shadow-md shadow-rose-200' 
                : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-24">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div 
              key={recipe.id}
              onClick={() => setActiveRecipe(recipe)}
              className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-rose-300 cursor-pointer active:scale-95 transition-all flex items-start gap-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-orange-50 rounded-xl flex-shrink-0 flex items-center justify-center">
                <ChefHat className="text-rose-400" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-sm">{recipe.title}</h4>
                <p className="text-xs text-rose-500 font-medium mb-1">{recipe.category}</p>
                <div className="flex gap-2 text-[10px] text-slate-500 font-medium">
                  <span className="bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1"><Clock size={10}/> {recipe.time}</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">{recipe.age}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-slate-400">
            <Search size={40} className="mx-auto mb-3 opacity-20" />
            <p>Resep tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderRecipeDetail = () => {
    if (!activeRecipe) return null;
    return (
      <div className="fixed inset-0 bg-rose-50 z-50 overflow-y-auto animate-in slide-in-from-bottom-full duration-300">
        <div className="sticky top-0 bg-white/80 backdrop-blur-md px-4 py-4 flex items-center justify-between shadow-sm z-10">
          <button 
            onClick={() => setActiveRecipe(null)}
            className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="font-bold text-slate-700 text-sm">Detail Resep</span>
          <div className="w-9"></div> {/* Spacer for centering */}
        </div>

        <div className="p-5 pb-24 max-w-lg mx-auto">
          <div className="w-full h-48 bg-gradient-to-br from-rose-300 to-pink-400 rounded-3xl mb-6 shadow-md flex items-center justify-center text-white">
            <ChefHat size={64} className="opacity-50" />
          </div>

          <span className="text-xs font-bold tracking-wider text-rose-500 uppercase">{activeRecipe.category}</span>
          <h1 className="text-2xl font-bold text-slate-800 mt-1 mb-4 leading-tight">{activeRecipe.title}</h1>
          
          <div className="flex gap-3 mb-6">
            <div className="flex-1 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Usia</p>
              <p className="text-sm font-bold text-slate-700">{activeRecipe.age}</p>
            </div>
            <div className="flex-1 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Waktu</p>
              <p className="text-sm font-bold text-slate-700">{activeRecipe.time}</p>
            </div>
            <div className="flex-1 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Tingkat</p>
              <p className="text-sm font-bold text-slate-700">{activeRecipe.difficulty}</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 mb-5">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-xs">1</span> 
              Bahan-bahan
            </h3>
            <ul className="space-y-2">
              {activeRecipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-1.5 flex-shrink-0"></div>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 mb-5">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center text-xs">2</span> 
              Cara Membuat
            </h3>
            <ol className="space-y-4">
              {activeRecipe.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-600">
                  <span className="font-bold text-emerald-400 mt-0.5">{idx + 1}.</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-blue-50 rounded-3xl p-5 border border-blue-100 mb-5">
            <h3 className="font-bold text-blue-800 mb-2 text-sm flex items-center gap-2">
              <Info size={16}/> Info Gizi & Tips BLW
            </h3>
            <p className="text-sm text-blue-900 mb-3 leading-relaxed"><strong>Gizi:</strong> {activeRecipe.nutrition}</p>
            <p className="text-sm text-blue-900 leading-relaxed"><strong>Penyajian:</strong> {activeRecipe.tips}</p>
          </div>
        </div>
      </div>
    );
  }

  const renderPlanner = () => (
    <div className="space-y-6 animate-in fade-in duration-300 pb-24">
      <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Jadwal Menu</h2>
        <p className="text-sm text-slate-500 mb-5">Ide padu padan nutrisi harian Ayana.</p>
        
        {/* Day 1 Mockup */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-rose-500">Hari 1</h3>
          </div>
          
          <div className="flex gap-3 items-center">
            <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Sarapan</div>
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">Pancake Oat Pisang</div>
          </div>
          
          <div className="flex gap-3 items-center">
            <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Snack</div>
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">Alpukat Balur Oat</div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Siang</div>
            <div className="flex-1 bg-rose-50 p-3 rounded-xl border border-rose-100 text-sm font-medium text-rose-700">Pasta Bolognese Bayi</div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Snack</div>
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">Brokoli Kukus Keju</div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Malam</div>
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">Risotto Nasi Merah Santan</div>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-amber-800 text-xs leading-relaxed">
        <strong>Catatan Papa:</strong> Jika Ayana sedang tumbuh gigi (GTM), coba tawarkan makanan berkuah dingin atau bertekstur sangat lembut ya Ma. Jangan dipaksa jika ia menolak. We got this! 💪
      </div>
    </div>
  );

  const renderTips = () => (
    <div className="space-y-4 animate-in fade-in duration-300 pb-24">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Panduan BLW Pintar</h2>
      
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-rose-500 mb-2 flex items-center gap-2">
           Gagging vs Choking
        </h3>
        <div className="space-y-3 text-sm text-slate-600">
          <p><strong>Gagging (Muntah Refleks) = AMAN.</strong><br/>Bayi batuk, wajah merah, mata berair, MASIH BERSUARA. Jangan panik, biarkan ia batukkan sendiri. Jangan beri minum saat ini.</p>
          <hr className="border-slate-100"/>
          <p><strong>Choking (Tersedak) = BAHAYA.</strong><br/>Bayi diam/tanpa suara, wajah pucat/biru. Segera angkat dan lakukan <em>Back Blows</em> (tepukan punggung).</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-emerald-500 mb-2 flex items-center gap-2">
           Aturan 3 Hari (Alergi)
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Kenalkan makanan alergen (telur, udang, kacang) satu per satu di siang hari. Berikan berturut-turut selama 3 hari. Jika tidak ada ruam merah atau diare, berarti aman!
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
           Makanan Terlarang &lt; 1 Tahun
        </h3>
        <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
          <li>Garam dan Gula buatan</li>
          <li>Madu (Risiko botulisme)</li>
          <li>Makanan bulat utuh (Anggur, tomat ceri)</li>
          <li>Sayur mentah keras (Wortel mentah, apel utuh)</li>
        </ul>
      </div>
    </div>
  );

  const renderBook = () => (
    <div className="space-y-4 animate-in fade-in duration-300 pb-24">
      <div className="bg-gradient-to-br from-rose-400 to-pink-500 p-6 rounded-3xl text-white shadow-md mb-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-20 transform translate-x-4 -translate-y-4">
          <BookText size={120} />
        </div>
        <BookText size={32} className="mb-3" />
        <h2 className="text-2xl font-bold mb-1">Buku Panduan</h2>
        <p className="text-pink-100 text-sm max-w-[80%] leading-relaxed mb-4">
          Buku saku digital 105 Resep MPASI BLW & Panduan Lengkap. Disusun penuh cinta khusus untuk Mama Ayana.
        </p>
        
        {/* Tombol Buka PDF Full Keren */}
        <a 
          href="/Buku_MPASI_Ayana.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-rose-500 px-4 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 hover:bg-rose-50 hover:-translate-y-1 transition-all relative z-10 w-full"
        >
          <BookOpen size={18} /> Baca Full E-Book (PDF) Lengkap
        </a>
      </div>

      <div className="flex items-center gap-2 mb-2 px-1">
         <Info size={16} className="text-rose-400" />
         <span className="text-xs font-bold text-slate-500">Rangkuman Cepat Per Bab</span>
      </div>

      <div className="space-y-3">
        {bookData.map(chapter => (
          <div 
            key={chapter.id}
            onClick={() => setActiveChapter(chapter)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-rose-300 active:scale-95 transition-all"
          >
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg">
              {chapter.id}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-sm">{chapter.title}</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">{chapter.excerpt}</p>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderChapterDetail = () => {
    if (!activeChapter) return null;
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto animate-in slide-in-from-bottom-full duration-300">
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center shadow-sm z-10 border-b border-slate-100">
          <button 
            onClick={() => setActiveChapter(null)}
            className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 mr-3 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="font-bold text-slate-700 text-sm truncate flex-1">{activeChapter.title}</span>
        </div>

        <div className="p-6 pb-24 max-w-lg mx-auto bg-white min-h-screen">
          <h1 className="text-2xl font-black text-slate-800 mb-6 pb-4 border-b border-rose-100 leading-tight">
            {activeChapter.title}
          </h1>
          
          {/* Styling pintar untuk konten JSX */}
          <div className="
            text-slate-700 text-[15px] leading-relaxed space-y-4 
            [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-rose-500 [&>h3]:mt-8 [&>h3]:mb-2 
            [&>h4]:font-bold [&>h4]:text-slate-800 [&>h4]:mt-4 
            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:mt-2
            [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:mt-2
            [&>li]:mb-2 [&>p]:mb-4
          ">
            {activeChapter.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50 font-sans sm:pb-0">
      {/* App Container (Mobile Constrained on Desktop) */}
      <div className="max-w-md mx-auto bg-rose-50 min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <header className="px-6 pt-8 pb-4 bg-rose-50 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black text-slate-800 tracking-tight">MPASI Ayana <span className="text-rose-500">.</span></h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">Made with ❤️ by Papa</p>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-500">
              <Heart size={20} fill="currentColor" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 px-5 overflow-y-auto pb-4 custom-scrollbar">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'recipes' && renderRecipes()}
          {activeTab === 'planner' && renderPlanner()}
          {activeTab === 'tips' && renderTips()}
          {activeTab === 'book' && renderBook()}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 px-4 py-4 flex justify-between items-center rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <div className={`${activeTab === 'home' ? 'bg-rose-100' : ''} p-2 rounded-xl`}>
              <Home size={22} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-bold">Beranda</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('recipes')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'recipes' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <div className={`${activeTab === 'recipes' ? 'bg-rose-100' : ''} p-2 rounded-xl`}>
              <BookOpen size={22} strokeWidth={activeTab === 'recipes' ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-bold">Resep</span>
          </button>

          <button 
            onClick={() => setActiveTab('planner')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'planner' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <div className={`${activeTab === 'planner' ? 'bg-rose-100' : ''} p-2 rounded-xl`}>
              <CalendarDays size={22} strokeWidth={activeTab === 'planner' ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-bold">Jadwal</span>
          </button>

          <button 
            onClick={() => setActiveTab('tips')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'tips' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <div className={`${activeTab === 'tips' ? 'bg-rose-100' : ''} p-2 rounded-xl`}>
              <Info size={22} strokeWidth={activeTab === 'tips' ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-bold">Panduan</span>
          </button>

          <button 
            onClick={() => setActiveTab('book')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'book' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <div className={`${activeTab === 'book' ? 'bg-rose-100' : ''} p-2 rounded-xl`}>
              <BookText size={22} strokeWidth={activeTab === 'book' ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-bold">Buku</span>
          </button>
        </nav>

        {/* Overlay Modals (Rendered outside normal flow) */}
        {renderRecipeDetail()}
        {renderChapterDetail()}

      </div>
    </div>
  );
}