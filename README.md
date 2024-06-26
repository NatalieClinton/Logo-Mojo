# Logo Generator
This project is a simple command-line tool that generates logos in SVG format. It allows the user to choose a shape (Triangle, Circle, or Square), specify the shape's color, enter up to three characters for the logo text, choose a text color, and select a font family.

## Installation
Clone this repository to your local machine.
Run npm install to install the required dependencies.

## Usage
Run the application using node index.js.
Follow the prompts to enter the desired logo parameters.
Once the logo is generated, a file will be saved in the examples folder.

## Dependencies
inquirer: Used for collecting user input through prompts.
fs: Used for file system operations.
path: Used for handling file paths.
lib/shapes: Contains classes for Triangle, Circle, and Square shapes.

## Viewing the Logo
To view the logo, open the `logo_*timestamp*.svg` file from the examples folder in a web browser or on VS Code with the SVG extension. The image will be displayed as a 300x200 pixel graphic that matches the criteria you entered.

## Example
Here is an example of how to generate a logo with the text "ABC", text color red, Arial font, a circle shape, and shape color blue:

1. Run `node index.js`.
2. Enter "ABC" for the text.
3. Enter "red" for the text color.
4. Choose "Arial" for the font family.
5. Choose "circle" for the shape.
6. Enter "blue" for the shape color.
7. Open `logo_*timestamp*.svg` in a web browser to view the generated logo.

## Tests

To run tests, run the following command: npm test

## Questions

If you have any questions about the project, feel free to reach out to me via [GitHub](https://github.com/NatalieClinton) or email me at natalie.clinton@hotmail.com.

## Link to Video 
https://drive.google.com/file/d/1RKonnBppUDfv6YD-OdWfkN0026rUTI_I/view 