// ================================
// ADOTAÊ — INTERAÇÕES
// ================================

// Corações dos animais
const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {

        if (heart.textContent === "♡") {
            heart.textContent = "♥";
            heart.classList.add("liked");
        } else {
            heart.textContent = "♡";
            heart.classList.remove("liked");
        }

    });
});


// Botões "Ver perfil"
const profileButtons = document.querySelectorAll(".animal-card button");

profileButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".animal-card");
        const name = card.querySelector("h3").textContent;

        alert(
            `🐾 ${name}\n\n` +
            `Em breve você poderá conhecer todos os detalhes ` +
            `desse animal e demonstrar interesse na adoção!`
        );

    });

});
