const { Triangle } = require('./shapes');

describe('Triangle', () => {
  test('setColor should set the color property', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.color).toBe('blue');
  });

  test('render should return the correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });
});