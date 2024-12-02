let sliderValue=document.getElementById('sliderValue');
let lengthSlider=document.getElementById('lengthSlider');
let upperCaseCheckbox=document.getElementById('uppercase');
let lowerCaseCheckbox=document.getElementById('lowercase');
let symbolsCheckbox=document.getElementById('symbols');
let numberCheckbox=document.getElementById('numbers');
const passwordInput = document.getElementById('password');
 const copyIcon = document.querySelector('.copy'); 
 const generateButton = document.getElementById('generateBtn');


sliderValue.textContent=lengthSlider.value;

lengthSlider.addEventListener('input', ()=>{
    sliderValue.textContent=lengthSlider.value;
});

const UPPERCASE_CHAR = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).join('');
const LOWERCASE_CHAR = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).join('');
const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:",.<>?/';
const NUMBERS= '0123456789'

function generatePassword(){
    let char="";
    let password='';
    if(upperCaseCheckbox.checked)  char +=UPPERCASE_CHAR;
    if(lowerCaseCheckbox.checked)  char +=LOWERCASE_CHAR;
    if(symbolsCheckbox.checked)  char +=SYMBOLS;
    if(numberCheckbox.checked)  char +=NUMBERS;

  if(char===""){
    alert("Select options!");
    return;

  }
//generate password
const length=parseInt(lengthSlider.value);
for(let i=0; i<length; i++){
   const randomIndex = Math.floor(Math.random() * char.length);
   password+=char[randomIndex];
}

passwordInput.value=password;

}


//copy password
function copyPassword(){
  passwordInput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!')
};
generateButton.addEventListener('click', generatePassword);
copyIcon.addEventListener('click', copyPassword);