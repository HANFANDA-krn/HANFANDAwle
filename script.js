const animals = [
  {
    emoji: "🐅",
    name: "Harimau Sumatra",
    species: "Panthera tigris sumatrae",
    category: "Mamalia",
    habitat: "Hutan hujan tropis Sumatra",
    diet: "Karnivora (rusa, babi hutan, primata)",
    character: "Lincah, soliter, dan sangat protektif",
    funFact: "Lorengnya paling rapat dibanding subspecies harimau lain."
  },
  {
    emoji: "🦧",
    name: "Orangutan Kalimantan",
    species: "Pongo pygmaeus",
    category: "Mamalia",
    habitat: "Kanopi hutan tropis Kalimantan",
    diet: "Omnivora (buah, daun, serangga, madu)",
    character: "Pendiam, penyayang, dan pintar menggunakan alat",
    funFact: "Menghabiskan 90% waktunya di atas pohon."
  },
  {
    emoji: "🐘",
    name: "Gajah Asia",
    species: "Elephas maximus",
    category: "Mamalia",
    habitat: "Hutan tropis dan rawa Asia Tenggara",
    diet: "Herbivora (rumput, daun, kulit pohon, buah)",
    character: "Perasa, berkelompok, dan memiliki ingatan kuat",
    funFact: "Terkenal punya jaringan keluarga yang sangat erat."
  },
  {
    emoji: "🦬",
    name: "Anoa Pegunungan",
    species: "Bubalus quarlesi",
    category: "Mamalia",
    habitat: "Hutan pegunungan Sulawesi",
    diet: "Herbivora (rumput, daun muda, pakis)",
    character: "Tangguh, pemalu, dan aktif saat pagi hari",
    funFact: "Kerap disebut kerbau kerdil khas Sulawesi."
  },
  {
    emoji: "🦎",
    name: "Komodo",
    species: "Varanus komodoensis",
    category: "Reptil",
    habitat: "Padang savana dan hutan kering Nusa Tenggara Timur",
    diet: "Karnivora oportunis (bangkai, mamalia, burung)",
    character: "Tenang menunggu mangsa, tetapi meledak cepat saat menyerang",
    funFact: "Air liurnya mengandung lebih dari 50 jenis bakteri."
  },
  {
    emoji: "🐊",
    name: "Buaya Senyulong",
    species: "Tomistoma schlegelii",
    category: "Reptil",
    habitat: "Sungai gambut Kalimantan dan Sumatra",
    diet: "Ikan, moluska, dan mamalia kecil",
    character: "Penyergap sabar dengan rahang panjang",
    funFact: "Termasuk salah satu buaya terpanjang di Asia."
  },
  {
    emoji: "🦕",
    name: "Iguana Hijau",
    species: "Iguana iguana",
    category: "Reptil",
    habitat: "Hutan hujan Amerika Tengah dan Selatan",
    diet: "Herbivora (daun, bunga, buah)",
    character: "Santai, pencinta sinar matahari, dan jago memanjat",
    funFact: "Dapat berenang dan menahan napas hingga 30 menit."
  },
  {
    emoji: "🦜",
    name: "Kakatua Raja",
    species: "Probosciger aterrimus",
    category: "Burung",
    habitat: "Hutan hujan Papua dan Australia Utara",
    diet: "Biji-bijian, kacang-kacangan, dan buah hutan",
    character: "Cerdas, vokal, dan suka bersosialisasi",
    funFact: "Jambul besar dapat ditegakkan saat berkomunikasi."
  },
  {
    emoji: "🦩",
    name: "Flamingo Karibia",
    species: "Phoenicopterus ruber",
    category: "Burung",
    habitat: "Laguna garam Karibia dan Amerika Selatan",
    diet: "Alga mikro, udang kecil, larva",
    character: "Anggun, hidup berkelompok, dan senang berbaris",
    funFact: "Warna merah muda berasal dari pigmen karotenoid makanan."
  },
  {
    emoji: "🐦",
    name: "Burung Maleo",
    species: "Macrocephalon maleo",
    category: "Burung",
    habitat: "Hutan dan pantai Sulawesi",
    diet: "Serangga, buah, biji-bijian, dan siput darat",
    character: "Setia pada pasangan, rajin menggali pasir hangat",
    funFact: "Telurnya lima kali lebih besar daripada telur ayam!"
  },
  {
    emoji: "🐸",
    name: "Katak Bertanduk Suriname",
    species: "Ceratophrys cornuta",
    category: "Amfibi",
    habitat: "Hutan lembap dataran rendah Amerika Selatan",
    diet: "Serangga, invertebrata, kadal, hingga mamalia kecil",
    character: "Diam menunggu mangsa lewat, lalu menerkam kilat",
    funFact: "Mulutnya bisa terbuka lebar hampir setengah tubuhnya."
  },
  {
    emoji: "🦎",
    name: "Axolotl Meksiko",
    species: "Ambystoma mexicanum",
    category: "Amfibi",
    habitat: "Danau Xochimilco, Meksiko",
    diet: "Cacing, moluska, krustasea kecil",
    character: "Tenang, aktif malam hari, mudah penasaran",
    funFact: "Mampu meregenerasi anggota tubuh, bahkan bagian jantung."
  }
];

const animalGrid = document.getElementById("animalGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.getElementById("filterButtons");
const emptyState = document.getElementById("emptyState");

function createAnimalCard(animal) {
  const card = document.createElement("article");
  card.className = "animal-card";
  card.innerHTML = `
    <div class="animal-avatar">${animal.emoji}</div>
    <span class="chip">${animal.category}</span>
    <h4>${animal.name}</h4>
    <p class="species">${animal.species}</p>
    <div class="animal-meta">
      <div><strong>Habitat:</strong> ${animal.habitat}</div>
      <div><strong>Pola makan:</strong> ${animal.diet}</div>
      <div><strong>Karakter:</strong> ${animal.character}</div>
    </div>
    <div class="tags">
      <span class="tag">Fun Fact</span>
      <span class="tag">${animal.funFact}</span>
    </div>
  `;
  return card;
}

function renderAnimals(list) {
  animalGrid.innerHTML = "";
  if (list.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;
  list.forEach(animal => animalGrid.appendChild(createAnimalCard(animal)));
}

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const activeButton = filterButtons.querySelector(".filter-button.active");
  const activeCategory = activeButton ? activeButton.dataset.category : "semua";

  const filtered = animals.filter(animal => {
    const matchesCategory = activeCategory === "semua" || animal.category === activeCategory;
    const matchesKeyword =
      animal.name.toLowerCase().includes(keyword) ||
      animal.species.toLowerCase().includes(keyword);
    return matchesCategory && matchesKeyword;
  });

  renderAnimals(filtered);
}

filterButtons.addEventListener("click", event => {
  const target = event.target;
  if (!target.classList.contains("filter-button")) return;

  filterButtons.querySelectorAll(".filter-button")
    .forEach(button => button.classList.remove("active"));
  target.classList.add("active");
  applyFilters();
});

searchInput.addEventListener("input", () => {
  applyFilters();
});

function scrollToCollection() {
  document.getElementById("koleksi").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAnimals(animals);
});
