
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "flex"; // Show modal
    modalImg.src = imageSrc; // Set modal image to the clicked image
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none"; // Hide modal
}
