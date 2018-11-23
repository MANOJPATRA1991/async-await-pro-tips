export const logTimeout = n => console.log(`🍅 Timeout ${n}`);
export const logPromise = n => console.log(`🍍 Promise ${n}`);
export const logSync = n => console.log(`🥪 Synchronous ${n}`);
export const log = (v, tick) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);