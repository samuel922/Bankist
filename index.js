const modalEl = document.getElementById("modal");
const overlayEl = document.getElementById("overlay");
const closeModalBtn = document.getElementById("btn--close-modal");
const btnsShowModal = document.querySelectorAll(".btn--show-modal");
const breadCramb = document.getElementById("bredcramb");
const mobileNav = document.getElementById("mobile-nav");
const mobnavCloseBtn = document.querySelector(".close--mobnav-btn");
const header = document.querySelector(".header");

function openModal() {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
}

function closeModal() {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
  mobileNav.classList.add("hidden");
}

btnsShowModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);
overlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    closeModal();
  }
});

mobnavCloseBtn.addEventListener("click", function () {
  overlayEl.classList.add("hidden");
  mobileNav.style.left = "-340px";
  mobileNav.classList.add("hidden");
});

breadCramb.addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
  mobileNav.style.left = "0";
  mobileNav.style.transition = "all 1s";
  overlayEl.classList.remove("hidden");
});

// Insert cookie message

setTimeout(() => {
  const cookieMessage = document.createElement("div");
  cookieMessage.classList.add("cookie-message");
  cookieMessage.innerHTML = `
    We use cookies to improve our functionality and improve your user experience o the platform <button class="btn cookie__message--btn">Got it!</button>
`;

  header.prepend(cookieMessage);

  document.querySelector(".cookie__message--btn").addEventListener("click", function() {
    const messageDiv = document.querySelector(".cookie-message")
    messageDiv.style.transition = "display 1s"
    messageDiv.style.display = "none"

})
}, 3000);


