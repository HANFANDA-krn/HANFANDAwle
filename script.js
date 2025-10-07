/* =========================================================
   HANFANDA — Data, Peta Interaktif, dan Fitur
   ========================================================= */

// Data bawaan (angka/sebaran bersifat perkiraan untuk tampilan)
const baseAnimals = [
  {
    id: "harimau",
    emoji: "🐯",
    name: "Harimau",
    latin: "Panthera tigris",
    habitat: "Hutan hujan, sabana, lahan basah Asia",
    diet: "Karnivora (rusa, babi hutan, kerbau muda)",
    status: "Terancam Punah",
    lifespan: 15,
    weightKg: 220,
    length: "2.7–3.1 m",
    tags: ["Asia", "Karnivora", "Kucing Besar"],
    facts: [
      "Garis pada harimau unik seperti sidik jari manusia.",
      "Perenang yang andal dan senang berada di air.",
      "Auman dapat terdengar hingga beberapa kilometer."
    ],
    teaser: "Sang pemburu sunyi dengan garis khas dan langkah lembut.",
    ranges: [
      { label:"India", lat:22.5, lng:79.5, r:600 },
      { label:"Siberia Timur", lat:46, lng:134, r:500 },
      { label:"Sumatra", lat:-1.65, lng:103.6, r:280 }
    ]
  },
  {
    id: "gajah",
    emoji: "🐘",
    name: "Gajah",
    latin: "Elephas maximus / Loxodonta africana",
    habitat: "Hutan, sabana, padang rumput Afrika & Asia",
    diet: "Herbivora (rumput, daun, kulit kayu)",
    status: "Rentan",
    lifespan: 60,
    weightKg: 4000,
    length: "2.5–4 m (tinggi bahu)",
    tags: ["Herbivora", "Afrika", "Asia", "Mamalia Besar"],
    facts: [
      "Memori kuat; struktur sosial matriarkal.",
      "Komunikasi infrasonik menempuh jarak jauh.",
      "Belalai terdiri dari puluhan ribu otot."
    ],
    teaser: "Raksasa lembut yang super cerdas dan sosial.",
    ranges: [
      { label:"Afrika Sub-Sahara", lat:-2, lng:23, r:1400 },
      { label:"Asia Selatan–Tenggara", lat:10, lng:100, r:1200 }
    ]
  },
  {
    id: "serigala",
    emoji: "🐺",
    name: "Serigala Abu-abu",
    latin: "Canis lupus",
    habitat: "Hutan, tundra, pegunungan, padang rumput belahan utara",
    diet: "Karnivora (ungulata kecil–menengah)",
    status: "Risiko Rendah",
    lifespan: 13,
    weightKg: 50,
    length: "1.0–1.6 m",
    tags: ["Karnivora", "Sosial", "Belahan Utara"],
    facts: [
      "Berburu berkelompok dengan strategi kooperatif.",
      "Melolong memperkuat ikatan dan menandai wilayah.",
      "Sangat adaptif pada berbagai iklim."
    ],
    teaser: "Pemimpin kawanan dengan koordinasi tinggi.",
    ranges: [
      { label:"Kanada", lat:56, lng:-106, r:1200 },
      { label:"Eurasia Utara", lat:60, lng:90, r:1400 }
    ]
  },
  {
    id: "kanguru",
    emoji: "🦘",
    name: "Kanguru",
    latin: "Macropus spp.",
    habitat: "Semak belukar, padang rumput Australia",
    diet: "Herbivora (rumput, daun)",
    status: "Risiko Rendah",
    lifespan: 20,
    weightKg: 85,
    length: "1.0–1.8 m (tinggi)",
    tags: ["Australia", "Marsupial", "Pelompat"],
    facts: [
      "Lompatan hemat energi berkat tendon elastis.",
      "Anak (joey) berkembang di kantong.",
      "Ekor kuat membantu keseimbangan."
    ],
    teaser: "Atlet pelompat dengan ‘suspensi alami’.",
    ranges: [
      { label:"Australia", lat:-25, lng:133, r:1500 }
    ]
  },
  {
    id: "panda",
    emoji: "🐼",
    name: "Panda Raksasa",
    latin: "Ailuropoda melanoleuca",
    habitat: "Hutan bambu pegunungan Tiongkok",
    diet: "Herbivora (bambu), kadang serangga/ketam kecil",
    status: "Rentan",
    lifespan: 20,
    weightKg: 100,
    length: "1.2–1.9 m",
    tags: ["Asia", "Herbivora", "Ikonik"],
    facts: [
      "Memiliki ‘jempol palsu’ untuk menggenggam bambu.",
      "Warna hitam-putih bantu kamuflase dan sinyal sosial.",
      "Banyak waktu dihabiskan untuk makan bambu."
    ],
    teaser: "Si tenang hitam‑putih yang gemar bambu.",
    ranges: [
      { label:"Sichuan", lat:31.5, lng:103.5, r:220 }
    ]
  },
  {
    id: "komodo",
    emoji: "🦎",
    name: "Komodo",
    latin: "Varanus komodoensis",
    habitat: "Savanna & hutan kering Nusa Tenggara, Indonesia",
    diet: "Karnivora (bangkai, mamalia, burung)",
    status: "Rentan",
    lifespan: 30,
    weightKg: 70,
    length: "2–3 m",
    tags: ["Indonesia", "Reptil", "Apex"],
    facts: [
      "Kadal terbesar dunia, gigitan beracun.",
      "Penciuman tajam; lidah bercabang mendeteksi bau.",
      "Mampu berlari cepat jarak pendek."
    ],
    teaser: "Predator purba kebanggaan Nusantara.",
    ranges: [
      { label:"Pulau Komodo", lat:-8.57, lng:119.48, r:50 },
      { label:"Rinca", lat:-8.66, lng:119.73, r:40 },
      { label:"Flores Barat", lat:-8.71, lng:120.58, r:80 }
    ]
  },
  {
    id: "beruang",
    emoji: "🐻",
    name: "Beruang Cokelat",
    latin: "Ursus arctos",
    habitat: "Hutan boreal, pegunungan, tundra",
    diet: "Omnivora (buah, ikan, mamalia kecil)",
    status: "Risiko Rendah",
    lifespan: 25,
    weightKg: 350,
    length: "1.2–2.8 m",
    tags: ["Omnivora", "Belahan Utara", "Soliter"],
    facts: [
      "Hibernasi musiman untuk hemat energi.",
      "Cakar kuat untuk menggali dan menangkap ikan.",
      "Penciuman sangat tajam."
    ],
    teaser: "Raksasa berbulu yang pemalu namun kuat.",
    ranges: [
      { label:"Alaska", lat:61, lng:-150, r:900 },
      { label:"Rusia", lat:60, lng:100, r:1400 },
      { label:"Skandinavia", lat:62, lng:15, r:600 }
    ]
  }
];

// Peringkat status (untuk pengurutan)
const statusRank = { "Punah":0, "Kritis":1, "Terancam Punah":2, "Rentan":3, "Hampir Terancam":4, "Risiko Rendah":5 };

// Elemen
const els = {
  cards: document.getElementById("cards"),
  search: document.getElementById("search"),
  sort: document.getElementById("sort"),
  density: document.getElementById("density"),
  favOnly: document.getElementById("favOnly"),
  openCompare: document.getElementById("openCompare"),
  compareCount: document.getElementById("compareCount"),
  openQuiz: document.getElementById("openQuiz"),
  themeSelect: document.getElementById("themeSelect"),
  motion: document.getElementById("motion"),
  empty: document.getElementById("empty"),
  clearSearch: document.getElementById("clearSearch"),
  shareFav: document.getElementById("shareFav"),
  shareFavFooter: document.getElementById("shareFavFooter"),
  openHelp: document.getElementById("openHelp"),

  modal: document.getElementById("modal"),
  modalTitle: document.getElementById("modalTitle"),
  modalLatin: document.getElementById("modalLatin"),
  modalHabitat: document.getElementById("modalHabitat"),
  modalDiet: document.getElementById("modalDiet"),
  modalStatus: document.getElementById("modalStatus"),
  modalLifespan: document.getElementById("modalLifespan"),
  modalWeight: document.getElementById("modalWeight"),
  modalLength: document.getElementById("modalLength"),
  modalFacts: document.getElementById("modalFacts"),
  modalIcon: document.getElementById("modalIcon"),

  compareModal: document.getElementById("compareModal"),
  compareTable: document.getElementById("compareTable"),
  clearSelected: document.getElementById("clearSelected"),

  quizModal: document.getElementById("quizModal"),
  quizHints: document.getElementById("quizHints"),
  quizHint: document.getElementById("quizHint"),
  quizSkip: document.getElementById("quizSkip"),
  quizGuess: document.getElementById("quizGuess"),
  quizCheck: document.getElementById("quizCheck"),
  quizFeedback: document.getElementById("quizFeedback"),
  quizScore: document.getElementById("quizScore"),

  helpModal: document.getElementById("helpModal"),
  toast: document.getElementById("toast"),

  // Peta
  mapSection: document.getElementById("mapSection"),
  mapContainer: document.getElementById("map"),
  toggleMap: document.getElementById("toggleMap"),
  showMarkers: document.getElementById("showMarkers"),
  showRanges: document.getElementById("showRanges"),
  locateMe: document.getElementById("locateMe"),
  fitAll: document.getElementById("fitAll"),

  // Tambah/Import/Export
  openAdd: document.getElementById("openAdd"),
  addModal: document.getElementById("addModal"),
  addForm: document.getElementById("addForm"),
  btnExport: document.getElementById("btnExport"),
  btnImport: document.getElementById("btnImport"),
  importFile: document.getElementById("importFile"),
  btnResetData: document.getElementById("btnResetData"),
};

// Penyimpanan
const storage = {
  get(k, d){ try{ return JSON.parse(localStorage.getItem(k)) ?? d; }catch{ return d; } },
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
};

// State, favorit, pilihan
let favorites = new Set(storage.get("favorites", []));
let selected = new Set(storage.get("selected", []));
let state = Object.assign(
  { query:"", sort:"name-asc", dense:false, favOnly:false, theme:"dark", motion:true, mapOn:true, showMarkers:true, showRanges:true },
  storage.get("state", {})
);

// Terapkan preferensi awal
document.documentElement.setAttribute("data-theme", state.theme);
document.documentElement.setAttribute("data-motion", state.motion ? "on" : "off");
els.themeSelect.value = state.theme;
els.motion.setAttribute("aria-pressed", String(state.motion));
els.motion.textContent = `Gerak: ${state.motion ? "On" : "Off"}`;
els.favOnly.setAttribute("aria-pressed", String(state.favOnly));
els.toggleMap.textContent = `Peta: ${state.mapOn ? "On" : "Off"}`;
if(!state.mapOn) els.mapSection.classList.add("hidden");
els.showMarkers.checked = state.showMarkers;
els.showRanges.checked = state.showRanges;

// Dataset: gabungkan custom dengan base
const customAnimals = storage.get("customAnimals", []);
let animals = [...baseAnimals, ...customAnimals];

// Util
function formatKg(kg){ return new Intl.NumberFormat('id-ID').format(kg) + " kg"; }
function formatYears(y){ return y + " tahun"; }
function normalize(s){ return (s||"").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim(); }
const slug = s => normalize(s).replace(/\s+/g,'-').replace(/-+/g,'-');

// Pengurutan dan pencocokan
function bySort(a,b){
  switch(state.sort){
    case "name-asc": return a.name.localeCompare(b.name, 'id');
    case "name-desc": return b.name.localeCompare(a.name, 'id');
    case "status": return (statusRank[a.status] ?? 9) - (statusRank[b.status] ?? 9);
    case "weight": return b.weightKg - a.weightKg;
    case "lifespan": return b.lifespan - a.lifespan;
    default: return 0;
  }
}
function matchesQuery(an, q){
  if(!q) return true;
  const hay = (an.name+" "+an.latin+" "+an.habitat+" "+an.diet+" "+an.tags.join(" ")).toLowerCase();
  return hay.includes(q.toLowerCase());
}

/* =========================================================
   PETA — Leaflet
   ========================================================= */
let map, markerLayer, rangeLayer, mapIndex = {}, userMarker, routeLine;

function initMap(){
  map = L.map(els.mapContainer, {
    worldCopyJump: true,
    zoomControl: true
  }).setView([10, 20], 2);

  L.tileLayer(
    // CartoDB Dark Matter
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    { attribution:'© OpenStreetMap, © CARTO' }
  ).addTo(map);

  markerLayer = L.layerGroup().addTo(map);
  rangeLayer = L.layerGroup().addTo(map);

  buildMapLayers();
  fitAllBounds();
}

function buildMapLayers(){
  markerLayer.clearLayers();
  rangeLayer.clearLayers();
  mapIndex = {};

  animals.forEach(an=>{
    const groupMarkers = [];
    const groupRanges = [];
    (an.ranges||[]).forEach(r=>{
      const m = L.marker([r.lat, r.lng], { title: an.name })
        .on('click', ()=> openModal(an))
        .bindTooltip(`${an.emoji} ${an.name} — ${r.label}`, { sticky:true });
      groupMarkers.push(m);

      const c = L.circle([r.lat, r.lng], {
        radius: (r.r||r.radius||200)*1000,
        color: "#7f8ba6",
        weight: 1,
        opacity: 0.7,
        fillColor: "#aeb6c9",
        fillOpacity: 0.12
      }).bindTooltip(`Sebaran ± ${r.r||r.radius} km • ${r.label}`);
      groupRanges.push(c);
    });

    mapIndex[an.id] = { markers: groupMarkers, ranges: groupRanges };
    groupMarkers.forEach(m=> markerLayer.addLayer(m));
    groupRanges.forEach(c=> rangeLayer.addLayer(c));
  });

  applyLayerVisibility();
}

function applyLayerVisibility(){
  if(state.showMarkers){ if(!map.hasLayer(markerLayer)) map.addLayer(markerLayer); }
  else{ if(map.hasLayer(markerLayer)) map.removeLayer(markerLayer); }

  if(state.showRanges){ if(!map.hasLayer(rangeLayer)) map.addLayer(rangeLayer); }
  else{ if(map.hasLayer(rangeLayer)) map.removeLayer(rangeLayer); }
}

function fitAllBounds(){
  const bounds = [];
  Object.values(mapIndex).forEach(g=>{
    g.markers.forEach(m=> bounds.push(m.getLatLng()));
    g.ranges.forEach(c=> bounds.push(c.getLatLng()));
  });
  if(bounds.length){
    const b = L.latLngBounds(bounds);
    map.fitBounds(b.pad(0.2));
  }
}

function focusAnimalOnMap(id){
  const entry = mapIndex[id];
  if(!entry || !entry.markers.length){ toast("Tidak ada lokasi peta untuk hewan ini."); return; }
  const latlngs = entry.markers.map(m=> m.getLatLng());
  const b = L.latLngBounds(latlngs);
  map.fitBounds(b.pad(0.6), { maxZoom: 6 });
  // beri kilau kecil
  entry.markers.forEach(m=>{
    const el = m._icon; if(!el) return;
    el.animate([{ transform:"scale(1)" }, { transform:"scale(1.2)" }, { transform:"scale(1)" }], { duration:450 });
  });
}

// Sinkronkan visibilitas peta dengan hasil filter
function updateMapVisibility(filteredList){
  const visibleIds = new Set(filteredList.map(a=>a.id));
  animals.forEach(an=>{
    const entry = mapIndex[an.id];
    if(!entry) return;
    const show = visibleIds.has(an.id);
    entry.markers.forEach(m=> show ? markerLayer.addLayer(m) : markerLayer.removeLayer(m));
    entry.ranges.forEach(c=> show ? rangeLayer.addLayer(c) : rangeLayer.removeLayer(c));
  });
}

// Haversine (km)
function distanceKm(a,b){
  const toRad = d=> d*Math.PI/180;
  const R = 6371;
  const dLat = toRad(b.lat-a.lat);
  const dLng = toRad(b.lng-a.lng);
  const la1 = toRad(a.lat), la2 = toRad(b.lat);
  const h = Math.sin(dLat/2)**2 + Math.cos(la1)*Math.cos(la2)*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}

async function locateNearest(){
  if(!navigator.geolocation){ toast("Geolokasi tidak didukung browser."); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    const you = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    if(userMarker){ map.removeLayer(userMarker); }
    if(routeLine){ map.removeLayer(routeLine); }
    userMarker = L.marker(you, { title:"Lokasimu" }).addTo(map).bindTooltip("Lokasi Anda").openTooltip();

    // Cari habitat terdekat (jarak ke centroid setiap lokasi)
    let best = { an:null, range:null, dist: Infinity };
    animals.forEach(an=>{
      (an.ranges||[]).forEach(r=>{
        const d = distanceKm(you, { lat:r.lat, lng:r.lng });
        if(d < best.dist){ best = { an, range:r, dist:d }; }
      });
    });

    if(best.an){
      routeLine = L.polyline([you, { lat:best.range.lat, lng:best.range.lng }], { color:"#7fb0ff", weight:2, opacity:.8 }).addTo(map);
      map.fitBounds(L.latLngBounds([you, { lat:best.range.lat, lng:best.range.lng }]).pad(0.3));
      toast(`Terdekat: ${best.an.name} di ${best.range.label} (~${Math.round(best.dist)} km)`);
    }else{
      toast("Tidak menemukan habitat terdekat.");
    }
  }, ()=>{
    toast("Izin lokasi ditolak.");
  }, { enableHighAccuracy:true, timeout:8000 });
}

/* =========================================================
   RENDER KARTU
   ========================================================= */
function render(){
  const list = animals
    .filter(an => matchesQuery(an, state.query))
    .filter(an => state.favOnly ? favorites.has(an.id) : true)
    .sort(bySort);

  els.cards.innerHTML = "";
  if(list.length === 0){
    els.empty.classList.remove("hidden");
  } else {
    els.empty.classList.add("hidden");
    const frag = document.createDocumentFragment();
    list.forEach(an => frag.appendChild(cardTemplate(an)));
    els.cards.appendChild(frag);
    revealObserve();
  }

  // sinkron peta
  if(state.mapOn && map) updateMapVisibility(list);
}

function cardTemplate(an){
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role","button");
  card.setAttribute("aria-label", `Detail ${an.name}`);

  const favPressed = favorites.has(an.id);
  const selPressed = selected.has(an.id);

  card.innerHTML = `
    <button class="action fav" aria-pressed="${favPressed}" title="${favPressed?"Hapus dari":"Tambahkan ke"} favorit" data-id="${an.id}" data-action="fav">★</button>
    <button class="action select" aria-pressed="${selPressed}" title="${selPressed?"Batal pilih":"Pilih untuk bandingkan"}" data-id="${an.id}" data-action="select">⇄</button>
    <button class="action mapfocus" title="Fokus di peta" data-id="${an.id}" data-action="map">📍</button>
    <div class="card-inner">
      <div class="card-top">
        <div class="avatar" aria-hidden="true">${an.emoji}</div>
        <div class="title">
          <div class="name">${an.name}</div>
          <div class="latin">${an.latin}</div>
        </div>
      </div>

      <div class="meta">
        ${an.tags.map(t => `<span class="chip">${t}</span>`).join("")}
      </div>

      <p class="desc">${an.teaser}</p>

      <div class="stats">
        <div class="kv"><span class="k">Status</span><span class="v">${an.status}</span></div>
        <div class="kv"><span class="k">Berat</span><span class="v">${formatKg(an.weightKg)}</span></div>
        <div class="kv"><span class="k">Umur</span><span class="v">${formatYears(an.lifespan)}</span></div>
      </div>
    </div>
  `;

  // Event: buka modal detail
  const open = () => openModal(an);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e)=>{ if(e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });

  // Hentikan propagasi kalau klik tombol aksi
  card.querySelectorAll(".action").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      handleAction(btn.dataset.action, btn.dataset.id, btn);
    });
  });

  return card;
}

function handleAction(action, id, btn){
  if(action === "fav"){
    toggleFavorite(id);
    btn.setAttribute("aria-pressed", String(favorites.has(id)));
  } else if(action === "select"){
    toggleSelect(id);
    btn.setAttribute("aria-pressed", String(selected.has(id)));
  } else if(action === "map"){
    if(!state.mapOn){ state.mapOn = true; els.mapSection.classList.remove("hidden"); els.toggleMap.textContent = "Peta: On"; persistState(); }
    focusAnimalOnMap(id);
    window.scrollTo({ top: els.mapSection.offsetTop - 70, behavior: state.motion ? "smooth" : "auto" });
  }
  updateCompareUI();
}

/* =========================================================
   MODAL DETAIL
   ========================================================= */
function openModal(an){
  els.modalTitle.textContent = an.name;
  els.modalLatin.textContent = an.latin;
  els.modalHabitat.textContent = an.habitat;
  els.modalDiet.textContent = an.diet;
  els.modalStatus.textContent = an.status;
  els.modalLifespan.textContent = formatYears(an.lifespan);
  els.modalWeight.textContent = formatKg(an.weightKg);
  els.modalLength.textContent = an.length;
  els.modalIcon.textContent = an.emoji;
  els.modalFacts.innerHTML = (an.facts||[]).map(f=> `<li>${f}</li>`).join("");
  els.modal.classList.remove("hidden");
  setTimeout(()=> els.modalTitle.focus(), 50);
}
function closeModal(){ document.querySelectorAll(".modal").forEach(m=> m.classList.add("hidden")); }

/* =========================================================
   FAVORIT, BANDINKAN, KUIS
   ========================================================= */
function toggleFavorite(id){
  if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
  storage.set("favorites", [...favorites]); shareButtonsVisibility();
}
function shareButtonsVisibility(){
  const anyFav = favorites.size > 0;
  [els.shareFav, els.shareFavFooter].forEach(b=>{ if(b) b.disabled = !anyFav; });
}
function toggleSelect(id){
  if(selected.has(id)) selected.delete(id);
  else{
    if(selected.size >= 4){ toast("Maksimal 4 hewan untuk dibandingkan."); return; }
    selected.add(id);
  }
  storage.set("selected", [...selected]);
}
function updateCompareUI(){
  els.compareCount.textContent = selected.size;
  els.openCompare.disabled = selected.size < 2;
}
function openCompare(){
  const sel = animals.filter(a => selected.has(a.id));
  if(sel.length < 2){ toast("Pilih minimal 2 hewan."); return; }

  const cols = sel.length;
  const grid = document.createElement("div");
  grid.className = "grid";
  grid.style.gridTemplateColumns = `200px repeat(${cols}, 1fr)`;

  const headerRow = document.createElement("div");
  headerRow.style.display = "contents";
  const corner = document.createElement("div");
  corner.className = "kv";
  corner.innerHTML = `<span class="k">Hewan</span>`;
  headerRow.appendChild(corner);

  sel.forEach(an=>{
    const cell = document.createElement("div");
    cell.className = "kv";
    cell.innerHTML = `<div style="display:flex; align-items:center; gap:10px;">
      <div class="avatar" aria-hidden="true" style="width:40px;height:40px;border-radius:10px;font-size:22px;">${an.emoji}</div>
      <div><div class="name" style="font-weight:800">${an.name}</div>
      <div class="latin mono" style="color:var(--muted);font-size:12px;">${an.latin}</div></div></div>`;
    headerRow.appendChild(cell);
  });
  grid.appendChild(headerRow);

  const fields = [
    { k:"status", label:"Status", fmt:v=>v },
    { k:"weightKg", label:"Berat", fmt:formatKg },
    { k:"lifespan", label:"Umur", fmt:formatYears },
    { k:"length", label:"Panjang", fmt:v=>v },
    { k:"habitat", label:"Habitat", fmt:v=>v },
    { k:"diet", label:"Makanan", fmt:v=>v },
    { k:"tags", label:"Tag", fmt:(arr)=>arr.join(", ") }
  ];

  for(const f of fields){
    const row = document.createElement("div");
    row.style.display = "contents";
    const labelCell = document.createElement("div");
    labelCell.className = "kv";
    labelCell.innerHTML = `<span class="k">${f.label}</span>`;
    row.appendChild(labelCell);

    sel.forEach(an=>{
      const cell = document.createElement("div");
      cell.className = "kv";
      const val = f.k === "tags" ? f.fmt(an.tags) : f.fmt(an[f.k]);
      cell.innerHTML = `<span class="v">${val}</span>`;
      row.appendChild(cell);
    });

    grid.appendChild(row);
  }

  els.compareTable.innerHTML = "";
  els.compareTable.appendChild(grid);
  els.compareModal.classList.remove("hidden");
}

// Kuis
const quizState = {
  current: null,
  hints: [],
  shown: 0,
  score: storage.get("quizScore", { right:0, total:0 })
};
function startQuiz(){
  const pool = animals;
  const an = pool[Math.floor(Math.random()*pool.length)];
  quizState.current = an; quizState.shown = 0;

  const baseHints = [
    `Habitat: ${an.habitat}`,
    `Makanan: ${an.diet}`,
    `Status: ${an.status}`,
    `Panjang/Tinggi: ${an.length}`,
    ...(an.facts||[])
  ];
  quizState.hints = shuffle(baseHints).slice(0,4);
  els.quizHints.innerHTML = "";
  revealNextHint();
  updateQuizScore();
  els.quizFeedback.textContent = "";
  els.quizGuess.value = "";
  setTimeout(()=> els.quizGuess.focus(), 50);
}
function revealNextHint(){
  if(quizState.shown >= quizState.hints.length){ toast("Semua petunjuk sudah tampil."); return; }
  const li = document.createElement("li");
  li.textContent = quizState.hints[quizState.shown++];
  els.quizHints.appendChild(li);
}
function checkGuess(){
  const g = normalize(els.quizGuess.value);
  if(!g){ toast("Tulis tebakanmu dulu ya."); return; }
  const name = normalize(quizState.current.name);
  const latin = normalize(quizState.current.latin);
  const id = normalize(quizState.current.id);

  quizState.score.total++;
  if(g && (name.includes(g) || g.includes(name) || latin.includes(g) || id.includes(g))){
    quizState.score.right++;
    els.quizFeedback.textContent = `Benar! Itu ${quizState.current.name} ${quizState.current.emoji}`;
    els.quizFeedback.style.color = "var(--accent-2)";
  }else{
    els.quizFeedback.textContent = `Belum tepat. Jawabannya: ${quizState.current.name} ${quizState.current.emoji}`;
    els.quizFeedback.style.color = "var(--muted)";
  }
  storage.set("quizScore", quizState.score);
  updateQuizScore();
  setTimeout(()=>{ startQuiz(); }, 1100);
}
function updateQuizScore(){ els.quizScore.textContent = `${quizState.score.right}/${quizState.score.total}`; }
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

/* =========================================================
   TAMBAH / IMPORT / EXPORT
   ========================================================= */
function addAnimalFromForm(fd){
  const an = {
    id: slug(fd.get("name")),
    emoji: fd.get("emoji") || "🐾",
    name: fd.get("name"),
    latin: fd.get("latin"),
    habitat: fd.get("habitat"),
    diet: fd.get("diet"),
    status: fd.get("status"),
    lifespan: Number(fd.get("lifespan")),
    weightKg: Number(fd.get("weightKg")),
    length: fd.get("length"),
    tags: (fd.get("tags")||"").split(",").map(s=>s.trim()).filter(Boolean),
    facts: (fd.get("facts")||"").split("
").map(s=>s.trim()).filter(Boolean),
    teaser: fd.get("teaser") || "",
    ranges: (fd.get("ranges")||"").split("
").map(line=>{
      const [lat,lng,r,label] = line.split(",").map(s=>s.trim());
      if(!lat || !lng || !r) return null;
      return { lat: Number(lat), lng:Number(lng), r: Number(r), label: label || "Sebaran" };
    }).filter(Boolean)
  };
  if(animals.find(x=>x.id===an.id)){ an.id = an.id + "-" + (Math.random().toString(36).slice(2,6)); }
  animals.push(an);
  customAnimals.push(an);
  storage.set("customAnimals", customAnimals);
  buildMapLayers();
  render();
  toast("Hewan ditambahkan!");
}

function exportJSON(){
  const blob = new Blob([JSON.stringify(animals, null, 2)], { type:"application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "hanfanda-animals.json"; a.click();
  URL.revokeObjectURL(url);
}

function importJSON(file){
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const arr = JSON.parse(reader.result);
      if(!Array.isArray(arr)) throw new Error("Format harus array");
      let added=0;
      arr.forEach(o=>{
        if(!o.name) return;
        const id = o.id || slug(o.name);
        const exists = animals.find(x=>x.id===id);
        if(!exists){
          const an = {
            id,
            emoji: o.emoji || "🐾",
            name: o.name,
            latin: o.latin || "",
            habitat: o.habitat || "",
            diet: o.diet || "",
            status: o.status || "Risiko Rendah",
            lifespan: Number(o.lifespan || 1),
            weightKg: Number(o.weightKg || 1),
            length: o.length || "",
            tags: (o.tags||[]),
            facts: (o.facts||[]),
            teaser: o.teaser || "",
            ranges: (o.ranges||[])
          };
          animals.push(an);
          customAnimals.push(an);
          added++;
        }
      });
      storage.set("customAnimals", customAnimals);
      buildMapLayers();
      render();
      toast(`Import selesai: ${added} hewan ditambahkan.`);
    }catch(e){
      toast("Gagal import JSON.");
    }
  };
  reader.readAsText(file);
}

function resetData(){
  if(!confirm("Reset data kustom dan favorit?")) return;
  storage.set("customAnimals", []);
  storage.set("favorites", []);
  storage.set("selected", []);
  favorites.clear(); selected.clear();
  animals = [...baseAnimals];
  buildMapLayers();
  render();
  toast("Data direset.");
}

/* =========================================================
   PARALLAX LATAR, REVEAL, TOAST, PERSIST
   ========================================================= */
const bgLayers = [...document.querySelectorAll(".bg-layer")];
window.addEventListener("pointermove", (e)=>{
  if(document.documentElement.getAttribute("data-motion")==="off") return;
  const { innerWidth:w, innerHeight:h } = window;
  const x = (e.clientX - w/2) / w;
  const y = (e.clientY - h/2) / h;
  bgLayers.forEach((layer, i)=>{
    const depth = (i+1) * 1.2;
    layer.style.transform = `translate3d(${x*depth*8}px, ${y*depth*6}px, 0)`;
  });
});

let observer;
function revealObserve(){
  if(observer){ observer.disconnect(); }
  observer = new IntersectionObserver((entries)=>{
    for(const ent of entries){
      if(ent.isIntersecting){
        if(document.documentElement.getAttribute("data-motion")!=="off"){
          ent.target.animate(
            [{ opacity:.0, transform:"translateY(8px)" }, { opacity:1, transform:"translateY(0)" }],
            { duration:260, easing:"cubic-bezier(.22,.61,.36,1)", fill:"both" }
          );
        }else{
          ent.target.style.opacity = 1;
        }
        observer.unobserve(ent.target);
      }
    }
  }, { threshold:.12 });
  document.querySelectorAll(".card").forEach(el => observer.observe(el));
}

let toastTimer;
function toast(msg){
  els.toast.textContent = msg;
  els.toast.classList.remove("hidden");
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ els.toast.classList.remove("show"); }, 1600);
}

function persistState(){ storage.set("state", state); }

/* =========================================================
   EVENT BINDINGS
   ========================================================= */
els.search.addEventListener("input", (e)=>{ state.query = e.target.value.trim(); persistState(); render(); });
els.sort.addEventListener("change", (e)=>{ state.sort = e.target.value; persistState(); render(); });
els.clearSearch.addEventListener("click", ()=>{ state.query=""; els.search.value=""; persistState(); render(); });

els.density.addEventListener("click", ()=>{
  state.dense = !state.dense;
  document.documentElement.style.setProperty("--radius-xl", state.dense? "14px":"22px");
  document.documentElement.style.setProperty("--radius-md", state.dense? "8px":"14px");
  els.density.setAttribute("aria-pressed", String(state.dense));
  persistState();
});

els.favOnly.addEventListener("click", ()=>{
  state.favOnly = !state.favOnly;
  els.favOnly.setAttribute("aria-pressed", String(state.favOnly));
  persistState(); render();
});

els.openCompare.addEventListener("click", openCompare);
els.clearSelected.addEventListener("click", ()=>{
  selected.clear();
  storage.set("selected", []);
  updateCompareUI(); render();
});

els.openQuiz.addEventListener("click", ()=>{
  startQuiz();
  els.quizModal.classList.remove("hidden");
});

els.quizHint.addEventListener("click", revealNextHint);
els.quizSkip.addEventListener("click", startQuiz);
els.quizCheck.addEventListener("click", checkGuess);
els.quizGuess.addEventListener("keydown", (e)=>{ if(e.key==="Enter") checkGuess(); });

els.themeSelect.addEventListener("change", ()=>{
  state.theme = els.themeSelect.value;
  document.documentElement.setAttribute("data-theme", state.theme);
  persistState();
});

els.motion.addEventListener("click", ()=>{
  state.motion = !state.motion;
  document.documentElement.setAttribute("data-motion", state.motion ? "on" : "off");
  els.motion.setAttribute("aria-pressed", String(state.motion));
  els.motion.textContent = `Gerak: ${state.motion ? "On" : "Off"}`;
  persistState();
});

[els.shareFav, els.shareFavFooter].forEach(btn=>{
  if(!btn) return;
  btn.addEventListener("click", ()=>{
    if(favorites.size===0){ toast("Belum ada favorit yang dipilih."); return; }
    const u = new URL(location.href);
    u.searchParams.set("fav", [...favorites].join(","));
    navigator.clipboard.writeText(u.toString())
      .then(()=> toast("Tautan favorit disalin!"))
      .catch(()=> toast("Gagal menyalin tautan."));
  });
});

els.openHelp.addEventListener("click", ()=> els.helpModal.classList.remove("hidden"));
document.body.addEventListener("click", (e)=>{ if(e.target.matches("[data-close], .modal-backdrop")) closeModal(); });

window.addEventListener("keydown", (e)=>{
  const tag = (document.activeElement && document.activeElement.tagName) || "";
  const inInput = ["INPUT","TEXTAREA","SELECT"].includes(tag);
  if(e.key === "/" && !inInput){ e.preventDefault(); els.search.focus(); return; }
  if(e.key === "Escape"){ closeModal(); return; }
  if(inInput) return;
  if(e.key.toLowerCase()==="f"){ state.favOnly = !state.favOnly; els.favOnly.setAttribute("aria-pressed", String(state.favOnly)); persistState(); render(); }
  if(e.key.toLowerCase()==="c"){ openCompare(); }
  if(e.key.toLowerCase()==="q"){ startQuiz(); els.quizModal.classList.remove("hidden"); }
  if(e.key === "?"){ els.helpModal.classList.remove("hidden"); }
});

// Peta controls
els.toggleMap.addEventListener("click", ()=>{
  state.mapOn = !state.mapOn;
  els.toggleMap.textContent = `Peta: ${state.mapOn ? "On" : "Off"}`;
  els.mapSection.classList.toggle("hidden", !state.mapOn);
  persistState();
  if(state.mapOn && !map){ // inisialisasi pertama kali
    setTimeout(initMap, 0);
  }
});
els.showMarkers.addEventListener("change", ()=>{
  state.showMarkers = els.showMarkers.checked; persistState(); applyLayerVisibility();
});
els.showRanges.addEventListener("change", ()=>{
  state.showRanges = els.showRanges.checked; persistState(); applyLayerVisibility();
});
els.locateMe.addEventListener("click", locateNearest);
els.fitAll.addEventListener("click", fitAllBounds);

// Tambah / import / export
els.openAdd.addEventListener("click", ()=> els.addModal.classList.remove("hidden"));
els.addForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const fd = new FormData(els.addForm);
  addAnimalFromForm(fd);
  els.addModal.classList.add("hidden");
  els.addForm.reset();
});
els.btnExport.addEventListener("click", exportJSON);
els.btnImport.addEventListener("click", ()=> els.importFile.click());
els.importFile.addEventListener("change", ()=>{ const f = els.importFile.files[0]; if(f) importJSON(f); els.importFile.value=""; });
els.btnResetData.addEventListener("click", resetData);

/* =========================================================
   INISIALISASI
   ========================================================= */
shareButtonsVisibility();
updateCompareUI();
render();
if(state.mapOn){ initMap(); }

// Query param ?fav=...
const params = new URLSearchParams(location.search);
if(params.has("fav")){
  params.get("fav").split(",").map(s=>s.trim()).forEach(id => favorites.add(id));
  storage.set("favorites", [...favorites]);
  shareButtonsVisibility();
}
