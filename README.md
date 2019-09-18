###  Typescript (Javascript) based Test Automation Framework for UI and Service level testing
##### *Supports Multiple Projects  using mono repo concept*

##### *Tools* 
- Lerna: Supports Mono Repo   
- GUI Automation: TestCafe https://devexpress.github.io/testcafe
- API / Service Automation: SuperTest / Axios
- Test Core: Jest   https://jestjs.io/
- TestCafe-Live: Dynamically update tests during test run
- Build Tool: Yarn https://yarnpkg.com/en/
- Language: Type Script https://www.typescriptlang.org/
- Reporters: testcafe-reporter-html-testrail for GUI
- Lint: TsLint https://palantir.github.io/tslint/
- Formatter: Prettier https://github.com/prettier/prettier

Test Service Clients




##### First Time Set up at the root level of repo
```
Install homebrew: 
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Install node 
    https://nodejs.org/en/

Install yarn:
    brew install yarn --without-node       

Install lerna:
    sudo npm install --global lerna

Install typescript:
    npm install -g typescript

Setup dependencies  
    yarn
    yarn lerna run tsc 

***To clear old dependencies
    yarn lerna:purge
    yarn lerna run tsc
```


Run  Tests
##### To run GUI tests for each project  

Navigate to project 

```
cd projects/sample-ui-api-tests/core

yarn webtest:dev
```

##### To run API tests for each project  

```
cd projects/sample-ui-api-tests/core

yarn apitest:dev
```



#### Advance Lerna options for publishing and versioning 
```
check for changes

    yarn lerna changed --json

bump the version only for conventional-commits

    yarn lerna version --conventional-commits --yes

list packages
    
    yarn lerna list --json
    
```
Common Configs

* `test-commons`: Common utilities, types, constants and code used across test modules

* `test-tyepscript-config`: Common typescript Config which is shared across multiple projects




#### Configure BrowserStack locally
Check if you have bash_profile file, if it doesn't exist, then follow the commands. 
Go to the home directory. 

```
cd ~
touch .bash_profile
sudo nano .bash_profile
```
Edit the file

```
export BROWSERSTACK_USERNAME='Replace with actual Browser Stack credential'
export BROWSERSTACK_ACCESS_KEY='Replace with actual Browser Stack credential
```

After you are finished, press Ctrl + O, Enter, and Ctrl + X to save and quit. Finally, use

Run 
```
source ~/.bash_profile
```


