// let t1=performance.now();
// for(let i=0;i<100;i++){
//     let el=document.createElement('p');
//     el.textContent='This is para' + i;

//     document.body.appendChild(el);
// };
// let t2=performance.now();

// console.log(t2-t1+ 'ms') ;
// let t3=performance.now();
// let newDiv=document.createDocumentFragment();
// for(let i=0;i<100;i++){
//     let el=document.createElement('p');
//     el.textContent='This is para' + i;

//     newDiv.appendChild(el);
// }
// document.body.appendChild(newDiv);
// let t4=performance.now();
// console.log(t4-t3);

setTimeout(function(){
    console.log('triggered');
},5000);