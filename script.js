document.addEventListener("DOMContentLoaded", function () {
    const toggleContactBtn = document.getElementById("toggleContact");
    const contactInfo = document.querySelector(".contact address");

    let isContactVisible = false;

    toggleContactBtn.addEventListener("click", function () {
        if (isContactVisible) {
            contactInfo.style.display = "none";
            toggleContactBtn.textContent = "Show Contact";
        } else {
            contactInfo.style.display = "block";
            toggleContactBtn.textContent = "Hide Contact";
        }

        isContactVisible = !isContactVisible;
    });
});
