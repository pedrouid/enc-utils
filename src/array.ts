import typedArrayToBuffer from 'typedarray-to-buffer';

import { bufferToHex, bufferToNumber, bufferToUtf8 } from './buffer';
import { numberToBinary } from './number';

// -- Uint8Array ----------------------------------------- //

export function arrayToBuffer(arr: Uint8Array): Buffer {
  return typedArrayToBuffer(arr);
}

export function arrayToHex(arr: Uint8Array, prefixed = false): string {
  return bufferToHex(arrayToBuffer(arr), prefixed);
}

export function arrayToUtf8(arr: Uint8Array): string {
  return bufferToUtf8(arrayToBuffer(arr));
}

export function arrayToNumber(arr: Uint8Array): number {
  return bufferToNumber(arrayToBuffer(arr));
}

export function arrayToBinary(arr: Uint8Array): string {
  return Array.from(arr)
    .map(numberToBinary)
    .join('');
}
