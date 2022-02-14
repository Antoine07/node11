export const init = {
  min: 1,
  max: 100,
  attempt: 5,
};

export function numberSearch(min, max) {
  return Math.floor(Math.random() * max) + min;
}