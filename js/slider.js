document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carouselExample"); // Replace with your carousel ID
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left → Next Slide
            document.querySelector(".carousel-control-next").click();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right → Previous Slide
            document.querySelector(".carousel-control-prev").click();
        }
    }
});
