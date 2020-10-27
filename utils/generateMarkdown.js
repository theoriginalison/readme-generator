// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

// need to add badges here!
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Screenshot](#screenshot)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Screeshot
  ![Screenshot of ${data.title}](${data.screenshot})

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Find me on GitHub here: ${data.gitHub}
  Or you can reach me at ${data.email} for any additional questions.

`;
}

module.exports = generateMarkdown;
