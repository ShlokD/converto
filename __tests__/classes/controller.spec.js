import Controller from '../../src/js/classes/controller';

describe("Controller", () => {
  let controller;
  let actual;
  let expected;

  const mockEvent = { preventDefault: () => { } }


  beforeEach(() => {
    document.body.innerHTML = `<div id="app">
    <label for="csv-input">Enter CSV Text: </label>
     <textarea id="csv-input"></textarea>
     <button id="convert">Convert</button>
     <p id="output"></p>
     <p id="warning"></p>
   </div>`
    controller = new Controller();
  });

  test('it sets warnings', () => {
    controller.setWarning('Incorrect CSV');
    actual = document.getElementById('warning').textContent;
    expected = 'Incorrect CSV';
    expect(actual).toEqual(expected);
  });

  test('it sets output', () => {
    controller.setOutput(`[{"foo":12, "bar":13}]`);
    actual = document.getElementById('output').textContent;
    expected = '[{"foo":12, "bar":13}]';
    expect(actual).toEqual(expected);
  });

  test('it sets warning for incorrect input value', () => {
    controller.handleConversion(mockEvent);
    actual = document.getElementById('warning').textContent;
    expected = 'Incorrect CSV';
    expect(actual).toEqual(expected);
  });


  test('it sets warning for incorrect input value', () => {
    document.getElementById('csv-input').value = `foo,bar\n12,13\n5,6`;
    controller.handleConversion(mockEvent);
    actual = document.getElementById('output').textContent;
    expected = JSON.stringify([{ foo: "12", bar: "13" }, { foo: "5", bar: "6" }])
    expect(actual).toEqual(expected);
  });
})