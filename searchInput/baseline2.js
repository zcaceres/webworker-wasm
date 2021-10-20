let nums = [];
function prepData() {
    for (let i = 0; i < 1000; i++) {
        nums.push(Math.floor(Math.random() * 1000) + 1);
    }
}

prepData()

let submit = function() {
    console.log(nums);
    let searchInput = document.getElementById('search-input').value;
    searchInput.value = "";
    timer();
    search(searchInput);
    clearInterval(window.timeInterval);
}


function timer() {
    let time = 0.0
    window.timeInterval = setInterval(() => {
        time += 0.100
        document.querySelector("#time").innerHTML = time.toFixed(1);
    }, 100)
}

function search(searchNum) {
    setTimeout(() => {
        console.log("Start");
        console.log("searching");
        console.time('searching');
        console.timeEnd('searching');
        console.log('End!');
        let count = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i].toString().includes(searchNum.toString())) {
                console.log('found match')
                count += 1;
                document.getElementById('total').innerHTML = count.toString();
            }
        }
    }, 1000)
}