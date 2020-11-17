import * as encUtils from '../src';
import {
  compare,
  TEST_NUMBER_ARR,
  TEST_NUMBER_HEX,
  TEST_NUMBER_NUM,
  TEST_STRING_BIN,
  TEST_STRING_BUF,
  TEST_STRING_HEX,
  TEST_STRING_UTF8,
} from './shared';

describe('Hex', () => {
  // -- Hex -------------------------------------------------- //

  it('hexToBuffer', async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_STRING_BUF;
    const result = encUtils.hexToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('hexToArray', async () => {
    const input = TEST_NUMBER_HEX;
    const expected = TEST_NUMBER_ARR;
    const result = encUtils.hexToArray(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('hexToUtf8', async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_STRING_UTF8;
    const result = encUtils.hexToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('hexToNumber', async () => {
    const input = TEST_NUMBER_HEX;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.hexToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('hexToBinary', async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_STRING_BIN;
    const result = encUtils.hexToBinary(input);
    expect(compare(result, expected)).toBeTruthy();
  });
});
