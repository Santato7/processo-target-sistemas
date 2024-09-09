let texto = "Sentença Aleatória";

function verificaString(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      counter++;
    }
  }
  return `A string fornecida possui ${counter} 'A's`;
}

console.log(verificaString(texto));
