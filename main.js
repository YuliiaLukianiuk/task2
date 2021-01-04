//дедупликация

// const arr = [1,12,12,0,1,4,6,7,8,9,9];
//     function res(){
//         const res1 = new Set(arr);
//         let answ = [...res1];
//         return answ;
//     };
//     console.log(res(arr));

    //Сортировка массива пузырьком

    // const arr = [1,12,7,0,5,4,6,11,8,9,];
    // function sortBubl(arr){

    //     for(let i = 0; i< arr.length - 1; i++){
    //         // var test = false;
    //         for(let j = 0; j< arr.length -1; j++){
    //             if(arr[j] > arr[j + 1]){
    //                var test =  arr[j];
    //                  arr[j] = arr[j + 1] = test;

    //             }
    //         }
    //         // if(!test) break;
    //     }
    //     return arr;
    // }
    // console.log(sortBubl(arr));
    // Проверка, что строка является палиндромом
    // var str1 = 'анна';
    // var str2 = 'строка';
    // function result(str){
    //     if(str ==str.split('').reverse().join('')){
    //         return str;
    //     }else{
    //      return (str2 +' ' + 'это строка не является палиндромом')
    //     }
    // }
    // console.log(result(str1));
    // console.log(result(str2));

    // Проверка, что строка является анаграммой другой строки
    // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    // var str1 = 'nap';
    // var str2 = 'pan';
    // function test() {

    //   var res =   str1.toLowerCase().split("").sort().join("");
    // //   return res;
    //   var res2 = str2.toLowerCase().split("").sort().join("");
    //     if (res == res2){
    //         return 'строки являются анаграммами';
    //     }else{
    //         return 'строки  не являются анаграммами';

    //     }
    // }
    // console.log(test());
    // Поиск гласных в строке
    //  var str = 'алфавит';
    //  function test(str1){
    //      var res = str1.match(/[аоуэиыеёяю]/gi);
    //      return res
    //  }
    //  console.log(test(str));

    // Определения числа Фибоначи
//     function test(n) {
//         if(n <= 1){
//             return n;
//     }else{
//     return test(n - 1) + test(n - 2);
//     }
// };
// console.log(test(4));
// console.log(test(7));

// Функция геттер, которая спустится по вложенности данных на основе указанного строкой ключа через точку (как дойдете до задачи, напишу пример)
let obj = {
    users: ['Alex', 'Max', 'Ins'],
    status: true,
    teacher: {
        name : 'Vika',
        age: 23,
        family: {
            mother: {
                name: 'Sofia',
                age: 45
            },
            father: {
                name: 'Jhon',
                age: 24
            }
        }
    }
}

function getValue(obj, str){
 var array = str.split('.');
    if(array[0] === '')array.shift();
    let res = obj;
    // console.log(array)
    for(let elem of array) {
        res = res[elem]
    }
    return res
}
console.log(getValue(obj, 'teacher.name')); // выведет в консоль  'Vika'
console.log(getValue(obj, 'teacher.family.mother.age') ); // выведет в консоль  45

 // Генерация случайного hex цвета
// function test(){
//     var res = Math.floor(Math.random() * 16777216).toString(16);
//     return  console.log('#000000'.slice(0, -res.length) + res);
// };
// test();
// Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa)

// function test(str){
//     let res = ['#'];
//    let test2 =  str.split('')
//     if(test2.length ==4 && test2[0] == '#'){
//         for(let i = 0; str.length; i++){
//             res.push(test2[i])
//             res.push(test2[i])
//         }
//     }
//     return res

// }
// console.log(test('#05а'));

// function test (res){
//     let str = ['#'];
//     let test = res.split('');
//     // return test
//     if(test.length ==4 && test[0] =='#'){
//         for(let i = 1; i<test.length; i++){
//             str.push(test[i]);
//             str.push(test[i]);

//         }
//     }
//     return str.join('')
// }
// console.log(test('#05а'));