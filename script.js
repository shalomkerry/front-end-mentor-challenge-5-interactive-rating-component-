const mainpartquestion = document.querySelector('.questionpart')
const mainpartanswer = document.querySelector('.rating-component-answer')
const button = document.querySelectorAll('.circle');
const button5 = document.querySelector('#circle5')
const button4 = document.querySelector('#circle4')
const button3 = document.querySelector('#circle3')
const button2 = document.querySelector('#circle2')
const button1 = document.querySelector('#circle1')
const resul = document.querySelector('.evaluation');
const sumbitbutton = document.querySelector('sumbit')

let value = 0;
function sumbit(){
   button.forEach(x =>{
    x.addEventListener('click',toggle);
  });

}
function toggle(e){
value = value-value;
const button = e.target;
value +=Number(button.value)
const selectedBtn = document.querySelector('.circle.selected')
if(selectedBtn && selectedBtn!==button){
selectedBtn.classList.remove('selected')
}
button.classList.toggle('selected')


}

function result(){
  const istrue = button1.classList.contains('selected')
  const istrue2 = button2.classList.contains('selected')
  const istrue3 = button3.classList.contains('selected')
  const istrue4 = button4.classList.contains('selected')
  const istrue5 = button5.classList.contains('selected')
  if (value>0 && (istrue)||(istrue2)||(istrue3)||(istrue4)||(istrue5)){
  mainpartquestion.style.display = 'none';
  mainpartanswer.style.display = 'block';
  resul.innerHTML = `You selected ${value} out of 5`
}else{
  alert('please select one');
}
}
sumbit()