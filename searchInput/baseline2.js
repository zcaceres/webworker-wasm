const words = window.BIG_TEXT.split(" ");

function submit() {
  let searchInput = document.getElementById("search-input").value;
  if (!searchInput) {
    clearResults();
    return;
  }
  timer();
  search(searchInput);
  clearInterval(window.timeInterval);
}

function timer() {
  let time = 0.0;
  window.timeInterval = setInterval(() => {
    time += 0.1;
    document.querySelector("#time").innerHTML = time.toFixed(2);
  }, 50);
}

function clearResults() {
  const results = document.querySelector("#results");
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
  document.getElementById("total").innerHTML = 0;
}

function search(query) {
  const results = document.querySelector("#results");
  clearResults(results);
  console.log("Start");
  console.log("searching");
  console.time("searching");
  let count = 0;
  const foundWords = [];
  for (let i = 1; i < words.length; i++) {
    if (words[i].includes(query)) {
      count += 1;
      document.getElementById("total").innerHTML = count.toString();
      foundWords.push(words[i]);
    }
  }

  foundWords.forEach((word) => {
    const li = document.createElement("li");
    li.innerHTML = word;
    results.appendChild(li);
  });

  console.log("End!");
  console.timeEnd("searching");
}

document.getElementById("search-input").addEventListener("input", submit);
document.getElementById("search-input").addEventListener("change", submit);
