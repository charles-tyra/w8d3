Array.prototype.uniq = function() {
   let uniqArr = [];

   for(i = 0; i < this.length; i++){
      if (!uniqArr.includes(this[i])) {
         uniqArr.push(this[i])
      }
   }
   return uniqArr;
}

console.log([1, 2, 2, 3, 3, 3].uniq())

Array.prototype.twosum = function() {
    let uniqArr = [];

    for(i = 0; i < this.length - 1; i++){
        for(j = i + 1; j < this.length; j++){
            if(this[i] + this[j] === 0) {
                uniqArr.push([i, j])
            }
        }
    }
    return uniqArr
}

console.log([-1, 0, 1, 0, 2, 2].twosum())


Array.prototype.transpose = function() {
    let uniqArr = []
    let colArr = []

   for(col = 0; col < this[0].length; col++){
      colArr = []
      for(row = 0; row < this.length; row++){
         colArr.push(this[row][col]);
      }
      uniqArr.push(colArr);
   }
   return uniqArr;
}


console.log([
   [1, 1, 1],
   [2, 2, 2],
   [3, 3, 3]].transpose()
);