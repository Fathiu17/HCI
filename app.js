// ================= MODAL =================
function openModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

window.addEventListener("click", function(e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});

// ================= DONATION =================
let currentDonation = 1500;
const goal = 5000;

function updateDonation(amount) {
    currentDonation += amount;
    if (currentDonation > goal) currentDonation = goal;

    document.getElementById("donationAmount").innerText = currentDonation;

    const percentage = (currentDonation / goal) * 100;
    document.getElementById("donationBar").style.width = percentage + "%";
}

// Initialize donation bar
window.onload = function() {
    const percentage = (currentDonation / goal) * 100;
    document.getElementById("donationBar").style.width = percentage + "%";
};
