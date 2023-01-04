const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'what is the tittle?',
        

    },
    {
        type: 'input',
        name: 'description',
        message: 'what is the descrition',


    },
    {
        type:'input',
        name: 'installation',
        message: 'what is the installation instruction',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'what is the guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'what is the test instructions',

    },
    {
        type: 'list',
        name: 'licenses',
        message: 'what is the licenses',
        choices: 'NU General Public License v3.0, MIT License,bsd 3-clause',


    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email',

    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github account',
    }
  ])
  .then((answers) => {
    const readmePageContent = (answers)

    fs.writeFile('README.md', readmePageContent, (err) => 
        err ? cknsole.log(err) : console.log ('succefully created index.readme!')

    ) 
  })


init
function init(answers) {
    return`
    ![alt text](https://img.shields.io/badge/license-${answers.licence}-blueviolet)
    # ${answers.title}
    ## tables of content
    >- [Description](#description)
    >- [Guidelines](#guidelines)
    >- [Installation](#installation)
    >- [License](#license)
    >- [Test](#test)
    >- [Email](#email)
    >- [Github](#github)
    ## Description
    >${answers.description}
    ## Guidelines
    >${answers.guidelines}
    ## Installation
    >${answers.installation}
    ## Licenses
    >${answers.licenses}
    ## Test
    >${answers.test}
    ## Email
    >${answers.email}
    ## Github
    >${answers.github}
    ` 
}


