// let name = prompt("Введи имя")
// let age = Number(prompt("Введи возраст: "))

// if (age >= 18)
// {
//     alert(`${name} доступ разрешен`)
// }
// else {
//     alert(`${name} доступ запрещен`)
// }

// ----------------------------------------------------------------

// let num = Number(prompt("Введи цифру: "))

// {
//     alert(num**2)
// }

// ----------------------------------------------------------------

// let num1 = Number(prompt("Введи первое число: "))
// let num2 = Number(prompt("Введи второе число: "))

// let average = (num1 + num2) / 2

// {
// alert("Вот средняя арифмет" + average)
// }

// ----------------------------------------------------------------

// let num1 = Number(prompt("Введи первое число: "))
// let num2 = Number(prompt("Введи второе число: "))

// let average1 = num1 + num2
// let average2 = num1 - num2
// let average3 = num1 / num2
// let average4 = num1 * num2

// {
//     alert("Вот все ответы на сумму " + average1 " для вычитание " + average2 "разность" + average3 "умножение" + average4)
// }

// ------------------------------------------------------------------

while (true) {
  let a = prompt("Введи число A или /q для выхода:");
  if (a === "/q") break;
  a = Number(a);

  let b = prompt("Введи число B или /q для выхода:");
  if (b === "/q") break;
  b = Number(b);

  let op = prompt("Введи операцию: + - * / ** % или /q для выхода:");
  if (op === "/q") break;

  let result;

  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Ошибка: деление на 0" : a / b;
      break;
    case "**":
      result = a ** b;
      break;
    case "%":
      result = a % b;
      break;
    default:
      result = "Такой операции нет";
  }

  alert(${a} ${op} ${b} = ${result});
}
