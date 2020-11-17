import * as encUtils from '../src';
import {
  compare,
  TEST_NUMBER_ARR,
  TEST_NUMBER_NUM,
  TEST_STRING_ARR,
  TEST_STRING_BIN,
  TEST_STRING_BUF,
  TEST_STRING_HEX,
  TEST_STRING_UTF8,
} from './shared';

describe('Uint8Array', () => {
  // -- Uint8Array -------------------------------------------- //

  it('arrayToBuffer', async () => {
    const input = TEST_STRING_ARR;
    const expected = TEST_STRING_BUF;
    const result = encUtils.arrayToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayToHex', async () => {
    const input = TEST_STRING_ARR;
    const expected = TEST_STRING_HEX;
    const result = encUtils.arrayToHex(input);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.startsWith('0x')).toBeFalsy();
    expect(result.length % 2).toBeFalsy();
  });

  it('arrayToUtf8', async () => {
    const input = TEST_STRING_ARR;
    const expected = TEST_STRING_UTF8;
    const result = encUtils.arrayToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayToNumber', async () => {
    const input = TEST_NUMBER_ARR;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.arrayToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayToBinary', async () => {
    const input = TEST_STRING_ARR;
    const expected = TEST_STRING_BIN;
    const result = encUtils.arrayToBinary(input);
    expect(compare(result, expected)).toBeTruthy();
  });
});
