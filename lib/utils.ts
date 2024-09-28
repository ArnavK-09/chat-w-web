/**
 * Returns random number between mentioned range
 * @param min
 * @param max
 * @returns number
 */
export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
