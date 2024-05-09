class Triangle {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="300, 80 425, 300 170, 300" fill="${this.color}" />`;
  }
}

class Circle {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="300" cy="200" r="80" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="200" y="100" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };