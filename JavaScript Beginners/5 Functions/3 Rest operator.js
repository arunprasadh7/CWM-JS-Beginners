// 3 Rest Operatot

function sum(...args) {
  console.log(args);
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6));

// eg 2 - discount
function discountedPrice(discount, ...prices) {
  let total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(discountedPrice(0.1, 20, 30));
