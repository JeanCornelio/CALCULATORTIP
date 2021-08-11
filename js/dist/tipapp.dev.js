'use strict';

var billupdate;
var customupdate;
var personupdate;
var custom; //elements buttons

var btn5 = document.getElementById("btn-5");
var btn10 = document.getElementById("btn-10");
var btn15 = document.getElementById("btn-15");
var btn25 = document.getElementById("btn-25");
var btn50 = document.getElementById("btn-50");
var btnreset = document.getElementById("btn-reset"); //elements inputs

var inpbill = document.getElementById("input-bill");
var inpcustom = document.getElementById("input-custom");
var inpperson = document.getElementById("input-person");
var totamount = document.getElementById("input-tip-amount");
var totbill = document.getElementById("input-top-person"); //elemetn text

var inperror = document.getElementById("text-error"); //events

inpbill.addEventListener('input', function () {
  billupdate = parseInt(inpbill.value);
  validation();
});
inpperson.addEventListener('input', function () {
  personupdate = parseInt(inpperson.value);
  validation();
});
inpcustom.addEventListener('input', function () {
  customupdate = parseInt(inpcustom.value);
  validation();
});
btn5.addEventListener('click', function () {
  customupdate = 10;
  console.log(customupdate);
  console.log(personupdate);
  console.log(billupdate);
});
btn10.addEventListener('change', function () {
  console.log(customupdate);
  console.log(personupdate);
  console.log(billupdate);
});
btn15.addEventListener('click', function () {
  console.log(customupdate);
  console.log(personupdate);
  console.log(billupdate);
});
btn25.addEventListener('click', function () {
  console.log(customupdate);
  console.log(personupdate);
  console.log(billupdate);
});
btn50.addEventListener('click', function () {
  console.log(customupdate);
  console.log(personupdate);
  console.log(billupdate);
});

function validation() {
  if (inpperson.value == "" || inpperson.value == "0") {
    validperson();
    return false;
  } else {
    operation();
  }
}

function operation() {
  if (inpcustom.value < 10 && inpcustom.value > 0 || inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
    var convert = "0.0" + customupdate;
    var result = parseFloat(convert) * billupdate;
    totamount.value = result / personupdate;
    totbill.value = (billupdate + result) / personupdate;
  } else if (inpcustom.value >= 10 && inpcustom.value <= 99 || inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
    var _convert = "0." + customupdate;

    var _result = parseFloat(_convert) * billupdate;

    totamount.value = _result / personupdate;
    totbill.value = (billupdate + _result) / personupdate;
  } else if (inpcustom.value >= 100 || inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
    var _convert2 = customupdate;

    var _result2 = 1 * parseFloat(_convert2) * billupdate;

    totamount.value = _result2 / personupdate;
    totbill.value = (billupdate + _result2) / personupdate;
  }
} //this function validates the person field.


function validperson() {
  if (inpperson.value == "0" || inpperson.value == "") {
    inperror.style.display = 'block';
    inpperson.style.borderColor = '#FF4C29';
  } else {
    inperror.style.display = 'none';
    inpperson.style.borderColor = '#d6d1d1';
  }
}

; //each event validates the person field and calls the functions if the validation is met, only (buttons 5%--50%).