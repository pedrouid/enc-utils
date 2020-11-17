import { arrayToBinary } from './array';
import { bufferToArray, bufferToHex } from './buffer';
import { ENC_UTF8 } from './constants';

// -- Utf8 ----------------------------------------------- //

export function utf8ToBuffer(utf8: string): Buffer {
  return Buffer.from(utf8, ENC_UTF8);
}

export function utf8ToArray(utf8: string): Uint8Array {
  return bufferToArray(utf8ToBuffer(utf8));
}

export function utf8ToHex(utf8: string, prefixed = false): string {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}

export function utf8ToNumber(utf8: string): number {
  const num = parseInt(utf8, 10);
  if (typeof num === 'undefined') {
    throw new Error('Number can only safely store up to 53 bits');
  }
  return num;
}

export function utf8ToBinary(utf8: string): string {
  return arrayToBinary(utf8ToArray(utf8));
}
