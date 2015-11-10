'use strict';

const expect = require('chai').expect;

describe('Array', function() {
    const array = [1, 2, 3];
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect(array.indexOf(5)).to.equal(-1);
            expect(array.indexOf(0)).to.equal(-1);
        });
    });
});
