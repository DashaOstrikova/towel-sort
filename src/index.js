
module.exports = function towelSort (matrix=[]) {
  let towel = [];
  let st = 0;
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      if(i % 2 !== 0 && st!=i){
        matrix[i].reverse();
        st = i;
      }
      towel = [...towel, matrix[i][j]]
    }
  }
  return towel;
}