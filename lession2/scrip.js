// let numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++)
// {
//     console.log(numbers[i])
// }
// let arr = []

// for (let i = 0; i < 3; i++)
// {
//     let value = prompt("Введите что та")
//     arr.push(value)
// }

// console.log(arr)

// let index = Number(prompt("Введи индекс элем"))
// for (let i = index; i < arr.length; i++)
// {
//     if (i == arr.length - 1)
//     {
//         arr.pop()
//         break
//     }
//     arr[i] = arr [i + 1]
// }
// console.log(arr)

// function Hello()
// {
//     alert("Helo")
//     return"Hello"
// }
// let test = Hello()
// test()

// function Hello(name)
// {
//     console.log ('Hello {name}')

// }
// console.log (Hello("Baga"))
// Hello()

// function print(arr) {
//     console.log(arr);
// }

// let numbers = [1,2,3,4]
// print(numbers);

// function print(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 0){
//             console.log(arr[i]);
//         }
//     }
// }

let numbers = [1,2,3,4,5,6,7,8,9,10];

// print(numbers);

// function sum(arr){
//     let s = 0;

//     for (let i = 0; i < arr.length; i++) {
//         s = s + arr[i];
//     }

//     return s;
// }
// console.log(sum(numbers))

// function max(arr) {
//     let m = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > m) {
//             m = arr[i];
//         }
//     }

//     return m;
// }
// console.log(max(numbers))

function add(arr, index, value) {
    arr.splice(index, 0, value);
}