Array.prototype.myEach = function(cb){
    for (i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

function callback(el) {
   return el + '!';
}

// let arr = [1, 2, 3, 4];
console.log([1, 2, 3, 4].myEach(callback));

Array.prototype.myMap = function(cb) {
   const freeArr = [];

   let funk = (el) => freeArr.push(cb(el));

   this.myEach(funk);
   return freeArr;
}

const closure = [1,2,3,4,5].myMap();

console.log(closure(callback));


Array.prototype.myReduce = function(callback, initialValue = undefined) {
   let total;
   if (initialValue === undefined){
      total = this[0];
      this.slice(1, this.length).myEach(el => {
         total = callback(total, el);
      })
   }
   else {
      total = initialValue
      this.myEach(el => {
         total = callback(total, el);
      })
   }
   return total;
}