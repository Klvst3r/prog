const positiveIntegerToBinary = (input) => {
    if (input === 0) return '0';
  
    const bits = [];
    
    let number = input;
    while (number >= 1) {
      const divResult = number / 2;
      const roundedResult = Math.floor(divResult);
      
      bits.push(divResult > roundedResult ? 1 : 0);
      
      number = roundedResult;
    }
  
    return bits.reverse().join('');
  }