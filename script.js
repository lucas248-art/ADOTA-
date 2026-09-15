/* ========================================
   ADOTAÊ — SCRIPT PRINCIPAL
======================================== */


/* ========================================
   DADOS DOS ANIMAIS
======================================== */

const animals = [
    {
        id: 1,
        name: "Thor",
        species: "cachorro",
        age: "2 anos",
        ageGroup: "adulto",
        size: "grande",
        city: "São Luís",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",
        description:
            "Thor é brincalhão, carinhoso e cheio de energia. Adora passeios e pessoas.",
        traits: [
            "🐶 Cachorro",
            "🎂 2 anos",
            "📏 Grande",
            "📍 São Luís"
        ]
    },

    {
        id: 2,
        name: "Luna",
        species: "gato",
        age: "1 ano",
        ageGroup: "adulto",
        size: "pequeno",
        city: "São Luís",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=85",
        description:
            "Luna é tranquila e carinhosa. Uma ótima companheira para quem procura uma gatinha amorosa.",
        traits: [
            "🐱 Gata",
            "🎂 1 ano",
            "📏 Pequeno",
            "📍 São Luís"
        ]
    },

    {
        id: 3,
        name: "Max",
        species: "cachorro",
        age: "3 anos",
        ageGroup: "adulto",
        size: "medio",
        city: "Paço do Lumiar",
        image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=85",
        description:
            "Max é dócil, curioso e adora brincar. Está esperando uma família para chamar de sua.",
        traits: [
            "🐶 Cachorro",
            "🎂 3 anos",
            "📏 Médio",
            "📍 Paço do Lumiar"
        ]
    },

    {
        id: 4,
        name: "Mel",
        species: "cachorro",
        age: "7 meses",
        ageGroup: "filhote",
        size: "medio",
        city: "São José de Ribamar",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=85",
        description:
            "Mel é uma filhote alegre e muito carinhosa. Cheia de vontade de descobrir o mundo.",
        traits: [
            "🐶 Cachorro",
            "🎂 7 meses",
            "📏 Médio",
            "📍 São José de Ribamar"
        ]
    },

    {
        id: 5,
        name: "Nina",
        species: "gato",
        age: "8 meses",
        ageGroup: "filhote",
        size: "pequeno",
        city: "São Luís",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=85",
        description:
            "Nina é curiosa, delicada e gosta de receber carinho. Uma pequena companheira cheia de personalidade.",
        traits: [
            "🐱 Gata",
            "🎂 8 meses",
            "📏 Pequeno",
            "📍 São Luís"
        ]
    },

    {
        id: 6,
        name: "Bob",
        species: "cachorro",
        age: "5 anos",
        ageGroup: "adulto",
        size: "grande",
        city: "São Luís",
        image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=85",
        description:
            "Bob é tranquilo e companheiro. Gosta de ambientes calmos e de estar perto das pessoas.",
        traits: [
            "🐶 Cachorro",
            "🎂 5 anos",
            "📏 Grande",
            "📍 São Luís"
        ]
    },

    {
        id: 7,
        name: "Amora",
        species: "gato",
        age: "2 anos",
        ageGroup: "adulto",
        size: "pequeno",
        city: "Raposa",
        image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=85",
        description:
            "Amora é independente, mas não dispensa um bom carinho. Está pronta para conhecer seu novo lar.",
        traits: [
            "🐱 Gata",
            "🎂 2 anos",
            "📏 Pequeno",
            "📍 Raposa"
        ]
    },

    {
        id: 8,
        name: "Simba",
        species: "cachorro",
        age: "5 meses",
        ageGroup: "filhote",
        size: "medio",
        city: "São Luís",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=85",
        description:
            "Simba é um filhote sociável e brincalhão. Tem muita energia e muito amor para oferecer.",
        traits: [
            "🐶 Cachorro",
            "🎂 5 meses",
            "📏 Médio",
            "📍 São Luís"
        ]
    }
];


/* ========================================
   ELEMENTOS DA PÁGINA
======================================== */

const grid = document.getElementById("animal-grid");

const searchInput = document.getElementById("searchInput");

const speciesFilter = document.getElementById("speciesFilter");

const ageFilter = document.getElementById("ageFilter");

const sizeFilter = document.getElementById("sizeFilter");

const resultsCount = document.getElementById("resultsCount");

const emptyState = document.getElementById("emptyState");

const favoritesFilter = document.getElementById("favoritesFilter");

const favoritesCount = document.getElementById("favoritesCount");

const clearFilters = document.getElementById("clearFilters");

const profileModal = document.getElementById("profileModal");

const adoptionModal = document.getElementById("adoptionModal");

const modalImage = document.getElementById("modalImage");

const modalSpecies = document.getElementById("modalSpecies");

const modalName = document.getElementById("modalName");

const modalDescription = document.getElementById("modalDescription");

const modalDetails = document.getElementById("modalDetails");

const adoptButton = document.getElementById("adoptButton");

const adoptionForm = document.getElementById("adoptionForm");

const successMessage = document.getElementById("successMessage");

const menuToggle = document.getElementById("menuToggle");

const menu = document.getElementById("menu");


/* ========================================
   ESTADO DO SITE
======================================== */

let showFavorites = false;

let selectedAnimal = null;


/* ========================================
   FAVORITOS
======================================== */

let favorites = JSON.parse(
    localStorage.getItem("adotae-favorites") || "[]"
);


/* ========================================
   SALVAR FAVORITOS
======================================== */

function saveFavorites() {

    localStorage.setItem(
        "adotae-favorites",
        JSON.stringify(favorites)
    );

    updateFavoritesCount();
}


/* ========================================
   ATUALIZAR CONTADOR
======================================== */

function updateFavoritesCount() {

    if (!favoritesCount) {
        return;
    }

    favoritesCount.textContent = favorites.length;
}


/* ========================================
   VERIFICAR SE É FAVORITO
======================================== */

function isFavorite(id) {

    return favorites.includes(id);
}


/* ========================================
   RENDERIZAR ANIMAIS
======================================== */

function renderAnimals() {

    if (!grid) {
        return;
    }

    const term =
        searchInput.value
            .toLowerCase()
            .trim();

    const species =
        speciesFilter.value;

    const age =
        ageFilter.value;

    const size =
        sizeFilter.value;


    const filteredAnimals =
        animals.filter((animal) => {

            const matchesSearch =
                animal.name
                    .toLowerCase()
                    .includes(term);


            const matchesSpecies =
                species === "todos" ||
                animal.species === species;


            const matchesAge =
                age === "todas" ||
                animal.ageGroup === age;


            const matchesSize =
                size === "todos" ||
                animal.size === size;


            const matchesFavorites =
                !showFavorites ||
                isFavorite(animal.id);


            return (
                matchesSearch &&
                matchesSpecies &&
                matchesAge &&
                matchesSize &&
                matchesFavorites
            );

        });


    /* Limpa os cards anteriores */

    grid.innerHTML = "";


    /* Atualiza quantidade */

    if (resultsCount) {
        resultsCount.textContent =
            filteredAnimals.length;
    }


    /* Se não encontrou */

    if (emptyState) {

        emptyState.classList.toggle(
            "hidden",
            filteredAnimals.length !== 0
        );

    }


    /* Cria os cards */

    filteredAnimals.forEach(
        (animal, index) => {

            const card =
                document.createElement("article");

            card.className =
                "animal-card";

            card.style.animationDelay =
                `${index * 45}ms`;


            const favorite =
                isFavorite(animal.id);


            card.innerHTML = `

                <div class="animal-photo">

                    <img
                        src="${animal.image}"
                        alt="${animal.name}, ${animal.species} para adoção"
                        loading="lazy"
                    >

                    <button
                        class="favorite ${favorite ? "liked" : ""}"
                        data-id="${animal.id}"
                        aria-label="${
                            favorite
                                ? "Remover dos favoritos"
                                : "Adicionar aos favoritos"
                        }"
                    >
                        ${favorite ? "♥" : "♡"}
                    </button>

                </div>


                <div class="animal-info">

                    <div>

                        <h3>
                            ${animal.name}
                        </h3>

                        <p>
                            ${
                                animal.species === "gato"
                                    ? "🐱 Gata"
                                    : "🐶 Cachorro"
                            }

                            • ${animal.age}
                        </p>

                    </div>

                </div>


                <button
                    class="profile-btn"
                    data-profile="${animal.id}"
                >
                    Ver perfil
                </button>

            `;


            grid.appendChild(card);

        }
    );
}


/* ========================================
   ABRIR PERFIL
======================================== */

function openProfile(id) {

    const animal =
        animals.find(
            (item) => item.id === id
        );


    if (!animal) {
        return;
    }


    selectedAnimal = animal;


    /* Imagem */

    modalImage.src =
        animal.image;

    modalImage.alt =
        `Foto de ${animal.name}`;


    /* Espécie */

    modalSpecies.textContent =
        animal.species === "gato"
            ? "🐱 Gata para adoção"
            : "🐶 Cachorro para adoção";


    /* Nome */

    modalName.textContent =
        animal.name;


    /* Descrição */

    modalDescription.textContent =
        animal.description;


    /* Características */

    modalDetails.innerHTML =
        animal.traits
            .map(
                (trait) =>
                    `<span class="detail">${trait}</span>`
            )
            .join("");


    /* Abre modal */

    profileModal.classList.remove(
        "hidden"
    );


    /* Impede scroll */

    document.body.style.overflow =
        "hidden";
}


/* ========================================
   FECHAR MODAL
======================================== */

function closeModal(modal) {

    if (!modal) {
        return;
    }


    modal.classList.add(
        "hidden"
    );


    const openModals =
        document.querySelectorAll(
            ".modal:not(.hidden)"
        );


    if (openModals.length === 0) {

        document.body.style.overflow =
            "";

    }
}


/* ========================================
   ABRIR FORMULÁRIO DE ADOÇÃO
======================================== */

function openAdoption() {

    if (!selectedAnimal) {
        return;
    }


    closeModal(profileModal);


    document.getElementById(
        "adoptionTitle"
    ).textContent =
        `Quero adotar a ${selectedAnimal.name}!`;


    adoptionForm.classList.remove(
        "hidden"
    );


    successMessage.classList.add(
        "hidden"
    );


    adoptionModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";
}


/* ========================================
   EVENTOS DOS FILTROS
======================================== */

searchInput.addEventListener(
    "input",
    renderAnimals
);

speciesFilter.addEventListener(
    "change",
    renderAnimals
);

ageFilter.addEventListener(
    "change",
    renderAnimals
);

sizeFilter.addEventListener(
    "change",
    renderAnimals
);


/* ========================================
   CLIQUES NOS CARDS
======================================== */

grid.addEventListener(
    "click",
    (event) => {

        const favoriteButton =
            event.target.closest(
                ".favorite"
            );


        const profileButton =
            event.target.closest(
                ".profile-btn"
            );


        /* FAVORITO */

        if (favoriteButton) {

            const id =
                Number(
                    favoriteButton.dataset.id
                );


            if (isFavorite(id)) {

                favorites =
                    favorites.filter(
                        (favoriteId) =>
                            favoriteId !== id
                    );

            } else {

                favorites.push(id);

            }


            saveFavorites();

            renderAnimals();

            return;
        }


        /* PERFIL */

        if (profileButton) {

            const id =
                Number(
                    profileButton.dataset.profile
                );


            openProfile(id);

        }

    }
);


/* ========================================
   FILTRO DE FAVORITOS
======================================== */

favoritesFilter.addEventListener(
    "click",
    () => {

        showFavorites =
            !showFavorites;


        favoritesFilter.classList.toggle(
            "active",
            showFavorites
        );


        renderAnimals();

    }
);


/* ========================================
   LIMPAR FILTROS
======================================== */

clearFilters.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        speciesFilter.value =
            "todos";

        ageFilter.value =
            "todas";

        sizeFilter.value =
            "todos";

        showFavorites =
            false;


        favoritesFilter.classList.remove(
            "active"
        );


        renderAnimals();

    }
);


/* ========================================
   BOTÕES DE FECHAR MODAL
======================================== */

document
    .querySelectorAll("[data-close]")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const modalId =
                    button.dataset.close;

                const modal =
                    document.getElementById(
                        modalId
                    );

                closeModal(modal);

            }
        );

    });


/* ========================================
   FECHAR MODAL CLICANDO FORA
======================================== */

document
    .querySelectorAll(".modal")
    .forEach((modal) => {

        modal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === modal
                ) {

                    closeModal(modal);

                }

            }
        );

    });


/* ========================================
   BOTÃO "QUERO ADOTAR"
======================================== */

adoptButton.addEventListener(
    "click",
    openAdoption
);


/* ========================================
   FORMULÁRIO DE ADOÇÃO
======================================== */

adoptionForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        adoptionForm.classList.add(
            "hidden"
        );


        successMessage.classList.remove(
            "hidden"
        );

    }
);


/* ========================================
   MENU MOBILE
======================================== */

menuToggle.addEventListener(
    "click",
    () => {

        menu.classList.toggle(
            "open"
        );

    }
);


/* ========================================
   FECHAR MENU AO CLICAR EM LINK
======================================== */

document
    .querySelectorAll(".menu a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "open"
                );

            }
        );

    });


/* ========================================
   TECLA ESC FECHA MODAIS
======================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        document
            .querySelectorAll(
                ".modal:not(.hidden)"
            )
            .forEach((modal) => {

                closeModal(modal);

            });

    }
);


/* ========================================
   INICIALIZAÇÃO
======================================== */

updateFavoritesCount();

renderAnimals();
