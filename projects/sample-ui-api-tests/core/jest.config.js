module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    reporters: [
        "default",
        ["jest-html-reporter", 
        {
            "pageTitle": "Jest Html Report",
            "outputPath": process.cwd().split("projects")[0]+'/projects/'
                          +process.cwd().split("projects")[1]+'/reports/jest/JestReport.html',
            "includeFailureMsg": true
        }]
    ]
};
