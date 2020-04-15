// -- Constants ------------------------------------------ //

const HEX_ENC = 'hex';
const UTF8_ENC = 'utf8';

// -- Buffer --------------------------------------------- //

export function bufferToUtf8(buf: Buffer): string {
  return buf.toString(UTF8_ENC);
}

export function bufferToHex(buf: Buffer, prefixed = false): string {
  const hex = buf.toString(HEX_ENC);
  return prefixed ? addHexPrefix(hex) : hex;
}

export function bufferToArray(buf: Buffer): Uint8Array {
  return new Uint8Array(buf);
}

export function bufferToArrayBuffer(buffer: Buffer): ArrayBuffer {
  return arrayToArrayBuffer(bufferToArray(buffer));
}

export function bufferToNumber(buf: Buffer): number {
  return hexToNumber(bufferToHex(buf));
}

// -- Utf8 ----------------------------------------------- //

export function utf8ToBuffer(utf8: string): Buffer {
  return Buffer.from(utf8, UTF8_ENC);
}

export function utf8ToHex(utf8: string, prefixed = false): string {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}

export function utf8ToArray(utf8: string): Uint8Array {
  return bufferToArray(utf8ToBuffer(utf8));
}

export function utf8ToArrayBuffer(utf8: string): ArrayBuffer {
  return bufferToArrayBuffer(utf8ToBuffer(utf8));
}

export function utf8ToNumber(utf8: string): number {
  return bufferToNumber(utf8ToBuffer(utf8));
}

// -- Hex ------------------------------------------------ //

export function hexToBuffer(hex: string): Buffer {
  return Buffer.from(removeHexPrefix(hex), HEX_ENC);
}

export function hexToUtf8(hex: string): string {
  return bufferToUtf8(hexToBuffer(hex));
}

export function hexToArray(hex: string): Uint8Array {
  return bufferToArray(hexToBuffer(hex));
}

export function hexToArrayBuffer(hex: string): ArrayBuffer {
  return bufferToArrayBuffer(hexToBuffer(hex));
}

export function hexToNumber(hex: string): number {
  return parseInt(hex, 16);
}

// -- Uint8Array ----------------------------------------- //

export function arrayToBuffer(arr: Uint8Array): Buffer {
  return Buffer.from(arr);
}

export function arrayToUtf8(arr: Uint8Array): string {
  return bufferToUtf8(arrayToBuffer(arr));
}

export function arrayToHex(arr: Uint8Array, prefixed = false): string {
  return bufferToHex(arrayToBuffer(arr), prefixed);
}

export function arrayToArrayBuffer(arr: Uint8Array): ArrayBuffer {
  return arr.buffer;
}

export function arrayToNumber(arr: Uint8Array): number {
  return bufferToNumber(arrayToBuffer(arr));
}

// -- ArrayBuffer ---------------------------------------- //

export function arrayBufferToBuffer(arrBuf: ArrayBuffer): Buffer {
  return arrayToBuffer(arrayBufferToArray(arrBuf));
}

export function arrayBufferToUtf8(arrBuf: ArrayBuffer): string {
  const buf = arrayBufferToBuffer(arrBuf);
  return bufferToUtf8(buf);
}

export function arrayBufferToHex(
  arrBuf: ArrayBuffer,
  prefixed = false
): string {
  const buf = arrayBufferToBuffer(arrBuf);
  return bufferToHex(buf, prefixed);
}

export function arrayBufferToArray(arrBuf: ArrayBuffer): Uint8Array {
  return new Uint8Array(arrBuf);
}

export function arrayBufferToNumber(arrBuf: ArrayBuffer): number {
  const buf = arrayBufferToBuffer(arrBuf);
  return bufferToNumber(buf);
}

// -- Number --------------------------------------------- //

export function numberToBuffer(num: number): Buffer {
  return hexToBuffer(numberToHex(num));
}

export function numberToUtf8(num: number): string {
  return bufferToUtf8(numberToBuffer(num));
}

export function numberToHex(num: number, prefixed = false): string {
  const hex = num.toString(16);
  return prefixed ? addHexPrefix(hex) : hex;
}

export function numberToArray(num: number): Uint8Array {
  return bufferToArray(numberToBuffer(num));
}

export function numberToArrayBuffer(num: number): ArrayBuffer {
  return bufferToArrayBuffer(numberToBuffer(num));
}

// -- Misc ----------------------------------------------- //

export function concatArrayBuffers(...args: ArrayBuffer[]): ArrayBuffer {
  const hex: string = args.map(b => arrayBufferToHex(b, true)).join('');
  const result: ArrayBuffer = hexToArrayBuffer(hex);
  return result;
}

export function concatBuffers(...args: Buffer[]): Buffer {
  const result = Buffer.concat(args);
  return result;
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

export function padString(
  str: string,
  length: number,
  left: boolean,
  padding = '0'
): string {
  const diff = length - str.length;
  let result = str;
  if (diff > 0) {
    const pad = padding.repeat(diff);
    result = left ? pad + str : str + pad;
  }
  return result;
}

export function padLeft(str: string, length: number, padding = '0'): string {
  return padString(str, length, true, padding);
}

export function padRight(str: string, length: number, padding = '0'): string {
  return padString(str, length, false, padding);
}

export function removeHexPrefix(hex: string): string {
  return hex.replace(/^0x/, '');
}

export function addHexPrefix(hex: string): string {
  return hex.startsWith('0x') ? hex : `0x${hex}`;
}

export function isHexString(value: any, length?: number): boolean {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (length && value.length !== 2 + 2 * length) {
    return false;
  }
  return true;
}

export function sanitizeHex(hex: string): string {
  hex = removeHexPrefix(hex);
  hex = hex.length % 2 !== 0 ? '0' + hex : hex;
  if (hex) {
    hex = addHexPrefix(hex);
  }
  return hex;
}
