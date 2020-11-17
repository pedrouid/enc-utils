import * as encUtils from '../../src';

export function compare(a: any, b: any) {
  const type = encUtils.getType(a);
  if (type !== encUtils.getType(b)) {
    return false;
  }
  if (type === 'array-buffer') {
    a = Buffer.from(a);
    b = Buffer.from(b);
  }
  return a.toString().toLowerCase() === b.toString().toLowerCase();
}
