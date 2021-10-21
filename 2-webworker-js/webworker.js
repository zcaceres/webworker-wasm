importScripts("../0-baseline/big.js");
const words = self.BIG_TEXT.split(" ");

function getPctComplete(current, total) {
  return (current / total) * 100;
}

function search(query) {
  console.log("Querying for", query);
  console.time("searching");
  let count = 0;
  for (let i = 1; i < words.length; i++) {
    if (words[i].includes(query)) {
      count += 1;
    }
    if (i % 1000 === 0) {
      const pctComplete = getPctComplete(i, words.length);
      postMessage({ message: "PROGRESS", pct: pctComplete });
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
