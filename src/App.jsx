import React, { useState, useMemo } from 'react';
import { Home, BookOpen, CalendarDays, Heart, Search, Clock, ChefHat, Info, ArrowLeft, Star, BookText, ChevronRight } from 'lucide-react';

const plannerDB = [
  { day: 1, meals: { sarapan: "Roti Panggang Telur (Baby French Toast)", snackPagi: "Pisang Ambon Stik Terkelupas", siang: "Pasta Bumbu Tomat Daging Sapi", snackSore: "Brokoli Kukus Keju Lumer", malam: "Sup Krim Jagung Ayam Suwir" } },
  { day: 2, meals: { sarapan: "Stik Oatmeal Apel Panggang", snackPagi: "Pepaya Stik Segar", siang: "Nasi Tim Kepal Ayam Wortel", snackSore: "Stik Kentang Panggang", malam: "Bola-bola Nasi Lele Bumbu Bawang" } },
  { day: 3, meals: { sarapan: "Muffin Telur Bayam Keju", snackPagi: "Alpukat Balur Oat Sangrai", siang: "Sup Ikan Salmon Kuah Kuning", snackSore: "Edamame Tumbuk Lumat", malam: "Tumis Tahu Tempe Kecap Kurma" } },
  { day: 4, meals: { sarapan: "Pancake Kentang Parut", snackPagi: "Buah Naga Merah Iris", siang: "Perkedel Nasi Hati Sapi", snackSore: "Ubi Jalar Kukus Kelapa", malam: "Nasi Lembut Kuah Kaldu Tulang Sapi" } },
  { day: 5, meals: { sarapan: "Omelet Pisang Manis Alami", snackPagi: "Semangka Segitiga", siang: "Stik Kentang Panggang Daging Giling", snackSore: "Muffin Kentang Brokoli", malam: "Paha Ayam Rebus Jahe Empuk" } },
  { day: 6, meals: { sarapan: "Nasi Kepal Telur Orak-arik", snackPagi: "Apel Kukus Kayu Manis Lembut", siang: "Makaroni Schotel Kukus Daging", snackSore: "Singkong Kukus Tabur Wijen", malam: "Stik Ubi Ungu Saus Santan Daging" } },
  { day: 7, meals: { sarapan: "Puding Roti Santan Mangga", snackPagi: "Mangga Manis Potong", siang: "Tahu Isi Ayam Cincang Kukus", snackSore: "Stik Wortel Panggang Rosemary", malam: "Telur Ceplok Air Bayam" } },
  { day: 8, meals: { sarapan: "Waffle Ubi Kuning", snackPagi: "Pir Panggang Lumer", siang: "Omelet Gulung Nasi Sosis Sayur", snackSore: "Roti Panggang Alpukat", malam: "Patty Ikan Teri Nasi Kentang" } },
  { day: 9, meals: { sarapan: "Telur Rebus Hancur Alpukat", snackPagi: "Melon Jingga Iris Tipis", siang: "Semur Bola Daging Sapi Lembut", snackSore: "Bola-bola Ubi Ungu Lembut", malam: "Sate Lilit Ayam Keju Kukus" } },
  { day: 10, meals: { sarapan: "Singkong Keju Panggang Lembut", snackPagi: "Jeruk Manis Keprok", siang: "Ikan Tenggiri Panggang Saus Jeruk", snackSore: "Krim Edamame Alpukat", malam: "Risotto Nasi Merah Santan Ayam" } },
  { day: 11, meals: { sarapan: "Pancake Oat Pisang", snackPagi: "Pepaya Stik Segar", siang: "Patty Daging Sapi Lembut + Bola Nasi", snackSore: "Labu Siam Rebus", malam: "Hati Ayam Tumis + Tahu Sutra" } },
  { day: 12, meals: { sarapan: "Telur Dadar Stik Sayuran", snackPagi: "Pisang Ambon Stik", siang: "Nugget Ayam + Brokoli Keju", snackSore: "Puding Roti Tawar", malam: "Ikan Salmon Panggang + Nasi Tim" } },
  { day: 13, meals: { sarapan: "Roti Panggang Telur", snackPagi: "Buah Naga Merah Iris", siang: "Bakso Daging Cincang + Pasta Keju", snackSore: "Stik Tempe Panggang", malam: "Ayam Ungkep + Labu Kuning" } },
  { day: 14, meals: { sarapan: "Perkedel Jagung Manis", snackPagi: "Alpukat Balur Oat", siang: "Perkedel Hati Sapi + Kembang Kol", snackSore: "Bola Kacang Merah", malam: "Ikan Kembung Kukus + Stik Talas" } },
  { day: 15, meals: { sarapan: "Omelet Keju Brokoli", snackPagi: "Semangka Segitiga", siang: "Sate Daging Lilit + Nasi Merah", snackSore: "Nugget Tahu Brokoli", malam: "Sup Telur Puyuh + Bola Nasi" } },
  { day: 16, meals: { sarapan: "Stik Oatmeal Apel", snackPagi: "Apel Kukus Kayu Manis", siang: "Ayam Panggang Rosemary + Buncis", snackSore: "Burger Tempe Mini", malam: "Ikan Teri Nasi Dadar + Stik Oyong" } },
  { day: 17, meals: { sarapan: "Omelet Pisang Manis", snackPagi: "Mangga Manis Potong", siang: "Sosis Ayam + Makaroni Keju", snackSore: "Kacang Hijau Kepal", malam: "Hati Ayam Kukus + Bola Bayam" } },
  { day: 18, meals: { sarapan: "Telur Rebus Hancur Alpukat", snackPagi: "Pir Panggang Lumer", siang: "Daging Sapi Bumbu Tomat + Ubi Jalar", snackSore: "Tempe Bacem Air Kelapa", malam: "Udang Kukus + Zucchini Panggang" } },
  { day: 19, meals: { sarapan: "Muffin Telur Bayam Keju", snackPagi: "Melon Jingga Iris Tipis", siang: "Pasta Bumbu Tomat Daging Sapi", snackSore: "Rolade Tahu Bayam", malam: "Bola Daging Ikan Tenggiri + Tomat Panggang" } },
  { day: 20, meals: { sarapan: "Waffle Ubi Kuning", snackPagi: "Jeruk Manis Keprok", siang: "Nasi Tim Kepal Ayam Wortel", snackSore: "Perkedel Tembus Lumat", malam: "Tahu Kuning Tumis + Terong Ungu" } },
  { day: 21, meals: { sarapan: "Nasi Kepal Telur Orak-arik", snackPagi: "Pisang Ambon Stik", siang: "Sup Ikan Salmon Kuah Kuning", snackSore: "Muffin Tempe Manis", malam: "Orak-arik Tahu Telur Puyuh + Putren" } },
  { day: 22, meals: { sarapan: "Pancake Kentang Parut", snackPagi: "Alpukat Balur Oat", siang: "Perkedel Nasi Hati Sapi", snackSore: "Sate Tahu Manis", malam: "Stik Ubi Ungu Saus Santan Daging" } },
  { day: 23, meals: { sarapan: "Puding Roti Santan Mangga", snackPagi: "Buah Naga Merah Iris", siang: "Stik Kentang Panggang Daging Giling", snackSore: "Stik Wortel Panggang", malam: "Paha Ayam Rebus Jahe Empuk" } },
  { day: 24, meals: { sarapan: "Roti Panggang Telur", snackPagi: "Pepaya Stik Segar", siang: "Makaroni Schotel Kukus Daging", snackSore: "Sawi Putih Gulung Tahu", malam: "Tumis Tahu Tempe Kecap Kurma" } },
  { day: 25, meals: { sarapan: "Singkong Keju Panggang Lembut", snackPagi: "Apel Kukus Kayu Manis", siang: "Tahu Isi Ayam Cincang Kukus", snackSore: "Paprika Merah Panggang", malam: "Nasi Lembut Kuah Kaldu Tulang Sapi" } },
  { day: 26, meals: { sarapan: "Telur Dadar Stik Sayuran", snackPagi: "Semangka Segitiga", siang: "Omelet Gulung Nasi Sosis Sayur", snackSore: "Asparagus Kukus Ujung Lunak", malam: "Telur Ceplok Air Bayam" } },
  { day: 27, meals: { sarapan: "Omelet Pisang Manis Alami", snackPagi: "Mangga Manis Potong", siang: "Semur Bola Daging Sapi Lembut", snackSore: "Bola-bola Ubi Ungu Lembut", malam: "Patty Ikan Teri Nasi Kentang" } },
  { day: 28, meals: { sarapan: "Stik Oatmeal Apel Panggang", snackPagi: "Pir Panggang Lumer", siang: "Ikan Tenggiri Panggang Saus Jeruk", snackSore: "Muffin Kentang Brokoli", malam: "Sate Lilit Ayam Keju Kukus" } },
  { day: 29, meals: { sarapan: "Telur Rebus Hancur Alpukat", snackPagi: "Melon Jingga Iris Tipis", siang: "Patty Daging Sapi Lembut + Bola Nasi", snackSore: "Edamame Tumbuk Lumat", malam: "Sup Krim Jagung Ayam Suwir" } },
  { day: 30, meals: { sarapan: "Nasi Kepal Telur Orak-arik", snackPagi: "Jeruk Manis Keprok", siang: "Pasta Bumbu Tomat Daging Sapi", snackSore: "Muffin Tempe Manis", malam: "Risotto Nasi Merah Santan Ayam" } }
];

const recipesDB = [
  {id:1,title:"Stik Kentang Panggang",category:"Karbohidrat",age:"6+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["1 buah kentang ukuran sedang, kupas","1 sdt Extra Virgin Olive Oil (EVOO)"],instructions:["Potong kentang memanjang seukuran jari telunjuk.","Cuci bersih kentang, lalu tiriskan.","Baluri kentang dengan EVOO.","Panggang dalam oven 180°C selama 20 menit hingga empuk."],nutrition:"Karbohidrat kompleks untuk energi.",tips:"Letakkan 2-3 stik di piring suction bayi."},
  {id:2,title:"Bola Nasi Lembut Kepal",category:"Karbohidrat",age:"7+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["1 mangkuk kecil nasi putih hangat","1 sdt minyak wijen murni","1 lembar nori tanpa garam"],instructions:["Campurkan nasi hangat dengan minyak wijen dan remukan nori.","Basahi tangan dengan air matang agar tidak lengket.","Kepal padat membentuk bola seukuran bola pingpong."],nutrition:"Karbohidrat dan lemak sehat.",tips:"Taruh 2-3 bola nasi di meja. Sebaiknya langsung dihabiskan."},
  {id:3,title:"Ubi Jalar Kukus Kelapa",category:"Karbohidrat",age:"6+ Bulan",time:"20 Menit",difficulty:"Sangat Mudah",ingredients:["1 buah ubi jalar manis, kupas","1 sdm kelapa parut kering"],instructions:["Potong ubi jalar memanjang.","Kukus selama 15-20 menit hingga empuk.","Gulingkan ubi hangat ke atas kelapa parut kering."],nutrition:"Karbohidrat berserat dan Vitamin A.",tips:"Kelapa berfungsi agar ubi tidak licin saat digenggam."},
  {id:4,title:"Pasta Fusilli Saus Keju",category:"Karbohidrat",age:"8+ Bulan",time:"15 Menit",difficulty:"Sedang",ingredients:["1 genggam pasta fusilli","1 sdm unsalted butter","2 sdm keju cheddar parut","50 ml susu UHT full cream"],instructions:["Rebus pasta fusilli hingga overcooked. Tiriskan.","Panaskan wajan, lelehkan unsalted butter.","Masukkan susu dan keju parut, aduk hingga meleleh kental.","Masukkan pasta ke dalam saus, aduk rata."],nutrition:"Karbohidrat, kalsium, dan lemak hewani.",tips:"Bentuk spiral ideal melatih genggaman pincer grasp."},
  {id:5,title:"Singkong Kukus Tabur Wijen",category:"Karbohidrat",age:"9+ Bulan",time:"30 Menit",difficulty:"Mudah",ingredients:["150 gram singkong empuk","1 sdt biji wijen putih sangrai"],instructions:["Cuci bersih singkong, buang sumbu tengahnya.","Potong memanjang seukuran genggaman bayi.","Kukus 25-30 menit sampai empuk.","Taburi biji wijen sangrai."],nutrition:"Karbohidrat padat energi, lemak dari wijen.",tips:"Pastikan tidak ada serat kasar yang tertinggal."},
  {id:6,title:"Pancake Oat Pisang",category:"Karbohidrat",age:"6+ Bulan",time:"15 Menit",difficulty:"Sedang",ingredients:["1 buah pisang ambon matang","3 sdm rolled oat (haluskan)","1 butir telur ayam","Minyak kelapa secukupnya"],instructions:["Lumatkan pisang dengan garpu.","Campur telur dan oat ke pisang, aduk rata.","Panaskan wajan antilengket dengan minyak kelapa.","Tuang 1 sdm adonan, masak hingga kecokelatan."],nutrition:"Karbohidrat, kalium, dan protein.",tips:"Potong memanjang seperti stik agar mudah digenggam."},
  {id:7,title:"Perkedel Jagung Manis Cincang",category:"Karbohidrat",age:"9+ Bulan",time:"20 Menit",difficulty:"Sedang",ingredients:["1/2 buah jagung manis pipil","1 sdm tepung terigu","1 butir telur puyuh","1 lembar daun bawang iris"],instructions:["Cincang halus jagung manis pipil.","Campurkan jagung, tepung terigu, daun bawang, dan telur.","Goreng adonan dalam wajan hingga matang."],nutrition:"Karbohidrat dan protein ganda.",tips:"Potong perkedel menjadi dua bagian agar tidak kebesaran."},
  {id:8,title:"Roti Panggang Alpukat",category:"Karbohidrat",age:"6+ Bulan",time:"5 Menit",difficulty:"Sangat Mudah",ingredients:["1 lembar roti tawar gandum","1/4 buah alpukat matang"],instructions:["Panggang roti di atas wajan tanpa minyak hingga sedikit kering.","Lumatkan alpukat.","Oleskan alpukat di atas roti panggang.","Potong roti bentuk stik memanjang."],nutrition:"Karbohidrat berserat dan lemak tak jenuh.",tips:"Roti yang dipanggang mencegah menggumpal di langit-langit mulut."},
  {id:9,title:"Nasi Tim Kepal Sayur Lembut",category:"Karbohidrat",age:"9+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["2 sdm beras putih","200 ml kaldu sapi/ayam asli","1 sdm bayam cincang rebus"],instructions:["Masak beras dengan kaldu dalam panci api kecil.","Aduk hingga air menyusut jadi nasi lembek.","Campurkan bayam cincang.","Kepal nasi tim jadi bola-bola kecil."],nutrition:"Karbohidrat dan cairan kaldu.",tips:"Biarkan bayi mengambil dengan pincer grasp."},
  {id:10,title:"Stik Talas Panggang",category:"Karbohidrat",age:"8+ Bulan",time:"35 Menit",difficulty:"Sedang",ingredients:["100 gram umbi talas","1 sdt unsalted butter cair","Air garam"],instructions:["Kupas dan potong talas memanjang.","Rendam dalam air garam 15 menit, lalu cuci bersih.","Rebus setengah matang, tiriskan.","Olesi butter cair, panggang 15 menit hingga empuk."],nutrition:"Karbohidrat kaya zat besi alami.",tips:"Talas segar mudah rusak, olah semua saat dibeli lalu bekukan."},
  {id:11,title:"Muffin Kentang Brokoli",category:"Karbohidrat",age:"7+ Bulan",time:"30 Menit",difficulty:"Sedang",ingredients:["1 buah kentang kukus halus","2 kuntum brokoli cincang","1 butir telur ayam","1 sdm keju parut"],instructions:["Campur kentang, brokoli, telur, dan keju parut.","Tuang ke cetakan muffin silikon 3/4 penuh.","Kukus 20 menit hingga matang padat."],nutrition:"Karbohidrat, protein, kalsium, vitamin C.",tips:"Potong memanjang jika kebesaran digenggam."},
  {id:12,title:"Puding Roti Tawar Lembut",category:"Karbohidrat",age:"8+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["1 lembar roti tawar gandum sobek kecil","50 ml santan kental","1 butir kuning telur"],instructions:["Kocok kuning telur dan santan.","Tata roti di mangkuk tahan panas.","Siram campuran telur, biarkan meresap 5 menit.","Kukus 15-20 menit hingga memadat."],nutrition:"Kalori ekstra padat dari santan dan karbohidrat.",tips:"Potong bentuk kubus."},
  {id:13,title:"Nasi Merah Kepal Wijen Kelapa",category:"Karbohidrat",age:"9+ Bulan",time:"15 Menit",difficulty:"Sedang",ingredients:["1 mangkuk nasi merah hangat","1 sdm kelapa parut sangrai","1/2 sdt biji wijen hitam sangrai"],instructions:["Haluskan sedikit nasi merah hangat dengan punggung sendok.","Campurkan kelapa dan wijen hitam, aduk rata.","Kepal membentuk bola-bola padat."],nutrition:"Karbohidrat tinggi antioksidan dan serat.",tips:"Gunakan nasi baru agar tidak keras."},
  {id:14,title:"Makaroni Panggang Keju",category:"Karbohidrat",age:"9+ Bulan",time:"35 Menit",difficulty:"Sedang",ingredients:["2 genggam makaroni kecil","1 butir telur ayam kocok","2 sdm susu cair","2 sdm keju mozzarella parut"],instructions:["Rebus makaroni hingga sangat empuk.","Campur makaroni, telur, susu, dan sebagian keju.","Tuang ke wadah alumunium foil, taburi sisa keju.","Panggang 20 menit hingga kecokelatan."],nutrition:"Karbohidrat dan protein untuk dongkrak berat badan.",tips:"Potong balok agar bayi mudah memegang (palmar grasp)."},
  {id:15,title:"Bola-bola Ubi Ungu Lembut",category:"Karbohidrat",age:"7+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["1 buah ubi ungu, kupas dan kukus","1 sdm mentega cair","1 sdm tepung maizena"],instructions:["Lumatkan ubi ungu selagi panas hingga halus.","Campurkan mentega dan maizena, uleni.","Bentuk bola-bola seukuran gundu.","Kukus 10 menit agar matang."],nutrition:"Karbohidrat padat, tinggi antosianin untuk imun.",tips:"Sajikan suhu ruang agar kokoh."},
  {id:16,title:"Patty Daging Sapi Lembut",category:"Protein Hewani",age:"6+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["150 gram daging sapi giling","1 sdm bawang bombai parut","1 sdm breadcrumbs","1 sdt butter"],instructions:["Campur daging, bombai, dan breadcrumbs. Uleni.","Bentuk memanjang menyerupai sosis tebal.","Panggang dengan butter di wajan tertutup hingga matang."],nutrition:"Zat besi heme dan zinc.",tips:"Berikan utuh bentuk stik."},
  {id:17,title:"Hati Ayam Tumis Bawang Putih",category:"Protein Hewani",age:"6+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["2 buah hati ayam kampung","1 siung bawang putih geprek","1 sdt minyak kanola","Jeruk nipis"],instructions:["Lumuri hati dengan jeruk nipis, bilas bersih.","Rebus hati 5 menit.","Tumis bawang putih, masukkan hati ayam, masak matang."],nutrition:"Juara penyumbang zat besi tertinggi.",tips:"Potong memanjang sebesar dua jari."},
  {id:18,title:"Telur Dadar Stik Sayuran",category:"Protein Hewani",age:"6+ Bulan",time:"10 Menit",difficulty:"Sangat Mudah",ingredients:["1 butir telur ayam","1 sdm susu UHT","1 sdm wortel parut","1 sdt mentega"],instructions:["Kocok telur, susu, dan wortel parut.","Dadar tebal di wajan antilengket dengan mentega.","Potong dadar memanjang seukuran jari."],nutrition:"Protein lengkap dan kolin.",tips:"Telur tidak boleh dipanaskan ulang."},
  {id:19,title:"Nugget Ayam Homemade",category:"Protein Hewani",age:"8+ Bulan",time:"45 Menit",difficulty:"Sedang",ingredients:["200 gram dada ayam fillet blender","1 butir telur","2 sdm tepung tapioka","1 siung bawang putih halus"],instructions:["Campur dada ayam, telur, tapioka, bawang putih.","Ratakan di loyang, kukus 20-25 menit.","Potong memanjang jadi stik, panggang/goreng sebentar."],nutrition:"Protein bersih tanpa pengawet.",tips:"Jangan berikan tepung panir kasar jika bayi rentan tersedak."},
  {id:20,title:"Ikan Salmon Panggang Lemon",category:"Protein Hewani",age:"7+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["100 gram fillet salmon segar (buang duri)","1 sdt perasan lemon","1 sdt unsalted butter","Dill kering"],instructions:["Lumuri salmon dengan lemon, bilas bersih.","Olesi butter, taburi dill.","Panggang di oven 15 menit hingga daging mudah disuwir."],nutrition:"Juara Omega-3 dan DHA.",tips:"Periksa kembali duri dengan teliti."},
  {id:21,title:"Bakso Daging Cincang Lembut",category:"Protein Hewani",age:"8+ Bulan",time:"20 Menit",difficulty:"Sedang",ingredients:["100 gram daging giling halus","1 sdm tepung kanji","1/2 sdt bawang putih bubuk"],instructions:["Campur semua bahan, uleni.","Pelintir adonan bentuk silinder memanjang (sosis kecil).","Rebus dalam kaldu hingga mengapung matang."],nutrition:"Tinggi protein dan zinc.",tips:"Jangan bentuk bulat agar tidak tersedak."},
  {id:22,title:"Ayam Ungkep Bumbu Kuning Suwir",category:"Protein Hewani",age:"9+ Bulan",time:"45 Menit",difficulty:"Sedang",ingredients:["1 potong paha ayam utuh","Bumbu halus: 1 bawang putih, 1 merah, 1 cm kunyit, kemiri, jahe","200 ml air"],instructions:["Ungkep paha ayam dan bumbu dalam wajan tertutup 40 menit.","Angkat, suwir daging potongan besar searah serat."],nutrition:"Protein ayam dan antioksidan kunyit.",tips:"Paha ayam berlemak tidak seret di tenggorokan."},
  {id:23,title:"Omelet Keju Brokoli",category:"Protein Hewani",age:"8+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["1 butir telur ayam","2 sdm keju cheddar parut","2 sdm brokoli cincang rebus"],instructions:["Campur telur, keju parut, dan brokoli rebus.","Dadar di wajan antilengket hingga matang.","Potong bentuk dadu/segitiga kecil."],nutrition:"Lemak hewani, kalsium, protein.",tips:"Latihan motorik halus menjepit makanan."},
  {id:24,title:"Perkedel Hati Sapi",category:"Protein Hewani",age:"8+ Bulan",time:"30 Menit",difficulty:"Sedang",ingredients:["100 gram kentang kukus halus","50 gram hati sapi rebus halus","1 siung bawang putih halus","1 kuning telur"],instructions:["Campur kentang, hati sapi, bawang putih, kuning telur.","Bentuk bulat pipih/lonjong.","Goreng hingga kecokelatan."],nutrition:"Karbohidrat berpadu mega-zat besi hati sapi.",tips:"Belah perkedel menjadi dua untuk bayi."},
  {id:25,title:"Ikan Kembung Kukus Bumbu Kuning",category:"Protein Hewani",age:"9+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["1 ekor ikan kembung bersihkan","Bumbu halus: 1 bawang putih, 1 cm kunyit, 1 cm jahe"],instructions:["Lumuri ikan dengan bumbu, diamkan 10 menit.","Kukus 20 menit hingga matang.","Suwir daging ikan sangat hati-hati, pisahkan duri."],nutrition:"Omega-3 lokal menyaingi salmon impor.",tips:"Pastikan 100% bebas duri halus."},
  {id:26,title:"Sate Daging Lilit Sereh",category:"Protein Hewani",age:"7+ Bulan",time:"25 Menit",difficulty:"Sedang",ingredients:["150 gram daging giling","2 sdm kelapa parut","4 batang serai","1 sdm santan kental"],instructions:["Campur daging, kelapa, santan.","Lilitkan padat ke ujung batang serai.","Kukus 15 menit, panggang sebentar."],nutrition:"Protein dan aromaterapi serai pembangkit selera.",tips:"Bayi memegang batang serai utuh tanpa bahaya tertusuk lidi."},
  {id:27,title:"Sup Telur Puyuh Sayuran",category:"Protein Hewani",age:"9+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["4 butir telur puyuh mentah","200 ml kaldu buatan rumah","2 sdm wortel parut","1 sdm buncis iris"],instructions:["Didihkan kaldu dan sayur.","Pecahkan telur puyuh langsung jadi ceplok air.","Potong telur rebus belah empat."],nutrition:"Rehidrasi, protein tinggi.",tips:"Jangan sajikan telur puyuh bulat utuh karena bahaya tersedak."},
  {id:28,title:"Ayam Panggang Rosemary",category:"Protein Hewani",age:"8+ Bulan",time:"40 Menit",difficulty:"Mudah",ingredients:["2 potong sayap ayam tengah (wingette)","1 sdt minyak zaitun","1/2 sdt rosemary kering"],instructions:["Lumuri sayap ayam dengan zaitun dan rosemary.","Panggang oven 180°C selama 25-30 menit."],nutrition:"Protein tinggi melatih rahang menggigiti daging.",tips:"Berikan utuh dengan tulang besarnya sebagai pegangan."},
  {id:29,title:"Ikan Teri Nasi Dadar Telur",category:"Protein Hewani",age:"8+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["1 butir telur ayam","1 sdm ikan teri nasi basah segar","1 sdt daun bawang iris"],instructions:["Kocok telur bersama teri basah dan daun bawang.","Dadar campuran telur hingga matang.","Potong memanjang tebal."],nutrition:"Bom kalsium organik utuh tulang dari teri kecil.",tips:"Gunakan teri basah segar, bukan teri asin."},
  {id:30,title:"Sosis Ayam Homemade",category:"Protein Hewani",age:"8+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["200 gram paha ayam fillet blender","1 putih telur","2 sdm maizena","Bawang putih halus"],instructions:["Aduk rata ayam, putih telur, maizena, bawang putih.","Gulung ketat dalam daun pisang/plastik food grade.","Kukus 30 menit. Buka bungkus, belah memanjang."],nutrition:"Protein hewani tanpa nitrit/MSG.",tips:"Jangan pernah sajikan bentuk bulat koin."},
  {id:31,title:"Hati Ayam Kukus Jahe Lembut",category:"Protein Hewani",age:"6+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["2 pasang hati ayam kampung","1 lembar daun jeruk","2 cm jahe geprek"],instructions:["Tumpuk hati ayam dengan jahe dan daun jeruk di mangkuk.","Kukus 20 menit (kaldu akan keluar sendiri).","Buang rempah, sajikan hati utuh."],nutrition:"Zat besi heme murni, sangat ramah lambung.",tips:"Sangat lumer melt in mouth."},
  {id:32,title:"Daging Sapi Bumbu Tomat",category:"Protein Hewani",age:"10+ Bulan",time:"1 Jam",difficulty:"Sedang",ingredients:["100 gram daging sapi merah potong dadu 1x1 cm","1 buah tomat kupas potong","Bawang bombai","Butter"],instructions:["Tumis bombai dan daging dengan butter.","Masukkan tomat kupas dan air.","Masak slow cook 1 jam hingga daging hancur empuk."],nutrition:"Tomat membantu menyerap zat besi daging maksimal.",tips:"Daging sangat lumer, saus lengket."},
  {id:33,title:"Udang Kukus Bawang Putih",category:"Protein Hewani",age:"7+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["4 ekor udang kupas bersih","Bawang putih cincang halus","1 sdt minyak kelapa"],instructions:["Campur udang dengan bawang putih dan minyak.","Kukus 5-7 menit saja agar tidak alot karet."],nutrition:"Protein tinggi mineral tembaga.",tips:"Jika udang besar, belah dua memanjang vertikal."},
  {id:34,title:"Telur Rebus Belah Empat",category:"Protein Hewani",age:"6+ Bulan",time:"12 Menit",difficulty:"Sangat Mudah",ingredients:["1 butir telur ayam ras"],instructions:["Rebus telur 10-12 menit (matang keras).","Kupas bersih.","Belah memanjang empat bagian (wedges)."],nutrition:"Protein lengkap tinggi Choline.",tips:"Belah empat mencegah tersedak kuning telur bulat."},
  {id:35,title:"Bola Daging Ikan Tenggiri",category:"Protein Hewani",age:"9+ Bulan",time:"25 Menit",difficulty:"Sedang",ingredients:["100 gram fillet tenggiri haluskan","1 sdm tahu putih halus","Seledri iris"],instructions:["Aduk ikan, tahu, seledri. Tahu melembutkan tekstur tenggiri.","Bentuk bola pipih.","Kukus 15-20 menit."],nutrition:"Protein asam lemak baik jantung.",tips:"Belah dua sebelum disajikan."},
  {id:36,title:"Tahu Sutra Siram Kaldu",category:"Protein Nabati",age:"6+ Bulan",time:"10 Menit",difficulty:"Sangat Mudah",ingredients:["50 gram tahu sutra balok","50 ml kaldu buatan rumah","Daun bawang iris"],instructions:["Rebus kaldu hingga mendidih.","Tata tahu sutra mentah di piring.","Siram tahu dengan kaldu panas."],nutrition:"Protein nabati mudah cerna lambung.",tips:"Sangat lumer, hancur hanya dengan sedotan bibir."},
  {id:37,title:"Stik Tempe Panggang Gurih",category:"Protein Nabati",age:"6+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["1/2 papan tempe potong memanjang stik","EVOO","1 siung bawang putih halus dengan air"],instructions:["Rendam stik tempe ke air bawang putih 10 menit.","Olesi EVOO.","Panggang teflon 10 menit api kecil."],nutrition:"Probiotik alami pencernaan.",tips:"Bayi mengulum butiran kedelainya perlahan."},
  {id:38,title:"Bola Kacang Merah Halus",category:"Protein Nabati",age:"8+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["3 sdm kacang merah rebus empuk","1 sdm tepung beras","1 sdm santan kental"],instructions:["Lumatkan kacang merah rebus hingga tak bersisa kulit.","Campur dengan tepung dan santan.","Bentuk bola padat. Kukus 15 menit."],nutrition:"Zat besi nabati tinggi serat.",tips:"Padat di luar, berpasir basah di dalam."},
  {id:39,title:"Nugget Tahu Brokoli Panggang",category:"Protein Nabati",age:"8+ Bulan",time:"35 Menit",difficulty:"Sedang",ingredients:["100 gram tahu putih haluskan peras","2 kuntum brokoli cincang","1 butir telur puyuh","2 sdm terigu"],instructions:["Aduk semua bahan, masukkan loyang.","Kukus 20 menit.","Potong stik, panggang sebentar di teflon."],nutrition:"Protein nabati vitamin C.",tips:"Tahan di freezer 2 minggu."},
  {id:40,title:"Edamame Tumbuk Lumat",category:"Protein Nabati",age:"7+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1 genggam edamame utuh","1 sdt unsalted butter"],instructions:["Rebus edamame utuh matang.","Keluarkan biji, KUPAS KULIT ARI TIPISNYA.","Lumat hancur garpu. Campur butter."],nutrition:"Asam folat tinggi.",tips:"Kupas kulit ari agar aman tak tersedak."},
  {id:41,title:"Burger Tempe Mini",category:"Protein Nabati",age:"9+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["100 gram tempe kukus","1 telur puyuh","Ketumbar bubuk"],instructions:["Lumatkan tempe kukus.","Aduk dengan telur dan ketumbar.","Bentuk bulat pipih (patty), panggang minyak kelapa."],nutrition:"Lemak sehat energi padat.",tips:"Potong separuh bulan agar pas mulut."},
  {id:42,title:"Tahu Kuning Tumis Tomat",category:"Protein Nabati",age:"8+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1 buah tahu kuning potong dadu kecil","1/2 buah tomat matang cincang","Bawang merah"],instructions:["Tumis bawang merah.","Masukkan tomat cincang hingga berair.","Masukkan dadu tahu, aduk perlahan."],nutrition:"Likopen tomat vitamin C.",tips:"Latihan pincer grasp mengambil dadu tahu."},
  {id:43,title:"Kacang Hijau Kepal Lembut",category:"Protein Nabati",age:"9+ Bulan",time:"45 Menit",difficulty:"Sedang",ingredients:["3 sdm kacang hijau rebus merekah","1 sdm kelapa parut sangrai","1 sdt santan kental"],instructions:["Lumatkan sedikit kacang hijau tanpa kuah.","Campur kelapa sangrai dan santan.","Kepal padat bola/lonjong."],nutrition:"Vitamin B kompleks.",tips:"Jika kurang padat tambah sejumput tepung beras matang."},
  {id:44,title:"Tempe Bacem Air Kelapa",category:"Protein Nabati",age:"7+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["100 gram tempe balok tebal","200 ml air kelapa murni","Bawang putih, merah, ketumbar, salam, lengkuas"],instructions:["Masak tempe dan bumbu dengan air kelapa api kecil.","Tunggu hingga air menyusut meresap habis.","Panggang sebentar."],nutrition:"Elektrolit alami tanpa gula.",tips:"Bisa tahan 3 hari di chiller."},
  {id:45,title:"Orak-arik Tahu Telur Puyuh",category:"Protein Nabati",age:"8+ Bulan",time:"10 Menit",difficulty:"Sangat Mudah",ingredients:["50 gram tahu putih hancur kasar","2 butir telur puyuh","Minyak kelapa"],instructions:["Tumis tahu putih di teflon kurangi airnya.","Pecahkan puyuh, orak-arik cepat menyelimuti tahu hingga kering matang."],nutrition:"Dobel protein mengenyangkan.",tips:"Bayi memungut remahan berserat."},
  {id:46,title:"Rolade Tahu Bayam",category:"Protein Nabati",age:"9+ Bulan",time:"35 Menit",difficulty:"Sulit",ingredients:["100 gram tahu putih halus","1 telur ayam","5 daun bayam cincang","1 sdm tapioka"],instructions:["Buat kulit dadar tipis setengah telur.","Isi: tahu, sisa telur, bayam, tapioka.","Ratakan isi di atas dadar, gulung ketat.","Kukus 20 menit, iris melingkar."],nutrition:"Serat bayam zat besi.",tips:"Potong irisan bundar jadi dua."},
  {id:47,title:"Sate Tahu Manis (Kecap Kurma)",category:"Protein Nabati",age:"10+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1/2 tahu putih potong dadu kukus","1 sdm kurma lumat pasta","Ketumbar bubuk"],instructions:["Campur pasta kurma dan ketumbar.","Lumuri tahu kukus.","Panggang teflon hingga harum karamel. TANPA TUSUK."],nutrition:"Pengganti kecap manis super sehat.",tips:"Tahu cepat masam, masak dan sajikan segera."},
  {id:48,title:"Perkedel Tembus Lumat",category:"Protein Nabati",age:"6+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["100 gram tempe potong kasar","1 bawang putih geprek","1 sdm santan kental matang"],instructions:["Rebus tempe dan bawang putih 15 menit agar tak langu.","Ulek tempe selagi hangat hingga pasta.","Aduk santan, bentuk jari dewasa."],nutrition:"Empuk lumat kalori ekstra.",tips:"Panggang sebentar agar sedikit kokoh."},
  {id:49,title:"Muffin Tempe Manis",category:"Protein Nabati",age:"8+ Bulan",time:"35 Menit",difficulty:"Sedang",ingredients:["50 gram tempe halus","2 sdm jagung manis rebus chopper","1 telur","1 sdm unsalted butter cair"],instructions:["Campur semua bahan aduk rata.","Tuang ke cetakan silikon muffin.","Kukus 25 menit."],nutrition:"Serat jagung manis.",tips:"Belah muffin memanjang jika ukuran besar."},
  {id:50,title:"Krim Edamame Alpukat",category:"Protein Nabati",age:"6+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["2 sdm edamame rebus buang kulit ari","2 sdm alpukat matang","1 sdm susu/ASI"],instructions:["Blender/saring halus edamame dan alpukat.","Tambahkan susu hingga kental selai hummus."],nutrition:"Booster berat badan lemak baik.",tips:"Jadikan cocolan stik kentang kukus."},
  {id:51,title:"Brokoli Kukus Keju Lumer",category:"Sayuran",age:"6+ Bulan",time:"10 Menit",difficulty:"Sangat Mudah",ingredients:["2 kuntum brokoli dengan batangnya","1 sdt keju parut melt"],instructions:["Cuci bersih, kukus brokoli 7-9 menit.","Taburi keju panas-panas hingga meleleh."],nutrition:"Kalsium ganda zat besi non-heme.",tips:"Batang kokoh pegangan, bunga lumat."},
  {id:52,title:"Stik Wortel Panggang Rosemary",category:"Sayuran",age:"6+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["1 wortel ukuran jari","EVOO","Rosemary kering"],instructions:["Kukus stik wortel setengah matang.","Lumuri EVOO dan rosemary.","Panggang oven 15 menit hingga mengerut empuk."],nutrition:"Vitamin A larut lemak zaitun.",tips:"Dilarang berikan wortel mentah keras!"},
  {id:53,title:"Kembang Kol Panggang Mentega",category:"Sayuran",age:"7+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["2 kuntum kembang kol","1 sdt unsalted butter"],instructions:["Rebus cepat blanching 5 menit.","Olesi rongga kembang kol dengan butter.","Panggang teflon api kecil hingga karamelisasi."],nutrition:"Vitamin K Kolin.",tips:"Berikan utuh memegang tangkai."},
  {id:54,title:"Labu Siam Rebus Potong Memanjang",category:"Sayuran",age:"6+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1/2 buah labu siam kecil"],instructions:["Gosok belahan hilangkan getah, kupas kulit.","Potong bergerigi crinkle cut.","Kukus 10-15 menit hingga sangat empuk."],nutrition:"Folat rehidrasi pencernaan.",tips:"Bergerigi agar tak licin dipegang."},
  {id:55,title:"Buncis Tumis Bawang Putih",category:"Sayuran",age:"7+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["5 buncis besar buang serat ujung","1 bawang putih geprek","Butter"],instructions:["Potong buncis seukuran dua telunjuk.","Rebus 7 menit lunak.","Tumis sebentar dengan butter bawang putih 2 menit."],nutrition:"Serat larut ganda.",tips:"Bayi mengisap-isap dan mengoyak perlahan."},
  {id:56,title:"Bola Bayam Tahu Sutra",category:"Sayuran",age:"8+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["5 daun bayam rebus cincang","30 gram tahu sutra","1 sdm tepung beras"],instructions:["Hancurkan tahu sutra, campur bayam.","Aduk tepung beras pelan.","Kukus adonan bentuk bola 10 menit."],nutrition:"Zat besi ganda lumer.",tips:"Sangat rapuh, hati-hati saat disajikan."},
  {id:57,title:"Zucchini Panggang",category:"Sayuran",age:"6+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1/2 Zucchini stik tebal","Olive Oil","Keju parut"],instructions:["Potong stik JANGAN KUPAS kulit hijaunya.","Lumuri Olive oil, panggang 10-12 menit.","Taburi keju."],nutrition:"Lutein mata.",tips:"Kulit menahan agar tak hancur berantakan."},
  {id:58,title:"Tomat Panggang Lumer",category:"Sayuran",age:"8+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1 tomat merah sedang","Butter cair"],instructions:["Rebus tomat 2 menit, KUPAS KULIT TIPISNYA.","Potong wedges buang tangkai keras.","Panggang teflon butter api kecil."],nutrition:"Likopen antikanker aktif panas.",tips:"Kupas kulit tipis luar agar tidak tersedak."},
  {id:59,title:"Terong Ungu Panggang Lembut",category:"Sayuran",age:"7+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["1/2 terong ungu stik tebal","EVOO","Bawang merah halus"],instructions:["Kupas selang-seling kulit ungu.","Lumuri bawang dan EVOO.","Panggang bolak-balik 15 menit hingga kempes lunak."],nutrition:"Antioksidan kulit ungu.",tips:"Spons basah empuk."},
  {id:60,title:"Stik Oyong Kukus",category:"Sayuran",age:"6+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["1/2 oyong muda","Kaldu ayam"],instructions:["Kupas kulit keras tajam rusuk oyong.","Potong stik tebal buang biji.","Kukus dalam kaldu 5 menit transparan."],nutrition:"Penyejuk perut air.",tips:"Beri saat suhu hangat agar tak melepuh."},
  {id:61,title:"Sawi Putih Gulung Tahu",category:"Sayuran",age:"9+ Bulan",time:"20 Menit",difficulty:"Sedang",ingredients:["4 daun sawi putih lemas ujung","50 gram tahu putih halus","1 telur puyuh"],instructions:["Rebus daun layu sempurna.","Campur tahu dan puyuh.","Gulung isi dalam daun, kukus 15 menit."],nutrition:"Kalsium protein.",tips:"Potong membelah dua pastikan daun putus."},
  {id:62,title:"Jagung Muda Rebus",category:"Sayuran",age:"7+ Bulan",time:"15 Menit",difficulty:"Sangat Mudah",ingredients:["3 jagung muda putren tebal"],instructions:["Cuci bersih.","Rebus 15-20 menit hingga empuk ke tulang."],nutrition:"Karbohidrat ringan folat.",tips:"Teether alami sempurna redakan gusi gatal."},
  {id:63,title:"Paprika Merah Panggang",category:"Sayuran",age:"9+ Bulan",time:"25 Menit",difficulty:"Sedang",ingredients:["1/2 paprika merah","EVOO"],instructions:["Potong memanjang stik buang biji pedas.","Panggang 200°C 20 menit hingga kulit keriput.","KUPAS LAPISAN KULIT luar plastiknya."],nutrition:"Vitamin C super tinggi serap zat besi.",tips:"Manis tanpa pedas sama sekali."},
  {id:64,title:"Labu Kuning Panggang",category:"Sayuran",age:"6+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["1 potong waluh kupas tebal keras","Butter"],instructions:["Potong memanjang stik.","Olesi butter permukaan.","Panggang 20 menit hingga wangi lumat."],nutrition:"Beta-karoten imunitas.",tips:"Dipanggang lebih kokoh dipegang dari dikukus."},
  {id:65,title:"Asparagus Kukus Ujung Lunak",category:"Sayuran",age:"8+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["3 batang asparagus tebal sedang","Perasan lemon manis"],instructions:["Patahkan 1/3 batang bawah yang keras berkayu.","Kukus ujung atas 7-10 menit.","Lumuri lemon tipis."],nutrition:"Prebiotik usus.",tips:"Kokoh di batang, lembut di pucuk."},
  {id:66,title:"Pisang Ambon Stik Terkelupas",category:"Buah",age:"6+ Bulan",time:"Tanpa Dimasak",difficulty:"Sangat Mudah",ingredients:["1 pisang ambon matang berbintik hitam"],instructions:["Belah pisang dua memanjang.","Kupas setengah kulit, biarkan pangkal menempel."],nutrition:"Energi instan kalium.",tips:"Kulit bawah sebagai handle pegangan anti slip."},
  {id:67,title:"Alpukat Balur Oat Sangrai",category:"Buah",age:"6+ Bulan",time:"5 Menit",difficulty:"Sangat Mudah",ingredients:["1/4 alpukat mentega matang","1 sdm oat instan sangrai"],instructions:["Potong stik tebal 2 cm.","Gulingkan ke bubuk oat agar tak licin."],nutrition:"Lemak otak.",tips:"Sajikan 15 menit agar tak oksidasi."},
  {id:68,title:"Apel Kukus Kayu Manis",category:"Buah",age:"6+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1/2 apel manis kupas kulit","Kayu manis bubuk"],instructions:["Potong wedges buang biji keras.","KUKUS 10-15 menit hingga hancur empuk garpu.","Taburi kayu manis."],nutrition:"Pektin pencernaan.",tips:"Apel mentah bahaya tersedak."},
  {id:69,title:"Mangga Manis Potong",category:"Buah",age:"7+ Bulan",time:"Tanpa Dimasak",difficulty:"Sangat Mudah",ingredients:["1/2 mangga harum manis sempurna"],instructions:["Potong stik tebal panjang atau model landak.","Jika licin tabur chia seed giling."],nutrition:"Pelancar pencernaan.",tips:"Bersihkan mulut usai makan agar tak ruam getah."},
  {id:70,title:"Pepaya Stik Segar",category:"Buah",age:"6+ Bulan",time:"Tanpa Dimasak",difficulty:"Sangat Mudah",ingredients:["1 potong pepaya matang kupas"],instructions:["Potong memanjang crinkle cut agar tak licin.","Jangan beri yang mengkal."],nutrition:"Enzim papain anti sembelit.",tips:"Lumer berair manis."},
  {id:71,title:"Buah Naga Merah Iris",category:"Buah",age:"7+ Bulan",time:"Tanpa Dimasak",difficulty:"Sangat Mudah",ingredients:["1/4 buah naga merah kupas"],instructions:["Potong balok tebal memanjang.","Jangan potong terlalu tipis karena rapuh."],nutrition:"Hidrasi kalsium.",tips:"Biji hitam aman ditelan, pipis merah wajar."},
  {id:72,title:"Semangka Segitiga",category:"Buah",age:"6+ Bulan",time:"Tanpa Dimasak",difficulty:"Mudah",ingredients:["1 potong semangka seedless"],instructions:["Potong sisakan KULIT LUAR HIJAU untuk handle.","Potong segitiga melintang.","Buang manual biji hitam terlihat."],nutrition:"92% air rehidrasi.",tips:"Semangka dingin redakan nyeri gusi."},
  {id:73,title:"Pir Panggang Lumer",category:"Buah",age:"6+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["1/2 pir century kupas kulit","Minyak kelapa"],instructions:["Potong wedges buang inti.","Panggang oven 180°C 15 menit lunak tembus."],nutrition:"Vitamin C kalium.",tips:"Lumer seperti saus tebal."},
  {id:74,title:"Melon Jingga Iris Tipis",category:"Buah",age:"8+ Bulan",time:"Tanpa Dimasak",difficulty:"Mudah",ingredients:["1 irisan melon cantaloupe wangi matang"],instructions:["Iris memanjang kupas HABIS kulit kerasnya.","Berikan stik empuk."],nutrition:"Beta-karoten.",tips:"Bisa balur kelapa sangrai jika terlalu licin."},
  {id:75,title:"Jeruk Manis Keprok Kupas Membran",category:"Buah",age:"9+ Bulan",time:"Tanpa Dimasak",difficulty:"Sedang",ingredients:["1 jeruk manis lokal"],instructions:["Kupas kulit. KUPAS PAKSA selaput membran tipis tiap siung.","Sajikan bulir-bulir murni saja buang biji."],nutrition:"Booster imunitas.",tips:"Selaput tipis berbahaya bisa lengket di tenggorokan."},
  {id:76,title:"Roti Panggang Telur",category:"Sarapan",age:"6+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["1 roti tawar gandum buang pinggir","1 telur kocok lepas","2 sdm susu UHT","Butter"],instructions:["Potong roti stik tebal.","Celup roti ke kocokan telur susu.","Panggang teflon api kecil hingga matang."],nutrition:"Protein karbo tahan kenyang.",tips:"Sangat lumer basah di dalam."},
  {id:77,title:"Stik Oatmeal Apel Panggang",category:"Sarapan",age:"7+ Bulan",time:"25 Menit",difficulty:"Sedang",ingredients:["4 sdm rolled oat","1/2 apel parut kasar","1 sdm selai kacang murni","2 sdm susu"],instructions:["Aduk semua bahan jadi kental.","Bentuk stik di loyang kertas roti.","Panggang 170°C 15 menit empuk matang."],nutrition:"Serat larut lemak baik.",tips:"Bertekstur kasar namun lunak."},
  {id:78,title:"Muffin Telur Bayam Keju",category:"Sarapan",age:"8+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["2 telur ayam","Bayam iris halus","1 sdm keju cheddar","1 sdt tomat cincang"],instructions:["Kocok telur berbusa.","Aduk bayam, tomat, keju.","Tuang cetakan silikon, kukus 15 menit."],nutrition:"Kaya protein pagi.",tips:"Belah muffin memanjang jika kebesaran."},
  {id:79,title:"Pancake Kentang Parut",category:"Sarapan",age:"9+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1 kentang parut peras air","1 telur puyuh","1 sdm maizena","Butter"],instructions:["Campur kentang peras, telur, maizena.","Pipihkan di wajan, panggang kekuningan."],nutrition:"Karbohidrat gurih.",tips:"Garing di luar empuk di dalam."},
  {id:80,title:"Omelet Pisang Manis Alami",category:"Sarapan",age:"6+ Bulan",time:"10 Menit",difficulty:"Sangat Mudah",ingredients:["1 telur ayam","1/2 pisang ambon lumat kasar","Minyak kelapa"],instructions:["Kocok telur campur pisang.","Dadar tebal api kecil agar tak gosong karamel.","Potong stik."],nutrition:"Tinggi kalium energi padat.",tips:"Sangat wangi manis digemari bayi."},
  {id:81,title:"Nasi Kepal Telur Orak-arik",category:"Sarapan",age:"9+ Bulan",time:"15 Menit",difficulty:"Mudah",ingredients:["1 mangkuk nasi lembek","1 telur buat orak-arik hancur","1/2 sdt minyak wijen"],instructions:["Campur nasi, orak-arik halus, minyak wijen.","Kepal kuat padat jadi bola."],nutrition:"Karbo instan.",tips:"Nasi lembek mudah hancur dikunyah."},
  {id:82,title:"Puding Roti Santan Mangga",category:"Sarapan",age:"8+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["1 roti tawar sobek","50 ml santan cair","2 sdm puree mangga manis","1 kuning telur"],instructions:["Kocok telur, santan, puree mangga.","Siram ke roti tawar di mangkuk tahan panas.","Kukus 15-20 menit."],nutrition:"Vitamin C kalori lemak santan.",tips:"Sangat kental, gunakan pre-loaded spoon."},
  {id:83,title:"Waffle Ubi Kuning",category:"Sarapan",age:"9+ Bulan",time:"20 Menit",difficulty:"Sedang",ingredients:["50 gram ubi kuning halus","2 sdm terigu","1 telur puyuh","2 sdm susu cair","Butter"],instructions:["Aduk kental semua bahan.","Tuang cetakan waffle maker panas.","Masak hingga matang kecokelatan."],nutrition:"Beta-karoten.",tips:"Potong garis cetakan jadi stik."},
  {id:84,title:"Telur Rebus Hancur Alpukat",category:"Sarapan",age:"7+ Bulan",time:"12 Menit",difficulty:"Sangat Mudah",ingredients:["1 telur ayam rebus hard boiled","2 sdm daging alpukat matang"],instructions:["Hancurkan kasar telur rebus.","Lumat alpukat, aduk rata menyelimuti telur (mayones alami)."],nutrition:"Choline dan Omega-9 super otak.",tips:"Oleskan tebal di stik kentang."},
  {id:85,title:"Singkong Keju Panggang Lembut",category:"Sarapan",age:"8+ Bulan",time:"35 Menit",difficulty:"Mudah",ingredients:["100 gram singkong empuk stik","Butter cair","1 sdm keju parut"],instructions:["Kukus singkong stik 20 menit (80% matang).","Lumuri butter cair panggang teflon.","Taburi keju."],nutrition:"Karbohidrat pencegah bosan.",tips:"Lumat serat singkong terputus gusi."},
  {id:86,title:"Pasta Bumbu Tomat Daging Sapi",category:"Makan Siang",age:"9+ Bulan",time:"30 Menit",difficulty:"Sedang",ingredients:["1 genggam fusilli","50 gram daging sapi merah blender","1 tomat merah kupas cincang","Bawang putih bombai tumis","EVOO"],instructions:["Rebus pasta overcooked empuk.","Tumis bawang, daging, tomat. Slow cook 20 menit saus kental.","Siram saus ke pasta."],nutrition:"Serap zat besi paripurna vitamin C tomat.",tips:"Bentuk fusilli mudah digenggam spiralnya."},
  {id:87,title:"Nasi Tim Kepal Ayam Wortel",category:"Makan Siang",age:"9+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["3 sdm beras putih","50 gram dada ayam cincang","1 sdm wortel parut","250 ml kaldu"],instructions:["Masak beras, ayam, wortel, kaldu api kecil.","Aduk hingga asat lembek padat bumbu.","Kepal padat bola."],nutrition:"Nasi kaya protein kaldu.",tips:"Basah tapi bisa tahan kepalan di tangan."},
  {id:88,title:"Sup Ikan Salmon Kuah Kuning",category:"Makan Siang",age:"7+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["100 gram fillet salmon tebal cabut duri","Bumbu tipis: kunyit, bawang merah, jahe, daun salam","Jeruk nipis","200 ml air"],instructions:["Kucuri salmon jeruk bilas potong balok besar.","Rebus bumbu kaldu mendidih.","Masukkan salmon 7-10 menit matang."],nutrition:"Omega-3 anti radang jahe.",tips:"Berikan stik salmon besar utuh tanpa hancur kuah."},
  {id:89,title:"Perkedel Nasi Hati Sapi",category:"Makan Siang",age:"8+ Bulan",time:"35 Menit",difficulty:"Sedang",ingredients:["3 sdm nasi lembek","50 gram hati sapi rebus halus","1 telur puyuh","Daun bawang iris"],instructions:["Aduk nasi, hati sapi lumat, telur, bawang.","Bentuk kepingan patty.","Panggang butter kecokelatan luar."],nutrition:"Zat besi kejar tumbuh padat.",tips:"Garing di luar lumer lengket di dalam."},
  {id:90,title:"Stik Kentang Panggang Daging Giling",category:"Makan Siang",age:"9+ Bulan",time:"35 Menit",difficulty:"Sedang",ingredients:["1 kentang kukus lumat","50 gram daging giling tumis matang","1 sdm keju parut","1 kuning telur"],instructions:["Aduk rata kentang lumat, daging matang, keju, kuning telur.","Bentuk tangan silinder stik sosis.","Panggang oven 15 menit padat utuh."],nutrition:"Karbohidrat padat daging tanpa tersedak.",tips:"Berikan stik utuh mulus luar berpasir dalam."},
  {id:91,title:"Makaroni Schotel Kukus Daging",category:"Makan Siang",age:"8+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["2 genggam makaroni empuk rebus","50 gram ayam giling","1 telur kocok, 50 ml susu UHT","1 sdm mentega cair, wortel parut"],instructions:["Campur semua bahan adonan kental.","Tuang pinggan alumunium foil.","Kukus 25-30 menit set padat."],nutrition:"Kalori tinggi dongkrak BB susu mentega telur.",tips:"Potong balok memanjang pegang tangan."},
  {id:92,title:"Tahu Isi Ayam Cincang Kukus",category:"Makan Siang",age:"9+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["2 tahu putih potong segitiga","50 gram ayam dada halus","1 telur puyuh, bawang merah"],instructions:["Keruk tengah tahu. Campur kerukan dengan ayam puyuh.","Isi rongga tahu.","Kukus 15-20 menit."],nutrition:"Protein ganda nabati hewani satu genggaman.",tips:"Segitiga utuh mudah digigit di ujung."},
  {id:93,title:"Omelet Gulung Nasi Sosis Sayur",category:"Makan Siang",age:"10+ Bulan",time:"25 Menit",difficulty:"Sedang",ingredients:["1 telur dadar tipis lebar","2 sdm nasi lembek","1 stik sosis sehat resep 30","Keju parut"],instructions:["Bentang telur dadar. Ratakan nasi tipis.","Letakkan stik sosis keju di tepi.","Gulung ketat padat gimbap. Iris 2 cm."],nutrition:"Gizi all in one lengkap.",tips:"Irisan roda potong setengah jika mulut kecil."},
  {id:94,title:"Semur Bola Daging Sapi Lembut",category:"Makan Siang",age:"9+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["100 gram daging giling (campur tahu sutra halus kepal bulat)","Bawang merah, kemiri, pala, lengkuas","1 sdm pasta kurma","150 ml air"],instructions:["Didihkan air bumbu pasta kurma.","Celup bola daging tanpa aduk.","Slow cook 25 menit kuah kental karamel meresap."],nutrition:"Pencegah anemia minim gula garam.",tips:"Daging hambur licin saus kental belah bola."},
  {id:95,title:"Ikan Tenggiri Panggang Saus Jeruk",category:"Makan Siang",age:"8+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["1 fillet tebal tenggiri bersih duri","1 sdm perasan jeruk manis","Mentega cair unsalted","Daun kemangi cacah"],instructions:["Lumuri fillet mentega, jeruk, kemangi diamkan 5 mnt.","Panggang teflon bolak balik memutih kering flakey."],nutrition:"Protein otot tinggi esensial.",tips:"Berikan suwiran sangat besar jempol."},
  {id:96,title:"Sup Krim Jagung Ayam Suwir",category:"Makan Malam",age:"9+ Bulan",time:"35 Menit",difficulty:"Sedang",ingredients:["1/2 bonggol jagung manis pipil blender kasar","50 gram dada ayam suwir super kecil","100 ml susu UHT","Butter, maizena"],instructions:["Tumis bombai butter. Masukkan jagung suwiran.","Rebus kaldu empuk.","Campur susu maizena, tuang, aduk kental cream soup."],nutrition:"Hormon serotonin memicu tidur lelap.",tips:"Sangat lengket di pre-loaded spoon."},
  {id:97,title:"Bola-bola Nasi Lele Bumbu Bawang",category:"Makan Malam",age:"9+ Bulan",time:"30 Menit",difficulty:"Sedang",ingredients:["3 sdm nasi lembek","50 gram fillet lele murni kukus hancur","1 bawang putih cincang tumis EVOO"],instructions:["Aduk lele kukus, nasi, minyak tumisan bawang wangi.","Kepal kuat padat bola kecil."],nutrition:"Omega-3 super perut lele padat kalori malam.",tips:"Sangat juicy lengket lumat gusi."},
  {id:98,title:"Tumis Tahu Tempe Kecap Kurma",category:"Makan Malam",age:"10+ Bulan",time:"20 Menit",difficulty:"Mudah",ingredients:["50 gram tahu putih kukus","50 gram tempe rebus empuk","1 sdm pasta kurma air hangat","Daun bawang iris"],instructions:["Potong tahu tempe stik kecil.","Tumis bawang, masukkan stik, tuang pasta kurma.","Karamelisasi kurma menyelimuti."],nutrition:"Ringan sistem cerna malam.",tips:"Lengket manis lumer gusi."},
  {id:99,title:"Nasi Lembut Kuah Kaldu Tulang Sapi",category:"Makan Malam",age:"6+ Bulan",time:"10 Menit",difficulty:"Sedang",ingredients:["Kaldu tulang sumsum sapi beku (slow cook 12 jam)","3 sdm nasi amat lembek","1 sdm suwiran ayam debu matang"],instructions:["Panaskan balok es kaldu tulang sapi.","Siram kaldu panas ke nasi lembek mangkuk."],nutrition:"Kolagen regenerasi sel tidur lelap.",tips:"Beri training cup seruput kuah kaldu hangat."},
  {id:100,title:"Paha Ayam Rebus Jahe Empuk",category:"Makan Malam",age:"8+ Bulan",time:"45 Menit",difficulty:"Mudah",ingredients:["1 paha bawah ayam utuh","2 cm jahe geprek","1 bawang putih memarkan"],instructions:["Rebus paha ayam di panci bumbu jahe.","Api sangat kecil simmer tertutup 40 menit empuk lepas tulang."],nutrition:"Jahe cegah kembung kolik malam.",tips:"Beri tulang utuh menonjol bersih sebagai handle pegang. Awas tulang tajam."},
  {id:101,title:"Stik Ubi Ungu Saus Santan Daging",category:"Makan Malam",age:"9+ Bulan",time:"25 Menit",difficulty:"Sedang",ingredients:["100 gram ubi ungu empuk stik kukus","2 sdm daging cincang super lumat","2 sdm santan kental matang"],instructions:["Aduk santan kental dan daging cincang panci, angkat.","Tata stik ubi di piring.","Siram tuang tebal santan daging putih."],nutrition:"Lauric acid santan imun tinggi.",tips:"Stik memprul diselimuti saus berat."},
  {id:102,title:"Telur Ceplok Air (Poached Egg) Bayam",category:"Makan Malam",age:"8+ Bulan",time:"10 Menit",difficulty:"Mudah",ingredients:["1 telur ayam ras segar","1 genggam bayam rebus layu tanpa air"],instructions:["Didihkan air panci, KECILKAN API tenang panas.","Buat pusaran air, pecah telur di tengah. Matang 90% set.","Tumpuk telur hangat di atas bayam."],nutrition:"Rendah kolesterol jahat (tanpa minyak).",tips:"Potong membelah tebal telur dadu lumer tengah."},
  {id:103,title:"Patty Ikan Teri Nasi Kentang",category:"Makan Malam",age:"9+ Bulan",time:"25 Menit",difficulty:"Mudah",ingredients:["2 sdm teri nasi segar basah cincang","1 kentang kukus lumat","1 sdm seledri cacah"],instructions:["Campur kentang, teri basah, seledri.","Pipihkan patty pinggir membulat.","Panggang teflon seujung EVOO api sedang bawah balik sekali kering wangi."],nutrition:"Tinggi kalsium dentin gigi tidur.",tips:"Potong belah bulan sabit stik."},
  {id:104,title:"Sate Lilit Ayam Keju Kukus",category:"Makan Malam",age:"8+ Bulan",time:"25 Menit",difficulty:"Sedang",ingredients:["100 gram dada ayam halus","2 sdm keju parut kasar melt","4 kacang panjang rebus tebal/buncis"],instructions:["Campur ayam halus keju lumer tanpa air.","Lilit kepal ke ujung buncis rebus.","Kukus 15 menit keju merembes."],nutrition:"Gabungan keju padat ayam dan sayur utuh.",tips:"Tangkai kacang panjang aman dimakan penuh."},
  {id:105,title:"Risotto Nasi Merah Santan Ayam",category:"Makan Malam",age:"9+ Bulan",time:"40 Menit",difficulty:"Sedang",ingredients:["3 sdm nasi merah pera/semi kaku","150 ml santan encer gurih","Jamur kancing iris sangat halus","1 sdm ayam cincang lembut"],instructions:["Rebus santan mendidih tipis. Masukkan beras, ayam, jamur.","Terus masak api amat kecil (risotto) aduk tekan-tekan beras 30 menit.","Pecah merekah pati kental menyatu lumer."],nutrition:"Nasi merah lambat cerna gula stabil semalaman tidur.",tips:"Tumpuk bukit di mangkuk anti-slip cengkraman erat."}
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
          className="bg-white text-rose-500 px-5 py-2 rounded-full font-semibold text-sm shadow flex items-center gap-2 hover:bg-rose-50 transition-colors relative z-10"
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
          <span className="font-bold text-slate-800 text-lg">{recipesDB.length}</span>
          <span className="text-xs text-slate-500 font-medium">Resep Tersedia</span>
        </div>
        <div 
          onClick={() => setActiveTab('planner')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition"
        >
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center text-emerald-500 mb-2">
            <CalendarDays size={24} />
          </div>
          <span className="font-bold text-slate-800 text-lg">{plannerDB.length} Hari</span>
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
            <span className="text-xs font-bold text-rose-500 bg-rose-100 px-2 py-1 rounded-md">{recipesDB[0].category}</span>
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
        
        {/* Render 30 Hari Dinamis */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {plannerDB.map((dayPlan) => (
            <div key={dayPlan.day} className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="font-bold text-rose-500">Hari {dayPlan.day}</h3>
              </div>
              
              <div className="flex gap-3 items-center">
                <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Sarapan</div>
                <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">{dayPlan.meals.sarapan}</div>
              </div>
              
              {dayPlan.meals.snackPagi && (
                <div className="flex gap-3 items-center">
                  <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Snack</div>
                  <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">{dayPlan.meals.snackPagi}</div>
                </div>
              )}

              <div className="flex gap-3 items-center">
                <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Siang</div>
                <div className="flex-1 bg-rose-50 p-3 rounded-xl border border-rose-100 text-sm font-medium text-rose-700">{dayPlan.meals.siang}</div>
              </div>

              {dayPlan.meals.snackSore && (
                <div className="flex gap-3 items-center">
                  <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Snack</div>
                  <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">{dayPlan.meals.snackSore}</div>
                </div>
              )}

              <div className="flex gap-3 items-center">
                <div className="w-16 text-[10px] font-bold text-slate-400 uppercase text-right">Malam</div>
                <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">{dayPlan.meals.malam}</div>
              </div>
            </div>
          ))}
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

        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 px-4 py-4 flex justify-between items-center rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'home' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><Home size={22} strokeWidth={activeTab === 'home' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Beranda</span>
          </button>
          
          <button onClick={() => setActiveTab('recipes')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'recipes' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'recipes' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><BookOpen size={22} strokeWidth={activeTab === 'recipes' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Resep</span>
          </button>

          <button onClick={() => setActiveTab('planner')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'planner' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'planner' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><CalendarDays size={22} strokeWidth={activeTab === 'planner' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Jadwal</span>
          </button>

          <button onClick={() => setActiveTab('tips')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'tips' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
            <div className={`${activeTab === 'tips' ? 'bg-rose-100' : ''} p-2 rounded-xl`}><Info size={22} strokeWidth={activeTab === 'tips' ? 2.5 : 2} /></div>
            <span className="text-[10px] font-bold">Panduan</span>
          </button>

          <button onClick={() => setActiveTab('book')} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'book' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}>
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