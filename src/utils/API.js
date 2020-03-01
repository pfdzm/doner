import charities from "./data.json";

export default function fetchCharities(delay = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(charities);
    }, delay);
  });
}
