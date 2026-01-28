// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
function sumOfNumbers(lastNumber: number) {
  let sum = 0;
  let sumi = 0;
  for (let startNumber = 0; startNumber <= lastNumber; startNumber++) {
    sum += startNumber;
  }
  if (!Number.isInteger(lastNumber)) {
    sumi = sum + lastNumber;
  }
  console.log(sumi);
}
sumOfNumbers(2.5);
