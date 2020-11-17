import * as encUtils from '../src';
import {
  compare,
  TEST_NUMBER_BIN,
  TEST_NUMBER_NUM,
  TEST_STRING_ARR,
  TEST_STRING_BIN,
  TEST_STRING_BUF,
  TEST_STRING_HEX,
  TEST_STRING_UTF8,
} from './shared';

describe('Binary', () => {
  // -- Binary ----------------------------------------------- //

  it('binaryToBuffer', async () => {
    const input = TEST_STRING_BIN;
    const expected = TEST_STRING_BUF;
    const result = encUtils.binaryToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('binaryToArray', async () => {
    const input = TEST_STRING_BIN;
    const expected = TEST_STRING_ARR;
    const result = encUtils.binaryToArray(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('binaryToHex', async () => {
    const input = TEST_STRING_BIN;
    const expected = TEST_STRING_HEX;
    const result = encUtils.binaryToHex(input);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.startsWith('0x')).toBeFalsy();
    expect(result.length % 2).toBeFalsy();
  });

  it('binaryToUtf8', async () => {
    const input = TEST_STRING_BIN;
    const expected = TEST_STRING_UTF8;
    const result = encUtils.binaryToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('binaryToNumber', async () => {
    const input = TEST_NUMBER_BIN;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.binaryToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
    expect(result).toEqual(parseInt(input, 2));
  });
});
