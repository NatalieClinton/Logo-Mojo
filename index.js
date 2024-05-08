import('inquirer').then(({ default: inquirer }) => {
    const fs = require('fs');
    const path = require('path');
    const { Triangle, Circle, Square } = require('./lib/shapes');
  
    // Path to the examples folder
    const examplesFolderPath = path.join(__dirname, 'examples');
  
    // Create the examples folder if it doesn't exist
    if (!fs.existsSync(examplesFolderPath)) {
      fs.mkdirSync(examplesFolderPath);
    }
  
    // Create an inquirer prompt to collect user input
    inquirer
      .prompt([
        { name: 'text', message: 'Enter up to three characters for the text:' },
        { name: 'textColor', message: 'Enter the text color:' },
        { name: 'shape', type: 'list', message: 'Choose a shape:', choices: ['Triangle', 'Circle', 'Square'] },
        { name: 'shapeColor', message: 'Enter the shape color:' },
      ])
      .then(answers => {
        // Based on the selected shape, create an instance of the corresponding class
        let shape;
        switch (answers.shape) {
          case 'Triangle':
            shape = new Triangle();
            break;
          case 'Circle':
            shape = new Circle();
            break;
          case 'Square':
            shape = new Square();
            break;
        }
  
        // Set the color of the shape
        shape.setColor(answers.shapeColor);
  
        // Generate the SVG string
        const svg = `<svg width="300" height="200">
                      ${shape.render()}
                      <text x="150" y="100" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
                    </svg>`;
  
        // Write the SVG string to a file in the examples folder
        const fileName = `logo_${Date.now()}.svg`;
        const filePath = path.join(examplesFolderPath, fileName);
        fs.writeFileSync(filePath, svg);
  
        // Print a message indicating that the logo was generated
        console.log(`Generated ${fileName}`);
      })
      .catch(err => {
        console.error('An error occurred:', err);
      });
  });