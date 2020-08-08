import Model from '../../../../src/model/Config/ConfigValue';

test('Defaults', () => {
  const config = new Model();

  expect(config.id).toMatch('');
  expect(config.value).toBeNull();
});

test('Pass data', () => {
  const config = new Model({
    id: 'id',
    value: 'value',
  });

  expect(config.id).toMatch('id');
  expect(config.value).toMatch('value');
});
