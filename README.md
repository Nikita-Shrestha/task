# WiseAdmit Sign-In Automation

This project contains automated tests for the **Sign-In** module of the **WiseAdmit** website using **Cypress and Page Object Model (POM)** structure. Automation is done using Cypress **fixtures** for securing test data.

# Description

The Sign-In module allows users to log in using their email and password. This project automates testing of this module to ensure:

- Valid credentials allow successful login.  
- Invalid or empty fields display appropriate error messages.

   Note: Login using **phone number** has not been automated.

#Test Case

https://docs.google.com/spreadsheets/d/1-Hz5gX0NJHCWvskksJhirTNVbciN6gDe5lSnTkfPnVA/edit?gid=0#gid=0

Excel file contains all scenarios with positive and negative tests for logging using email only.

# How to Run Tests

1.Install **Node.js**
2. Install dependencies: **npm install**
3. Open Cypress test runner: **npx cypress open**
4. Run tests
5. Reports are generated automatically in **cypress/reports** and can be viewed manually.

# Project Structure (POM)
  cypress
  /-e2e                 #test script
  /-fixtures            #test data
  /-pages               #pom files
  /-reports             #test report
  /-support             #custom commands

# Additional Notes
Things That Could Break Sign-In

  1. Changes in the backend login API.
  2. New email/phone or password rules.
  3. Changes in input field IDs or button labels.
  4. Server downtime or network issues.
  5. Adding multi-factor authentication.

Suggested Improvements
1. Add “Remember Me” to stay logged in.
2. Limit failed login attempts and show clear error messages.
3. Fix input fields resizing or changing size while typing.
4. Improve UI consistency for login form fields.
5. Add visual feedback when login is processing.






