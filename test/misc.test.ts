import * as encUtils from '../src';
import {
  compare,
  TEST_EMPTY_BUF,
  TEST_EMPTY_BYTES,
  TEST_EMPTY_HEX,
  TEST_INVALID_BIN,
  TEST_SIMPLE_BIN,
  TEST_STRING_ARR,
  TEST_STRING_BUF,
  TEST_STRING_HEX,
  TEST_SWAPPED_BIN,
  TEST_SWAPPED_HEX,
} from './shared';

describe('Misc', () => {
  // -- Misc ----------------------------------------------- //

  it('concatBuffers', async () => {
    const input = [TEST_STRING_BUF, TEST_STRING_BUF];
    const expected = Buffer.concat(input);
    const result = encUtils.concatBuffers(...input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('concatArrays', async () => {
    const input = [TEST_STRING_ARR, TEST_STRING_ARR];
    const expected = new Uint8Array(
      Array.from(TEST_STRING_ARR).concat(Array.from(TEST_STRING_ARR))
    );
    const result = encUtils.concatArrays(...input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('trimLeft', async () => {
    const input = Buffer.concat([TEST_EMPTY_BUF, TEST_STRING_BUF]);
    const expected = TEST_STRING_BUF;
    const result = encUtils.trimLeft(input, TEST_EMPTY_BYTES);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.length).toEqual(expected.length);
  });

  it('trimRight', async () => {
    const input = Buffer.concat([TEST_STRING_BUF, TEST_EMPTY_BUF]);
    const expected = TEST_STRING_BUF;
    const result = encUtils.trimRight(input, TEST_EMPTY_BYTES);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.length).toEqual(expected.length);
  });

  it('calcByteLength', async () => {
    expect(encUtils.calcByteLength(0)).toEqual(0);
    expect(encUtils.calcByteLength(7)).toEqual(8);
    expect(encUtils.calcByteLength(8)).toEqual(8);
    expect(encUtils.calcByteLength(9)).toEqual(16);
    expect(encUtils.calcByteLength(15)).toEqual(16);
    expect(encUtils.calcByteLength(16)).toEqual(16);
    expect(encUtils.calcByteLength(17)).toEqual(24);
  });

  it('splitBytes', async () => {
    expect(encUtils.splitBytes(TEST_INVALID_BIN)).toEqual([TEST_SIMPLE_BIN]);
    expect(encUtils.splitBytes(TEST_SIMPLE_BIN)).toEqual([TEST_SIMPLE_BIN]);
    expect(encUtils.splitBytes(TEST_SIMPLE_BIN + TEST_SIMPLE_BIN)).toEqual([
      TEST_SIMPLE_BIN,
      TEST_SIMPLE_BIN,
    ]);
  });

  it('sanitizeBytes', async () => {
    expect(encUtils.sanitizeBytes('001')).toEqual('00000001');
    expect(encUtils.sanitizeBytes('001', 2)).toEqual('0001');
    expect(encUtils.sanitizeBytes('1', 2, '1')).toEqual('11');
  });

  it('swapBytes', async () => {
    expect(encUtils.swapBytes(TEST_SIMPLE_BIN)).toEqual(TEST_SWAPPED_BIN);
  });
  it('swapHex', async () => {
    expect(encUtils.swapHex(TEST_STRING_HEX)).toEqual(TEST_SWAPPED_HEX);
  });

  it('padLeft', async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_EMPTY_HEX + TEST_STRING_HEX;
    const result = encUtils.padLeft(input, expected.length);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.length).toEqual(expected.length);
    expect(result.replace(input, '')).toEqual(
      '0'.repeat(expected.length - input.length)
    );
  });

  it('padRight', async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_STRING_HEX + TEST_EMPTY_HEX;
    const result = encUtils.padRight(input, expected.length);
    expect(compare(result, expected)).toBeTruthy();
    expect(result.length).toEqual(expected.length);
    expect(result.replace(input, '')).toEqual(
      '0'.repeat(expected.length - input.length)
    );
  });

  it('removeHexPrefix', async () => {
    expect(encUtils.removeHexPrefix(TEST_STRING_HEX)).toEqual(TEST_STRING_HEX);
    expect(encUtils.removeHexPrefix('0x' + TEST_STRING_HEX)).toEqual(
      TEST_STRING_HEX
    );
  });

  it('addHexPrefix', async () => {
    expect(encUtils.addHexPrefix(TEST_STRING_HEX)).toEqual(
      '0x' + TEST_STRING_HEX
    );
    expect(encUtils.addHexPrefix('0x' + TEST_STRING_HEX)).toEqual(
      '0x' + TEST_STRING_HEX
    );
  });

  it('sanitizeHex', async () => {
    expect(encUtils.sanitizeHex('0x' + TEST_STRING_HEX)).toEqual(
      '0x' + TEST_STRING_HEX
    );
    expect(encUtils.sanitizeHex(TEST_STRING_HEX)).toEqual(
      '0x' + TEST_STRING_HEX
    );
    expect(encUtils.sanitizeHex('0x0' + TEST_STRING_HEX)).toEqual(
      '0x00' + TEST_STRING_HEX
    );
  });

  it('removeHexLeadingZeros', async () => {
    expect(encUtils.removeHexLeadingZeros(TEST_STRING_HEX)).toEqual(
      TEST_STRING_HEX
    );
    expect(encUtils.removeHexLeadingZeros('0' + TEST_STRING_HEX)).toEqual(
      TEST_STRING_HEX
    );
  });
});
