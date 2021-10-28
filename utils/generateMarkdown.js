// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
  return "![Apache](/assets/apache.svg)";
} else if (license === "GNU") {
  return "![GNU](/assets/gun.svg)";
} else if (license === "MIT") {
  return "![MIT](/assets/mit.svg";
} else {
  return "![ISC](/assets/isc.svg)";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "https://choosealicense.com/licenses";
  if (license === "Apache") {
    licenseLink += "/apache-2.0";
  } else if (license === "GNU") {
    licenseLink += "/gpl-3.0";
  } else if (license === "MIT") {
    licenseLink += "/mit";
  } else {
    licenseLink += "/isc";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license);
  return `
  # ${data.titleOfProject}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Contact](#contact)
  - [Github](#github)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  Copyright (c) [${new Date().getFullYear()}]
  ${badge}
  ${renderLicenseLink(data.license)}

  ## Credits
  ${data.contributed}

  ## Tests
  ${data.tests}

  ## Contact
  ${data.email}

  ## Github
  ${data.github}

  ## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

`;
}

module.exports = generateMarkdown;
