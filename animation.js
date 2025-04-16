document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const socialSection = document.getElementById("social-section");
        socialSection.classList.remove("hidden");
        socialSection.classList.add("visible");
    }, 3000); // durée de ton animation de fumée
});

