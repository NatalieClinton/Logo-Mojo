class Triangle {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
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
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
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
    return `<rect x="25" y="25" width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };