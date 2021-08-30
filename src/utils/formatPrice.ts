import { toLocaleString } from 'src/utils/toLocaleString';

export const formatPrice = (value: number) => {
  return value < 10000
    ? toLocaleString(value) + '원'
    : value < 100000000
    ? toLocaleString(Math.floor(value / 10000)) + '만'
    : toLocaleString(Math.floor(value / 100000000)) + '억';
};
