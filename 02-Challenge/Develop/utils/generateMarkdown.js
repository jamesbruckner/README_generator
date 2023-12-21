// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const inquirer = require('inquirer');

function renderLicenseBadge(license) {
  const licenseBadgeURLs = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  };

  if (licenseBadgeURLs.hasOwnProperty(license))
{
    return `![License Badge](${licenseBadgeURLs[license]})`;
  } else {
    return ''
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## License

  ${renderLicenseBadge(answers.license)}

## Description 

${answers.description}

# Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}


## Contributing 

${answers.contributing}

## Tests

${answers.tests}

## Questions

${answers.github}

${answers.email}

${answers.contact}`;
}

module.exports = generateMarkdown;

//shields.io for badge