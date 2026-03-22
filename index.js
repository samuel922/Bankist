const modalEl = document.getElementById("modal")
const overlayEl = document.getElementById("overlay")
const closeModalBtn = document.getElementById("btn--close-modal")
const btnsShowModal = document.querySelectorAll(".btn--show-modal")

function openModal() {
    modalEl.classList.remove("hidden")
    overlayEl.classList.remove("hidden")
}

function closeModal() {
    modalEl.classList.add("hidden")
    overlayEl.classList.add("hidden")
}


btnsShowModal.forEach((btn) => {
    btn.addEventListener("click", openModal)
})

closeModalBtn.addEventListener("click", closeModal)
overlayEl.addEventListener("click", closeModal)

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
        closeModal()
    }
})




