# enc-utils [![npm version](https://badge.fury.io/js/enc-utils.svg)](https://badge.fury.io/js/enc-utils)

Byte encoding utils

## API

```typescript
// -- Buffer --------------------------------------------- //

function bufferToUtf8(buf: Buffer): string;
function bufferToHex(buf: Buffer, prefixed?: boolean): string;
function bufferToArray(buf: Buffer): Uint8Array;
function bufferToArrayBuffer(buffer: Buffer): ArrayBuffer;
function bufferToNumber(buf: Buffer): number;

// -- Utf8 ----------------------------------------------- //

function utf8ToBuffer(utf8: string): Buffer;
function utf8ToHex(utf8: string, prefixed?: boolean): string;
function utf8ToArray(utf8: string): Uint8Array;
function utf8ToArrayBuffer(utf8: string): ArrayBuffer;
function utf8ToNumber(utf8: string): number;

// -- Hex ------------------------------------------------ //

function hexToBuffer(hex: string): Buffer;
function hexToUtf8(hex: string): string;
function hexToArray(hex: string): Uint8Array;
function hexToArrayBuffer(hex: string): ArrayBuffer;
function hexToNumber(hex: string): number;

// -- Uint8Array ----------------------------------------- //

function arrayToBuffer(arr: Uint8Array): Buffer;
function arrayToUtf8(arr: Uint8Array): string;
function arrayToHex(arr: Uint8Array, prefixed?: boolean): string;
function arrayToArrayBuffer(arr: Uint8Array): ArrayBuffer;
function arrayToNumber(arr: Uint8Array): number;

// -- ArrayBuffer ---------------------------------------- //

function arrayBufferToBuffer(arrBuf: ArrayBuffer): Buffer;
function arrayBufferToUtf8(arrBuf: ArrayBuffer): string;
function arrayBufferToHex(arrBuf: ArrayBuffer, prefixed?: boolean): string;
function arrayBufferToArray(arrBuf: ArrayBuffer): Uint8Array;
function arrayBufferToNumber(arrBuf: ArrayBuffer): number;

// -- Number --------------------------------------------- //

function numberToBuffer(num: number): Buffer;
function numberToUtf8(num: number): string;
function numberToHex(num: number, prefixed?: boolean): string;
function numberToArray(num: number): Uint8Array;
function numberToArrayBuffer(num: number): ArrayBuffer;

// -- Misc ----------------------------------------------- //

function concatArrayBuffers(...args: ArrayBuffer[]): ArrayBuffer;
function concatBuffers(...args: Buffer[]): Buffer;
function trimLeft(data: Buffer, length: number): Buffer;
function trimRight(data: Buffer, length: number): Buffer;
function padString(
  str: string,
  length: number,
  left: boolean,
  padding?: string
): string;
function padLeft(str: string, length: number, padding?: string): string;
function padRight(str: string, length: number, padding?: string): string;
function removeHexPrefix(hex: string): string;
function addHexPrefix(hex: string): string;
function isHexString(value: any, length?: number): boolean;
```
