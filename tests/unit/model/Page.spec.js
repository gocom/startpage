import Model from '../../../src/model/Page';

test('Set page', () => {
  const page = new Model(1);

  expect(page.number).toBe(1);
  expect(page.isActive).toBeFalsy();
});

test('Set page to active', () => {
  const page = new Model(2, true);

  expect(page.number).toBe(2);
  expect(page.isActive).toBeTruthy();
});
