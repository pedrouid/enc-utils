import { arrayToBuffer, arrayToHex, arrayToNumber, arrayToUtf8 } from './array';
import { splitBytes } from './misc';

// -- Binary ----------------------------------------------- //

export function binaryToBuffer(bin: string): Buffer {
  return arrayToBuffer(binaryToArray(bin));
}

export function binaryToArray(bin: string): Uint8Array {
  return new Uint8Array(splitBytes(bin).map(x => parseInt(x, 2)));
}

export function binaryToHex(bin: string | string, prefixed?: boolean): string {
  return arrayToHex(binaryToArray(bin), prefixed);
}

export function binaryToUtf8(bin: string): string {
  return arrayToUtf8(binaryToArray(bin));
}

export function binaryToNumber(bin: string): number {
  return arrayToNumber(binaryToArray(bin));
}
