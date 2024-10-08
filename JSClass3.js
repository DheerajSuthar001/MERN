let last = 'suthar';
// let first=new String('Dheeraj');

// let s='this is a message';
// let words=s.split(' ');

// console.log(words);
// let msg=
// `This is 
// a poetic way of ${last} 
// writing 
// things`;
// console.log(msg);

// date
// let date=new Date('15 August 1997 12:00');
// console.log(date.getd());

// Array
let number = [2, 5, 1, 6, 7];
// insertion
// number.push(8);
// console.log(number);
// number.unshift(786);
// console.log(number);
// number.splice(2,0,'a','b');
// console.log(number); 

//searching
// console.log(number.indexOf(90));
// console.log(number.indexOf(7,3));
// console.log(number.includes(1));
// searching in array of objects
// let arr=[
//     {no:1,name:"dheeraj"},
//     {no:2,name:"hritik"}
// ];
// console.log(arr.indexOf({no:1,name:"dheeraj"}));//doesn't work
// console.log(arr.includes({no:1,name:"dheeraj"}));//doen't work

//callback function
// let found=arr.find(function(data){
//     return data.name=='dhee';
// });
//using arrow function
// let found=arr.find((data)=>data.name=='dhee');
// console.log(found);

//deletion in an array
// let arr=[1,4,6,8,9,56,8,0];
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(4,1);
// console.log(arr);

// let arr2=arr;
// console.log(arr2);

// arr=[];
// arr.length=0;
// arr.splice(0,arr.length);
// console.log(arr);
// console.log(arr2);

// combinig and slicing the array
//let arr=[1,3,2,5,67];
// let b=[5,2,6,3,8];

// let combined=a.concat(b);
// console.log(combined);

// let sliced=a.slice(2);
// let sliced2=b.slice(2,5);
// let fullSliced=a.slice();
// console.log(sliced);
// console.log(sliced2);
// console.log(fullSliced);

// let a=[{no:1,name:'dheeraj'},{no:2,name:'Hritik'}];
// let b=[{no:3,name:'ranjeet'},{no:4,name:'Arpit'}];

// let combined=a.concat(b);
// console.log(combined);

// let sliced=a.slice(1);
// console.log(sliced);

// let combined=[...a,...b];
// console.log(combined);

// for(let num of a){
//     console.log(num);
// }

//a.forEach((ele)=>console.log(ele));

// let joined=a.join(',');
// console.log(joined);

// console.log(a.sort().reverse());
// let arr = [{ no: 1, name: 'dheeraj' }, { no: 2, name: 'Hritik' },{ no: 3, name: 'Abhay' }];
//a.sort((a,b)=>(a.name<b.name)?1:((b.name<a.name)?-1:0));
// arr.sort((a,b)=>(b.name.localeCompare(a.name)));
// arr.sort((a,b)=>b-a);
// console.log(arr);
let arr=[1,-3,2,5,-67];
// console.log(arr.filter((value)=>value==0));


console.log(arr.map(value=>'student-no'+value));

let objectify=arr.map(num=>{
    return {number:num};
});
console.log(objectify);

