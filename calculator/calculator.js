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
  amount.value = obj.amount;
  years.value = obj.years;
  rate.value = obj.rate;

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
  //create a variable and assign to it a object's rate divided by 100 and result devided by 12
    const interestRate = values.rate / 100 / 12;
  //create a variable and multiply the object's years by 12 and floor the result
    const numberOfPayments = Math.floor(values.years * 12);
  //return the result (check the formula provided for reference:   result = 𝑃×𝑖 / 1−(1+𝑖)−𝑛
  return values.amount * interestRate / (1 - Math.pow(1 + interestRate), numberOfPayments).toFixed(2);         
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
 // create a variable and assign to it an html element with id monthly-payment 
  const monthlyPayment = document.querySelector('#monthly-payment');
//take that variable and get the text value to display : dollars sign concat with the function's parameter
monthlyPayment.innerText = `$${monthly}`;  
}
