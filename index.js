const cleanMask = (cardNumber) => {
  let regex = (el) => el.replace(/[^\d]+/g, '');
  return typeof cardNumber === 'string' ? regex(cardNumber) : regex(cardNumber.toString());
};

const doubleNcheck = (el) => { 
  return (el * 2) > 9 ? (el * 2 % 10) + 1 : el * 2; 
};

const cardValidator = (cardNumber) => {
  let cleanedCardNumber = cleanMask(cardNumber);
  if (cleanedCardNumber.length !== 16) {
    return false;
  };
  let evenPositions = cleanedCardNumber.split('').map((el, ind) => {
    return parseInt(ind % 2 === 0 ? doubleNcheck(el) : el); 
  });
  let removedLastDig = evenPositions.pop();
  let total = evenPositions.reduce((sum, curV) => { 
    return sum + curV; 
  });

  return (total + removedLastDig) % 10 === 0; 
};

module.exports = cardValidator;