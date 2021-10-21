function timer() {
  let time = 0.0;
  window.timeInterval = setInterval(() => {
    time += 0.1;
    document.querySelector("#time").innerHTML = time.toFixed(1);
  }, 100);
}

function wc_text() {
  const text = window.BIG_TEXT;
  const words = text.split(/\W+/);
  const wc = {};
  words.forEach((word) => {
    if (wc[word] === undefined) {
      wc[word] = 1;
    } else {
      wc[word] += 1;
    }
  });
  return wc;
}

function search_text(query) {
  const text = window.BIG_TEXT;
  const words = text.split(/\W+/);
  const matches = [];
  words.forEach((word) => {
    if (word.includes(query)) {
      matches(word);
    }
  });
  return matches;
}

function search(query) {
  const json = window.DICTIONARY;
  const matches = [];
  Object.entries(json).forEach(([k, v]) => {
    if (v.includes(query) || k.includes(query)) {
      matches.push(`${k}: ${v}`);
    }
  });
  return matches;
}

setTimeout(() => {
  timer();
  console.log("Searching");
  console.time("searching");
  document.querySelector("#prep").innerHTML = "Searching...";
  // const matches = search_text("c");
  const matches = search("brake");
  // const nums = generate_nums();
  matches.forEach(match => {
    const li = document.createElement('li')
    li.innerHTML = match;
    document.querySelector('#results').appendChild(li)
  })
  JSON.parse(JSON.stringify(window.DICTIONARY));
  // console.table(nums);
  clearInterval(window.timeInterval);
  console.timeEnd("searching");
  console.log("End!");
  document.querySelector("#result").innerHTML = "Done!";
  document.querySelector("#results")
}, 1000);


function generate_nums() {
  const nums = []
  for (let i = 0; i < 10000000; i++) {
    nums.push(i)
  }
  return nums;
}
