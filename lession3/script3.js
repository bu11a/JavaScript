// let fruits = ["Яблоко", "Банан", "Груша", "Апельсин"];

// let max = "";

// for (let fruit of fruits) {
//     if (fruit.length > max.length) {
//         max = fruit;
//     }
// }

// console.log("Самый длинный фрукт:", max);


// let Student = {
//     id: 1,
//     name: "Max",
//     age: 15,
//     nationality: "Russian", 
//     "height": 167
// }

// console.log(Student.height)
// console.log(Student.age)
// console.log(Student.name)


// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(Student)
// Student.showInfo()


// 1
// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(isEmpty({}));        
// console.log(isEmpty({a: 1}));    
// console.log(sum);


let students = [
    {
        name: "Bagamol",
        age: 14,
        grade: 67.
    }
    {
        name: "Max",
        age: 15,
        grade: 92.
    }
]

for (let i = 0; i < students.length; i++) {
    console.log(students[i])
    console.log("------")
}

console.log("Имена студентов: ")
for (let i = 0; i < students.length; i++) {
    console.log("Имя: ", students[i].name)
    console.log("Возраст: ", students[i].age)
    console.log("Оценка: ", students[i].grade)
}



let sum = 0
for (let i = 0; i < students.length; i++) {
    sum += students[i].grade;
}
let avarage = sum / students.length;
console.log("Средний балл всех студентов: ")