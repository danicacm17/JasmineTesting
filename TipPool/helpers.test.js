describe("sumPaymentTotal", function() {
    it('should return the sum of all tip amounts when type is "tipAmt"', function() {
      // Set up test data
      allPayments = {
        payment1: {billAmt:100, tipAmt: 10 },
        payment2: {billAmt:150, tipAmt: 15 },
        payment3: {billAmt:200, tipAmt: 20 }
      };
  
      // Call the function
      let total = sumPaymentTotal('tipAmt');
  
      // Expect the total to be the sum of all tip amounts
      expect(total).toBe(45);
    });
  
    it('should return the sum of all bill amounts when type is "billAmt"', function() {
      // Set up test data
      allPayments = {
        payment1: { billAmt: 30 },
        payment2: { billAmt: 40 },
        payment3: { billAmt: 50 }
      };
  
      // Call the function
      let total = sumPaymentTotal('billAmt');
  
      // Expect the total to be the sum of all bill amounts
      expect(total).toBe(120);
    });
  
    it('should return the sum of all tip amounts when type is "tipAmt"', function() {
        // Set up test data
        allPayments = {
          payment1: { tipAmt: 10 },
          payment2: { tipAmt: 15 },
          payment3: { tipAmt: 20 }
        };
      
        // Call the function
        let total = sumPaymentTotal('tipAmt');
      
        // Expect the total to be the sum of all tip amounts
        expect(total).toBe(45);
      });      
  
    it('should return 0 if allPayments is empty', function() {
      // Set up test data
      allPayments = {};
  
      // Call the function
      let total = sumPaymentTotal('tipAmt');
  
      // Expect the total to be 0
      expect(total).toBe(0);
    });
  });
  
  describe("calculateTipPercent", function() {
    it('should return the correct tip percentage', function() {
      // Call the function with sample values
      let tipPercent = calculateTipPercent(100, 15);
  
      // Expect the tip percentage to be 15%
      expect(tipPercent).toBe(15);
    });
  
    it('should handle cases where billAmt is 0', function() {
      // Call the function with billAmt as 0
      let tipPercent = calculateTipPercent(0, 15);
  
      // Expect the tip percentage to be Infinity
      expect(tipPercent).toBe(Infinity);
    });
  
    it('should handle cases where tipAmt is 0', function() {
      // Call the function with tipAmt as 0
      let tipPercent = calculateTipPercent(100, 0);
  
      // Expect the tip percentage to be 0%
      expect(tipPercent).toBe(0);
    });
  });
  
  describe("appendTd", function() {
    it('should append a new td element with the given value to the provided tr element', function() {
      // Set up test data
      let tr = document.createElement('tr');
      let value = 'Test';
  
      // Call the function
      appendTd(tr, value);
  
      // Expect the tr element to have a single child td element with the given value
      expect(tr.children.length).toBe(1);
      expect(tr.children[0].tagName).toBe('TD');
      expect(tr.children[0].innerText).toBe(value);
    });
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
  