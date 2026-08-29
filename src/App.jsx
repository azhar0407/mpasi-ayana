import React, { useEffect, useState, useMemo } from 'react';
import { Home, BookOpen, CalendarDays, Heart, Search, Clock, ChefHat, Info, ArrowLeft, Star, BookText, ChevronRight, Check, ShoppingCart } from 'lucide-react';

import { plannerDB, recipesDB, findRecipeByTitle, findRecipesByTitle, getAllergens } from './data.js';
import { readIds, toggleId, writeIds } from './storage.js';

const categories = ["Semua", "Karbohidrat", "Protein Hewani", "Protein Nabati", "Sayuran", "Buah", "Sarapan", "Makan Siang", "Makan Malam"];
const sourceLinks = [
  ['WHO: Complementary feeding', 'https://www.who.int/health-topics/complementary-feeding'],
  ['CDC: Memulai makanan padat', 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html'],
  ['CDC: Risiko tersedak', 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html'],
  ['AAP: Pengenalan alergen', 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/when-to-introduce-egg-peanut-butter-and-other-common-food-allergens-to-your-baby-food-allergy-prevention-tips.aspx'],
  ['Kemenkes: Buku KIA 2024', 'https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf'],
];

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
        <p><strong>Gagging</strong> dapat muncul saat bayi belajar tekstur, sedangkan <strong>choking</strong> adalah sumbatan jalan napas. Selalu dudukkan bayi tegak, awasi selama makan, dan sesuaikan bentuk serta tekstur dengan perkembangannya. Ikuti pelatihan P3K bayi untuk respons darurat yang benar.</p>
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
          <li><strong>Protein Hewani:</strong> Sumber protein dan zat besi, antara lain daging, ikan, hati, dan telur.</li>
          <li><strong>Protein Nabati:</strong> Sumber protein lain, seperti tahu, tempe, edamame, dan kacang-kacangan.</li>
          <li><strong>Lemak Sehat:</strong> Sangat krusial untuk otak bayi (EVOO, unsalted butter, alpukat, santan).</li>
        </ul>

        <h3>Makanan yang Harus Dihindari (&lt; 1 Tahun)</h3>
        <ul>
          <li><strong>Gula tambahan:</strong> Tidak direkomendasikan untuk bayi dan anak kecil.</li>
          <li><strong>Madu:</strong> Hindari sebelum usia 12 bulan karena risiko botulisme.</li>
          <li><strong>Bentuk berisiko:</strong> Hindari makanan kecil, bulat, keras, lengket, tulang, dan potongan besar. Sesuaikan bentuk, ukuran, dan tekstur dengan perkembangan bayi.</li>
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
        <p>Buah naga dapat mengubah warna urine atau feses sementara. Bila warna menetap, disertai darah, nyeri, lemas, atau gejala lain, hubungi tenaga kesehatan.</p>

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
  const [selectedAge, setSelectedAge] = useState('Semua');
  const [excludedAllergen, setExcludedAllergen] = useState('Tidak ada');
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);
  const [favorites, setFavorites] = useState(() => readIds('mpasi-favorit'));
  const [tried, setTried] = useState(() => readIds('mpasi-dicoba'));
  const [shoppingDay, setShoppingDay] = useState(1);

  useEffect(() => writeIds('mpasi-favorit', favorites), [favorites]);
  useEffect(() => writeIds('mpasi-dicoba', tried), [tried]);

  const filteredRecipes = useMemo(() => recipesDB.filter(recipe => {
    const minimumAge = Number.parseInt(recipe.age, 10);
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || recipe.category === selectedCategory;
    const matchesAge = selectedAge === 'Semua' || minimumAge <= Number(selectedAge);
    const matchesAllergen = excludedAllergen === 'Tidak ada' || !getAllergens(recipe).includes(excludedAllergen);
    return matchesSearch && matchesCategory && matchesAge && matchesAllergen;
  }), [searchQuery, selectedCategory, selectedAge, excludedAllergen]);

  const openRecipe = (title) => {
    const recipe = typeof title === 'string' ? findRecipeByTitle(title) : title;
    if (recipe) setActiveRecipe(recipe);
  };

  const selectedPlan = plannerDB[shoppingDay - 1];
  const shoppingRecipes = Object.values(selectedPlan.meals).flatMap(findRecipesByTitle);
  const shoppingList = [...new Set(shoppingRecipes.flatMap(({ ingredients }) => ingredients))];
  const mealLabel = { sarapan: 'Sarapan', snackPagi: 'Snack pagi', siang: 'Siang', snackSore: 'Snack sore', malam: 'Malam' };

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
          className="bg-white text-rose-500 px-5 py-2 rounded-full font-semibold text-sm shadow flex items-center gap-2 hover:bg-rose-50 transition-colors relative z-10"
        >
          <ChefHat size={16} /> Mulai Memasak
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => setActiveTab('recipes')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-rose-100 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition"
        >
          <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center text-rose-500 mb-2">
            <BookOpen size={24} />
          </div>
          <span className="font-bold text-slate-800 text-lg">{recipesDB.length}</span>
          <span className="text-xs text-slate-500 font-medium">Resep Tersedia</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('planner')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition"
        >
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center text-emerald-500 mb-2">
            <CalendarDays size={24} />
          </div>
          <span className="font-bold text-slate-800 text-lg">{plannerDB.length} Hari</span>
          <span className="text-xs text-slate-500 font-medium">Jadwal Menu</span>
        </button>
      </div>

      {/* Featured Recipe */}
      <div>
        <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Star className="text-amber-400" size={18} fill="currentColor" /> Rekomendasi Hari Ini
        </h3>
        <button
          type="button"
          onClick={() => openRecipe(recipesDB[0])}
          className="w-full text-left bg-white p-4 rounded-2xl shadow-sm border border-rose-100 flex gap-4 items-center cursor-pointer active:scale-95 transition-transform"
        >
          <div className="w-20 h-20 bg-rose-50 rounded-xl flex items-center justify-center text-rose-300">
            <ChefHat size={32} />
          </div>
          <div>
            <span className="text-xs font-bold text-rose-500 bg-rose-100 px-2 py-1 rounded-md">{recipesDB[0].category}</span>
            <h4 className="font-bold text-slate-800 mt-2">{recipesDB[0].title}</h4>
            <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1"><Clock size={12}/> {recipesDB[0].time}</span>
              <span>•</span>
              <span>{recipesDB[0].age}</span>
            </div>
          </div>
        </button>
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
        <div className="grid grid-cols-2 gap-2">
          <label className="text-xs font-semibold text-slate-600">
            Usia bayi
            <select value={selectedAge} onChange={(event) => setSelectedAge(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-2 text-sm">
              <option>Semua</option><option value="6">6+ bulan</option><option value="7">7+ bulan</option><option value="8">8+ bulan</option><option value="9">9+ bulan</option><option value="10">10+ bulan</option>
            </select>
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Hindari alergen
            <select value={excludedAllergen} onChange={(event) => setExcludedAllergen(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-2 text-sm">
              {['Tidak ada', 'Telur', 'Susu', 'Kacang', 'Ikan', 'Udang', 'Gluten', 'Kedelai'].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
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
            <button
              type="button"
              key={recipe.id}
              onClick={() => openRecipe(recipe)}
              className="w-full text-left bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-rose-300 cursor-pointer active:scale-95 transition-all flex items-start gap-4"
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
            </button>
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
            type="button"
            aria-label="Tutup detail resep"
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
          <h1 className="text-2xl font-bold text-slate-800 mt-1 mb-3 leading-tight">{activeRecipe.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4" aria-label="Alergen terdeteksi">
            {getAllergens(activeRecipe).map((allergen) => <span key={allergen} className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-800">{allergen}</span>)}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-5">
            <button type="button" aria-pressed={favorites.includes(activeRecipe.id)} onClick={() => setFavorites(toggleId(favorites, activeRecipe.id))} className="rounded-xl border border-rose-200 bg-white p-2 text-sm font-bold text-rose-600">
              <Heart size={16} className="inline mr-1" fill={favorites.includes(activeRecipe.id) ? 'currentColor' : 'none'} /> Favorit
            </button>
            <button type="button" aria-pressed={tried.includes(activeRecipe.id)} onClick={() => setTried(toggleId(tried, activeRecipe.id))} className="rounded-xl border border-emerald-200 bg-white p-2 text-sm font-bold text-emerald-700">
              <Check size={16} className="inline mr-1" /> {tried.includes(activeRecipe.id) ? 'Sudah dicoba' : 'Tandai dicoba'}
            </button>
          </div>
          
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
        <p className="text-sm text-slate-500 mb-5">Ketuk menu untuk membuka resep.</p>
        <div className="space-y-6 max-h-[55vh] overflow-y-auto pr-2">
          {plannerDB.map((dayPlan) => (
            <section key={dayPlan.day} className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-rose-500 border-b border-slate-200 pb-2">Hari {dayPlan.day}</h3>
              {Object.entries(dayPlan.meals).map(([meal, title]) => {
                const recipe = findRecipeByTitle(title);
                return <div key={meal} className="flex gap-3 items-center">
                  <span className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">{mealLabel[meal]}</span>
                  <button type="button" disabled={!recipe} onClick={() => openRecipe(title)} className="flex-1 text-left bg-white p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700 disabled:cursor-default">
                    {title}{recipe && <ChevronRight size={14} className="float-right mt-0.5 text-rose-400" />}
                  </button>
                </div>;
              })}
            </section>
          ))}
        </div>
      </div>

      <section className="bg-white p-5 rounded-3xl border border-emerald-100 shadow-sm">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800"><ShoppingCart size={20} /> Daftar Belanja</h2>
        <label className="mt-3 block text-xs font-bold text-slate-600">Pilih hari
          <select value={shoppingDay} onChange={(event) => setShoppingDay(Number(event.target.value))} className="mt-1 w-full rounded-xl border border-slate-200 p-2 text-sm">
            {plannerDB.map(({ day }) => <option key={day} value={day}>Hari {day}</option>)}
          </select>
        </label>
        <p className="mt-3 text-xs text-slate-500">Bahan digabung dari resep yang cocok. Periksa stok dan sesuaikan porsi.</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {shoppingList.map((ingredient) => <li key={ingredient} className="rounded-lg bg-emerald-50 px-3 py-2">□ {ingredient}</li>)}
        </ul>
      </section>
    </div>
  );

  const renderTips = () => (
    <div className="space-y-4 animate-in fade-in duration-300 pb-24">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Panduan MPASI Aman</h2>

      <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-rose-500 mb-2">Tersedak</h3>
        <p className="text-sm text-slate-600 leading-relaxed">Dudukkan bayi tegak, awasi terus, hindari gangguan, dan sesuaikan bentuk, ukuran, serta tekstur makanan. Hindari makanan kecil, bulat, keras, lengket, tulang, dan potongan besar. Ikuti pelatihan P3K/CPR bayi dari penyedia tepercaya; hubungi layanan darurat bila bayi tidak dapat bernapas atau bersuara.</p>
      </section>

      <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-emerald-600 mb-2">Pengenalan alergen</h3>
        <p className="text-sm text-slate-600 leading-relaxed">Saat bayi siap MPASI, kenalkan satu makanan baru dalam jumlah kecil dan bentuk yang sesuai usia. Jangan menunda alergen umum tanpa alasan medis. Untuk eksim berat atau reaksi makanan sebelumnya, konsultasikan waktu dan cara pengenalan dengan dokter. Hentikan makanan dan cari pertolongan bila muncul reaksi.</p>
      </section>

      <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-blue-600 mb-2">Prinsip utama</h3>
        <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
          <li>Mulai sekitar usia 6 bulan sesuai kesiapan perkembangan.</li>
          <li>Berikan makanan beragam, padat gizi, bersih, dan matang.</li>
          <li>Responsif terhadap sinyal lapar dan kenyang; jangan memaksa.</li>
          <li>Hindari madu sebelum 12 bulan dan gula tambahan.</li>
        </ul>
      </section>

      <section className="bg-slate-100 p-5 rounded-2xl">
        <h3 className="font-bold text-slate-700 mb-2">Sumber panduan</h3>
        <ul className="space-y-2 text-xs">
          {sourceLinks.map(([label, href]) => <li key={href}><a className="text-blue-700 underline" href={href} target="_blank" rel="noreferrer">{label}</a></li>)}
        </ul>
        <p className="mt-3 text-xs text-slate-500">Informasi umum, bukan diagnosis atau pengganti konsultasi dokter anak/ahli gizi.</p>
      </section>
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
        
        {/* Tombol Buka PDF Full */}
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
          <button
            type="button"
            key={chapter.id}
            onClick={() => setActiveChapter(chapter)}
            className="w-full text-left bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-rose-300 active:scale-95 transition-all"
          >
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg">
              {chapter.id}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-sm">{chapter.title}</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">{chapter.excerpt}</p>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
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
            type="button"
            aria-label="Tutup bab buku"
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
          
          <div className="text-slate-700 text-[15px] leading-relaxed space-y-4 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-rose-500 [&>h3]:mt-8 [&>h3]:mb-2 [&>h4]:font-bold [&>h4]:text-slate-800 [&>h4]:mt-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:mt-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:mt-2 [&>li]:mb-2 [&>p]:mb-4">
            {activeChapter.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50 font-sans sm:pb-0">
      <div className="max-w-md mx-auto bg-rose-50 min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        
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

        <main className="flex-1 px-5 overflow-y-auto pb-4 custom-scrollbar">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'recipes' && renderRecipes()}
          {activeTab === 'planner' && renderPlanner()}
          {activeTab === 'tips' && renderTips()}
          {activeTab === 'book' && renderBook()}
        </main>

        <nav aria-label="Navigasi utama" className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 px-4 py-4 flex justify-between items-center rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40">
          <button type="button" aria-current={activeTab === 'home' ? 'page' : undefined} onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'home' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><Home size={22} strokeWidth={activeTab === 'home' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Beranda</span>
          </button>
          
          <button type="button" aria-current={activeTab === 'recipes' ? 'page' : undefined} onClick={() => setActiveTab('recipes')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'recipes' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'recipes' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><BookOpen size={22} strokeWidth={activeTab === 'recipes' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Resep</span>
          </button>

          <button type="button" aria-current={activeTab === 'planner' ? 'page' : undefined} onClick={() => setActiveTab('planner')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'planner' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'planner' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><CalendarDays size={22} strokeWidth={activeTab === 'planner' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Jadwal</span>
          </button>

          <button type="button" aria-current={activeTab === 'tips' ? 'page' : undefined} onClick={() => setActiveTab('tips')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'tips' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'tips' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><Info size={22} strokeWidth={activeTab === 'tips' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Panduan</span>
          </button>

          <button type="button" aria-current={activeTab === 'book' ? 'page' : undefined} onClick={() => setActiveTab('book')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'book' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'book' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><BookText size={22} strokeWidth={activeTab === 'book' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Buku</span>
          </button>
        </nav>

        {renderRecipeDetail()}
        {renderChapterDetail()}

      </div>
    </div>
  );
}