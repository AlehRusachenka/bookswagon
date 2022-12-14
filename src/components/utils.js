export const calcTotalPrice = (items) =>
  items.reduce((acc, item) => (acc += item.price), 0);

const max = 100;
const min = 10;
export const getPrice = () => Math.floor(Math.random() * (max - min + 1)) + min;
