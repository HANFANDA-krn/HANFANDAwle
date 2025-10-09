const animals = [
  {
    name: "Aurora",
    species: "Panthera leo",
    emoji: "🦁",
    category: "Mamalia",
    diet: "Karnivora",
    habitat: "Savannah Prime",
    status: "Rentang hidup 18 tahun",
    tags: ["Nocturnal Watch", "Pride Leader", "Savannah"]
  },
  {
    name: "Nimbus",
    species: "Harpia harpyja",
    emoji: "🦅",
    category: "Burung",
    diet: "Karnivora",
    habitat: "Kanopi Amazon",
    status: "Sayap 2.1 m",
    tags: ["Aerial Predator", "Forest Guardian", "Silent Flight"]
  },
  {
    name: "Zephyr",
    species: "Varanus komodoensis",
    emoji: "🦎",
    category: "Reptil",
    diet: "Karnivora",
    habitat: "Pulau Komodo",
    status: "Berat 70 kg",
    tags: ["Ancient Bloodline", "Sun Basker", "Komodo Royalty"]
  },
  {
    name: "Lumia",
    species: "Cercopithecus mitis",
    emoji: "🐒",
    category: "Mamalia",
    diet: "Omnivora",
    habitat: "Hutan Hujan Afrika",
    status: "Koloni 14 individu",
    tags: ["Canopy Acrobat", "Social Learner", "Blue Fur"]
  },
  {
    name: "Aqua",
    species: "Ambystoma mexicanum",
    emoji: "🦎",
    category: "Amfibi",
    diet: "Karnivora",
    habitat: "Laguna Xochimilco",
    status: "Regenerasi ekstrem",
    tags: ["Regenerator", "Underwater Smiler", "Endangered"]
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

    list.forEach(({ name, species, emoji, category, diet, habitat, status, tags }) => {
      const card = document.createElement("article");
      card.className = "animal-card";

      card.innerHTML = `
        <div class="animal-avatar">${emoji}</div>
        <span class="chip">${category}</span>
        <h4>${name}</h4>
        <p class="species">${species}</p>
        <div class="animal-meta">
          <span><strong>Pola Makan:</strong> ${diet}</span>
          <span><strong>Habitat:</strong> ${habitat}</span>
          <span><strong>Catatan:</strong> ${status}</span>
        </div>
        <div class="tags">
          ${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      `;

      grid.appendChild(card);
    });
  }

  function applyFilters() {
    const keyword = searchInput.value.trim().toLowerCase();
    const activeCategoryBtn = document.querySelector(".filter-button.active");
    const category = activeCategoryBtn ? activeCategoryBtn.dataset.category : "semua";

    const filtered = animals.filter(item => {
      const matchesCategory = category === "semua" || item.category === category;
      const matchesKeyword =
        item.name.toLowerCase().includes(keyword) ||
        item.species.toLowerCase().includes(keyword) ||
        item.tags.some(tag => tag.toLowerCase().includes(keyword));
      return matchesCategory && matchesKeyword;
    });

    renderCards(filtered);
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
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
