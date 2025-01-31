console.log(window);
function showPrecaution(disease) {
  const precautions = {
    "Hyperaldosteronism": "Reduce sodium intake, take prescribed medications, and monitor blood pressure regularly.",
    "Gordon_Syndrome": "Maintain a healthy diet, exercise regularly, and consult a genetic counselor.",
    "Liddle_Syndrome": "Follow a low-sodium diet, take prescribed medications, and monitor potassium levels.",
    "Hypertension_and_Brachydactyly_Syndrome": "Regular exercise, maintain a healthy diet, and monitor blood pressure.",
    "Monogenic Diabetes": "Monitor blood sugar levels, follow a healthy diet, and take insulin or other medications as prescribed.",
    "Cystic Fibrosis": "Follow a high-calorie diet, take enzyme supplements, and perform chest physiotherapy.",
    "Hemochromatosis": "Regular blood donations, avoid vitamin C supplements, and avoid alcohol.",
    "Gastroesophageal Reflux Disease": "Avoid trigger foods, eat smaller meals, and elevate the head of the bed.",
    "Rhinosinusitis": "Use saline nasal sprays, avoid allergens, and take prescribed medications.",
    "Obstructive Sleep Apnea": "Maintain a healthy weight, use a CPAP machine, and avoid alcohol and sedatives before bedtime.",
    "Age Related Macular Degeneration": "Eat a diet rich in leafy greens, take prescribed vitamins, and avoid smoking.",
    "Cataracts": "Wear sunglasses to protect eyes from UV light, manage other health conditions like diabetes, and consider cataract surgery if needed.",
    "Diabetic Retinopathy": "Control blood sugar levels, manage blood pressure and cholesterol, and get regular eye exams."
  };

  if (precautions[disease]) {
    document.getElementById("precaution-content").innerText = "Precautions for " + disease + ": " + precautions[disease];
  } else {
    document.getElementById("precaution-content").innerText = "Precautions for " + disease + " are not available.";
  }
}
function showDiseasePrediction() {
  const name=document.getElementById("name").value;
  const bg = document.getElementById("blood-group").value;
  const bp = document.getElementById("bp").value;
  const sugar = document.getElementById("sugar").value;
  const asthama = document.getElementById("asthma").value;
  const es = document.getElementById("es").value;
  let tableContent = "<tr><th>Disease</th><th>Action</th></tr>";
  {
    if(bp=='YES')
    {
      tableContent += `<tr><td>'Hyperaldosteronism'</td><td><button type="button" onclick="showPrecaution('Hyperaldosteronism')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Gordon_syndrome'</td><td><button type="button" onclick="showPrecaution('Gordon_syndrome')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Liddle_syndrome'</td><td><button type="button" onclick="showPrecaution('Liddle_syndrome')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'hypertension_and_brachydactyly_syndrome'</td><td><button type="button" onclick="showPrecaution('hypertension_and_brachydactyly_syndrome')">Show Precaution</button></td></tr>`;
    }if(sugar=="YES")
    {
      tableContent += `<tr><td>'Monogenic_diabetes'</td><td><button type="button" onclick="showPrecaution('Monogenic_diabetes')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Cystic_fibrosis'</td><td><button type="button" onclick="showPrecaution('Cystic_fibrosis')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Hemochromatosis'</td><td><button type="button" onclick="showPrecaution('Hemochromatosis')">Show Precaution</button></td></tr>`;
    }
    if(asthama=="YES")
    {
      tableContent += `<tr><td>'Gastroesophageal_Reflux_Disease'</td><td><button type="button" onclick="showPrecaution('Gastroesophageal_Reflux_Disease')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Rhinosinusitis'</td><td><button type="button" onclick="showPrecaution('Rhinosinusitis')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Obstructive_Sleep_Apnea'</td><td><button type="button" onclick="showPrecaution('Obstructive_Sleep_Apnea')">Show Precaution</button></td></tr>`;
    }
    if(es=="YES")
    {
      tableContent += `<tr><td>'Age_Related_Macular_Degeneration'</td><td><button type="button" onclick="showPrecaution('Age_Related_Macular_Degeneration')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Cataracts'</td><td><button type="button" onclick="showPrecaution('Cataracts')">Show Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Diabetic_Retinopathy'</td><td><button type="button" onclick="showPrecaution('Diabetic_Retinopathy')">Show Precaution</button></td></tr>`;     
    }
  }  document.getElementById("disease-table").innerHTML = tableContent;
  localStorage.setItem("diseaseTable", tableContent);
  localStorage.setItem("userName", name);

window.location.href = "./precautions.html";

}



// Function to toggle visibility of additional details
function toggleDetails(detailsId) {
  const detailsElement = document.getElementById(detailsId);
  detailsElement.classList.toggle('hidden');
}
