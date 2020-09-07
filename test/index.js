const { assert } = require('chai');

const sos = require('../src');

describe('Data validation', () => {
  it('General information', () => {
    const expectedVal = false;
    assert(sos.isMemberOf112('US') === expectedVal, 'Bad general countries information');
  });

  it('Emergency numbers', () => {
    const expectedVal = '911';
    assert(sos.dispatch('US')[0].value === expectedVal, 'Wrong emergency numbers');
  });
});
