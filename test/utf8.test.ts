import * as encUtils from '../src';
import {
  compare,
  TEST_NUMBER_NUM,
  TEST_NUMBER_UTF8,
  TEST_STRING_ARR,
  TEST_STRING_BIN,
  TEST_STRING_BUF,
  TEST_STRING_HEX,
  TEST_STRING_UTF8,
} from './shared';

describe('Utf8', () => {
  // -- Utf8 ------------------------------------------------- //

  it('utf8ToBuffer', async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_BUF;
    const result = encUtils.utf8ToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('utf8ToArray', async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_ARR;
    const result = encUtils.utf8ToArray(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('utf8ToHex', async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_HEX;
    const result = encUtils.utf8ToHex(input);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.startsWith('0x')).toBeFalsy();
    expect(result.length % 2).toBeFalsy();
  });

  it('utf8ToNumber', async () => {
    const input = TEST_NUMBER_UTF8;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.utf8ToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('utf8ToBinary', async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_BIN;
    const result = encUtils.utf8ToBinary(input);
    expect(compare(result, expected)).toBeTruthy();
  });
});
