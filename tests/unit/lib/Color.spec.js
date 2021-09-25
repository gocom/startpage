import Color from '../../../src/lib/Color';

test('Get random color', () => {
  expect(Color.random).toMatch(/^#/);
});
