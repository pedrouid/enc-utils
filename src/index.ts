export const HEX_ENC = 'hex';
export const UTF8_ENC = 'utf8';

export function removeHexPrefix(hex: string): string {
  return hex.replace(/^0x/, '');
}

export function addHexPrefix(hex: string): string {
  return hex.startsWith('0x') ? hex : `0x${hex}`;
}

export function utf8ToBuffer(utf8: string): Buffer {
  return Buffer.from(utf8, UTF8_ENC);
}

export function hexToBuffer(hex: string): Buffer {
  return Buffer.from(removeHexPrefix(hex), HEX_ENC);
}

export function arrayToBuffer(arr: Uint8Array): Buffer {
  return Buffer.from(arr);
}

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

export function hexToUtf8(hex: string): string {
  return bufferToUtf8(hexToBuffer(hex));
}

export function utf8ToHex(utf8: string, prefixed = false): string {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}

export function numberToHex(num: number, prefixed = false): string {
  const hex = num.toString(16);
  return prefixed ? addHexPrefix(hex) : hex;
}

export function hexToNumber(hex: string): number {
  return parseInt(hex, 16);
}

export function bufferToNumber(buf: Buffer): number {
  return hexToNumber(bufferToHex(buf));
}

export function numberToBuffer(num: number): Buffer {
  return hexToBuffer(numberToHex(num));
}

export function concatBuffers(...args: Buffer[]): Buffer {
  const result = Buffer.concat(args);
  return result;
}

export function trimLeft(data: Buffer, length: number) {
  const diff = data.length - length;
  if (diff > 0) {
    data = data.slice(diff);
  }
  return data;
}

export function trimRight(data: Buffer, length: number) {
  return data.slice(0, length);
}

export function padString(
  str: string,
  length: number,
  left: boolean,
  padding = '0'
) {
  const diff = length - str.length;
  let result = str;
  if (diff > 0) {
    const pad = padding.repeat(diff);
    result = left ? pad + str : str + pad;
  }
  return result;
}

export function padLeft(str: string, length: number, padding = '0') {
  return padString(str, length, true, padding);
}

export function padRight(str: string, length: number, padding = '0') {
  return padString(str, length, false, padding);
}
