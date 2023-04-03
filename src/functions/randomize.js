/**
 * Used to select a random subarray
 * @param {Array} array - source array
 * @param {int} length - desired size of the subarray 
 * @returns {Array}
 */

export default function randomize({ array, length }) {
  let indexes = [];
  let set;
  let imagesArray = [];

  do {
    indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(Math.floor(Math.random() * array.length))
    }
    set = new Set(indexes)
  } while (set.size !== length);

  for (let i = 0; i < length; i++) {
    imagesArray.push(array[indexes[i]]);
  }

  return imagesArray;
}