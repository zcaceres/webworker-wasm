// Checks for browser compatibility
if (window.Worker) {
  const SearchWorker = new Worker("./webworker.js");
  const timeDisplay = document.querySelector("#time");

  SearchWorker.onmessage = function ({ data: { message, count } }) {
    if (message === "COUNT") {
      document.getElementById("total").innerHTML = count;
      clearInterval(window.timeInterval);
    }
  };

  function submit() {
    let searchInput = document.getElementById("search-input").value;
    if (!searchInput) return;
    timer();
    SearchWorker.postMessage({ query: searchInput });
  }

  function resetTime() {
    // Clear old TimeDisplay state
    timeDisplay.innerHTML = "";
    // Clear any old timers
    clearInterval(window.timeInterval);
  }

  function timer() {
    resetTime();

    let time = 0.0;
    window.timeInterval = setInterval(() => {
      time += 0.1;
      timeDisplay.innerHTML = time.toFixed(2);
    }, 100);
  }

  document.getElementById("search-input").addEventListener("input", submit);
} else {
  throw new Error("This browser does not support WebWorkers!");
}
