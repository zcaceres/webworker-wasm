let nums = [];
function prepData() {
    for (let i = 0; i < 1000000; i++) {
        nums.push(Math.random());
    }
}

function timer() {
    let time = 0.0
    window.timeInterval = setInterval(() => {
        time += 0.100
        document.querySelector("#time").innerHTML = time.toFixed(1);
    }, 100)
}

function sorter() {
    document.querySelector("#prep").innerHTML = 'Sorting Data...';
    console.log("Start");
    console.time('sorting');
    nums.sort();
    console.timeEnd('sorting');
    console.log('End!');
}

prepData()
setTimeout(() => {
    timer()
    sorter()
    clearInterval(window.timeInterval);
    document.querySelector("#result").innerHTML = "SORTED!";
}, 1000)