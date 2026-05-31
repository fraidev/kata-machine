export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmmount;
    for (; i < breaks.length; i += jmpAmmount) {
        if (breaks[i]) {
            break;
        }
    }
  
    i -= jmpAmmount;

    for (let j = 0; j < jmpAmmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
          return i;
        }
    }
    return -1;
}
