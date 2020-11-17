import _isTypedArray from 'is-typedarray';

import {
  ENC_BIN,
  ENC_HEX,
  ENC_UTF8,
  TYPE_ARRAY,
  TYPE_ARRAY_BUFFER,
  TYPE_BUFFER,
  TYPE_TYPED_ARRAY,
} from './constants';

// -- Validators ----------------------------------------- //

export function isBinaryString(str: any): boolean {
  if (typeof str !== 'string' || !new RegExp(/^[01]+$/).test(str)) {
    return false;
  }
  if (str.length % 8 !== 0) {
    return false;
  }
  return true;
}

export function isHexString(str: any, length?: number): boolean {
  if (typeof str !== 'string' || !str.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (length && str.length !== 2 + 2 * length) {
    return false;
  }
  return true;
}

export function isBuffer(val: any): boolean {
  return Buffer.isBuffer(val);
}

export function isTypedArray(val: any): boolean {
  return _isTypedArray.strict(val) && !isBuffer(val);
}

export function isArrayBuffer(val: any): boolean {
  return (
    !isTypedArray(val) &&
    !isBuffer(val) &&
    typeof val.byteLength !== 'undefined'
  );
}

export function getType(val: any) {
  if (isBuffer(val)) {
    return TYPE_BUFFER;
  } else if (isTypedArray(val)) {
    return TYPE_TYPED_ARRAY;
  } else if (isArrayBuffer(val)) {
    return TYPE_ARRAY_BUFFER;
  } else if (Array.isArray(val)) {
    return TYPE_ARRAY;
  } else {
    return typeof val;
  }
}

export function getEncoding(str: string) {
  if (isBinaryString(str)) {
    return ENC_BIN;
  }
  if (isHexString(str)) {
    return ENC_HEX;
  }
  return ENC_UTF8;
}
