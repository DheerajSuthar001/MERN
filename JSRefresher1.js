// console.log("JS Refresher");
// let arr=['water', "fire"];
// console.log(arr[1]);

//factory function
// function createRectangle(height,width){
//     return{
//         height,
//         width,
//         draw: function(){
//             console.log(height*width);
//         }
//     }
// }
// let a=createRectangle(3,6);
// console.log(a.draw());

//constructor function

// function Rectangle(height,width){
//     this.height=height,
//     this.width=width,
//     this.draw=function(){
//         console.log(height*width);
//     }
// }
// let a =new Rectangle(3,5);
// console.log(a);
// a.color='red';
// console.log(a);
// a.height=10;
// console.log(a);
// console.log(a.draw());
// delete a.color;
// console.log(a.constructor);

// let Rectangle=new Function('height','width',`this.height=height,
//     this.width=width,
//     this.draw=function(){
//         console.log(height*width);
//     }`);
// let a=new Rectangle(3,7);
// console.log(Rectangle.name);

// for(let key in a){
//     console.log(key,a[key]);
// }

// for(let key of Object.values(a)){
//     console.log(key);
// }
// if('heiht' in a)
//     console.log('found');
// let b= {};
// for(let key in a){
//     b[key]=a[key];
// }
// console.log(b);

// let b=Object.assign({},a);
// console.log(b);

// let b= {...a};
// console.log(b);

// let arr=[1,3,4,5,23,9];
// console.log(arr);
// arr.splice(2,0,'a','v');
// console.log(arr);

// console.log(arr.indexOf('a',4));

// let arrObj=[
//     {no:1,name:'Dheeraj'},
//     {no:2,name:'Hritik'}
// ];

// let findObject=arrObj.find(c=> c.name=='Hritik');
// console.log(findObject);

let arr=[1,3,45,5,80,9];
arr.sort((a,b)=>b-a);
console.log(arr);

let filtered=arr.filter(v=>v>3);
console.log(filtered);

// arr.forEach(v=>console.log(v));

// console.log(arr);
// arr.splice(2,1);
// console.log(arr);
// let arrObj=[
//     {no:1,name:'Dheeraj'},
//     {no:2,name:'Hritik'},
//     {no:3,name:'Arpit'}
// ];

// arrObj.sort((a,b)=>(a.name>b.name)? 1:((a.name<b.name)? -1:0));
// console.log(arrObj);
