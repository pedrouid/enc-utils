import { binaryToArray, binaryToBuffer, binaryToHex } from './binary';
import { sanitizeBytes } from './misc';

// -- Number ----------------------------------------------- //

export function numberToBuffer(num: number): Buffer {
  return binaryToBuffer(numberToBinary(num));
}

export function numberToArray(num: number): Uint8Array {
  return binaryToArray(numberToBinary(num));
}

export function numberToHex(num: number, prefixed?: boolean): string {
  return binaryToHex(numberToBinary(num), prefixed);
}

export function numberToUtf8(num: number): string {
  return `${num}`;
}

export function numberToBinary(num: number): string {
  const bin = (num >>> 0).toString(2);
  return sanitizeBytes(bin);
}
