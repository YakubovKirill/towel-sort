
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArr = []
  let counter = 0;

  if (matrix === undefined) return []

  matrix.forEach(elem => {
    index = (counter % 2 === 0) ? 
      elem.forEach(reverse => resArr.push(reverse))
      : elem.reverse().forEach(reverseElem => resArr.push(reverseElem));
    counter ++
  });
  
  return resArr;
}
