async function getName(params) {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("khjsdhjer");
      }, 2000);
    });

    console.log("result:", result);
    return result;
  } catch (error) {
    console.log("error:", error);
  }
}

let data;
data = getName().then((data) => {
  console.log("data:", data);
});
console.log("data1:", data);
