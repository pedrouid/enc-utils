import * as encUtils from '../src';
import {
  TEST_INVALID_BIN,
  TEST_NUMBER_ARR,
  TEST_NUMBER_BIN,
  TEST_NUMBER_BUF,
  TEST_NUMBER_HEX,
  TEST_NUMBER_NUM,
  TEST_NUMBER_UTF8,
  TEST_STRING_ARR,
  TEST_STRING_BIN,
  TEST_STRING_BUF,
  TEST_STRING_HEX,
  TEST_STRING_UTF8,
} from './shared';

describe('Validators', () => {
  // -- Validators ----------------------------------------- //

  it('isBinaryString', async () => {
    expect(encUtils.isBinaryString(TEST_STRING_UTF8)).toBeFalsy();
    expect(encUtils.isBinaryString(TEST_STRING_HEX)).toBeFalsy();
    expect(encUtils.isBinaryString(TEST_INVALID_BIN)).toBeFalsy();
    expect(encUtils.isBinaryString(TEST_STRING_BIN)).toBeTruthy();
  });

  it('isHexString', async () => {
    expect(encUtils.isHexString(TEST_STRING_BIN)).toBeFalsy();
    expect(encUtils.isHexString(TEST_STRING_UTF8)).toBeFalsy();
    expect(
      encUtils.isHexString(encUtils.addHexPrefix(TEST_STRING_HEX))
    ).toBeTruthy();
  });

  it('isBuffer', async () => {
    expect(encUtils.isBuffer(TEST_STRING_ARR)).toBeFalsy();
    expect(encUtils.isBuffer(TEST_STRING_BUF)).toBeTruthy();
  });

  it('isTypedArray', async () => {
    expect(encUtils.isTypedArray(TEST_STRING_BUF)).toBeFalsy();
    expect(encUtils.isTypedArray(TEST_STRING_ARR)).toBeTruthy();
  });

  it('isArrayBuffer', async () => {
    expect(encUtils.isArrayBuffer(TEST_STRING_ARR)).toBeFalsy();
    expect(encUtils.isArrayBuffer(TEST_STRING_ARR.buffer)).toBeTruthy();
  });

  it('getType', async () => {
    expect(encUtils.getType([0, 1])).toEqual('array');
    expect(encUtils.getType(TEST_NUMBER_NUM)).toEqual('number');
    expect(encUtils.getType(TEST_NUMBER_HEX)).toEqual('string');
    expect(encUtils.getType(TEST_NUMBER_UTF8)).toEqual('string');
    expect(encUtils.getType(TEST_NUMBER_BUF)).toEqual('buffer');
    expect(encUtils.getType(TEST_NUMBER_ARR)).toEqual('typed-array');
    expect(encUtils.getType(TEST_NUMBER_ARR.buffer)).toEqual('array-buffer');
  });

  it('getEncoding', async () => {
    expect(encUtils.getEncoding(TEST_NUMBER_BIN)).toEqual('binary');
    expect(
      encUtils.getEncoding(encUtils.addHexPrefix(TEST_NUMBER_HEX))
    ).toEqual('hex');
    expect(encUtils.getEncoding(TEST_NUMBER_UTF8)).toEqual('utf8');
  });
});
