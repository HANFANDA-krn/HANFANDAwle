const animals = [
  {
    name: "Aurora",
    species: "Panthera leo",
    emoji: "🦁",
    category: "Mamalia",
    bio: "Singa betina generasi ketiga yang memimpin 8 anggota kawanan HANFANDA. Aurora dilatih untuk patroli malam sehingga pengunjung dapat mempelajari perilaku berburu kolaboratif tanpa membuat satwa stres.",
    diet: "Karnivora (ungulata savana, suplementasi nutrisi rendah lemak)",
    habitat: "Savana Serengeti replika dengan kubah mikroklimat",
    region: "Savana Afrika Timur",
    status: "Rentang hidup rata-rata 18 tahun",
    conservation: "Rentan (IUCN Vulnerable)",
    tags: ["Patroli malam", "Pemimpin kawanan", "Pelatihan enrich"]
  },
  {
    name: "Nyala",
    species: "Tragelaphus angasii",
    emoji: "🦌",
    category: "Mamalia",
    bio: "Antelop betina yang menjadi duta interaksi publik. Nyala aktif dalam program feeding edukatif sehingga anak-anak dapat belajar tentang keseimbangan nutrisi herbivora besar.",
    diet: "Herbivora (daun muda, pucuk akasia, sayur hidroponik)",
    habitat: "Lereng sabana basah dengan jalur peneduh",
    region: "Afrika Selatan",
    status: "Rentang hidup 16 tahun",
    conservation: "Risiko Rendah (IUCN Least Concern)",
    tags: ["Feeding edukatif", "Herbivora adaptif", "Ikon family tour"]
  },
  {
    name: "Vela",
    species: "Delphinus delphis",
    emoji: "🐬",
    category: "Mamalia",
    bio: "Lumba-lumba betina yang menjadi primadona laboratorium perilaku kognitif. Vela merespons lebih dari 40 sinyal tangan dan menjadi contoh komunikasi interspesies.",
    diet: "Ichtivora (ikan kembung, capelin, suplementasi omega-3)",
    habitat: "Laguna laut buatan dengan sistem arus dinamis",
    region: "Perairan Atlantik Utara",
    status: "Rentang hidup 27 tahun",
    conservation: "Hampir Terancam (IUCN Near Threatened)",
    tags: ["Latihan kognitif", "Respon sonar", "Ambassador konservasi laut"]
  },
  {
    name: "Nimbus",
    species: "Harpia harpyja",
    emoji: "🦅",
    category: "Burung",
    bio: "Elang harpy berukuran spektakuler dengan bentang sayap 210 cm. Nimbus digunakan dalam simulasi berburu 3D untuk memperlihatkan adaptasi cakar terkuat di antara burung raptor.",
    diet: "Karnivora (mamalia arboreal, unggas ukuran menengah)",
    habitat: "Kanopi hutan hujan tropis bertingkat",
    region: "Amazon, Amerika Selatan",
    status: "Rentang hidup 35 tahun",
    conservation: "Rentan (IUCN Vulnerable)",
    tags: ["Predator arboreal", "Demo terbang hening", "Raptor raksasa"]
  },
  {
    name: "Lyra",
    species: "Paradisaea apoda",
    emoji: "🪶",
    category: "Burung",
    bio: "Cendrawasih jantan yang terkenal dengan tarian lintasan cahaya. Lyra tampil saat sesi sunrise showcase untuk menyoroti ritual pacaran unik dan pentingnya perlindungan hutan Papua.",
    diet: "Frugivora (buah ara, papaya hutan, serangga kaya protein)",
    habitat: "Kubikel hutan awan dengan pencahayaan spektral",
    region: "Papua Barat, Indonesia",
    status: "Rentang hidup 20 tahun",
    conservation: "Hampir Terancam (IUCN Near Threatened)",
    tags: ["Tarian cahaya", "Maskot Papua", "Ritual pacaran"]
  },
  {
    name: "Echo",
    species: "Strigops habroptilus",
    emoji: "🦜",
    category: "Burung",
    bio: "Burung kakapo yang tidak bisa terbang namun sangat vokal. Echo jadi contoh program konservasi kolaboratif dengan Selandia Baru untuk satwa endemik yang nyaris punah.",
    diet: "Herbivora (daun pohon rimu, kulit kayu lunak, pelet khusus)",
    habitat: "Habitat tanah lembap dengan gua buatan",
    region: "Pulau bagian selatan Selandia Baru",
    status: "Rentang hidup 60 tahun",
    conservation: "Kritis (IUCN Critically Endangered)",
    tags: ["Nocturnal", "Konservasi global", "Panggilan infrasonik"]
  },
  {
    name: "Zephyr",
    species: "Varanus komodoensis",
    emoji: "🦎",
    category: "Reptil",
    bio: "Komodo jantan yang lahir dari program pertukaran plasma nutfah. Zephyr menjalani latihan stimulasi penciuman untuk menjaga naluri berburu sekaligus mengukur kemampuan metabolik reptil raksasa.",
    diet: "Karnivora (daging kelinci, kambing, enrich darah beku)",
    habitat: "Savanna kering dengan batu vulkanik",
    region: "Nusa Tenggara Timur, Indonesia",
    status: "Rentang hidup 30 tahun",
    conservation: "Rentan (IUCN Vulnerable)",
    tags: ["Indera penciuman", "Reptil purba", "Ikon Nusantara"]
  },
  {
    name: "Ember",
    species: "Crocodylus porosus",
    emoji: "🐊",
    category: "Reptil",
    bio: "Buaya muara betina dengan panjang 4.2 meter. Ember adalah subjek utama pada studi pengukuran gaya gigitan dan perancangan penghalang aman bagi pengunjung.",
    diet: "Karnivora (ikan lele, unggas air, daging merah beku)",
    habitat: "Laguna payau dengan bakau mini",
    region: "Garis pantai Australia Utara dan Asia Tenggara",
    status: "Rentang hidup 70 tahun",
    conservation: "Risiko Rendah (IUCN Least Concern)",
    tags: ["Raja bakau", "Studi gaya gigitan", "Respons suhu air"]
  },
  {
    name: "Aqua",
    species: "Ambystoma mexicanum",
    emoji: "🦎",
    category: "Amfibi",
    bio: "Axolotl putih albino yang menjadi bintang laboratorium regenerasi. Aqua menumbuhkan kembali jaringan setelah prosedur mikro sehingga pengunjung bisa menyaksikan proses penyembuhan unik amfibi.",
    diet: "Karnivora (udang air tawar, cacing sutra, pelet protein tinggi)",
    habitat: "Laguna Xochimilco replika dengan suhu 15°C",
    region: "Meksiko Tengah",
    status: "Rentang hidup 15 tahun",
    conservation: "Kritis (IUCN Critically Endangered)",
    tags: ["Regenerasi ekstrem", "Penelitian sel punca", "Ikon edukasi STEM"]
  },
  {
    name: "Moss",
    species: "Litoria caerulea",
    emoji: "🐸",
    category: "Amfibi",
    bio: "Katak pohon hijau yang tahan terhadap perubahan lingkungan. Moss membantu simulasi dampak urbanisasi pada populasi amfibi melalui sensor kelembapan yang ditanam di terariumnya.",
    diet: "Insektivora (jangkrik, larva lalat tentara, suplementasi kalsium)",
    habitat: "Kanopi lembap dengan kabut terjadwal",
    region: "Australia dan Papua Nugini",
    status: "Rentang hidup 16 tahun",
    conservation: "Risiko Rendah (IUCN Least Concern)",
    tags: ["Sensor mikroklima", "Adaptasi urban", "Amfibi hardy"]
  },
  {
    name: "Coral",
    species: "Cheilinus undulatus",
    emoji: "🐠",
    category: "Pisces",
    bio: "Ikan napoleon yang menjadi wajah kampanye penyelamatan terumbu karang. Coral dilengkapi tag akustik untuk memantau pola renang dan penggunaan ruang dalam akuarium karang hidup.",
    diet: "Karnivora (moluska, bivalvia, kerang sisik, pelet laut premium)",
    habitat: "Terumbu karang buatan dengan sirkulasi air Laut Flores",
    region: "Samudra Pasifik Barat & Lautan Hindia",
    status: "Rentang hidup 32 tahun",
    conservation: "Terancam Punah (IUCN Endangered)",
    tags: ["Penjaga karang", "Tag akustik", "Program restorasi"]
  },
  {
    name: "Rift",
    species: "Manta birostris",
    emoji: "🛸",
    category: "Pisces",
    bio: "Pari manta samudra yang direhabilitasi dari jerat plastik. Rift kini memimpin sesi edukasi ‘Ocean Giants’ untuk menyoroti ancaman sampah laut bagi megafauna.",
    diet: "Planktivora (zooplankton, krill, kultur plankton mikro)",
    habitat: "Laguna luas dengan arus laminar",
    region: "Samudra Hindia dan Pasifik",
    status: "Rentang hidup 40 tahun",
    conservation: "Rentan (IUCN Vulnerable)",
    tags: ["Ekologi pelagik", "Rehabilitasi laut", "Ocean Giants"]
  },
  {
    name: "Lumen",
    species: "Architeuthis dux",
    emoji: "🦑",
    category: "Invertebrata",
    bio: "Cumi raksasa bebatuan yang jarang terlihat. Lumen berada di tangki kolom vertikal untuk meniru kedalaman laut. Sensor bioluminesensnya membantu riset komunikasi invertebrata laut dalam.",
    diet: "Karnivora (ikan pelagik kecil, krustasea laut dalam, gel peptida)",
    habitat: "Kolom air 30 meter dengan suhu 6°C",
    region: "Samudra Atlantik Utara & Pasifik Utara",
    status: "Rentang hidup 5 tahun",
    conservation: "Data Kurang (IUCN Data Deficient)",
    tags: ["Bioluminesensi", "Laut dalam", "Invertebrata raksasa"]
  },
  {
    name: "Saffron",
    species: "Danaus plexippus",
    emoji: "🦋",
    category: "Invertebrata",
    bio: "Kupu-kupu raja yang menjalani siklus hidup lengkap di dome penangkaran. Saffron menjadi penghubung edukasi migrasi jarak jauh dan pentingnya koridor bunga liar.",
    diet: "Nektar bunga liar dan tanaman inang spesifik (Asclepias)",
    habitat: "Dome bunga native dengan kontrol iklim",
    region: "Amerika Utara (migrasi Kanada–Meksiko)",
    status: "Rentang hidup 9 bulan (generasi migrasi)",
    conservation: "Terancam (IUCN Endangered)",
    tags: ["Migrasi panjang", "Koridor bunga liar", "Siklus metamorfosis"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("animalGrid");
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-button");
  const emptyState = document.getElementById("emptyState");

  function renderCards(list) {
    grid.innerHTML = "";

    if (!list.length) {
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;

    list.forEach((animal) => {
      const {
        name,
        species,
        emoji,
        category,
        bio,
        diet,
        habitat,
        region,
        status,
        conservation,
        tags
      } = animal;

      const card = document.createElement("article");
      card.className = "animal-card";

      const metaItems = [
        { label: "Diet", value: diet },
        { label: "Habitat", value: habitat },
        { label: "Wilayah", value: region },
        { label: "Status", value: status },
        { label: "Konservasi", value: conservation }
      ]
        .map(
          (item) => `
          <div class="animal-meta-item">
            <span class="meta-label">${item.label}</span>
            <span class="meta-value">${item.value}</span>
          </div>`
        )
        .join("");

      const tagItems = tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");

      card.innerHTML = `
        <div class="animal-avatar" aria-hidden="true">${emoji}</div>
        <span class="chip">${category}</span>
        <h4>${name}</h4>
        <p class="species">${species}</p>
        <p class="animal-bio">${bio}</p>
        <div class="animal-meta">
          ${metaItems}
        </div>
        <div class="tags">
          ${tagItems}
        </div>
      `;

      grid.appendChild(card);
    });
  }

  function applyFilters() {
    const keyword = searchInput.value.trim().toLowerCase();
    const activeCategoryBtn = document.querySelector(".filter-button.active");
    const category = activeCategoryBtn ? activeCategoryBtn.dataset.category : "semua";

    const filtered = animals.filter((item) => {
      const matchesCategory = category === "semua" || item.category === category;
      const baseText = [
        item.name,
        item.species,
        item.bio,
        item.diet,
        item.habitat,
        item.region,
        item.status,
        item.conservation,
        ...item.tags
      ]
        .join(" ")
        .toLowerCase();

      const matchesKeyword = baseText.includes(keyword);

      return matchesCategory && matchesKeyword;
    });

    renderCards(filtered);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      applyFilters();
    });
  });

  searchInput.addEventListener("input", applyFilters);

  renderCards(animals);
});

function scrollToCollection() {
  const section = document.getElementById("koleksi");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
