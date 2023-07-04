# CommunityCode Web: Cypress Starter Project
Cypress is a front-end testing tool for web applications using modern JavaScript frameworks.\
The Cypress Starter project enables you to quickly run tests in cypress.

## Setting Up the Project

To set up the project:
Clone the project by running the following:
   ```
   git clone https://github.com/ExperitestOfficial/CommunityCode-Web-CypressStarterProject.git
   cd CommunityCode-Web-CypressStarterProject
   ```

## Running Tests
To run the test in this project, chose one of the following options:

### Using Dai-CT CLI:
1. **CLI Installation:**\
   To install the package please run the following command (with sudo permissions):
 ```
    npm install -g dai-ct
 ```
2. **CLI Configuration:**\
   Set up authentication by updating the following parameters in [credentials.json](cypressProject/credentials.json):
    * cloud.url - Url for the cloud the test would run in. For example, https://company.experitest.com/
    * cloud.accessKey -  Personal authentication. See [Obtaining Access Key](https://docs.experitest.com/pages/viewpage.action?pageId=52593435) to learn how to obtain an access key.

3. **Running Cypress Tests:**\
   Run the following command:
 ``` 
    cd <path to the project folder>
    dai-ct cypress run -p <path to the project folder> --conf digitalai.json
   ```

### Using API: 
Compress the entire [cypressProject](cypressProject) folder content.\
Run POST API request by following the [documentation](https://docs.experitest.com/display/TE/Cypress#Cypress-StartaCypressexecution).

## Test Configuration
To update the test's browsers and cypress versions edit the following file [digitalai.json](cypressProject/digitalai.json).


## Documentation
To find out more about running tests on Cypress, visit our online 
[Cypress_using_API](https://docs.experitest.com/display/TE/Cypress#Cypress-StartaCypressexecution) and
[Cypress_using_Dai-CT_CLI](https://docs.experitest.com/pages/viewpage.action?spaceKey=TE&title=Dai-CT+Execution+CLI).

## Support
If you encounter an issue that is not covered here or in our online documentation, contact us at [support@digital.ai](mailto:support@digital.ai).