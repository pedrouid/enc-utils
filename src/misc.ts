import { binaryToHex } from './binary';
import { STRING_ZERO } from './constants';
import { hexToBinary } from './hex';

// -- Misc ----------------------------------------------- //

export function concatBuffers(...args: Buffer[]): Buffer {
  const result = Buffer.concat(args);
  return result;
}

export function concatArrays(...args: Uint8Array[]): Uint8Array {
  let result: number[] = [];
  args.forEach(arg => (result = result.concat(Array.from(arg))));
  return new Uint8Array([...result]);
}

export function trimLeft(data: Buffer, length: number): Buffer {
  const diff = data.length - length;
  if (diff > 0) {
    data = data.slice(diff);
  }
  return data;
}

export function trimRight(data: Buffer, length: number): Buffer {
  return data.slice(0, length);
}

export function calcByteLength(length: number, byteSize = 8): number {
  const remainder = length % byteSize;
  return remainder
    ? ((length - remainder) / byteSize) * byteSize + byteSize
    : length;
}

export function splitBytes(str: string, byteSize = 8): string[] {
  const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, 'gi'));
  return Array.from(bytes || []);
}

export function swapBytes(str: string): string {
  return splitBytes(str)
    .map(reverseString)
    .join('');
}

export function swapHex(str: string): string {
  return binaryToHex(swapBytes(hexToBinary(str)));
}

export function sanitizeBytes(
  str: string,
  byteSize = 8,
  padding = STRING_ZERO
): string {
  return padLeft(str, calcByteLength(str.length, byteSize), padding);
}

export function padLeft(
  str: string,
  length: number,
  padding = STRING_ZERO
): string {
  return padString(str, length, true, padding);
}

export function padRight(
  str: string,
  length: number,
  padding = STRING_ZERO
): string {
  return padString(str, length, false, padding);
}

export function removeHexPrefix(hex: string): string {
  return hex.replace(/^0x/, '');
}

export function addHexPrefix(hex: string): string {
  return hex.startsWith('0x') ? hex : `0x${hex}`;
}

export function sanitizeHex(hex: string): string {
  hex = removeHexPrefix(hex);
  hex = sanitizeBytes(hex, 2);
  if (hex) {
    hex = addHexPrefix(hex);
  }
  return hex;
}

export function removeHexLeadingZeros(hex: string): string {
  const prefixed = hex.startsWith('0x');
  hex = removeHexPrefix(hex);
  hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
  return prefixed ? addHexPrefix(hex) : hex;
}

// -- Private ----------------------------------------------- //

function reverseString(str: string) {
  return str
    .split('')
    .reverse()
    .join('');
}

function padString(
  str: string,
  length: number,
  left: boolean,
  padding = STRING_ZERO
): string {
  const diff = length - str.length;
  let result = str;
  if (diff > 0) {
    const pad = padding.repeat(diff);
    result = left ? pad + str : str + pad;
  }
  return result;
}
