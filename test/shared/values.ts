export const TEST_STRING_UTF8 = 'encoding';
export const TEST_STRING_HEX = '656e636f64696e67';
export const TEST_STRING_BUF = Buffer.from(TEST_STRING_HEX, 'hex');
export const TEST_STRING_ARR = new Uint8Array(TEST_STRING_BUF);
export const TEST_STRING_BIN =
  '0110010101101110011000110110111101100100011010010110111001100111';

export const TEST_NUMBER_NUM = 16;
export const TEST_NUMBER_HEX = '10';
export const TEST_NUMBER_UTF8 = `${TEST_NUMBER_NUM}`;
export const TEST_NUMBER_BUF = Buffer.from(TEST_NUMBER_HEX, 'hex');
export const TEST_NUMBER_ARR = new Uint8Array(TEST_NUMBER_BUF);
export const TEST_NUMBER_BIN = '00010000';

export const TEST_EMPTY_BYTES = 8;
export const TEST_EMPTY_HEX = '0'.repeat(TEST_EMPTY_BYTES * 2);
export const TEST_EMPTY_BUF = Buffer.from(TEST_EMPTY_HEX, 'hex');

export const TEST_SIMPLE_BIN = '01010101';
export const TEST_INVALID_BIN = TEST_SIMPLE_BIN.slice(1);
export const TEST_SWAPPED_BIN = '10101010';
export const TEST_SWAPPED_HEX = 'a676c6f6269676e6';
