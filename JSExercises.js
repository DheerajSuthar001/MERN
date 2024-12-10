// function add(a,b){
//     return a+b;
// }
// console.log(add(2,5));

// function stringLength(a){
//     return a.length;
// }
// console.log(stringLength("dheeraj"));

// function calculate(a,b){
//     console.log('Sum is '+ (a+b));
//     console.log('product is '+ (a*b));
//     console.log('differnece is '+ (a-b));
//     console.log('Quotient is '+ (a/b));
// }
// calculate(8,9);

// function larger(a,b){
//     return a>b? a: b;
// }
// console.log(larger(4,7));
// function reverseString(s){
//     let sArray=s.split('');
//     let revArray=sArray.reverse();
//     return revArray.join('');
// }
// console.log(reverseString("dheeraj"));

// function getMultiTable(a){
//     for(let i=1;i<=10;i++){
//         console.log(a + ' x ' + i + ' = '+ a*i);
//     }
// }
// getMultiTable(5);

// function numOfVowel(s){
//     const vowel=['a','e','i','o','u'];
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(vowel.includes(s[i]))
//         count++;
//     };
//     console.log(count);
// };
// numOfVowel('dheeraj');

// function arrayThing(a,b){
//     let common=[];
//     for(let i=0;i<a.length;i++){
//         if(b.includes(a[i]))
//             common.push(a[i]);
//     };
//     return common.sort((a,b)=>a-b);

// }
// console.log(arrayThing([1,2,3,4,57,5],[3,7,6,4,57,5]));

// function greet(name){
//     console.log(`good morning ${name}`);

// }
// greet('dheeraj');

// function countLetters(str){
    
//     let obj={};

//     for(let i=0;i<str.length;i++){
//         const alp=str[i];

//         if(obj[alp]){
//             obj[alp]++;
//         }
//         else
//         obj[alp]=1;
//     }
//     return obj;
// }
// console.log(countLetters('webdevelopment'));

// function arrayFilter(a){
//     let b=[...a];
//     console.log(b);
//     for(let i=0;i<b.length;i++){
        
//         if(b[i].length<6)
//             b.splice(i,1);
//     }
//     return b;
// }
// let a=['cat','elephant','giraffe','dog','rat'];
// console.log(arrayFilter(a));
// console.log(a);

// function getKeys(a){
//     // let arr=[];
//     // for(let key in a){
//     //     arr.push(key);
//     // }
//     let arr=Object.keys(a);
//     return arr;
// }
// let obj={
//     id:1,
//     name:'dfh'
// }
// console.log(getKeys(obj));

// function getValues(arr,pName){
//     // let valueArr=[];
//     // for(let i=0;i<arr.length;i++){
//     //     let obj=arr[i];
//     //     valueArr.push(obj[pName]);
        
//     // }
//     // let valueArr=arr.map((obj)=>obj[pName]);
//     // return valueArr;

//     let maxObj=arr[0];

//     for(let i=1;i<arr.length;i++){

//         if(arr[i][pName]>maxObj[pName]){
//             maxObj=arr[i];
//         }
//     }
//     return maxObj;

// };

// let objArr=[{id:67,name:'dheeraj'},{id:12,name:'Hritik'},{id:45,name:'dodita'}];
// console.log(getValues(objArr,'id'));

let button=document.getElementById('checkButton');

// function changeText(){
//     if(button.textContent === 'click me!')
//         button.textContent='Clicked';
//     else
//         button.textContent='click me!';
// }

// button.addEventListener('click',changeText);

// function addClassName(){
//     button.classList.add('bgRed');
// }
// function removeClassName(){
//     button.classList.remove('bgRed');
// }
// button.addEventListener('mouseover',addClassName);
// button.addEventListener('scroll',removeClassName);

// function showContent(){
//     let content=document.querySelector('#check');
//     if(button.textContent==='Show Div'){
//         button.textContent='Hide Div';
//         content.style.display='block';
//     }
//     else{
//         button.textContent='Show Div';
//         content.style.display='none';
//     }
// }
// button.addEventListener('click',showContent);

// let submitButton=document.querySelector('#dataForm');

// function validateForm(event){
//     event.preventDefault();
//     const form = event.target;
//     let isValid=true;

//     for(let i=0;i<form.elements.length;i++){
//         const input=form.elements[i];
//         const value=input.value;

//         if(input.hasAttribute('required')&& value===''){
//             isValid=false;
//             input.classList.add('invalid')
//         }
//         else
//         input.classList.remove('invalid')

//     }

//     const message=document.getElementById("message");
//     if(isValid){
//         message.classList.remove('error');
//         message.innerText='Form submitted successfully';
//     }
//     else{
//         message.classList.add('error');
//         message.innerText='please fill all required fields';
//     }
// }

// submitButton.addEventListener('submit',validateForm);


function fetchData(url, callback){

    fetch(url)
    .then(response =>response.json())
    .then(data=>callback(null,data))
    .catch(error=> callback(error,null));

}
fetchData('https://jsonplaceholder.typicode.com/todos/1',(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})
