# Optimization with WASM and WebAssembly

## baseline.html
Our baseline is atrocious. We never see our timer running because as soon as begin to process the data, the single thread of Javascript is blocked. So although it's very slow, we can't even calculate how much time has passed.

## promises.html
Promises offer the illusion of multi-threaded processes. But the compute-intensive task is equally bad with promises because the process of sorting a million numbers takes so long that, once it has begun, the thread stays blocked. There's no escaping the single-thread!

## webworker-js.html
Using a webworker 