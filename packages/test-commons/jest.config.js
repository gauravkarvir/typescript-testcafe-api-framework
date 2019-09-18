module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    reporters: [
        "default",
        ["jest-html-reporter", {
            "pageTitle": "Test-Commons Unit Tests",
            "outputPath": "./reports/index.html"
        }]
    ]
};

