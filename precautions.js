console.log(window);

const precautions = {
  "Hypertension": "Precaution for Disease is Maintain a healthy diet and regular exercise.",
  "Diabetes": "Precaution for Disease is Monitor blood sugar levels regularly.",
  "Asthma": "Precaution for Disease 3",
  "Cancer": "Precaution for Disease 4",
  "Anemia": "Precaution for Disease 5",
  "Heart Disease": "Precaution for Disease 6",
  "High Cholesterol": "Precaution for Disease 7",
  "Arthritis": "Precaution for Disease 8",
  "Migraines": "Precaution for Disease 9",
  "Osteoporosis": "Precaution for Disease 10",
  "Thyroid Disorders": "Precaution for Disease 11",
  "Gallstones": "Precaution for Disease 12",
  "Crohn's Disease": "Precaution for Disease 13",
  "Kidney Stones": "Precaution for Disease 14",
};

document.addEventListener("DOMContentLoaded", () => {
  const selectedDisease = localStorage.getItem("selectedDisease");
  const precautionsContent = document.getElementById("precautions-content");

  if (selectedDisease && precautions[selectedDisease]) {
    precautionsContent.innerHTML = `<p>${precautions[selectedDisease]}</p>`;
  } else {
    precautionsContent.innerHTML = `<p>No precautions available for the selected disease.</p>`;
  }
});

function goBack() {
  window.history.back();
}
