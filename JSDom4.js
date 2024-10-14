// console.log('check check');

// async function utility (){
//     let getData= await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output=await getData.json();
//     console.log(output);
// }
// utility();
// async function  helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         }
//       };
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response=content.json();
//     return response;
// }
// async function utility1(){
//     let res=awaithelper();
//     console.log(res);
// }
// utility1();

// function solve(){
//     let name='dheeraj';
//     function printName(){
//         console.log(name);
//     }
//     return printName;
// }
// let pName=solve();
// pName();

// import { a,b } from './Dom4modules.js';

// console.log(a + b);

// import f from './Dom4modules1.js';
// console.log(f);

class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        let tDay=new Date();
        return tDay.getFullYear() - this.year;
    }
}
let myCar=new car('wagonr', 2014);
console.log(myCar.name + ' is ' + myCar.age() + ' years old');