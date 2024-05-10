const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('setColor should set the color property', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.color).toBe('blue');
  });

  test('render should return the correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.render()).toEqual('<polygon points="300, 80 425, 300 170, 300" fill="red" />');
  });
});

describe('Circle', () => {
  test('setColor should set the color property', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.color).toBe('green');
  });

  test('render should return the correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="300" cy="200" r="80" fill="blue" />');
  });
});

describe('Square', () => {
  test('setColor should set the color property', () => {
    const square = new Square();
    square.setColor('yellow');
    expect(square.color).toBe('yellow');
  });

  test('render should return the correct SVG string', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect x="200" y="100" width="200" height="200" fill="red" />');
  });
});