import charities from "./data.json";

export default function fetchCharities(delay = 500) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(charities);
    }, delay);
  });
}
