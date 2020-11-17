import * as encUtils from '../src';
import {
  compare,
  TEST_NUMBER_BUF,
  TEST_NUMBER_NUM,
  TEST_STRING_ARR,
  TEST_STRING_BIN,
  TEST_STRING_BUF,
  TEST_STRING_HEX,
  TEST_STRING_UTF8,
} from './shared';

describe('Buffer', () => {
  // -- Buffer ----------------------------------------------- //

  it('bufferToArray', async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_ARR;
    const result = encUtils.bufferToArray(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('bufferToHex', async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_HEX;
    const result = encUtils.bufferToHex(input);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.startsWith('0x')).toBeFalsy();
    expect(result.length % 2).toBeFalsy();
  });

  it('bufferToUtf8', async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_UTF8;
    const result = encUtils.bufferToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('bufferToNumber', async () => {
    const input = TEST_NUMBER_BUF;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.bufferToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('bufferToBinary', async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_BIN;
    const result = encUtils.bufferToBinary(input);
    expect(compare(result, expected)).toBeTruthy();
  });
});
