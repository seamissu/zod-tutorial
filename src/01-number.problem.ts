import { expect, it } from 'vitest';
import { z } from 'zod';

const mySchema = z.number();

export const toString = (num: unknown) => {
  if (typeof mySchema.parse(num) === 'string') {
    throw new Error('Expected number, received string');
  } else if (typeof mySchema.parse(num) === 'number') {
    return String(num);
  }
};

// TESTS

it('Should throw a runtime error when called with not a number', () => {
  expect(() => toString('123')).toThrowError(
    'Expected number, received string'
  );
});

it('Should return a string when called with a number', () => {
  expect(toString(1)).toBeTypeOf('string');
});
