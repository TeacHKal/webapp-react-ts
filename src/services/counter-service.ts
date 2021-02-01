export const increase = (currentSum: number) => {
    return currentSum + 1;
}

export const decrease = (currentSum: number) => {
    return currentSum--;
}

export const double = (currentSum: number) => {
    return currentSum * 2;
}

export const triple = (currentSum: number) => {
    return currentSum * 3;
}

export const multipleBy = (currentSum: number, multipleBy: number) => {
    return currentSum * multipleBy;
}

export const increaseBy = (currentSum: number, increaseBy: number) => {
    return currentSum + increaseBy;
}

// Example with promises
// export function increase(value: number): Promise<number> {
//     return new Promise((resolve, reject) => {
//         return value++;
//     });
// }

