// Checks for browser compatibility
if (window.Worker) {
    const SorterWorker = new Worker('./generate-and-sort.js')

    function timer() {
        return new Promise((resolve) => {
            let time = 0.0

            window.timeInterval = setInterval(() => {
                time += 0.100
                document.querySelector("#time").innerHTML = time.toFixed(1);
            }, 100)

            resolve();
        })
    }

    setTimeout(() => {
        console.log("Start");
        SorterWorker.postMessage("START")
        timer();
        SorterWorker.onmessage = function ({ data }) {
            if (data === "SORTING") {
                document.querySelector("#prep").innerHTML = 'Sorting Data...';
            } else if (data === "DONE") {
                clearInterval(window.timeInterval);
                document.querySelector("#result").innerHTML = "SORTED!";
                console.log('End!');
                SorterWorker.terminate();
            }
        }
    }, 1000)

} else {
    throw new Error("This browser does not support WebWorkers!")
}

