const animals = [
  {id:1,name:"Thor",species:"cachorro",age:"2 anos",ageGroup:"adulto",size:"grande",city:"São Luís",image:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",description:"Thor é brincalhão, carinhoso e cheio de energia. Adora passeios e pessoas.",traits:["🐶 Cachorro","🎂 2 anos","📏 Grande","📍 São Luís"]},
  {id:2,name:"Luna",species:"gato",age:"1 ano",ageGroup:"adulto",size:"pequeno",city:"São Luís",image:"https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=85",description:"Luna é tranquila e carinhosa. Uma ótima companheira para quem procura uma gatinha amorosa.",traits:["🐱 Gata","🎂 1 ano","📏 Pequeno","📍 São Luís"]},
  {id:3,name:"Max",species:"cachorro",age:"3 anos",ageGroup:"adulto",size:"medio",city:"Paço do Lumiar",image:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=85",description:"Max é dócil, curioso e adora brincar. Está esperando uma família para chamar de sua.",traits:["🐶 Cachorro","🎂 3 anos","📏 Médio","📍 Paço do Lumiar"]},
  {id:4,name:"Mel",species:"cachorro",age:"7 meses",ageGroup:"filhote",size:"medio",city:"São José de Ribamar",image:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=85",description:"Mel é uma filhote alegre e muito carinhosa. Cheia de vontade de descobrir o mundo.",traits:["🐶 Cachorro","🎂 7 meses","📏 Médio","📍 São José de Ribamar"]},
  {id:5,name:"Nina",species:"gato",age:"8 meses",ageGroup:"filhote",size:"pequeno",city:"São Luís",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=85",description:"Nina é curiosa, delicada e gosta de receber carinho. Uma pequena companheira cheia de personalidade.",traits:["🐱 Gata","🎂 8 meses","📏 Pequeno","📍 São Luís"]},
  {id:6,name:"Bob",species:"cachorro",age:"5 anos",ageGroup:"adulto",size:"grande",city:"São Luís",image:"https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=85",description:"Bob é tranquilo e companheiro. Gosta de ambientes calmos e de estar perto das pessoas.",traits:["🐶 Cachorro","🎂 5 anos","📏 Grande","📍 São Luís"]},
  {id:7,name:"Amora",species:"gato",age:"2 anos",ageGroup:"adulto",size:"pequeno",city:"Raposa",image:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=85",description:"Amora é independente, mas não dispensa um bom carinho. Está pronta para conhecer seu novo lar.",traits:["🐱 Gata","🎂 2 anos","📏 Pequeno","📍 Raposa"]},
  {id:8,name:"Simba",species:"cachorro",age:"5 meses",ageGroup:"filhote",size:"medio",city:"São Luís",image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=85",description:"Simba é um filhote sociável e brincalhão. Tem muita energia e muito amor para oferecer.",traits:["🐶 Cachorro","🎂 5 meses","📏 Médio","📍 São Luís"]}
];

const grid = document.getElementById("animal-grid");
const searchInput = document.getElementById("searchInput");
const speciesFilter = document.getElementById("speciesFilter");
const ageFilter = document.getElementById("ageFilter");
const sizeFilter = document.getElementById("sizeFilter");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const favoritesFilter = document.getElementById("favoritesFilter");
const favoritesCount = document.getElementById("favoritesCount");

let showFavorites = false;
let selectedAnimal = null;
let favorites = JSON.parse(localStorage.getItem("adotae-favorites") || "[]");

function saveFavorites() {
  localStorage.setItem("adotae-favorites", JSON.stringify(favorites));
  updateFavoritesCount();
}

function updateFavoritesCount() {
  favoritesCount.textContent = favorites.length;
}

function isFavorite(id) {
  return favorites.includes(id);
}

function renderAnimals() {
  const term = searchInput.value.toLowerCase().trim();
  const species = speciesFilter.value;
  const age = ageFilter.value;
  const size = sizeFilter.value;

  const filtered = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(term);
    const matchesSpecies = species === "todos" || animal.species === species;
    const matchesAge = age === "todas" || animal.ageGroup === age;
    const matchesSize = size === "todos" || animal.size === size;
    const matchesFavorites = !showFavorites || isFavorite(animal.id);
    return matchesSearch && matchesSpecies && matchesAge && matchesSize && matchesFavorites;
  });

  resultsCount.textContent = filtered.length;
  grid.innerHTML = "";

  filtered.forEach((animal, index) => {
    const card = document.createElement("article");
    card.className = "animal-card";
    card.style.animationDelay = `${index * 45}ms`;
    card.innerHTML = `
      <div class="animal-photo">
        <img src="${animal.image}" alt="${animal.name}, ${animal.species} para adoção" loading="lazy">
        <button class="favorite ${isFavorite(animal.id) ? "liked" : ""}" data-id="${animal.id}" aria-label="${isFavorite(animal.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}">${isFavorite(animal.id) ? "♥" : "♡"}</button>
      </div>
      <div class="animal-info">
        <div><h3>${animal.name}</h3><p>${animal.species === "gato" ? "🐱 Gata" : "🐶 Cachorro"} • ${animal.age}</p></div>
      </div>
      <button class="profile-btn" data-profile="${animal.id}">Ver perfil</button>
    `;
    grid.appendChild(card);
  });

  emptyState.classList.toggle("hidden", filtered.length !== 0);
}

function openProfile(id) {
  const animal = animals.find(a => a.id === id);
  if (!animal) return;
  selectedAnimal = animal;
  document.getElementById("modalImage").src = animal.image;
  document.getElementById("modalImage").alt = animal.name;
  document.getElementById("modalSpecies").textContent = animal.species === "gato" ? "🐱 Gata para adoção" : "🐶 Cachorro para adoção";
  document.getElementById("modalName").textContent = animal.name;
  document.getElementById("modalDescription").textContent = animal.description;
  document.getElementById("modalDetails").innerHTML = animal.traits.map(t => `<span class="detail">${t}</span>`).join("");
  document.getElementById("profileModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
  if (document.querySelectorAll(".modal:not(.hidden)").length === 0) document.body.style.overflow = "";
}

function openAdoption() {
  closeModal("profileModal");
  document.getElementById("adoptionTitle").textContent = `Quero adotar a ${selectedAnimal?.name || "esse animal"}!`;
  document.getElementById("adoptionModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

[searchInput, speciesFilter, ageFilter, sizeFilter].forEach(el => el.addEventListener("input", renderAnimals));

grid.addEventListener("click", e => {
  const fav = e.target.closest(".favorite");
  const profile = e.target.closest(".profile-btn");

  if (fav) {
    const id = Number(fav.dataset.id);
    favorites = isFavorite(id) ? favorites.filter(x => x !== id) : [...favorites, id];
    saveFavorites();
    renderAnimals();
  }

  if (profile) openProfile(Number(profile.dataset.profile));
});

favoritesFilter.addEventListener("click", () => {
  showFavorites = !showFavorites;
  favoritesFilter.classList.toggle("active", showFavorites);
  renderAnimals();
});

document.getElementById("clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  speciesFilter.value = "todos";
  ageFilter.value = "todas";
  sizeFilter.value = "todos";
  showFavorites = false;
  favoritesFilter.classList.remove("active");
  renderAnimals();
});

document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.close));
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal(modal.id);
  });
});

document.getElementById("adoptButton").addEventListener("click", openAdoption);

document.getElementById("adoptionForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("adoptionForm").classList.add("hidden");
  document.getElementById("successMessage").classList.remove("hidden");
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("menu").classList.remove("open"));
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal:not(.hidden)").forEach(m => closeModal(m.id));
  }
});

updateFavoritesCount();
renderAnimals();
