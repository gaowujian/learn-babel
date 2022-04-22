const { readFileSync, writeFileSync } = require("fs");
const result = require("@babel/core").transformSync(readFileSync("./input.js"), {
  plugins: ["@babel/plugin-transform-modules-commonjs"],
});
writeFileSync("output.js", result.code);

console.log("result:", result);
