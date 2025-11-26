// ================== PACKAGE DATA ==================
const packages = [
    { id: 1, destination: "Shibuya / Shinjuku", durationDays: 3, basePrice: 299, season: "winter" },
    { id: 2, destination: "Asakusa / Ueno", durationDays: 4, basePrice: 399, season: "summer" },
    { id: 3, destination: "Odaiba / Akihabara", durationDays: 5, basePrice: 499, season: "spring" },
    { id: 4, destination: "Full Tokyo City", durationDays: 7, basePrice: 699, season: "autumn" }
];

// ================== PRICE LOGIC ==================
function calculateFinalPrice(base, season) {
    let final = base;

    switch (season) {
        case "winter": final *= 1.1; break;
        case "summer": final *= 1.2; break;
        case "spring": final *= 1.05; break;
        case "autumn": final *= 1.15; break;
    }
    return Math.round(final);
}


// ================== RENDER PACKAGE TABLE ==================
const tableBody = document.getElementById("package-table-body");
if (tableBody) {
    packages.forEach(pkg => {
        const finalPrice = calculateFinalPrice(pkg.basePrice, pkg.season);
        const row = `
            <tr>
                <td>${pkg.id}</td>
                <td>${pkg.destination}</td>
                <td>${pkg.durationDays} Days</td>
                <td>$${pkg.basePrice}</td>
                <td>$${finalPrice}</td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}

// ================== BOOKING PRICE ESTIMATOR ==================
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const promo = document.getElementById("promo");
const totalPriceEl = document.getElementById("totalPrice");
const submitBtn = document.getElementById("submitBtn");
function updatePrice() {
    if (!checkIn.value || !checkOut.value) return;

    const nights = (new Date(checkOut.value) - new Date(checkIn.value)) / (1000 * 3600 * 24);
    if (nights <= 0) {
        totalPriceEl.innerHTML = "Total: Invalid Dates";
        submitBtn.disabled = true;
        return;
    }

    let price = nights * 100; // base per night

    // promo code discount using switch
    switch (promo.value.toUpperCase()) {
        case "EARLYBIRD": price *= 0.9; break;
        case "VIP": price *= 0.8; break;
    }

    totalPriceEl.innerHTML = `Total: $${Math.round(price)}`;
    submitBtn.disabled = false;
}
if (checkIn) {
    checkIn.addEventListener("change", updatePrice);
    checkOut.addEventListener("change", updatePrice);
    promo.addEventListener("input", updatePrice);
}
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");

const galleryImages = document.querySelectorAll("[data-large]");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.dataset.large;
        modalCaption.innerText = img.alt;
    });
});

if (closeModal) {
    closeModal.onclick = () => modal.style.display = "none";
}

// Close modal when clicking outside the image
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Close modal when pressing Escape key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        e.preventDefault();
        e.stopPropagation();     // prevents bubbling
        modal.style.display = "none";
    }
});


const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#ffcc00"; // active state
    }
});