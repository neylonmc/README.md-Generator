// Function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
### Description
  ${answers.description}
## Table of Contents
  \n* [Installation](#installation)
  \n* [Usage](#usage)
  \n* [License](#license)
  \n* [Contributing](#contributing)
  \n* [Tests](#tests)
  \n* [Questions?](#questions)

## Installation
  \`\`\`
  ${answers.installation}
  \`\`\`
  
## Usage
  ${answers.usage}
  
## License
  [![License](https://img.shields.io/badge/License-${answers.license}%202.0-blue.svg)](https://opensource.org/licenses/${answers.license})
  
## Contributing
  ${answers.contributing}
  
## Tests
  ${answers.test}
  
## Questions? Contact Me
  GitHub: [${answers.github}]("https://github.com/${answers.github}")
  Email: [${answers.email}]("mailto:${answers.email}") `
};

module.exports = generateMarkdown;
