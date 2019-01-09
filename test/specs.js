const assert = require('assert');
const index = require ('../scripts/index.js');

// describe('My suite', () => {
//  describe('Just a test', () => {
//    it('Should return true', () => {
//      assert.equal(5,5);
//    })
//  })
// })

describe ('This is the testing suite of the setup project', () => {

  describe('Accept number as string and returns as number.', () => {

    it('Should convert string into number and return it', () => {
      const actualResult = index.stringToNumber('3');
      const expectedResult = 3;

      assert.equal(actualResult, expectedResult);
    })

  })


  describe ('The palindrome function', () => {

    it ('Should return false if not a string', () => {
      const actualResult = index.reverse(3);
      const expectedResult = false;

      assert.equal(actualResult, expectedResult);
    })

    it ('Should return the palindrome', () => {
      const actualResult = index.reverse('isus');
      const expectedResult = 'susi';

      assert.equal(actualResult, expectedResult);
    })

  })


  describe ('The object function', () => {

    it ('Should return an object', () => {
      const person = {
        firstName: 'susi',
        name: 'schuett',
        age: 37
      };

      const actualResult = index.objectFkt(person);
      const expectedResult = {
        firstName: 'susi',
        name: 'schuett',
        age: 37
      };

      assert.deepEqual(actualResult, expectedResult);
    })
  })


  describe ('The constructor object - DCI Relatives', () => {

    it ('Should return if the compared teacher is the same', () => {

      const actualResult = index.objectFkt(index.kostas);
      const expectedResult = {
        firstName: 'Kostas',
        lastName: 'Diakogiannis',
        role: 'Trainer'
      };

      assert.deepEqual(actualResult, expectedResult);
    })

    it ('Should return if the compared student is the same', () => {

      const actualResult = index.objectFkt(index.milad);
      const expectedResult = {
        firstName: 'Milad',
        lastName: 'Khoshkaran',
        role: 'Student'
      };

      assert.deepEqual(actualResult, expectedResult);
    })
  })


  describe ('This should return the ratio', () => {
    it ('Between caps and goals of the player', () => {
      const actualResult = index.kyriakos.getGoalsRatio();
      const expectedResult = 0.1;

      assert.deepEqual(actualResult, expectedResult);
    })
  })


})
