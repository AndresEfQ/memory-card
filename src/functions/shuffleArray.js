/**
 * Used to shuffle an input array
 * @param {Array} array - input array 
 * @returns {Array}
 */

export default function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}