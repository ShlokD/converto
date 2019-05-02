import CSV from '../../src/js/classes/csv'

describe("CSV", () => {
  let actual;
  let expected;
  let csv;

  beforeEach(() => {
    csv = new CSV();
  })

  test('it returns false for non-string', () => {
    csv.setInput(23);
    expected = false;
    actual = csv.checkValidity();
    expect(actual).toEqual(expected);
  })

  test('it returns false for empty string', () => {
    csv.setInput('  ');
    expected = false;
    actual = csv.checkValidity();
    expect(actual).toEqual(expected);
  })

  test('it returns false for invalid string', () => {
    csv.setInput('foo bar');
    expected = false;
    actual = csv.checkValidity();
    expect(actual).toEqual(expected);
  })

  test('it returns false for invalid string', () => {
    csv.setInput('foo,bar');
    expected = false;
    actual = csv.checkValidity();
    expect(actual).toEqual(expected);
  });

  test('it returns false for invalid string', () => {
    csv.setInput('foo,bar\n12');
    expected = false;
    actual = csv.checkValidity();
    expect(actual).toEqual(expected);
  })

  test('it returns true for valid string', () => {
    csv.setInput('foo,bar\n12,13');
    expected = true;
    actual = csv.checkValidity();
    expect(actual).toEqual(expected);
  })

  test('it returns true for valid string with spaces', () => {
    csv.setInput('foo,bar\n12,');
    expected = true;
    actual = csv.checkValidity();
    expect(actual).toEqual(expected);
  })

  test('it returns formatted JSON', () => {
    csv.setInput('foo,bar\n12,13\n15,16');
    expected = JSON.stringify([{ "foo": "12", "bar": "13" }, { "foo": "15", "bar": "16" }])
    actual = csv.toJSON();
    expect(actual).toEqual(expected);
  })
});