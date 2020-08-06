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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  //declare a variable and assign an object to it with key/value pairs that required
  const obj = {amount: 1000, years: 8, rate: 5.8};
  //get all elements from html and assign them to variables
  const amount = document.querySelector('#loan-amount');
  const years = document.querySelector('#loan-years');
  const rate = document.querySelector('#loan-rate');

  //to each variable assign a value from obj
  amount = obj.amount;
  years = obj.years;
  rate = obj.rate;

  //call funtion update() here
  update();
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 //create a variable ot store the  callback of the getCurrentUIValues() function
  const uiValue = getCurrentUIValues();
// now call updateMonthly function and pass in a value of 
//calculateMonthlyPayment function with the vvalue of the previously declared variable
  updateMonthly(calculateMonthlyPayment(uiValue));  

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
