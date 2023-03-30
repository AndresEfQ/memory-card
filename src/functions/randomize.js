export default function randomize({ array, length }) {
  let indexes = [];
  let set;
  let imagesArray = [];

  do {
    indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(Math.floor(Math.random() * 100))
    }
    set = new Set(indexes)
  } while (set.size !== length);

  for (let i = 0; i < length; i++) {
    imagesArray.push(array[indexes[i]]);
  }

  console.log({indexes, imagesArray})

  return imagesArray;
}