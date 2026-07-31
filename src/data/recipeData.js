// src/data/recipeData.js

export const recipesDB = [
  // Masukkan ke-105 resep lengkap di sini (Bab 4)
  // Contoh format struktur data per resep:
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
    id: 4,
    title: "Pasta Fusilli Saus Keju",
    category: "Karbohidrat",
    age: "8+ Bulan",
    time: "15 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 genggam pasta fusilli (bentuk spiral)",
      "1 sdm unsalted butter (mentega tawar)",
      "2 sdm keju cheddar parut (rendah natrium)",
      "50 ml ASI atau susu UHT full cream"
    ],
    instructions: [
      "Rebus pasta fusilli hingga overcooked (sangat empuk). Tiriskan.",
      "Panaskan wajan kecil, lelehkan unsalted butter.",
      "Masukkan ASI/susu, aduk sebentar, lalu masukkan keju parut. Aduk hingga keju meleleh menjadi saus kental.",
      "Masukkan pasta fusilli ke dalam saus, aduk rata hingga tersalut sempurna. Matikan api."
    ],
    nutrition: "Karbohidrat dari pasta, serta kalsium dan lemak hewani dari mentega dan keju.",
    tips: "Biarkan bayi memegang fusilli satu per satu. Bentuk spiral sangat ideal melatih pincer grasp."
  },
  {
    id: 5,
    title: "Singkong Kukus Tabur Wijen",
    category: "Karbohidrat",
    age: "9+ Bulan",
    time: "30 Menit",
    difficulty: "Mudah",
    ingredients: [
      "150 gram singkong kualitas baik (empuk), kupas bersih",
      "1 sdt biji wijen putih sangrai"
    ],
    instructions: [
      "Cuci bersih singkong yang sudah dikupas, buang sumbu tengahnya.",
      "Potong-potong memanjang atau balok seukuran genggaman bayi.",
      "Kukus singkong selama 25-30 menit atau sampai benar-benar mekar dan empuk.",
      "Angkat, lalu taburi dengan biji wijen sangrai."
    ],
    nutrition: "Karbohidrat padat penambah energi, lemak sehat dari biji wijen.",
    tips: "Berikan dalam bentuk balok kecil. Pastikan singkong sangat empuk (memprul) tanpa serat kasar."
  },
  {
    id: 6,
    title: "Pancake Oat Pisang",
    category: "Karbohidrat",
    age: "6+ Bulan",
    time: "15 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 buah pisang ambon/cavendish matang",
      "3 sdm rolled oat (blender hingga menjadi tepung halus)",
      "1 butir telur ayam",
      "Minyak kelapa secukupnya untuk memanggang"
    ],
    instructions: [
      "Lumatkan pisang menggunakan garpu hingga hancur.",
      "Masukkan telur dan tepung oat ke dalam mangkuk berisi pisang. Aduk rata hingga kental.",
      "Panaskan wajan antilengket dengan sedikit minyak kelapa.",
      "Tuang 1 sdm adonan untuk membuat pancake mini. Balik jika kecokelatan. Masak hingga matang."
    ],
    nutrition: "Karbohidrat kompleks dari oat, kalium dari pisang, dan protein dari telur.",
    tips: "Potong pancake memanjang seperti stik agar mudah digenggam bayi 6 bulan."
  },
  {
    id: 7,
    title: "Perkedel Jagung Manis Cincang",
    category: "Karbohidrat",
    age: "9+ Bulan",
    time: "20 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1/2 buah jagung manis pipil",
      "1 sdm tepung terigu",
      "1 butir telur ayam puyuh",
      "1 lembar daun bawang, iris tipis",
      "Minyak goreng secukupnya"
    ],
    instructions: [
      "Cincang halus jagung manis pipil (atau chopper kasar agar kulit ari jagung hancur).",
      "Campurkan jagung cincang, tepung terigu, daun bawang, dan telur puyuh. Aduk rata.",
      "Panaskan minyak di wajan. Sendokkan adonan perkedel.",
      "Goreng hingga kuning keemasan dan matang ke bagian dalam. Tiriskan dengan tisu dapur."
    ],
    nutrition: "Karbohidrat dari jagung dan protein ganda dari telur puyuh.",
    tips: "Potong perkedel menjadi dua bagian agar tidak terlalu besar di mulut bayi."
  },
  {
    id: 8,
    title: "Roti Panggang Alpukat (Avocado Toast)",
    category: "Karbohidrat",
    age: "6+ Bulan",
    time: "5 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1 lembar roti tawar gandum kupas",
      "1/4 buah alpukat matang",
      "1 sdt perasan jeruk nipis (opsional)"
    ],
    instructions: [
      "Panggang roti tawar di atas wajan tanpa minyak hingga sedikit keras permukaannya.",
      "Lumatkan alpukat dengan garpu, beri sedikit perasan jeruk nipis agar tidak cepat hitam.",
      "Oleskan alpukat di atas roti panggang.",
      "Potong roti menjadi bentuk stik memanjang (lebar sekitar 2-3 cm)."
    ],
    nutrition: "Karbohidrat berserat dari roti gandum dan lemak tak jenuh ganda dari alpukat.",
    tips: "Roti yang dipanggang mencegah tekstur menjadi lengket/menggumpal di langit-langit mulut."
  },
  {
    id: 9,
    title: "Nasi Tim Kepal Sayur Lembut",
    category: "Karbohidrat",
    age: "9+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "2 sdm beras putih, cuci bersih",
      "200 ml kaldu ayam atau sapi asli",
      "1 sdm bayam cincang rebus"
    ],
    instructions: [
      "Masak beras dengan kaldu dalam panci kecil api lambat, aduk hingga air menyusut jadi nasi tim.",
      "Angkat, diamkan hingga hangat.",
      "Campurkan bayam cincang ke dalam nasi tim.",
      "Gunakan plastik bersih di tangan, kepal nasi tim menjadi bola-bola kecil seukuran ruas jempol."
    ],
    nutrition: "Karbohidrat menyehatkan lambung dan asupan cairan tambahan dari kaldu.",
    tips: "Biarkan bayi mengambil bola-bola menggunakan dua jarinya (pincer grasp)."
  },
  {
    id: 10,
    title: "Stik Talas Panggang",
    category: "Karbohidrat",
    age: "8+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram umbi talas (pilih yang empuk)",
      "1 sdt unsalted butter cair",
      "Air garam (HANYA untuk merendam talas, dibuang setelahnya)"
    ],
    instructions: [
      "Kupas talas, potong memanjang seperti stik.",
      "Rendam dalam air garam 15 menit untuk membuang getah. Cuci bersih dengan air mengalir berkali-kali.",
      "Rebus talas setengah matang, tiriskan.",
      "Olesi dengan butter cair, lalu panggang 15 menit hingga empuk sepenuhnya."
    ],
    nutrition: "Karbohidrat alternatif yang kaya akan zat besi alami dan serat.",
    tips: "Berikan 2 stik kepada anak. Pastikan getah benar-benar hilang agar tidak gatal."
  },
  {
    id: 11,
    title: "Muffin Kentang Brokoli",
    category: "Karbohidrat",
    age: "7+ Bulan",
    time: "30 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 buah kentang, kukus dan haluskan",
      "2 kuntum brokoli ukuran sedang, cincang halus",
      "1 butir telur ayam",
      "1 sdm keju parut"
    ],
    instructions: [
      "Campurkan kentang halus, brokoli cincang, telur, dan keju parut. Aduk rata.",
      "Siapkan cetakan muffin silikon. Tuang adonan hingga 3/4 penuh.",
      "Kukus selama 20 menit dengan api sedang hingga muffin memadat dan telur matang."
    ],
    nutrition: "Lengkap! Karbohidrat (kentang), protein (telur), kalsium (keju), dan vitamin (brokoli).",
    tips: "Potong muffin menjadi empat bagian memanjang jika bayi belum bisa menggenggam bulatan penuh."
  },
  {
    id: 12,
    title: "Puding Roti Tawar Lembut",
    category: "Karbohidrat",
    age: "8+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 lembar roti tawar gandum, sobek kecil",
      "50 ml santan kental atau ASI",
      "1 butir kuning telur ayam",
      "1 sdt ekstrak vanilla murni (opsional)"
    ],
    instructions: [
      "Kocok kuning telur bersama santan kental dan ekstrak vanilla.",
      "Tata sobekan roti tawar di dalam mangkuk tahan panas.",
      "Siramkan campuran telur ke atas roti, biarkan menyerap 5 menit.",
      "Kukus selama 15-20 menit hingga puding memadat."
    ],
    nutrition: "Kalori ekstra padat dari santan, protein dari kuning telur, dan karbohidrat.",
    tips: "Potong puding menjadi kubus balok. Sajikan dingin sangat nikmat meredakan gusi bengkak."
  },
  {
    id: 13,
    title: "Nasi Merah Kepal Wijen Kelapa",
    category: "Karbohidrat",
    age: "9+ Bulan",
    time: "15 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 mangkuk nasi merah hangat (masak dengan air lebih banyak agar lembek)",
      "1 sdm kelapa parut sangrai",
      "1/2 sdt biji wijen hitam sangrai"
    ],
    instructions: [
      "Haluskan sedikit nasi merah hangat dengan punggung sendok agar tekstur lebih lengket.",
      "Campurkan kelapa sangrai dan wijen hitam ke dalam nasi. Aduk rata.",
      "Kepal nasi membentuk bola-bola padat."
    ],
    nutrition: "Karbohidrat tinggi antioksidan dan serat untuk pencernaan.",
    tips: "Selalu gunakan nasi baru, nasi merah sisa akan sangat keras bila dipanaskan ulang."
  },
  {
    id: 14,
    title: "Makaroni Panggang Keju",
    category: "Karbohidrat",
    age: "9+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "2 genggam makaroni ukuran kecil",
      "1 butir telur ayam, kocok lepas",
      "2 sdm ASI atau susu UHT",
      "2 sdm keju mozzarella parut"
    ],
    instructions: [
      "Rebus makaroni hingga sangat empuk. Tiriskan.",
      "Campur makaroni, telur kocok, susu, dan setengah bagian keju mozzarella.",
      "Tuang ke wadah keramik kecil. Taburi sisa keju di atasnya.",
      "Panggang 180°C selama 20 menit hingga keju kecokelatan dan telur set."
    ],
    nutrition: "Karbohidrat dan protein padat dari susu, telur, dan keju untuk booster berat badan.",
    tips: "Potong balok agar bayi memegangnya dengan seluruh telapak tangan."
  },
  {
    id: 15,
    title: "Bola-bola Ubi Ungu Lembut",
    category: "Karbohidrat",
    age: "7+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 buah ubi ungu ukuran sedang, kupas dan kukus",
      "1 sdm mentega cair tanpa garam",
      "1 sdm tepung maizena"
    ],
    instructions: [
      "Lumatkan ubi ungu selagi panas hingga benar-benar halus tanpa serat.",
      "Campurkan mentega cair dan maizena. Uleni perlahan.",
      "Bentuk adonan menjadi bola-bola seukuran gundu besar.",
      "Kukus bola ubi selama 10 menit agar maizena matang."
    ],
    nutrition: "Tinggi antosianin (antioksidan) yang baik untuk imun tubuh bayi.",
    tips: "Berikan saat sudah bersuhu ruang agar bentuknya kokoh (tidak hancur) dipegang."
  },
  {
    id: 16,
    title: "Patty Daging Sapi Lembut",
    category: "Protein Hewani",
    age: "6+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "150 gram daging sapi giling berkualitas baik",
      "1 sdm bawang bombai, parut halus",
      "1 sdm breadcrumbs atau tepung roti",
      "1 sdt butter untuk menumis"
    ],
    instructions: [
      "Campur daging sapi giling, bawang bombai parut, dan breadcrumbs. Uleni rata.",
      "Bentuk adonan memanjang menyerupai sosis tebal (ukuran dua jari dewasa).",
      "Panaskan butter di wajan, masak patty dengan api sedang.",
      "Tutup wajan agar daging matang hingga ke dalam. Bolak-balik hingga matang (10 menit)."
    ],
    nutrition: "Sumber utama zat besi heme dan zinc untuk mencegah anemia.",
    tips: "Berikan 1 buah patty memanjang. Daging cincang hancur berantakan di mulut dengan aman."
  },
  {
    id: 17,
    title: "Hati Ayam Tumis Bawang Putih",
    category: "Protein Hewani",
    age: "6+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 buah hati ayam kampung, cuci bersih",
      "1 siung bawang putih, geprek",
      "1 sdt minyak kanola/kelapa",
      "Air jeruk nipis (untuk marinasi)"
    ],
    instructions: [
      "Lumuri hati ayam dengan jeruk nipis 5 menit, bilas bersih agar tidak amis.",
      "Rebus hati ayam 5 menit dalam air mendidih. Tiriskan.",
      "Panaskan minyak, tumis bawang putih geprek hingga harum.",
      "Masukkan hati ayam utuh, tumis bolak-balik hingga matang penuh."
    ],
    nutrition: "Juara bertahan penyumbang zat besi tertinggi untuk mencegah stunting.",
    tips: "Sajikan memanjang. Tekstur hati berpasir (pasty) dan hancur lumat sangat ramah gusi bayi."
  },
  {
    id: 18,
    title: "Telur Dadar Stik Sayuran",
    category: "Protein Hewani",
    age: "6+ Bulan",
    time: "10 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1 butir telur ayam",
      "1 sdm ASI atau susu UHT",
      "1 sdm wortel parut halus",
      "1 sdt mentega"
    ],
    instructions: [
      "Kocok telur bersama ASI/susu dan wortel parut.",
      "Panaskan wajan teflon, olesi mentega.",
      "Tuang kocokan telur, buat dadar tebal. Masak api kecil hingga matang di kedua sisi.",
      "Angkat dan potong dadar memanjang seukuran jari."
    ],
    nutrition: "Protein lengkap dan kolin dari kuning telur untuk perkembangan otak.",
    tips: "Susu membuat telur dadar berongga empuk (fluffy) dan tidak alot."
  },
  {
    id: 19,
    title: "Nugget Ayam Homemade Tanpa Pengawet",
    category: "Protein Hewani",
    age: "8+ Bulan",
    time: "45 Menit",
    difficulty: "Sedang",
    ingredients: [
      "200 gram dada ayam fillet, haluskan",
      "1 butir telur",
      "2 sdm tepung tapioka",
      "1 siung bawang putih, haluskan",
      "Tepung panir secukupnya"
    ],
    instructions: [
      "Campurkan ayam, telur, tapioka, dan bawang putih. Aduk rata.",
      "Tuang adonan ke loyang yang diolesi minyak, ketebalan 2 cm.",
      "Kukus 20 menit. Biarkan dingin, potong memanjang.",
      "Gulingkan ke tepung panir. Panggang/goreng sebentar hingga luar kuning."
    ],
    nutrition: "Protein bersih (tanpa MSG/pengawet) dari ayam dan telur.",
    tips: "Potongan balok panjang memudahkan bayi menggenggamnya."
  },
  {
    id: 20,
    title: "Ikan Salmon Panggang Lemon",
    category: "Protein Hewani",
    age: "7+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "100 gram fillet ikan salmon segar (pastikan CABUT SEMUA TULANG)",
      "1 sdt perasan lemon",
      "1 sdt unsalted butter",
      "Sejumput dill kering / peterseli"
    ],
    instructions: [
      "Lumuri salmon dengan lemon, diamkan 5 menit, bilas bersih air matang.",
      "Keringkan dengan tisu. Olesi butter, taburi dill.",
      "Panggang di oven/teflon 170°C selama 12-15 menit hingga daging mudah disuwir."
    ],
    nutrition: "Juara Omega-3 dan DHA esensial untuk kecerdasan.",
    tips: "Sajikan salmon selebar dua jari (finger size). Dagingnya flakey hancur di lidah."
  },
  {
    id: 21,
    title: "Bakso Daging Cincang (Bentuk Stik)",
    category: "Protein Hewani",
    age: "8+ Bulan",
    time: "20 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram daging sapi giling halus",
      "1 sdm tepung sagu/kanji",
      "1/2 sdt bawang putih bubuk",
      "Air kaldu mendidih"
    ],
    instructions: [
      "Campurkan daging giling, sagu, dan bawang putih bubuk. Uleni menyatu.",
      "Pelintir adonan di telapak tangan membentuk silinder memanjang seperti sosis kecil (JANGAN BULAT!).",
      "Masukkan ke dalam air kaldu mendidih. Rebus hingga mengapung."
    ],
    nutrition: "Tinggi protein dan zinc.",
    tips: "Bakso tanpa garam tidak sekenyal pasaran, lebih mudah digigit putus gusi bayi."
  },
  {
    id: 22,
    title: "Ayam Ungkep Bumbu Kuning Suwir",
    category: "Protein Hewani",
    age: "9+ Bulan",
    time: "45 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 potong paha ayam utuh",
      "Bumbu halus: 1 bawang putih, 1 bawang merah, 1 cm kunyit, 1 kemiri",
      "1 lembar daun jeruk & daun salam",
      "200 ml air"
    ],
    instructions: [
      "Masukkan paha ayam, bumbu halus, rempah daun, dan air ke panci.",
      "Ungkep api kecil 40 menit hingga air surut dan ayam SANGAT empuk.",
      "Angkat, suwir dagingnya dengan potongan besar searah serat."
    ],
    nutrition: "Protein ayam dan antioksidan alami penambah imun dari kunyit.",
    tips: "Biarkan bayi melatih pincer grasp dengan menjumput suwiran daging paha yang juicy."
  },
  {
    id: 23,
    title: "Omelet Keju Brokoli",
    category: "Protein Hewani",
    age: "8+ Bulan",
    time: "10 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 butir telur ayam, kocok lepas",
      "2 sdm keju cheddar parut",
      "2 sdm brokoli (bunganya saja), cincang halus rebus sebentar",
      "Minyak untuk mendadar"
    ],
    instructions: [
      "Campurkan telur, keju parut, dan brokoli rebus.",
      "Dadar di wajan antilengket hingga matang.",
      "Potong omelet menjadi bentuk dadu kecil atau segitiga kecil."
    ],
    nutrition: "Lemak hewani, kalsium, protein, dan serat hijau sekaligus.",
    tips: "Sajikan potongan dadu untuk melatih motorik menjepit benda kecil."
  },
  {
    id: 24,
    title: "Perkedel Hati Sapi",
    category: "Protein Hewani",
    age: "8+ Bulan",
    time: "30 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram kentang, kukus dan haluskan",
      "50 gram hati sapi (rebus 15 menit dengan jahe, cincang sangat halus)",
      "1 siung bawang putih, haluskan",
      "1 kuning telur ayam"
    ],
    instructions: [
      "Campur kentang tumbuk, hati sapi cincang, bawang putih, dan kuning telur. Uleni.",
      "Bentuk bulat pipih atau lonjong.",
      "Goreng dalam minyak panas hingga kecokelatan di luar, lumat di dalam."
    ],
    nutrition: "Mega-zat besi dari hati sapi, resep andalan pencegah anemia!",
    tips: "Belah perkedel menjadi dua sebelum diberikan pada bayi."
  },
  {
    id: 25,
    title: "Ikan Kembung Kukus Bumbu Kuning",
    category: "Protein Hewani",
    age: "9+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 ekor ikan kembung ukuran sedang (bersihkan)",
      "Bumbu halus: 1 bawang putih, 1 cm kunyit, 1 cm jahe",
      "1 batang serai kecil, geprek"
    ],
    instructions: [
      "Lumuri ikan dengan bumbu halus dan serai. Diamkan 10 menit.",
      "Kukus ikan 20 menit hingga matang.",
      "Biarkan dingin. Suwir daging besar-besar SANGAT HATI-HATI, pastikan bebas duri."
    ],
    nutrition: "Salmon versi lokal! Kandungan Omega-3 kembung menyaingi salmon impor.",
    tips: "Sajikan suwiran besar dagingnya di mangkuk. Teksturnya sangat lembut."
  },
  {
    id: 26,
    title: "Sate Daging Lilit Sereh",
    category: "Protein Hewani",
    age: "7+ Bulan",
    time: "25 Menit",
    difficulty: "Sedang",
    ingredients: [
      "150 gram daging ayam atau sapi giling",
      "2 sdm kelapa parut",
      "1 sdm santan kental",
      "4 batang serai tebal (potong ujungnya untuk tusuk)"
    ],
    instructions: [
      "Campurkan daging giling, kelapa parut, dan santan. Aduk rata.",
      "Lilitkan adonan padat ke ujung batang serai (sebagai tusuk yang aman).",
      "Kukus 15 menit, lalu panggang sebentar di teflon tanpa minyak hingga harum."
    ],
    nutrition: "Protein dan aromaterapi serai pembangkit selera makan.",
    tips: "Bayi akan memegang batang serainya (yang keras tidak tertelan) dan menggigiti daging lilitnya."
  },
  {
    id: 27,
    title: "Sup Telur Puyuh Sayuran",
    category: "Protein Hewani",
    age: "9+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "4 butir telur puyuh mentah",
      "200 ml kaldu sapi/ayam asli",
      "2 sdm wortel parut",
      "1 sdm buncis iris tipis"
    ],
    instructions: [
      "Didihkan kaldu. Masukkan sayuran, masak hingga empuk.",
      "Pecahkan telur puyuh langsung ke kaldu. Jangan diaduk agar utuh matang.",
      "Potong telur puyuh rebus belah empat (JANGAN BULAT UTUH)."
    ],
    nutrition: "Protein tinggi dan cairan rehidrasi alami.",
    tips: "Sajikan di mangkuk, bayi bisa mencomot potongan telur puyuh yang basah kaldu."
  },
  {
    id: 28,
    title: "Ayam Panggang Rosemary",
    category: "Protein Hewani",
    age: "8+ Bulan",
    time: "40 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 potong sayap ayam bagian tengah (wingette)",
      "1 sdt minyak zaitun EVOO",
      "1/2 sdt rosemary kering & bawang putih bubuk"
    ],
    instructions: [
      "Lumuri sayap ayam dengan EVOO dan rempah. Diamkan 15 menit.",
      "Panggang di oven 180°C selama 25-30 menit hingga matang ke dalam tulang."
    ],
    nutrition: "Protein tinggi. Mengoyak daging dari tulang melatih otot rahang.",
    tips: "Berikan utuh dengan tulang. Tulang besar aman dipegang, pantau agar tulang rawan kecil tidak tertelan."
  },
  {
    id: 29,
    title: "Ikan Teri Nasi Dadar Telur",
    category: "Protein Hewani",
    age: "8+ Bulan",
    time: "10 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 butir telur ayam",
      "1 sdm ikan teri nasi basah (teri segar putih, bukan teri asin)",
      "1 sdt daun bawang iris",
      "1 sdt minyak goreng"
    ],
    instructions: [
      "Kocok telur bersama teri basah bersih dan daun bawang.",
      "Panaskan wajan, dadar campuran hingga matang di kedua sisi.",
      "Potong memanjang dadar tersebut."
    ],
    nutrition: "Bom kalsium organik dari ikan teri kecil utuh beserta tulangnya (yang lumat).",
    tips: "Potong memanjang agar bayi bisa langsung menjepitnya."
  },
  {
    id: 30,
    title: "Sosis Ayam Homemade",
    category: "Protein Hewani",
    age: "8+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "200 gram daging ayam fillet, blender halus",
      "1 butir putih telur",
      "2 sdm maizena",
      "Bawang putih & pala bubuk"
    ],
    instructions: [
      "Aduk ayam giling, putih telur, maizena, dan bumbu hingga jadi pasta.",
      "Gulung adonan di atas daun pisang/plastik food grade bentuk permen.",
      "Kukus 30 menit. Buka bungkusnya saat dingin."
    ],
    nutrition: "Bebas nitrit dan MSG yang biasa ada di sosis pabrik.",
    tips: "BELAH SOSIS SECARA VERTIKAL. Jangan pernah menyajikan potongan koin bulat."
  },
  {
    id: 31,
    title: "Hati Ayam Kukus Jahe Lembut",
    category: "Protein Hewani",
    age: "6+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 pasang hati ayam segar",
      "1 lembar daun jeruk",
      "2 cm jahe, geprek",
      "1 siung bawang putih iris"
    ],
    instructions: [
      "Letakkan hati ayam di mangkuk tahan panas.",
      "Tumpuk dengan jahe, bawang, daun jeruk (tanpa air).",
      "Kukus 20 menit hingga matang.",
      "Buang rempahnya."
    ],
    nutrition: "Kaya zat besi heme murni, sangat ramah lambung bayi.",
    tips: "Berikan potongan sebesar jempol. Tekstur sangat melt in mouth (lumer)."
  },
  {
    id: 32,
    title: "Daging Sapi Bumbu Tomat",
    category: "Protein Hewani",
    age: "10+ Bulan",
    time: "1 Jam",
    difficulty: "Sedang",
    ingredients: [
      "100 gram daging sapi utuh, potong dadu kecil",
      "1 buah tomat matang, kupas kulit potong kasar",
      "1/2 bawang bombai",
      "1 sdm butter"
    ],
    instructions: [
      "Tumis bawang bombai dengan butter, masukkan daging.",
      "Masukkan tomat dan air kaldu.",
      "Slow cook 1 jam panci tertutup hingga daging luar biasa empuk dan saus tomat mengental."
    ],
    nutrition: "Tomat (Vit C) menyerap zat besi daging secara maksimal. Kombinasi sempurna!",
    tips: "Sajikan di mangkuk, bayi mencomot dadu daging yang licin."
  },
  {
    id: 33,
    title: "Udang Kukus Bawang Putih Lembut",
    category: "Protein Hewani",
    age: "7+ Bulan",
    time: "10 Menit",
    difficulty: "Mudah",
    ingredients: [
      "4 ekor udang sedang (kupas bersih kulit/kepala)",
      "1 siung bawang putih cincang",
      "1 sdt minyak kelapa"
    ],
    instructions: [
      "Campur udang kupas dengan bawang putih dan minyak.",
      "Kukus udang selama 5-7 menit saja (jangan overcook agar tidak alot karet).",
      "Angkat saat sudah oranye merata."
    ],
    nutrition: "Protein laut tinggi dan tembaga.",
    tips: "Belah vertikal memanjang jika udang berukuran besar untuk mencegah tersedak."
  },
  {
    id: 34,
    title: "Telur Rebus Belah Empat",
    category: "Protein Hewani",
    age: "6+ Bulan",
    time: "12 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1 butir telur ayam ras"
    ],
    instructions: [
      "Rebus telur 10-12 menit hingga kuning telur matang keras.",
      "Kupas kulit bersih-bersih.",
      "Belah telur menjadi 4 bagian memanjang (wedges)."
    ],
    nutrition: "Protein lengkap, tinggi Choline.",
    tips: "Bentuk wedges melengkung mudah dipegang, dibanding bulatan kuning utuh yang rawan tersedak."
  },
  {
    id: 35,
    title: "Bola Daging Ikan Tenggiri",
    category: "Protein Hewani",
    age: "9+ Bulan",
    time: "25 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram fillet ikan tenggiri, haluskan",
      "1 sdm tahu putih halus",
      "1 batang seledri iris",
      "Bawang merah halus"
    ],
    instructions: [
      "Aduk rata ikan, tahu, seledri, dan bawang merah (Tahu membuat bola empuk lumat).",
      "Bentuk bola pipih kecil.",
      "Kukus bola ikan 15-20 menit hingga matang padat."
    ],
    nutrition: "Asam lemak baik kardiovaskular bayi.",
    tips: "Belah bola ikan menjadi dua sebelum disajikan agar muat di mulut."
  }
{
    id: 36,
    title: "Tahu Sutra Siram Kaldu",
    category: "Protein Nabati",
    age: "6+ Bulan",
    time: "10 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "50 gram tahu sutra (tofu) potong balok tebal",
      "50 ml kaldu sapi/ayam buatan rumah",
      "1 sdt daun bawang iris sangat halus"
    ],
    instructions: [
      "Rebus kaldu hingga mendidih.",
      "Masukkan irisan daun bawang, matikan api.",
      "Tata tahu sutra mentah (yang sudah dibilas air matang) di piring.",
      "Siram tahu dengan kaldu panas."
    ],
    nutrition: "Protein nabati mudah dicerna lambung dan kalsium.",
    tips: "Tahu sangat lumer, hancur dengan sedotan bibir. Biarkan bayi meremasnya sebagai stimulasi taktil."
  },
  {
    id: 37,
    title: "Stik Tempe Panggang Gurih",
    category: "Protein Nabati",
    age: "6+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 papan tempe kedelai murni, potong memanjang (jari telunjuk)",
      "1 sdm Extra Virgin Olive Oil (EVOO)",
      "1 siung bawang putih, haluskan dengan 2 sdm air"
    ],
    instructions: [
      "Rendam stik tempe ke air bawang putih 10 menit agar gurih alami.",
      "Tiriskan tempe. Olesi permukaannya dengan EVOO.",
      "Panggang di teflon api kecil hingga harum (jangan terlalu kering)."
    ],
    nutrition: "Probiotik alami pencernaan dan tinggi protein nabati.",
    tips: "Berikan utuh. Bayi akan mengulum dan menggigiti butiran kedelainya."
  },
  {
    id: 38,
    title: "Bola Kacang Merah Halus",
    category: "Protein Nabati",
    age: "8+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "3 sdm kacang merah (rendam semalaman, rebus SANGAT empuk)",
      "1 sdm tepung beras",
      "1 sdm santan kental"
    ],
    instructions: [
      "Lumatkan kacang merah rebus hingga tak bersisa kulit liatnya.",
      "Campur dengan tepung beras dan santan, uleni.",
      "Bentuk bola-bola padat sebesar ruas jempol dewasa.",
      "Kukus 15 menit agar tepung beras matang."
    ],
    nutrition: "Kaya zat besi non-heme, serat tinggi, dan energi.",
    tips: "Berikan 2 bola. Teksturnya padat di luar, berpasir basah di dalam."
  },
  {
    id: 39,
    title: "Nugget Tahu Brokoli Panggang",
    category: "Protein Nabati",
    age: "8+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram tahu putih padat, haluskan peras airnya",
      "2 kuntum brokoli, cincang sangat halus",
      "1 butir telur puyuh",
      "2 sdm tepung terigu"
    ],
    instructions: [
      "Campurkan tahu, brokoli, telur puyuh, dan terigu.",
      "Masukkan ke loyang kecil, kukus 20 menit.",
      "Setelah dingin, potong stik tebal. Panggang sebentar di teflon agar tidak lengket."
    ],
    nutrition: "Kombinasi protein nabati dan vitamin C dari brokoli.",
    tips: "Seperti kue spons padat. Cocok untuk stok freezer."
  },
  {
    id: 40,
    title: "Edamame Tumbuk Lumat (Mash)",
    category: "Protein Nabati",
    age: "7+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 genggam edamame utuh",
      "1 sdt unsalted butter"
    ],
    instructions: [
      "Rebus edamame utuh hingga matang (10 menit).",
      "Keluarkan biji, KUPAS KULIT ARI TIPISNYA (rawan tersedak).",
      "Lumatkan biji edamame dengan garpu hingga hancur.",
      "Campurkan butter selagi hangat. Bentuk silinder kecil memanjang."
    ],
    nutrition: "Protein tinggi dan asam folat.",
    tips: "Jangan pernah memberikan kacang edamame utuh bulat kepada bayi."
  },
  {
    id: 41,
    title: "Burger Tempe Mini",
    category: "Protein Nabati",
    age: "9+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "100 gram tempe, kukus 10 menit",
      "1 butir telur puyuh",
      "1/2 sdt ketumbar bubuk",
      "Minyak kelapa untuk memanggang"
    ],
    instructions: [
      "Lumatkan tempe kukus selagi hangat.",
      "Campur telur puyuh dan ketumbar, aduk rata.",
      "Bentuk bulat pipih (patty) berukuran kecil.",
      "Panggang dengan minyak kelapa hingga kecokelatan."
    ],
    nutrition: "Energi padat, protein nabati, dan lemak sehat.",
    tips: "Potong patty menjadi separuh bulan agar mudah masuk mulut."
  },
  {
    id: 42,
    title: "Tahu Kuning Tumis Tomat",
    category: "Protein Nabati",
    age: "8+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 buah tahu kuning kualitas baik, potong dadu",
      "1/2 buah tomat matang, cincang",
      "1 siung bawang merah iris",
      "1 sdt minyak kanola"
    ],
    instructions: [
      "Panaskan minyak, tumis bawang merah wangi.",
      "Masukkan tomat cincang, masak hingga hancur berair.",
      "Masukkan dadu tahu kuning, aduk perlahan agar meresap."
    ],
    nutrition: "Vitamin C dan likopen tomat berpadu protein kedelai.",
    tips: "Melatih motorik halus (pincer grasp) mengambil dadu-dadu tahu berlapis saus."
  },
  {
    id: 43,
    title: "Kacang Hijau Kepal Lembut",
    category: "Protein Nabati",
    age: "9+ Bulan",
    time: "45 Menit",
    difficulty: "Sedang",
    ingredients: [
      "3 sdm kacang hijau, rebus merekah SANGAT empuk",
      "1 sdm kelapa parut sangrai",
      "1 sdt santan kental matang"
    ],
    instructions: [
      "Tiriskan kacang hijau rebus, lumatkan sedikit dengan sendok.",
      "Campur kacang hijau dengan kelapa sangrai dan santan.",
      "Kepal padat menjadi bola-bola."
    ],
    nutrition: "Tinggi Vitamin B kompleks dan serat nabati.",
    tips: "Bila kurang padat, tambahkan sejumput tepung beras matang agar bisa dikepal."
  },
  {
    id: 44,
    title: "Tempe Bacem Air Kelapa",
    category: "Protein Nabati",
    age: "7+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram tempe, potong balok tebal",
      "200 ml air kelapa murni (pemanis alami)",
      "1 siung bawang putih & merah, 1 sdt ketumbar",
      "1 daun salam & lengkuas geprek"
    ],
    instructions: [
      "Masukkan tempe, air kelapa, dan semua bumbu ke wajan.",
      "Masak api kecil hingga air kelapa menyusut habis meresap.",
      "Panggang sebentar di teflon (opsional)."
    ],
    nutrition: "Karbohidrat elektrolit manis alami dan protein.",
    tips: "Sajikan stik tempe sangat empuk dengan bumbu meresap."
  },
  {
    id: 45,
    title: "Orak-arik Tahu Telur Puyuh",
    category: "Protein Nabati",
    age: "8+ Bulan",
    time: "10 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "50 gram tahu putih padat, hancurkan kasar",
      "2 butir telur puyuh",
      "1 sdt minyak kelapa & sedikit seledri cincang"
    ],
    instructions: [
      "Panaskan minyak kelapa.",
      "Tumis tahu putih hancur sebentar agar air menyusut.",
      "Pecahkan telur puyuh langsung, aduk orak-arik hingga matang kering."
    ],
    nutrition: "Dobel protein mengenyangkan.",
    tips: "Biarkan bayi berlatih memunguti remahan kasar berukuran dadu."
  },
  {
    id: 46,
    title: "Rolade Tahu Bayam",
    category: "Protein Nabati",
    age: "9+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram tahu putih, haluskan",
      "1 butir telur ayam (bagi dua)",
      "5 lembar daun bayam cincang",
      "1 sdm tepung tapioka"
    ],
    instructions: [
      "Buat kulit dadar tipis dari separuh kocokan telur.",
      "Campur tahu, sisa telur, bayam, dan tapioka.",
      "Bentangkan dadar, isi tahu, gulung ketat. Bungkus aluminium foil.",
      "Kukus 20 menit, iris tebal saat dingin."
    ],
    nutrition: "Lengkap lemak, protein, dan zat besi serat bayam.",
    tips: "Potong irisan bundar menjadi dua bagian (semi-circle)."
  },
  {
    id: 47,
    title: "Sate Tahu Manis (Kecap Kurma)",
    category: "Protein Nabati",
    age: "10+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 buah tahu putih padat, potong dadu, kukus 5 menit",
      "1 sdm pasta kurma (kurma lumat diseduh air)",
      "1 sdt ketumbar bubuk"
    ],
    instructions: [
      "Campurkan pasta kurma dan ketumbar bubuk (pengganti kecap manis).",
      "Lumuri tahu kukus dengan saus ini.",
      "Panggang di teflon hingga harum karamel."
    ],
    nutrition: "Kalium dari kurma dan protein tahu.",
    tips: "Tanpa tusuk sate. Sajikan dadu tahu lengket manis langsung di piring."
  },
  {
    id: 48,
    title: "Perkedel Tembus (Tempe Rebus) Lumat",
    category: "Protein Nabati",
    age: "6+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "100 gram tempe potong kasar",
      "1 siung bawang putih geprek",
      "1 sdm santan kental matang"
    ],
    instructions: [
      "Rebus tempe dan bawang putih 15 menit agar langu hilang & empuk. Tiriskan.",
      "Selagi hangat, ulek tempe hingga hancur seperti pasta.",
      "Tambah santan, aduk rata. Bentuk memanjang seperti sosis."
    ],
    nutrition: "Kalori ekstra santan padu dengan protein kedelai.",
    tips: "Sangat lumat tanpa perlu digigit paksa oleh gusi."
  },
  {
    id: 49,
    title: "Muffin Tempe Manis",
    category: "Protein Nabati",
    age: "8+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "50 gram tempe haluskan",
      "2 sdm jagung manis rebus chopper kasar",
      "1 butir telur & 1 sdm butter cair"
    ],
    instructions: [
      "Campur tempe, jagung, telur, dan butter cair.",
      "Tuang ke cetakan muffin silikon.",
      "Kukus api sedang selama 25 menit."
    ],
    nutrition: "Karbohidrat berserat dari jagung padu dengan protein.",
    tips: "Bentuk bolu kukus berserat. Belah memanjang jika terlalu besar."
  },
  {
    id: 50,
    title: "Krim Edamame Alpukat (Cocolan)",
    category: "Protein Nabati",
    age: "6+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 sdm edamame rebus (buang kulit ari)",
      "2 sdm alpukat matang",
      "1 sdm ASI / susu cair"
    ],
    instructions: [
      "Blender/saring halus edamame dan alpukat.",
      "Tambahkan susu hingga kental seperti selai/hummus."
    ],
    nutrition: "Lemak baik maksimal dan protein nabati penambah berat badan.",
    tips: "Gunakan krim lumer ini sebagai olesan/cocolan untuk stik kentang rebus."
  },
  {
    id: 51,
    title: "Brokoli Kukus Keju Lumer",
    category: "Sayuran",
    age: "6+ Bulan",
    time: "10 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "2 kuntum brokoli (sertakan batang, kupas serat keras luarnya)",
      "1 sdt keju quick melt parut"
    ],
    instructions: [
      "Cuci bersih brokoli. Kukus 7-9 menit (jangan overcook/hancur).",
      "Taburi keju parut panas-panas hingga meleleh."
    ],
    nutrition: "Kalsium ganda, tinggi zat besi non-heme.",
    tips: "Tangkai kokoh sebagai pegangan meredakan gusi gatal, bunganya lumat dimakan."
  },
  {
    id: 52,
    title: "Stik Wortel Panggang Rosemary",
    category: "Sayuran",
    age: "6+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 buah wortel besar ukuran sedang",
      "1 sdt EVOO",
      "Sejumput rosemary kering"
    ],
    instructions: [
      "Potong wortel memanjang stik jari dewasa. Kukus setengah matang (10 menit).",
      "Lumuri EVOO dan rosemary.",
      "Panggang oven/teflon 15 menit hingga mengerut karamelisasi empuk."
    ],
    nutrition: "Vitamin A larut lemak (diserap maksimal berkat EVOO).",
    tips: "AWAS: Wortel mentah dilarang untuk bayi. Pastikan dipanggang hingga lumat gusi."
  },
  {
    id: 53,
    title: "Kembang Kol Panggang Mentega",
    category: "Sayuran",
    age: "7+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 kuntum kembang kol besar",
      "1 sdt unsalted butter"
    ],
    instructions: [
      "Rebus cepat (blanching) kembang kol 5 menit. Tiriskan.",
      "Olesi butter ke seluruh rongga.",
      "Panggang teflon api kecil hingga muncul bercak kecokelatan empuk."
    ],
    nutrition: "Sumber Vitamin K, Kolin, dan antioksidan.",
    tips: "Berikan untaian utuh, biarkan bayi memegang tangkainya."
  },
  {
    id: 54,
    title: "Labu Siam Rebus (Potong Bergerigi)",
    category: "Sayuran",
    age: "6+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 buah labu siam kecil"
    ],
    instructions: [
      "Belah labu, gosok agar getah putih keluar. Cuci bersih.",
      "Kupas kulit, potong memanjang bergerigi (crinkle cut).",
      "Rebus 15 menit hingga empuk (tes tusuk garpu tak melawan)."
    ],
    nutrition: "Folat (Vit B9) dan kaya air rehidrasi pencernaan.",
    tips: "Potongan bergerigi mencegah stik berair ini meluncur jatuh dari tangan bayi."
  },
  {
    id: 55,
    title: "Buncis Tumis Bawang Putih",
    category: "Sayuran",
    age: "7+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "5 batang buncis muda besar (buang ujung seratnya)",
      "1 siung bawang putih geprek",
      "1 sdt butter"
    ],
    instructions: [
      "Potong buncis seukuran dua telunjuk.",
      "Rebus lunak (7 menit), tiriskan.",
      "Tumis butter, buncis, dan bawang putih sebentar untuk aroma."
    ],
    nutrition: "Serat larut ganda dan Vitamin K.",
    tips: "Bayi akan mengisap dan mengoyak buncis perlahan."
  },
  {
    id: 56,
    title: "Bola Bayam Tahu Sutra",
    category: "Sayuran",
    age: "8+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "5 lembar daun bayam segar (rebus layu, cincang)",
      "30 gram tahu sutra",
      "1 sdm tepung beras"
    ],
    instructions: [
      "Hancurkan tahu sutra, campur bayam cincang dan tepung beras perlahan.",
      "Sendokkan adonan (bentuk bulat/oval) langsung ke alas daun pisang kukusan.",
      "Kukus 10 menit."
    ],
    nutrition: "Zat besi ganda dan protein kedelai.",
    tips: "Bola ini sangat rapuh basah, bayi akan meremas sedikit lalu memakannya."
  },
  {
    id: 57,
    title: "Zucchini Panggang",
    category: "Sayuran",
    age: "6+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 buah Zucchini (Timun Jepang)",
      "1 sdt Olive Oil & sejumput keju parut"
    ],
    instructions: [
      "Potong memanjang stik tebal (jangan kupas kulit hijaunya).",
      "Lumuri Olive Oil.",
      "Panggang oven/teflon 12 menit hingga daging dalam transparan empuk.",
      "Taburi keju."
    ],
    nutrition: "Antioksidan lutein untuk mata.",
    tips: "Kulit hijau lembut menahan daging zucchini yang lumer hancur."
  },
  {
    id: 58,
    title: "Tomat Panggang Lumer (Kupas)",
    category: "Sayuran",
    age: "8+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 buah tomat merah ukuran sedang-besar",
      "1 sdt butter cair"
    ],
    instructions: [
      "Sayat silang bawah tomat, rebus 2 menit. Siram air dingin, KUPAS KULIT TIPISNYA.",
      "Potong 4-6 belahan (wedges), buang tangkai keras.",
      "Olesi butter, panggang teflon api kecil hingga layu wangi."
    ],
    nutrition: "Likopen aktif (antioksidan) dipicu oleh pemanasan.",
    tips: "Kulit tipis tomat rawan tersedak, wajib dikupas. Bayi akan menyedot daging tomatnya."
  },
  {
    id: 59,
    title: "Terong Ungu Panggang Lembut",
    category: "Sayuran",
    age: "7+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 buah terong ungu",
      "1 sdt EVOO",
      "1 siung bawang merah halus"
    ],
    instructions: [
      "Potong memanjang tebal. Kupas kulit ungu secara selang-seling.",
      "Lumuri bawang merah halus dan EVOO.",
      "Panggang 15 menit hingga kempes dan amat lunak."
    ],
    nutrition: "Nasunin (antioksidan pelindung sel otak pada sisa kulit ungu).",
    tips: "Teksturnya seperti spons basah dan empuk."
  },
  {
    id: 60,
    title: "Stik Oyong Kukus Kuah Kaldu",
    category: "Sayuran",
    age: "6+ Bulan",
    time: "10 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 buah oyong muda",
      "50 ml kaldu ayam"
    ],
    instructions: [
      "Kupas rusuk keras tajam di kulit luar oyong hingga bersih.",
      "Potong stik tebal. Kukus/rebus dalam kaldu 5 menit hingga layu transparan."
    ],
    nutrition: "Sayur penyejuk perut kaya cairan.",
    tips: "Berikan saat hangat karena oyong menyimpan panas di dalam daging berairnya."
  },
  {
    id: 61,
    title: "Sawi Putih Gulung Tahu",
    category: "Sayuran",
    age: "9+ Bulan",
    time: "20 Menit",
    difficulty: "Sedang",
    ingredients: [
      "4 lembar ujung daun sawi putih (bagian lemas)",
      "50 gram tahu putih halus",
      "1 butir telur puyuh"
    ],
    instructions: [
      "Rebus daun sawi 2 menit hingga sangat lemas.",
      "Campur tahu halus dan telur puyuh.",
      "Isi daun sawi dengan adonan, gulung rapi seperti risoles.",
      "Kukus 15 menit."
    ],
    nutrition: "Kalsium, protein ganda, dan serat daun halus.",
    tips: "Potong membelah gulungan, pastikan serat daun putus terpotong agar mudah dikunyah."
  },
  {
    id: 62,
    title: "Jagung Muda (Putren) Rebus",
    category: "Sayuran",
    age: "7+ Bulan",
    time: "15 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "3 buah jagung muda/putren berukuran tebal"
    ],
    instructions: [
      "Cuci bersih putren.",
      "Rebus selama 15-20 menit hingga benar-benar empuk ke tulang tengahnya."
    ],
    nutrition: "Folat dan Vitamin B kompleks.",
    tips: "Teether (mainan gigitan) alami yang sempurna! Belah dua memanjang jika bentuknya terlalu besar."
  },
  {
    id: 63,
    title: "Paprika Merah Panggang (Kupas)",
    category: "Sayuran",
    age: "9+ Bulan",
    time: "25 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1/2 buah paprika merah matang",
      "1 sdt EVOO"
    ],
    instructions: [
      "Potong paprika stik tebal, buang biji dan membran pedas dalam.",
      "Olesi EVOO, panggang 20 menit hingga kulit menghitam keriput.",
      "SETELAH HANGAT, KUPAS BUANG lapisan kulit luar setipis plastiknya."
    ],
    nutrition: "Juara Vitamin C pembantu serapan zat besi daging.",
    tips: "Luar biasa lumer, manis tanpa rasa pedas setelah dipanggang."
  },
  {
    id: 64,
    title: "Labu Kuning (Waluh) Panggang",
    category: "Sayuran",
    age: "6+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 potong labu kuning, kupas tebal kulit kerasnya",
      "1 sdt butter"
    ],
    instructions: [
      "Potong waluh bentuk bulan sabit/jari.",
      "Olesi butter, panggang 20 menit hingga lumat wangi."
    ],
    nutrition: "Tinggi beta-karoten untuk imunitas.",
    tips: "Dipanggang membuat waluh lebih kokoh digenggam dibanding dikukus berair."
  },
  {
    id: 65,
    title: "Asparagus Kukus Ujung Lunak",
    category: "Sayuran",
    age: "8+ Bulan",
    time: "10 Menit",
    difficulty: "Mudah",
    ingredients: [
      "3 batang asparagus tebal",
      "1 sdt perasan lemon manis"
    ],
    instructions: [
      "Patahkan buang 1/3 bagian bawah batang (berkayu dan keras). Gunakan pucuk atas.",
      "Kukus 7-10 menit. Lumuri lemon tipis."
    ],
    nutrition: "Tinggi prebiotik usus dan Vitamin K.",
    tips: "Berikan utuh, melatih cengkraman kuat jari bayi."
  },
  {
    id: 66,
    title: "Pisang Ambon Stik Terkelupas",
    category: "Buah",
    age: "6+ Bulan",
    time: "Instan",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1 buah pisang ambon/cavendish matang (jangan mentah keras)"
    ],
    instructions: [
      "Belah pisang menjadi dua memanjang.",
      "Kupas setengah kulit pisang, TAPI biarkan pangkal kulit menempel.",
      "Potong sedikit dagingnya agar pas seukuran jari."
    ],
    nutrition: "Energi instan, kalium tinggi.",
    tips: "Kulit di bawah berfungsi sebagai pegangan (handle) agar pisang tidak merosot."
  },
  {
    id: 67,
    title: "Alpukat Balur Oat Sangrai",
    category: "Buah",
    age: "6+ Bulan",
    time: "5 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1/4 buah alpukat mentega matang",
      "1 sdm oat instan atau tepung kelapa sangrai"
    ],
    instructions: [
      "Potong alpukat jadi stik tebal 2 cm.",
      "Gulingkan alpukat licin ke bubuk oat sangrai."
    ],
    nutrition: "Lemak otak utama (Brain Booster).",
    tips: "Baluran mengunci alpukat agar mudah dipegang dan tidak hancur berantakan."
  },
  {
    id: 68,
    title: "Apel Kukus Kayu Manis",
    category: "Buah",
    age: "6+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 buah apel manis, kupas kulit",
      "Sejumput kayu manis bubuk"
    ],
    instructions: [
      "Potong apel jadi belahan panjang (wedges), buang inti biji.",
      "WAJIB KUKUS: Kukus apel 15 menit hingga empuk ditekan garpu.",
      "Taburi kayu manis."
    ],
    nutrition: "Serat larut pektin menyehatkan lambung.",
    tips: "Apel mentah adalah penyebab tersedak No.1! Selalu kukus hingga lumer."
  },
  {
    id: 69,
    title: "Mangga Manis Potong Stik",
    category: "Buah",
    age: "7+ Bulan",
    time: "Instan",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1/2 buah mangga harum manis matang sempurna"
    ],
    instructions: [
      "Potong mangga jadi stik tebal atau potong dadu model 'landak' (menempel kulit).",
      "Jika licin, balurkan sedikit bubuk biji chia merah."
    ],
    nutrition: "Beta-karoten pelancar BAB bayi.",
    tips: "Getah mangga sering memicu ruam kemerahan sementara di mulut. Basuh usai makan."
  },
  {
    id: 70,
    title: "Pepaya Stik Segar",
    category: "Buah",
    age: "6+ Bulan",
    time: "Instan",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1 potong pepaya matang, kupas dan buang biji"
    ],
    instructions: [
      "Potong memanjang bergerigi (crinkle cut) karena pepaya matang sangat berair licin.",
      "Jangan berikan pepaya mengkal keras."
    ],
    nutrition: "Enzim papain pelancar pencernaan (obat sembelit).",
    tips: "Lumer berair manis di lidah bayi."
  }
{
    id: 71,
    title: "Buah Naga Merah Iris (Balok)",
    category: "Buah",
    age: "7+ Bulan",
    time: "Instan",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1/4 buah naga merah cerah, kupas kulit"
    ],
    instructions: [
      "Potong daging buah naga menjadi balok tebal atau memanjang stik.",
      "Jangan dipotong terlalu tipis karena buah naga sangat rapuh."
    ],
    nutrition: "Hidrasi maksimal dan kaya kalsium alami.",
    tips: "Urine/feses bayi bisa berwarna kemerahan esok hari, ini wajar karena pigmen alami. Gunakan smock bib."
  },
  {
    id: 72,
    title: "Semangka Segitiga (Tanpa Biji)",
    category: "Buah",
    age: "6+ Bulan",
    time: "Instan",
    difficulty: "Mudah",
    ingredients: [
      "1 potong panjang semangka merah tanpa biji (seedless)"
    ],
    instructions: [
      "Potong semangka dengan menyisakan kulit luar hijaunya sebagai pegangan anti-slip.",
      "Buang manual seluruh biji hitam/putih keras."
    ],
    nutrition: "92% air, rehidrasi alami.",
    tips: "Semangka dingin dari kulkas adalah pereda nyeri gusi alami saat bayi tumbuh gigi."
  },
  {
    id: 73,
    title: "Pir Panggang Lumer",
    category: "Buah",
    age: "6+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1/2 buah pir (century/kuning panjang), kupas kulit",
      "Sedikit minyak kelapa"
    ],
    instructions: [
      "Potong pir jadi belahan memanjang (buang inti biji).",
      "Kukus atau panggang 15 menit di suhu 180°C hingga lunak tembus."
    ],
    nutrition: "Vitamin C dan kalium tinggi.",
    tips: "Pir mentah renyah berisiko tersedak. Wajib dipanggang/dikukus hingga lumer."
  },
  {
    id: 74,
    title: "Melon Jingga Iris Tebal",
    category: "Buah",
    age: "8+ Bulan",
    time: "Instan",
    difficulty: "Mudah",
    ingredients: [
      "1 irisan panjang melon jingga (cantaloupe) matang empuk"
    ],
    instructions: [
      "Iris memanjang tebal. Kupas habis kulit kerasnya.",
      "Pastikan sudah beraroma wangi manis tajam."
    ],
    nutrition: "Beta-karoten penambah daya tahan tubuh.",
    tips: "Jika terlalu licin, balur dengan sedikit kelapa kering sangrai."
  },
  {
    id: 75,
    title: "Jeruk Manis Keprok Kupas Membran",
    category: "Buah",
    age: "9+ Bulan",
    time: "15 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 buah jeruk manis lokal kualitas baik"
    ],
    instructions: [
      "Kupas kulit. Pisahkan per keping.",
      "WAJIB: Kupas paksa lapisan membran/selaput transparan pembungkus jeruk, buang biji.",
      "Sisihkan bulir-bulir murninya saja."
    ],
    nutrition: "Booster imunitas, Vitamin C tinggi.",
    tips: "Selaput putih jeruk tidak hancur dikunyah dan rawan membuat bayi tersedak. Wajib dikupas!"
  },
  {
    id: 76,
    title: "Roti Panggang Telur (French Toast)",
    category: "Sarapan",
    age: "6+ Bulan",
    time: "10 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 lembar roti tawar gandum",
      "1 butir telur ayam",
      "2 sdm ASI / susu UHT",
      "1 sdt unsalted butter"
    ],
    instructions: [
      "Potong roti tawar menjadi stik tebal.",
      "Celupkan ke kocokan telur dan susu hingga meresap.",
      "Panggang dengan butter di teflon api kecil hingga kecokelatan."
    ],
    nutrition: "Karbohidrat berpadu protein telur, mengenyangkan lebih lama.",
    tips: "Bagian luar kokoh tertahan telur, dalam roti basah lumer."
  },
  {
    id: 77,
    title: "Stik Oatmeal Apel Panggang",
    category: "Sarapan",
    age: "7+ Bulan",
    time: "25 Menit",
    difficulty: "Sedang",
    ingredients: [
      "4 sdm rolled oat (oat utuh)",
      "1/2 buah apel manis, kupas parut kasar",
      "1 sdm selai kacang murni (tanpa gula/garam)",
      "2 sdm susu cair"
    ],
    instructions: [
      "Campur oat, parutan apel, selai kacang, dan susu.",
      "Bentuk stik di loyang kertas roti.",
      "Panggang 170°C selama 15 menit."
    ],
    nutrition: "Serat beta-glukan untuk pencernaan dan lemak baik kacang.",
    tips: "Simpan di kulkas maksimal 3 hari."
  },
  {
    id: 78,
    title: "Muffin Telur Bayam Keju",
    category: "Sarapan",
    age: "8+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 butir telur ayam",
      "1 genggam bayam iris sangat halus",
      "1 sdm keju cheddar parut",
      "1 sdt tomat cincang halus"
    ],
    instructions: [
      "Kocok telur, masukkan bayam, tomat, dan keju parut.",
      "Tuang ke cetakan muffin silikon.",
      "Kukus 15 menit hingga set."
    ],
    nutrition: "Kaya protein pagi dan zat besi non-heme.",
    tips: "Belah muffin memanjang agar pas di genggaman bayi."
  },
  {
    id: 79,
    title: "Pancake Kentang Parut (Hashbrown)",
    category: "Sarapan",
    age: "9+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 buah kentang, kupas dan parut memanjang",
      "1 butir telur puyuh kocok",
      "1 sdm tepung maizena",
      "1 sdt butter"
    ],
    instructions: [
      "Peras parutan kentang hingga airnya keluar.",
      "Campur kentang peras, telur puyuh, dan maizena.",
      "Bentuk kepingan bundar pipih, panggang di teflon hingga kecokelatan."
    ],
    nutrition: "Karbohidrat alternatif gurih mudah dicerna.",
    tips: "Belah pancake jadi bentuk bulan sabit."
  },
  {
    id: 80,
    title: "Omelet Pisang Manis Alami",
    category: "Sarapan",
    age: "6+ Bulan",
    time: "10 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1 butir telur ayam",
      "1/2 buah pisang ambon matang (lumatkan kasar)",
      "Minyak kelapa secukupnya"
    ],
    instructions: [
      "Kocok lepas telur, campur lumatan pisang.",
      "Dadar tebal dengan minyak kelapa api kecil (karena pisang mudah karamelisasi).",
      "Potong memanjang stik."
    ],
    nutrition: "Padat energi dan kalium.",
    tips: "Finger food pertama yang sangat disukai bayi 6 bulan."
  },
  {
    id: 81,
    title: "Nasi Kepal Telur Orak-arik",
    category: "Sarapan",
    age: "9+ Bulan",
    time: "15 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 mangkuk kecil nasi putih lembek",
      "1 butir telur ayam (buat orak-arik cincang halus)",
      "1/2 sdt minyak wijen murni"
    ],
    instructions: [
      "Hancurkan orak-arik telur hingga menjadi remahan sangat kecil.",
      "Campur nasi hangat, telur, dan minyak wijen.",
      "Kepal padat membentuk bola."
    ],
    nutrition: "Karbohidrat dan protein ringan pagi hari.",
    tips: "Jangan masukkan kulkas karena nasi akan mengeras."
  },
  {
    id: 82,
    title: "Puding Roti Santan Mangga",
    category: "Sarapan",
    age: "8+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 lembar roti tawar gandum, potong dadu",
      "50 ml santan cair matang",
      "2 sdm puree mangga manis",
      "1 butir kuning telur"
    ],
    instructions: [
      "Kocok kuning telur, santan, dan puree mangga.",
      "Siram ke potongan roti tawar di mangkuk.",
      "Kukus 15-20 menit."
    ],
    nutrition: "Vitamin C, kalori santan, dan karbohidrat.",
    tips: "Enak disajikan dingin saat bayi tumbuh gigi."
  },
  {
    id: 83,
    title: "Waffle Ubi Kuning",
    category: "Sarapan",
    age: "9+ Bulan",
    time: "20 Menit",
    difficulty: "Sedang",
    ingredients: [
      "50 gram ubi kuning kukus, haluskan",
      "2 sdm tepung terigu",
      "1 butir telur puyuh",
      "2 sdm susu cair & 1 sdt butter cair"
    ],
    instructions: [
      "Aduk rata semua bahan hingga jadi adonan kental.",
      "Panaskan cetakan waffle mini, panggang hingga matang."
    ],
    nutrition: "Karbohidrat beta-karoten mengenyangkan.",
    tips: "Bentuk kotak waffle pas menahan cengkeraman bayi."
  },
  {
    id: 84,
    title: "Telur Rebus Hancur Alpukat",
    category: "Sarapan",
    age: "7+ Bulan",
    time: "12 Menit",
    difficulty: "Sangat Mudah",
    ingredients: [
      "1 butir telur ayam rebus matang penuh",
      "2 sdm daging alpukat matang"
    ],
    instructions: [
      "Cincang halus telur rebus.",
      "Lumatkan alpukat, campurkan bersama telur (alpukat sebagai mayones alami)."
    ],
    nutrition: "Super food otak: Choline dan Omega-9.",
    tips: "Oleskan di atas stik roti panggang."
  },
  {
    id: 85,
    title: "Singkong Keju Panggang Lembut",
    category: "Sarapan",
    age: "8+ Bulan",
    time: "35 Menit",
    difficulty: "Mudah",
    ingredients: [
      "100 gram singkong empuk, potong stik",
      "1 sdt butter cair",
      "1 sdm keju parut"
    ],
    instructions: [
      "Kukus stik singkong 80% matang.",
      "Lumuri butter cair, panggang teflon, taburi keju di akhir hingga meleleh."
    ],
    nutrition: "Karbohidrat alternatif gurih keju.",
    tips: "Serat singkong putus saat ditekan gusi."
  },
  {
    id: 86,
    title: "Pasta Bumbu Tomat Daging Sapi (Bolognese)",
    category: "Makan Siang",
    age: "9+ Bulan",
    time: "30 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 genggam pasta fusilli",
      "50 gram daging sapi cincang halus",
      "1 buah tomat merah besar, kupas cincang",
      "Bawang putih & bombai, 1 sdt EVOO"
    ],
    instructions: [
      "Rebus pasta sangat empuk. Tumis duo bawang, masukkan daging.",
      "Masukkan tomat dan air kaldu, slow cook 20 menit hingga kental.",
      "Siram saus di atas pasta."
    ],
    nutrition: "Daging (zat besi) + tomat (Vitamin C) penyerapan maksimal.",
    tips: "Saus cincang daging menempel di rongga fusilli."
  },
  {
    id: 87,
    title: "Nasi Tim Kepal Ayam Wortel",
    category: "Makan Siang",
    age: "9+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "3 sdm beras putih cuci bersih",
      "50 gram dada ayam cincang",
      "1 sdm wortel parut",
      "250 ml kaldu ayam bening"
    ],
    instructions: [
      "Rebus kaldu, beras, ayam, dan wortel bersamaan.",
      "Masak api kecil aduk hingga air asat jadi nasi lembek padat.",
      "Kepal menjadi bola kecil."
    ],
    nutrition: "Nasi kaya protein kaldu dan Vitamin A.",
    tips: "Bayi bisa meremas dan melahapnya sendiri."
  },
  {
    id: 88,
    title: "Sup Ikan Salmon Kuah Kuning",
    category: "Makan Siang",
    age: "7+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "100 gram fillet salmon tebal (bebas duri)",
      "Bumbu: kunyit, bawang merah, jahe, daun salam, lemon",
      "200 ml air"
    ],
    instructions: [
      "Potong salmon balok besar.",
      "Didihkan air dan bumbu, masukkan salmon, rebus 7-10 menit saja."
    ],
    nutrition: "Omega-3 dan jahe/kunyit anti-radang.",
    tips: "Berikan stik salmon besar, suapkan kuahnya perlahan."
  },
  {
    id: 89,
    title: "Perkedel Nasi Hati Sapi",
    category: "Makan Siang",
    age: "8+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "3 sdm nasi lembek",
      "50 gram hati sapi (rebus & haluskan)",
      "1 butir telur puyuh",
      "1 sdt daun bawang"
    ],
    instructions: [
      "Campur nasi lembek, hati lumat, daun bawang, dan telur puyuh.",
      "Bentuk patty, panggang/goreng dengan butter hingga kecokelatan."
    ],
    nutrition: "Paket penambah zat besi merah luar biasa padat.",
    tips: "Belah perkedel menjadi setengah lingkaran."
  },
  {
    id: 90,
    title: "Stik Kentang Panggang Daging Giling",
    category: "Makan Siang",
    age: "9+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 buah kentang besar, kukus lumat",
      "50 gram daging giling tumis matang",
      "1 sdm keju parut & 1 kuning telur"
    ],
    instructions: [
      "Aduk kentang, daging, keju, dan kuning telur.",
      "Cetak stik silinder tebal, panggang oven 15 menit hingga padat."
    ],
    nutrition: "Karbohidrat gurih dan protein aman tanpa risiko bongkahan daging.",
    tips: "Berikan 1 stik kentang daging utuh."
  },
  {
    id: 91,
    title: "Makaroni Schotel Kukus Daging",
    category: "Makan Siang",
    age: "8+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "2 genggam makaroni, rebus empuk",
      "50 gram daging ayam giling",
      "1 telur & 50 ml ASI/susu",
      "1 sdm mentega leleh & wortel parut"
    ],
    instructions: [
      "Campur semua bahan, tuang ke cup kecil.",
      "Kukus 25-30 menit hingga set memadat."
    ],
    nutrition: "Kalori tinggi penaik berat badan drastis.",
    tips: "Keluarkan dari cup, potong balok memanjang."
  },
  {
    id: 92,
    title: "Tahu Isi Ayam Cincang Kukus",
    category: "Makan Siang",
    age: "9+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 tahu putih padat potong segitiga",
      "50 gram ayam giling",
      "1 telur puyuh & bawang merah"
    ],
    instructions: [
      "Keruk tengah tahu, campur kerukan ke ayam giling dan telur.",
      "Isikan kembali ke rongga tahu, kukus 15-20 menit."
    ],
    nutrition: "Protein ganda hewani dan nabati.",
    tips: "Bayi sangat suka menggigiti ujung segitiga tahu."
  },
  {
    id: 93,
    title: "Omelet Gulung Nasi Sosis Sayur (Gimbap)",
    category: "Makan Siang",
    age: "10+ Bulan",
    time: "25 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 butir telur (kulit dadar)",
      "2 sdm nasi lembek",
      "1 stik sosis sehat / wortel rebus",
      "Keju parut"
    ],
    instructions: [
      "Buat dadar tipis lebar. Ratakan nasi dan keju di atasnya.",
      "Letakkan stik sosis di ujung, gulung padat.",
      "Iris setebal 2 cm."
    ],
    nutrition: "All-in-one (Karbo + Protein + Serat) dalam satu gigitan.",
    tips: "Sajikan irisan roda bulat."
  },
  {
    id: 94,
    title: "Semur Bola Daging Sapi Lembut",
    category: "Makan Siang",
    age: "9+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram daging giling + 1 sdm tahu sutra (kepal bulat)",
      "Bumbu: bawang merah, kemiri, pasta kurma, pala, lengkuas",
      "150 ml air"
    ],
    instructions: [
      "Didihkan bumbu rempah dan air. Masukkan bola daging perlahan.",
      "Slow cook api kecil 25 menit hingga kuah kental hitam karamel kurma."
    ],
    nutrition: "Menu tradisional pencegah anemia tinggi kalium.",
    tips: "Belah bola daging sebelum disajikan."
  },
  {
    id: 95,
    title: "Ikan Tenggiri Panggang Saus Jeruk",
    category: "Makan Siang",
    age: "8+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 potong fillet tenggiri",
      "1 sdm perasan jeruk baby manis",
      "1 sdt mentega cair & kemangi cacah"
    ],
    instructions: [
      "Lumuri ikan dengan mentega, jeruk, dan kemangi (jeruk melunakkan serat).",
      "Panggang di teflon bolak-balik hingga matang flakey."
    ],
    nutrition: "Protein otot tinggi dan asam amino esensial.",
    tips: "Potong selebar ibu jari."
  },
  {
    id: 96,
    title: "Sup Krim Jagung Ayam Suwir",
    category: "Makan Malam",
    age: "9+ Bulan",
    time: "35 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1/2 bonggol jagung blender kasar",
      "50 gram ayam suwir kecil",
      "100 ml susu cair & 1 sdt butter + maizena"
    ],
    instructions: [
      "Tumis bombai butter, masukkan jagung dan ayam, tambah kaldu.",
      "Campur susu dan maizena, tuang ke panci, aduk hingga mengental."
    ],
    nutrition: "Karbohidrat manis alami pembawa tidur lelap.",
    tips: "Gunakan pre-loaded spoon (isi sendok, biarkan bayi mengambilnya)."
  },
  {
    id: 97,
    title: "Bola-bola Nasi Lele Bumbu Bawang",
    category: "Makan Malam",
    age: "9+ Bulan",
    time: "30 Menit",
    difficulty: "Sedang",
    ingredients: [
      "3 sdm nasi lembek",
      "50 gram fillet lele kukus hancur",
      "1 siung bawang putih cincang ditumis dengan EVOO"
    ],
    instructions: [
      "Campur lele kukus, nasi, dan minyak bawang putih wangi.",
      "Ulik lumat, kepal kuat menjadi bola-bola."
    ],
    nutrition: "Lemak dan omega esensial tinggi dari perut lele.",
    tips: "Aroma bawang membangkitkan selera makan malam."
  },
  {
    id: 98,
    title: "Tumis Tahu Tempe Kecap Kurma",
    category: "Makan Malam",
    age: "10+ Bulan",
    time: "20 Menit",
    difficulty: "Mudah",
    ingredients: [
      "50 gram tahu & 50 gram tempe potong stik",
      "1 sdm pasta kurma",
      "Daun bawang iris"
    ],
    instructions: [
      "Tumis daun bawang, masukkan stik tahu dan tempe.",
      "Tuang pasta kurma, aduk hingga karamelisasi menyelimuti."
    ],
    nutrition: "Protein nabati ringan pencernaan menjelang tidur.",
    tips: "Sajikan tumpukan stik di mangkuk."
  },
  {
    id: 99,
    title: "Nasi Lembut Kuah Kaldu Tulang Sapi",
    category: "Makan Malam",
    age: "6+ Bulan",
    time: "10 Menit (pakai kaldu beku)",
    difficulty: "Mudah",
    ingredients: [
      "Kaldu tulang sapi beku (bone broth)",
      "3 sdm nasi amat lembek",
      "1 sdm ayam suwir halus"
    ],
    instructions: [
      "Panaskan balok kaldu tulang sapi.",
      "Siram kuah panas ke atas nasi lembek dan ayam suwir."
    ],
    nutrition: "Kolagen tulang regenerasi sel dan lemak sumsum penaik BB.",
    tips: "Sangat menghangatkan perut bayi di malam hari."
  },
  {
    id: 100,
    title: "Paha Ayam Rebus Jahe Empuk",
    category: "Makan Malam",
    age: "8+ Bulan",
    time: "45 Menit",
    difficulty: "Mudah",
    ingredients: [
      "1 potong paha bawah ayam utuh",
      "2 cm jahe geprek & 1 siung bawang putih"
    ],
    instructions: [
      "Rebus paha utuh api kecil tertutup selama 40 menit dengan jahe dan bawang.",
      "Daging akan copot sendiri dari tulang."
    ],
    nutrition: "Jahe pengeluar gas perut (cegah kembung/kolik malam).",
    tips: "Berikan paha utuh bertulang sebagai pegangan gigitan."
  },
  {
    id: 101,
    title: "Stik Ubi Ungu Saus Santan Daging",
    category: "Makan Malam",
    age: "9+ Bulan",
    time: "25 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram ubi ungu kukus potong stik",
      "2 sdm daging cincang matang",
      "2 sdm santan kental matang"
    ],
    instructions: [
      "Aduk santan kental dan daging cincang di panci sebentar, angkat.",
      "Siram saus santan daging ke atas stik ubi ungu."
    ],
    nutrition: "Karbohidrat padat penahan lapar berjam-jam + lauric acid santan.",
    tips: "Paduan ubi ungu manis dan santan gurih tanpa garam."
  },
  {
    id: 102,
    title: "Telur Ceplok Air (Poached Egg) Bayam",
    category: "Makan Malam",
    age: "8+ Bulan",
    time: "10 Menit",
    difficulty: "Sedang",
    ingredients: [
      "1 butir telur ayam segar",
      "1 genggam bayam (rebus layu, cincang)"
    ],
    instructions: [
      "Didihkan air, kecilkan api tenang. Pecahkan telur di tengahnya hingga putih matang set.",
      "Letakkan bayam di mangkuk, tumpuk telur ceplok air."
    ],
    nutrition: "Protein murni tanpa minyak goreng + bayam zat besi.",
    tips: "Potong tebal agar kuningnya pecah ke bayam."
  },
  {
    id: 103,
    title: "Patty Ikan Teri Nasi Kentang",
    category: "Makan Malam",
    age: "9+ Bulan",
    time: "25 Menit",
    difficulty: "Mudah",
    ingredients: [
      "2 sdm ikan teri nasi segar putih, cincang",
      "1 buah kentang kukus lumat",
      "1 sdm seledri cacah"
    ],
    instructions: [
      "Campur kentang lumat, teri basah, dan seledri, bentuk patty tipis.",
      "Panggang teflon dengan EVOO hingga luar kecokelatan kering."
    ],
    nutrition: "Kalsium fosfor pembentuk gigi saat bayi tidur.",
    tips: "Potong bentuk bulan sabit."
  },
  {
    id: 104,
    title: "Sate Lilit Ayam Keju Kukus",
    category: "Makan Malam",
    age: "8+ Bulan",
    time: "25 Menit",
    difficulty: "Sedang",
    ingredients: [
      "100 gram ayam halus",
      "2 sdm keju parut melt",
      "4 batang buncis besar/kacang panjang rebus (tusuk sate)"
    ],
    instructions: [
      "Campur ayam dan keju. Lilitkan padat ke tusuk buncis.",
      "Kukus 15 menit."
    ],
    nutrition: "Kalori tinggi gabungan keju dan ayam.",
    tips: "Buncis di dalam aman dimakan keseluruhan."
  },
  {
    id: 105,
    title: "Risotto Nasi Merah Santan Ayam",
    category: "Makan Malam",
    age: "9+ Bulan",
    time: "40 Menit",
    difficulty: "Sedang",
    ingredients: [
      "3 sdm nasi merah",
      "150 ml santan encer",
      "1 genggam jamur kancing cincang halus",
      "1 sdm ayam cincang lembut"
    ],
    instructions: [
      "Rebus santan, nasi merah, ayam, dan jamur.",
      "Masak api kecil perlahan selama 30 menit sambil terus diaduk hingga beras pecah kental."
    ],
    nutrition: "Risotto lambat cerna, aman mengenyangkan bayi sepanjang malam.",
    tips: "Sangat lengket, basah pekat, dan lezat."
  }
  // ... (lanjutkan hingga resep ke-105 dari file PDF/Docx Anda)
];

// Data Menu Planner 30 Hari (Bab 5) yang terhubung langsung dengan ID resep
export const plannerData = {
  day1: {
    sarapan: "76. Roti Panggang Telur (Baby French Toast)",
    snackPagi: "66. Pisang Ambon Stik Terkelupas",
    makanSiang: "86. Pasta Bumbu Tomat Daging Sapi (Baby Bolognese)",
    snackSore: "51. Brokoli Kukus Keju Lumer",
    makanMalam: "96. Sup Krim Jagung Ayam Suwir (Corn Chowder)"
  },
  // ... (lanjutkan hingga Hari 30 sesuai isi PDF asli)
};