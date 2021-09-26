const nums = [];

function prepData() {
    return new Promise((resolve) => {
        for (let i = 0; i < 1000000; i++) {
            nums.push(Math.random());
        }
        resolve();
    })
}

function sorter() {
    return new Promise((resolve) => {
        postMessage("SORTING");
        console.log("sorting")
        console.time('sorting');
        nums.sort();
        console.timeEnd('sorting');
        resolve();
    })
}

onmessage = function({ data }) {
    if (data === 'START') {
        prepData()
            .then(() => sorter())
            .then(() => postMessage('DONE'));
    }
}