// Напишите самовызывающиеся функцию подсчета факториала числа: число должно передаваться как параметр функции
const result = (function countFactorial(num: number) : number {
  if (num <= 1) {
    return 1;
  }
  return num * countFactorial(num - 1);
})(3);
console.log(result);