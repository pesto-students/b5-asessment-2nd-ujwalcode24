const arr = [1, 2.12, 4.44, "abc"];

const arrayCubeRootToJson = (arr) => {
  const obj = {};
  for (let num of arr) {
    obj[num] = Math.cbrt(num);
  }
  return obj;
};

const res = arrayCubeRootToJson(arr);
console.log(res);

// export { arrayCubeRootToJson };
