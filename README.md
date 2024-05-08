# Logo Mojo

This command-line application allows you to create custom SVG logos by specifying text, text color, shape, and shape color. Follow the prompts to generate your logo.

## Installation

Clone the repository and run `npm install` to install the required dependencies.

## Usage

To run the application, use the command `node index.js` and follow the prompts to enter the text, text color, shape, and shape color for your logo.

### Text Input
- Enter up to three characters for the text of your logo.

### Text Color
- Enter a color keyword or a hexadecimal number for the text color.

### Shape
- Choose a shape from the following options: circle, triangle, square.

### Shape Color
- Enter a color keyword or a hexadecimal number for the shape color.

Once you have entered input for all the prompts, the application will create an SVG file named `logo.svg` in the project directory. The command line will display "Generated logo.svg" to indicate that the file has been created.

## Viewing the Logo

To view the logo, open the `logo.svg` file in a web browser. The image will be displayed as a 300x200 pixel graphic that matches the criteria you entered.

## Example

Here is an example of how to generate a logo with the text "ABC", text color red, a circle shape, and shape color blue:

1. Run `node index.js`.
2. Enter "ABC" for the text.
3. Enter "red" for the text color.
4. Choose "circle" for the shape.
5. Enter "blue" for the shape color.
6. Open `logo.svg` in a web browser to view the generated logo.

Enjoy creating your custom logos!