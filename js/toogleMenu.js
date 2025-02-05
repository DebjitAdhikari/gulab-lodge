document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const barsIcon = toggler.querySelector(".fa-bars");
    const closeIcon = toggler.querySelector(".fa-times");

    toggler.addEventListener("click", function () {
        if (toggler.classList.contains("collapsed")) {
            barsIcon.classList.remove("d-none");
            closeIcon.classList.add("d-none");
        } else {
            barsIcon.classList.add("d-none");
            closeIcon.classList.remove("d-none");
        }
    });
});
