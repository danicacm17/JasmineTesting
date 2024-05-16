window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values  = { amount: 15000, years: 5, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {
  // Check if the interest rate is 0
  if (values.rate === 0) {
    // If the interest rate is 0, calculate the monthly payment as the total amount
    // divided by the total number of months (years * 12)
    return (values.amount / (values.years * 12)).toFixed(2);
  } else {
    // Otherwise, calculate the monthly payment using the formula for compound interest
    const monthlyRate = (values.rate / 100) / 12;
    const n = Math.floor(values.years * 12);
    return (
      (monthlyRate * values.amount) /
      (1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2);
  }
}


function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}