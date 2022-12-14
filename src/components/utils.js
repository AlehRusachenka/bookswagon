const max = 100;
const min = 10;
export const getPrice = () => Math.floor(Math.random() * (max - min + 1)) + min;
