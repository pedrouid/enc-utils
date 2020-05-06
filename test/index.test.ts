import * as encUtils from '../src/';

function isTypedArray(val: any) {
  return !!val.buffer && !Buffer.isBuffer(val);
}

function isArrayBuffer(val: any) {
  return !val.buffer && !Buffer.isBuffer(val) && val.length;
}

function isType(val: any) {
  if (Buffer.isBuffer(val)) {
    return 'buffer';
  } else if (Array.isArray(val)) {
    return 'array';
  } else if (isTypedArray(val)) {
    return 'typed-array';
  } else if (isArrayBuffer(val)) {
    return 'array-buffer';
  } else {
    return typeof val;
  }
}

function compare(a: any, b: any) {
  const type = isType(a);
  if (type !== isType(b)) {
    return false;
  }
  if (type === 'array-buffer') {
    a = Buffer.from(a);
    b = Buffer.from(b);
  }
  return a.toString().toLowerCase() === b.toString().toLowerCase();
}

const TEST_STRING_UTF8 = 'wallet';
const TEST_STRING_HEX = '77616c6c6574';
const TEST_STRING_BUF = Buffer.from(TEST_STRING_UTF8, 'utf8');
const TEST_STRING_ARR = new Uint8Array(TEST_STRING_BUF);
const TEST_STRING_ARR_BUF = TEST_STRING_ARR.buffer;

const TEST_NUMBER_NUM = 16;
const TEST_NUMBER_HEX = '10';
const TEST_NUMBER_UTF8 = `${TEST_NUMBER_NUM}`;
const TEST_NUMBER_BUF = Buffer.from(
  encUtils.removeHexPrefix(TEST_NUMBER_HEX),
  'hex'
);
const TEST_NUMBER_ARR = new Uint8Array(TEST_NUMBER_BUF);
const TEST_NUMBER_ARR_BUF = TEST_NUMBER_ARR.buffer;

describe('EncUtils', () => {
  // -- Uint8Array -------------------------------------------- //

  it('arrayToBuffer', async () => {
    const input = TEST_STRING_ARR;
    const expected = TEST_STRING_BUF;
    const result = encUtils.arrayToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayToUtf8', async () => {
    const input = TEST_STRING_ARR;
    const expected = TEST_STRING_UTF8;
    const result = encUtils.arrayToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayToHex', async () => {
    const input = TEST_STRING_ARR;
    const expected = TEST_STRING_HEX;
    const result = encUtils.arrayToHex(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayToNumber', async () => {
    const input = TEST_NUMBER_ARR;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.arrayBufferToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  // -- ArrayBuffer ------------------------------------------ //

  it('arrayBufferToBuffer', async () => {
    const input = TEST_STRING_ARR_BUF;
    const expected = TEST_STRING_BUF;
    const result = encUtils.arrayBufferToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayBufferToUtf8', async () => {
    const input = TEST_STRING_ARR_BUF;
    const expected = TEST_STRING_UTF8;
    const result = encUtils.arrayBufferToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayBufferToHex', async () => {
    const input = TEST_STRING_ARR_BUF;
    const expected = TEST_STRING_HEX;
    const result = encUtils.arrayBufferToHex(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('arrayBufferToNumber', async () => {
    const input = TEST_NUMBER_ARR_BUF;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.arrayBufferToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('concatArrayBuffers', async () => {
    const input = [TEST_STRING_ARR_BUF, TEST_STRING_ARR_BUF];
    const expected = new Uint8Array(
      Buffer.concat([TEST_STRING_BUF, TEST_STRING_BUF])
    ).buffer;
    const result = encUtils.concatArrayBuffers(...input);
    expect(compare(result, expected)).toBeTruthy();
  });

  // -- Buffer ----------------------------------------------- //

  it('bufferToArrayBuffer', async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_ARR_BUF;
    const result = encUtils.bufferToArrayBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('bufferToUtf8', async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_UTF8;
    const result = encUtils.bufferToUtf8(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('bufferToHex', async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_HEX;
    const result = encUtils.bufferToHex(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('bufferToNumber', async () => {
    const input = TEST_NUMBER_BUF;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.bufferToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('concatBuffers', async () => {
    const input = [TEST_STRING_BUF, TEST_STRING_BUF];
    const expected = Buffer.concat(input);
    const result = encUtils.concatBuffers(...input);
    expect(compare(result, expected)).toBeTruthy();
  });

  // -- Utf8 ------------------------------------------------- //

  it('utf8ToArrayBuffer', async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_ARR_BUF;
    const result = encUtils.utf8ToArrayBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('utf8ToBuffer', async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_BUF;
    const result = encUtils.utf8ToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('utf8ToHex', async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_HEX;
    const result = encUtils.utf8ToHex(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('utf8ToNumber', async () => {
    const input = TEST_NUMBER_UTF8;
    const expected = TEST_NUMBER_NUM;
    const result = encUtils.utf8ToNumber(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  // -- Hex -------------------------------------------------- //

  it('hexToBuffer', async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_STRING_BUF;
    const result = encUtils.hexToBuffer(input);
    expect(compare(result, expected)).toBeTruthy();
  });

  it('hexToArrayBuffer', async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_STRING_ARR_BUF;
    const result = encUtils.hexToArrayBuffer(input);
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
});
