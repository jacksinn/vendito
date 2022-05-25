import { Vendito } from '../index';

test('Shopify Version Provided', () => {
  expect(Vendito('2022-04')).toBe('supported');
});

test('Shopify Version _NOT_ Provided', () => {
  expect(Vendito('')).toBe('latest');
});
