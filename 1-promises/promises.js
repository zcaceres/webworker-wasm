let nums = [];
function prepData() {
    return new Promise((resolve) => {
        for (let i = 0; i < 1000000; i++) {
            nums.push(Math.random());
        }
        resolve();
    })
}

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

function sorter() {
    return new Promise((resolve) => {

        console.log("sorting");
        console.time('sorting');
        nums.sort();
        console.timeEnd('sorting');
w
        resolve();
    })
}

setTimeout(() => {
    console.log("Start");
    prepData().then(() => {
        document.querySelector("#prep").innerHTML = 'Sorting Data...';
        return Promise.all([timer(), sorter()])
    }).then(() => {
        clearInterval(window.timeInterval);
        document.querySelector("#result").innerHTML = "SORTED!";
        console.log('End!');
    })
}, 1000)