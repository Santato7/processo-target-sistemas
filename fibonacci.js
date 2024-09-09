function isFibonacci(num) {
  if (num < 0) return false;
  if (num <= 3) return true;

  let anterior = 3;
  let atual = 5;

  while (atual <= num) {
    if (atual === num) return true;
    [anterior, atual] = [atual, anterior + atual];
  }
  return false;
}

console.log(isFibonacci(34));
console.log(isFibonacci(7));
console.log(isFibonacci(-1));
