function callback(el) {
    console.log(el + '!' );
}

Array.prototype.myEach = function(cb){
  
    for (i = 0; i < this.length; i++) {
        cb(this[i]);
    }
    //return undefined;
}

let arr = [1, 2, 3, 4];
arr.myEach(callback);

