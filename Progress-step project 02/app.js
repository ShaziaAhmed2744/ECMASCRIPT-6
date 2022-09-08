let next= document.querySelector('#next');
let prev= document.querySelector('#prev');

let nums= document.querySelectorAll('#num4');
let num=[];
for(let n of nums)
{
   num.push(n);
}
let line=[];
let lines= document.querySelectorAll('.line')
for(let l of lines)
{
   line.push(l);
}
let n=0;
let l=0;
let i=0;
next.addEventListener('click',function(){
     if(i===-1)
     {
      i=0;
      prev.style.backgroundColor="blue"
      prev.style.cursor="pointer";
     }
    if(i<3)
    { 
    line[i].classList.add('change');
    num[i].classList.add('change');
    i++;
    }
    if(i===3)
    {
         next.style.backgroundColor="pink"
         next.style.cursor="no-drop";
         
    }
})

prev.addEventListener('click',function(){
     
     if(i===3)
     {
       i=2;
       next.style.backgroundColor="blue"
       next.style.cursor="pointer";
     }
     if(i>=0)
     {
       line[i].classList.remove('change');
       num[i].classList.remove('change');
       i--;
     }
     if(i===-1)
     {
         prev.style.backgroundColor="pink"
         prev.style.cursor="no-drop";
     }
     
    
 })

let num1= document.querySelector('#num1')
num1.style.backgroundColor="#08086c";
num1.style.borderColor="blue";

let body=document.querySelector('body');
let div= document.createElement('div');
div.style.height="50px";
div.style.width="440px";
div.style.textAlign="center";
div.style.borderRadius="15px";
div.style.position="absolute";
div.style.top="100px"
div.innerText="Here's your progress report"
div.style.backgroundColor="white";
body.prepend(div)