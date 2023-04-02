export default function randomize({ array, length, maxIndex }) {
  let indexes = [];
  let set;
  let imagesArray = [];

  do {
    indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(Math.floor(Math.random() * maxIndex))
    }
    set = new Set(indexes)
  } while (set.size !== length);

  for (let i = 0; i < length; i++) {
    imagesArray.push(array[indexes[i]]);
  }

  return imagesArray;
}