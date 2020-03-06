import charities from "./data.json";

const randDelay = Math.floor(Math.random() * 2000);

export default function fetchCharities(delay = randDelay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(charities);
    }, delay);
  });
}
