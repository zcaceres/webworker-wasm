Ideas for feature
- spinning image to show whether the UI thread is blocked
- Tasks:
    - real time dictionary search
    - static dictionary search
    - dictionary sorting
    - sorting a million random numbers


# Optimization with WASM and WebAssembly

## To Run
To run the samples below, you [must launch Chrome with the `--allow-file-access-from-files` flag](https://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode).

Run this on OSX.
```sh
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files
```

## baseline.html - Vanilla JS
Our baseline is atrocious. We never see our timer running because as soon as begin to process the data, the single thread of Javascript is blocked. So although it's very slow, we can't even calculate how much time has passed.

This version takes about X seconds.

## promises.html - Promisified JS
Promises offer the illusion of multi-threaded processes. But the compute-intensive task is equally bad with promises because the process of sorting a million numbers takes so long that, once it has begun, the thread stays blocked. There's no escaping the single-thread!

This version takes about X seconds, too.

## webworker-js.html - WebWorker with JS
Let's try a Javascript WebWorker. WebWorkers do not have access to the DOM. Think of them almost like a remote server, where you're making requests through the `window.postMessage` interface and waiting to hear back an unknown amount of time in the future.

The JS WebWorker approach means we can refactor out our compute-intensive task (generating the numbers and sorting them) and leave the UI-oriented tasks (such as updating the timer) in the main JS thread.



WebWorkers have a bit of overhead on startp. So this version is actually *slower* than the last two! It takes about X seconds.

But, the UI stays responsive since we don't block the main thread. This version *feels* faster (a good lesson in UI design). But it isn't. We are still doing the same heavy computation in Javascript. It's just as slow, but now in a background thread with the overhead of a WebWorker.

## webworker-rust.html - WebWorker with Rust
Let's now rewrite out functionality in Rust and compile it to WebAssembly. We'll then load it in a background worker as in the last example.

We export one function to Javascript from our WASM bundle. This is `generate_and_sort()`. This function is called by our JS by run inside our WebAssembly bundle. It also generates and sorts a million numbers, adhering as closely to the original JS implementation as I could.

## Conclusion
