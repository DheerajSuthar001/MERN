let pm=document.querySelector('#head');
function changeColor(){
    pm.style.color='red';
}
function giveAlert(){
    alert('in capturing phase');
}
pm.addEventListener('click',changeColor);
//pm.removeEventListener('click',changeColor);
pm.addEventListener('click',giveAlert,true );
pm.addEventListener('click',function(eventinfo){console.log(eventinfo);})

let links=document.querySelectorAll('a');
console.log(links);
let alink=links[1];

console.log(alink);
alink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('disabled anchor');
});



// let newDiv=document.createElement('div');

// newDiv.addEventListener('click',function(event){
//     console.log(event.target.textContent);
// });
// for(let i=0;i<3;i++){
//     let newPara=document.createElement('p');
//     newPara.textContent='this is Para'+i;
    
//     newDiv.appendChild(newPara);
// };
// document.body.appendChild(newDiv);

let art=document.querySelector('article');

art.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN')
    console.log('span is clicked with data '+ event.target.textContent);
})