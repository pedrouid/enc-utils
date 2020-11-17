import * as encUtils from '../src';
import {
  compare,
  TEST_NUMBER_ARR,
  TEST_NUMBER_BIN,
  TEST_NUMBER_BUF,
  TEST_NUMBER_HEX,
  TEST_NUMBER_NUM,
  TEST_NUMBER_UTF8,
} from './shared';

describe('Number', () => {
  // -- Number ----------------------------------------------- //

  it('numberToBuffer', async () => {
    const input = TEST_NUMBER_NUM;
    const expected = TEST_NUMBER_BUF;
    const result = encUtils.numberToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('numberToArray', async () => {
    const input = TEST_NUMBER_NUM;
    const expected = TEST_NUMBER_ARR;
    const result = encUtils.numberToArray(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('numberToUtf8', async () => {
    const input = TEST_NUMBER_NUM;
    const expected = TEST_NUMBER_UTF8;
    const result = encUtils.numberToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('numberToHex', async () => {
    const input = TEST_NUMBER_NUM;
    const expected = TEST_NUMBER_HEX;
    const result = encUtils.numberToHex(input);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.startsWith('0x')).toBeFalsy();
    expect(result.length % 2).toBeFalsy();
  });

  it('numberToBinary', async () => {
    const input = TEST_NUMBER_NUM;
    const expected = TEST_NUMBER_BIN;
    const result = encUtils.numberToBinary(input);
    expect(compare(result, expected)).toBeTruthy();
  });
});
