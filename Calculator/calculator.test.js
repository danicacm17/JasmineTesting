describe('Loan Rates', function() {

  it('should calculate the monthly rate correctly', function() {
    const values = {
      amount: 20000,
      years: 5,
      rate: 5
    };
    expect(calculateMonthlyPayment(values)).toEqual('377.42');
  });

  it('should calculate with a zero interest rate', function (){
    const values = {
      amount: 25000,
      years: 5,
      rate: 0
    };
    expect(calculateMonthlyPayment(values)).toEqual('416.67');
  })

  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 20000,
      years: 5,
      rate: 5
    };
    expect(calculateMonthlyPayment(values)).toEqual('377.42');
  });
  
  it("should handle high interest rates", function() {
    const values = {
      amount: 20000,
      years: 5,
      rate: 85
    };
    expect(calculateMonthlyPayment(values)).toEqual('1440.39');
  });
 
});
