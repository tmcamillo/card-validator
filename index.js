const cleanMask = (cardNumber) => {
	let regex = (x) => x.replace(/[^\d]+/g, '');
	return typeof cardNumber === 'string' ? regex(cardNumber) : regex(cardNumber.toString());
};

const doubleNcheck = (el) => { 
	return (el * 2) > 9 ? (el * 2 % 10) + 1 : el * 2 
};

const cardValidator = (cardNumber) => {
	let cleanedCard = cleanMask(cardNumber);
  let evenPosi = cleanedCard.split('').map( (el, ind) => {
		return ind % 2 === 0 ? doubleNcheck(el) : parseInt(el) 
	});
  let removedLast = evenPosi.pop();
  let total = evenPosi.reduce( (sum, curV) => { 
		return  sum + curV 
	});

  return (total + removedLast) % 10 === 0 
};

module.exports = cardValidator;