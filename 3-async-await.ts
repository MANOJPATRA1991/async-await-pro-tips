// Basic
// Using async keyword means the function automatically 
// resolves and returns a Promise
export const getFruit = async name => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑',
    strawberry: '🍓'
  };

  return fruits[name];
  // If we had not used the async keyword,
  // we could have done
  // return Promise.resolve(fruits[name]);
};

getFruit('peach').then(console.log); // 🍑

// Async + Await

const tick = Date.now();

export const makeSmoothie = async () => {
  // Pause the execution of this function until we resolve the value of getFruit('pineapple') and assign to 'a'
  // const a = await getFruit('pineapple');
  // const b = await getFruit('strawberry');
  // return [a, b];

  // In order to avoid blocking,
  const a = getFruit('pineapple');
  const b = getFruit('strawberry');
  // return Promise.all([a, b]);
  // OR
  // const smoothie = await Promise.all([a, b]);
  // return smoothie;
};

// Above code is equivalent to
// makeSmoothie().then(console.log); // [ '🍍', '🍓' ]

const makeSmoothie2 = () => {
  let a;
  return getFruit('pineapple')
    .then(v => {
      v = a;
      return getFruit('strawberry');
    })
    .then(v => [v, a]);
};

const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

makeSmoothie().then(log);