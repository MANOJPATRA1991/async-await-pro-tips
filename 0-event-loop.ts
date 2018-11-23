// L1
// Gets logged right away because it is running on the main thread
console.log('🥪 Synchronous 1');

// L2
// Queued for a future task
setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// L3
// Queued to be run in the micro-task queue
Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// L4
// Gets executed right away
console.log('🥪 Synchronous 4');


// OUTPUT
// 🥪 Synchronous 1 
// 🥪 Synchronous 4 // Promise gets executed befor the setTimeout because of the priority of the microtask queue
// 🍍 Promise 3 
// 🍅 Timeout 2