// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

function f1(num: number): string {
  return num.toString().padStart(2, "0");
}

function getDate(dateString?: string): string {
  let dateToFormat: Date;

  if (dateString) {
    dateToFormat = new Date(dateString);

    if (isNaN(dateToFormat.getTime())) {
      throw new Error("Неверный формат даты");
    }
  } else {
    dateToFormat = new Date();
  }

  const day = f1(dateToFormat.getDate());
  const month = f1(dateToFormat.getMonth() + 1);
  const year = f1(dateToFormat.getFullYear());

  const hours = f1(dateToFormat.getHours());
  const minutes = f1(dateToFormat.getMinutes());
  const seconds = f1(dateToFormat.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

console.log(getDate());
//console.log("Произвольная дата:", getDate('2026-10-22T22:10:15'));
