const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your location?",
        name: "location",
    },
    {
        type: "input",
        message: "Please give a bio",
        name: "bio",
    },
    {
        type: "input",
        message: "Please provide your LinkedIn URL",
        name: "linkedin",
    },
    {
        type: "input",
        message: "Please provide your Github URL",
        name: "github",
    },
];

inquirer.prompt(questions).then((response) => {
    const content = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${response.name}</h1>
</body>
</html>

----------------------


# Test
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
​
## Description
​
This tests homework
​
## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Installation
​
To install necessary dependencies, run the following command:
​
```
npm i
```
​
## Usage
​
nothing.
​
## License
​
This project is licensed under the MIT license.
  
## Contributing
​
Send money.
​
## Tests
​
To run tests, run the following command:
​
```
npm test
```
​
## Questions
​
If you have any questions about the repo, open an issue or contact me directly at amaddatu@gmail.com. You can find more of my work at [amaddatu](https://github.com/amaddatu/).

`;

    fs.writeFile("portfolio.html", content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});
