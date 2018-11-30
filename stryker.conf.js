module.exports = function(config) {
  config.set({
    // mutator: "javascript",
    mutator: {
      name: "javascript",
      excludedMutations: ["Block" ] // "IfStatement", "StringLiteral", "BinaryExpression", "ConditionalExpression", "ObjectLiteral" 
    },
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",      //pertest or all
    mutate: [
        "!app.js",
        "!router/*.js",
        "handler/*.js",
        "!services/*.js",
        "!util/*.js"
      ],
    files: [
      "app.js", "handler/*.js", "router/*.js", "services/*.js", "util/*.js", "test/test.js"
      ],
    logLevel: 'debug',
    mochaOptions: {
            files: ["test/*.js"],
            // opts: 'test/mocha.opts'
    },
    // maxConcurrentTestRunners: 2
  });
};
