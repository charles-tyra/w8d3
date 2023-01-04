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