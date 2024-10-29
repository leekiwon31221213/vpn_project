const paymentButtons = document.querySelectorAll(".payment-btn-box button");

paymentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paymentButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
