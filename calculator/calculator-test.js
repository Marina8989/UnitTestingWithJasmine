describe('calculate manthly payment amount', function(){
  it('should calculate the monthly rate correctly', function () {
    //in order for error not to occure, declare an object here as well
    const obj = {
      amount: 15000,
      years: 5,
      rate: 3.2
    }

   expect(calculateMonthlyPayment(obj)).toEqual('270.87');
  });  
});


describe('return 2 decimal nums', function() {
  it("should return a result with 2 decimal places", function () {
    //here as well, declare a variable obj
    const obj = {
      amount: 15000,
      years: 5,
      rate: 3.2
    }
    expect(calculateMonthlyPayment(obj)).toEqual('270.87');
  });
})


/// etc
