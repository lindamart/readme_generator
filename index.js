const inquirer = require("inquirer");
const fs = require("fs");

const headings = [
    {
        type: "input",
        message: "Please give a desription of your application",
        name: "description",
    },
    {
        type: "list",
        message: "Write your Table of contents",
        name: "contents",
        choices: ["*[Installation](#installation)", "* [License](#license)", "License", "Contributing", "Tests", "Questions", ]
    },
    {
        type: "input",
        message: "Advise on what to do to install",
        name: "install",
    },
    {
        type: "input",
        message: "Please provide app usage",
        name: "usage",
    },
    {
        type: "list",
        message: "Please provide applications license",
        name: "license",
        // update list
        choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions", ]
    },
    {
        type: "input",
        message: "Please advise on contributions",
        name: "contributing",
    },
    {
        type: "input",
        message: "Please advise on test details",
        name: "test",
    },
    {
        type: "input",
        message: "Contact info for questions",
        name: "contactEmail",
    },
    {
        type: "input",
        message: "Project Title",
        name: "title",
    },
        {
            type: "input",
            message: "GitHub User Name",
            name: "githubName",
        },
        {
            type: "input",
            message: "GitHub profile link",
            name: "githubLink",
        },
        
];

inquirer.prompt(headings).then((response) => {
    const content = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${response.title}</title>
</head>
<body>

# Test
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
​
${response.description}
​
## Table of Contents 
​${response.contents}

​


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

npm i

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

npm test

​
## Questions
​
If you have any questions about the repo, open an issue or contact me directly at amaddatu@gmail.com. You can find more of my work at [amaddatu](https://github.com/amaddatu/).

</body>
</html>
`;

    fs.writeFile("readme.md", content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});
