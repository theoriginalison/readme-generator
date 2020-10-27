// function to generate markdown for README
function generateMarkdown(data) {

  console.log(data.license)
  let badgeURL = " ";
  let licenseText = " ";

  if (data.license === "MIT") {
    badgeURL = "https://img.shields.io/badge/license-MIT-green"
    licenseText = `MIT License

    Copyright (c) 2020 [${data.name}]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`
  }
  if (data.license === "Apache") {
    //set the badge URL to the one for that actual license
  }
  if (data.license === "GPL") {
    //set the badge URL to the one for that actual license
  }
  if (data.license === "yourchoice") {
    //set the badge URL to the one for that actual license
  }


  return `# ${data.title}

  ![Badge for ${data.license}](${badgeURL})
  
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
  ${licenseText}

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
