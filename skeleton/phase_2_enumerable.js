Array.prototype.myEach = function(cb){
  
    for (i = 0; i < this.length; i++) {
        cb(this[i]);
    }
    //return undefined;
}

function callback(el) {
   console.log(el + '!');
}


// let arr = [1, 2, 3, 4];
[1, 2, 3, 4].myEach(callback);