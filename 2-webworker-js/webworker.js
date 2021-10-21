importScripts("../0-baseline/big.js");
const words = self.BIG_TEXT.split(" ");

function search(query) {
  console.log("Querying for", query);
  console.time("searching");
  let count = 0;
  for (let i = 1; i < words.length; i++) {
    if (words[i].includes(query)) {
      count += 1;
    }
  }
  console.log("End!");
  console.timeEnd("searching");
  return count;
}

onmessage = function ({ data: { query } }) {
  if (query) {
    const count = search(query);
    postMessage({ message: "COUNT", count });
  }
};
