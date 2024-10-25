const bmiBtn = document.getElementById("bmiBtn")
bmiBtn.addEventListener("click",bmiCalculator)

function bmiCalculator(){

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result');

  // Validate input fields
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight!";
    result.style.color = "red";
    return;
  }


  // Now this is the formula 
  // (BMI = weight / height^2 in meters)

  const bmi = (weight / (height * height)).toFixed(2)

  // BMI Category 
  let bmiCategory = '';
  if (bmi < 18.5) {
      bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) { 
      bmiCategory = 'Overweight';
  } else {
      bmiCategory = 'Obesity';
  }
  
  result.textContent = `Your BMI is ${bmi} (${bmiCategory})`;
  result.style.color = '#333';

    document.getElementById('height').value =  "";
    document.getElementById('weight').value =  "";


}