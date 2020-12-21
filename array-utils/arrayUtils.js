
const Numarr = [1,2,3,4,5,6,7,8,9,10];

Array.prototype.ujwalMap = function(func){
  let results = [];
  for(let i = 0; i < this.length; i++){
    results.push(func(this[i], i, this));
  }
  return results;
}

Numarr.forEach(num => num*2);





// export {
//   UjwalforEach,
//   ujwalMap,
//   Ujwalfilter,
//   Ujwalreduce,
// }