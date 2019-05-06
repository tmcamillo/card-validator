/* eslint-disable */

const assert = require('chai').assert;
const returnsValidatorCard = require('../index');

describe('returnsValidatorCard()', () => {
    it('special characters will be remove and must return true', () => {
    	assert.equal(returnsValidatorCard('5234.2152.4626.0328'), true);
    });

    it('special characters will be remove and must return true', () => {
    	assert.equal(returnsValidatorCard('5234215246260328XD'), true);
    });

    it('must return false', () => {
    	assert.equal(returnsValidatorCard('5234.2152.4626.0321'), false);
    });

    it('the number of characters must be 16 digits otherwise it will return false', () => {
    	assert.equal(returnsValidatorCard('5234215246260329578'), false);
    });

    it('the number of characters must be 16 digits otherwise it will return false', () => {
    	assert.equal(returnsValidatorCard('52342152'), false);
    });

    it('must return true', () => {
    	assert.equal(returnsValidatorCard(5234215246260328), true);
    }); 

});
