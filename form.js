let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });

  // Toggle button visibility based on step
  if (backBtn) backBtn.style.display = index === 0 ? "none" : "inline-block";
  if (nextBtn) nextBtn.style.display = index === steps.length - 1 ? "none" : "inline-block";
  if (submitBtn) submitBtn.style.display = index === steps.length - 1 ? "inline-block" : "none";
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document.getElementById("multiStepForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

document.addEventListener("DOMContentLoaded", () => {
  showStep(currentStep);

  if (nextBtn) nextBtn.addEventListener("click", nextStep);
  if (backBtn) backBtn.addEventListener("click", prevStep);
});
function redirectToForm() {
  window.location.href = "form.html";
}
