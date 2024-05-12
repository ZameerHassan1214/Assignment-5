const weight = document.querySelector('.weight');
const unit = document.querySelector('.unit');
const feet = document.querySelector('.feet');
const inches = document.querySelector('.inches');
const result = document.querySelector('.result');
const BMIstatus = document.querySelector('.BMIstatus');



function calculateBMI(){

let convertedweight = weight.value;

let status;

if(unit.value=== 'LB'){
  convertedweight = weight.value * 0.45359237;

}
console.log('convertedweight' , convertedweight);
  // console.log(unit.value);



const totalHeight = feet.value*0.3048 + inches.value*0.0254;
const BMI = weight.value /totalHeight**2;

console.log(BMI);
result.textContent = BMI.toFixed(2);

if(BMI.toFixed(2) <= 18.4){
status = Underweight;
}
else if (BMI.toFixed(2) >= 18.5 && BMI.toFixed(2) <= 24.9 ){
  status= Normal;
}

BMIstatus.textContent= status;
// console.log(totalHeight);




// console.log(weight.value);
// console.log(unit.value);
// console.log(feet.value);
// console.log(inches.value);

}

//   alert ('calculateBMI');
// }
// const submitBtn = document.querySelector('.submitBtn');
   
// submitBtn.addEventListener('click',  function name(params){
//   alert('calculateBmi');
// });