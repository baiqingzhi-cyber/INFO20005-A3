








const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");

const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalWeight = document.getElementById("modalWeight");
const modalDesc = document.getElementById("modalDesc");
const modalAllergens = document.getElementById("modalAllergens");
const modalStorage = document.getElementById("modalStorage");

function openModal (card) {
    const img = card.querySelector("img").src;
    const title = card.querySelector(".product-name").textContent;
    const price = card.querySelector(".price").textContent;
    const weight = card.querySelector(".spec").textContent;

    modalImg.src = img;
    modalTitle.textContent = title;
    modalPrice.textContent = price;
    modalWeight.textContent = weight;

    modalDesc.textContent = card.dataset.desc || "";
    modalAllergens.textContent = card.dataset.allergens || "";
    modalStorage.textContent = card.dataset.storage || "";

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const closeBtn = e.target.closest("#modalCloseBtn");

    if (closeBtn) {
        closeModal();
        return;
    }

    //click outside the card (overlay) to close
    if (e.target === modalOverlay) {
        closeModal();
        return;
    }

    // clicking on add button won't open overlay
    if (e.target.classList.contains("add-btn")) return;

    // click cards to open overlay
    if (card) {
        openModal(card);
    }
});

// press esc to close overlay
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

