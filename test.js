const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "input",
        message: "Please give a desription of your application",
        name: "description",
    },
    {
        type: "checkbox",
        message: "Write your Table of contents",
        name: "contents",
        choices: ["*[Installation](#installation)", new inquirer.Separator(), "* [License](#license)", new inquirer.Separator(), "* [License](#license)", new inquirer.Separator(), "* [Contributing](#contributing)", new inquirer.Separator(), "* [Tests](#tests)", new inquirer.Separator(), "* [Questions](#questions)",]
    },
    {
        type: "input",
        message: "Advise on command for install",
        name: "installation",
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
        choices: ["![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)", new inquirer.Separator(), "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg),]"]

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
        name: "questions",
    },
    {
        type: "input",
        message: "Project Title",
        name: "title",
    },

]

inquirer.prompt(questions).then((response) => {
    const content = `

${response.title}

${response.license}


## Description
​
${response.description}
​
## Table of Contents 
​${response.contents}

​
​
## Installation
​
​${response.installation}

​
## Usage
​
​${response.usage}
​
## License
​
​${response.license}

## Contributing
​
​${response.contributing}
​
## Tests
​
​${response.test}


​
## Questions
​​${response.questions}

`;

    fs.writeFile("readme.md", content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});
