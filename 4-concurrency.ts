import { getFruit } from './3-async-await';
import { log } from './log';

const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b])

    return smoothie;
}


const fruitRace = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const winner = await Promise.race([a, b])

    return winner;
}

const tick = Date.now()
fruitRace().then((v) => log(v, tick))
fruitRace().then((v) => log(v, tick))
fruitRace().then((v) => log(v, tick))
fruitRace().then((v) => log(v, tick))
fruitRace().then((v) => log(v, tick))
