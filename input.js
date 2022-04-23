// import data from "./data";

// console.log("data:", data);

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "tony",
//       });
//     }, 1000);
//   });
// }

// (async function () {
//   const result = await getUser();
//   console.log("result:", result);
// })();
const fs = require("fs");
const path = require("path");

function co(it) {
  function fn(val) {
    const { value, done } = it.next(val);
    console.log("yield value:", value);
    if (!done) {
      fn(value);
    }
  }
  fn();
}

function* readAge(filePath) {
  let name = yield fs.readFileSync(path.resolve(__dirname, "1.txt"), "utf8");
  console.log("name:", name);
  let age = yield fs.readFileSync(path.resolve(__dirname, "2.txt"), "utf8");
  console.log("age:", age);
  return age;
}

co(readAge("./name.txt")).then((data) => {
  console.log(data);
});
