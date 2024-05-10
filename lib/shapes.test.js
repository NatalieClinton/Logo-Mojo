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
    expect(triangle.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="red" />');
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
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
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
    expect(square.render()).toEqual('<rect x="25" y="25" width="150" height="150" fill="red" />');
  });
});