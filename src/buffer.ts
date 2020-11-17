import { arrayToBinary } from './array';
import { ENC_HEX, ENC_UTF8 } from './constants';
import { addHexPrefix } from './misc';

// -- Buffer --------------------------------------------- //

export function bufferToArray(buf: Buffer): Uint8Array {
  return new Uint8Array(buf);
}

export function bufferToHex(buf: Buffer, prefixed = false): string {
  const hex = buf.toString(ENC_HEX);
  return prefixed ? addHexPrefix(hex) : hex;
}

export function bufferToUtf8(buf: Buffer): string {
  return buf.toString(ENC_UTF8);
}

export function bufferToNumber(buf: Buffer): number {
  return buf.readUIntBE(0, buf.length);
}

export function bufferToBinary(buf: Buffer): string {
  return arrayToBinary(bufferToArray(buf));
}
