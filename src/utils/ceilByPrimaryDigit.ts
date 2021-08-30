export const ceilByPrimaryDigit = (value: number): number => {
  const firstDigit = ('' + value).split('').shift();
  const digits = 10 ** Math.floor(Math.log10(value));

  return value % digits === 0 ? value : (Number(firstDigit) + 1) * digits;
};
