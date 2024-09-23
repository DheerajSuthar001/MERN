// console.log("JS class 2");
// let rectangle={
//     height:5,
//     width:7,
//     draw:function(){
//         console.log(this.height*this.width);
//     }
// }
// //factory function
// function createRectangle( height,width){
//     return rectangle={
//         height,
//         width,
//         draw:function(){
//             console.log(this.height*this.width);
//         }
//     }
// }
// let ob=createRectangle(4,6);
// console.log(ob.draw());

//constructor function
// function Rectangle(length,breadth){
//     this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log(this.length*this.breadth);
//     };
// }

// let obj=new Rectangle(2,3);
// obj.color='yellow';
// console.log(obj);
// delete obj.color;
// console.log(obj);
// base function from which all other finction are created 
// let recBase=new Function('length','breadth',
//     `this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log(this.length*this.breadth);
//     };`)
// let baseObj=new recBase(2,4);

//premitive types
// let a =10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

//reference types
// let a={value:10};
// let b=a;
// a.value=12;
// console.log(a);
// console.log(b);

// premitive types are passed by value
// let a=2;
// function inc(a){
//     a++;

// }
// console.log(a);
// reference types are passed by reference
// let a={value:2};
// function inc(a){
//     a.value++;

// }
// inc(a);
// console.log(a.value);

//for-in loop
// let rectangle={
//     length:2,
//     breadth:4
// }
// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }
// for-of loop only on iterables
// for(let key of Object.keys(rectangle)){
//     console.log(key, rectangle[key]);
// }

 let rectangle={
    length:2,
    breadth:4
}

// if('length' in rectangle)
//     console.log('present');
// else
// console.log('absent');

// cloning of the objects
// method 1
// let obj={};
// for(let key in rectangle){
//     obj[key]=rectangle[key];
// }

// method2
// let obj=Object.assign({},rectangle);

// method2
let obj={...rectangle};
console.log(obj);

