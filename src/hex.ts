import { arrayToBinary, arrayToNumber } from './array';
import { bufferToArray, bufferToUtf8 } from './buffer';
import { ENC_HEX } from './constants';
import { removeHexPrefix } from './misc';

// -- Hex ------------------------------------------------ //

export function hexToBuffer(hex: string): Buffer {
  return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}

export function hexToArray(hex: string): Uint8Array {
  return bufferToArray(hexToBuffer(hex));
}

export function hexToUtf8(hex: string): string {
  return bufferToUtf8(hexToBuffer(hex));
}

export function hexToNumber(hex: string): number {
  return arrayToNumber(hexToArray(hex));
}

export function hexToBinary(hex: string): string {
  return arrayToBinary(hexToArray(hex));
}
