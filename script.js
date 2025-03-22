document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const url = card.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });

        // Hover effect animation
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });
});
