const strArg = "if(x<10}(b++;}else{b+=10;}";

function peek(stack) {
  return stack[stack.length - 1];
}

function balancedBraces(str) {
  let isBalanced = true;
  const stack = [];
  for (let ch of str) {
    if (ch === "{" || ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === "}" || ch === ")" || ch === "]") {
      if (ch === "}") {
        if (peek(stack) === "{") {
          stack.pop();
        } else {
          isBalanced = false;
        }
      } else if (ch === "]") {
        if (peek(stack) === "[") {
          stack.pop();
        } else {
          isBalanced = false;
        }
      } else if (ch === ")") {
        if (peek(stack) === "(") {
          stack.pop();
        } else {
          isBalanced = false;
        }
      }
    }
  }
  if (stack.length > 0) {
    isBalanced = false;
  }
  return isBalanced;
}
const res = balancedBraces(strArg);
console.log(res);

export { balancedBraces };
