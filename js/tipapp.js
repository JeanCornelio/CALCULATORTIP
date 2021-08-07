'use strict'
let result;
let operation;
let persontip;
let total;
let custom;
let validperson;

//elements buttons
let btn5 = document.getElementById("btn-5");
let btn10 = document.getElementById("btn-10");
let btn15 = document.getElementById("btn-15");
let btn25 = document.getElementById("btn-25");
let btn50 = document.getElementById("btn-50");
let btnreset = document.getElementById("btn-reset");

//elements inputs
let inpbill = document.getElementById("input-bill");
let inpcustom = document.getElementById("input-custom");
let inpperson = document.getElementById("input-person");
let totamount = document.getElementById("input-tip-amount");
let totbill = document.getElementById("input-top-person");

//elemetn text
let inperror = document.getElementById("text-error");

//events

//each event validates the person field and calls the functions if the validation is met, only (buttons 5%--50%).
btn5.addEventListener('click', () => {

    operation = parseInt(inpbill.value) * 0.05;
    validperson(operation);
    if (inpperson.value == 0 || inpperson.value == "" || inpbill.value == "" || inpbill.value == "0") {
        return false;
    } else {
        persontip(operation);
        total(operation);
    }
});

btn10.addEventListener('click', () => {

    operation = parseInt(inpbill.value) * 0.10;
    validperson(operation);
    if (inpperson.value == 0 || inpperson.value == "" || inpbill.value == "" || inpbill.value == "0") {
        return false;
    } else {
        persontip(operation);
        total(operation);
    }
});

btn15.addEventListener('click', () => {

    operation = parseInt(inpbill.value) * 0.15;
    validperson(operation);
    if (inpperson.value == 0 || inpperson.value == "" || inpbill.value == "" || inpbill.value == "0") {
        return false;
    } else {
        persontip(operation);
        total(operation);
    }
});

btn25.addEventListener('click', () => {

    operation = parseInt(inpbill.value) * 0.25;
    validperson(operation);
    if (inpperson.value == 0 || inpperson.value == "" || inpbill.value == "" || inpbill.value == "0") {
        return false;
    } else {
        persontip(operation);
        total(operation);
    }
});

btn50.addEventListener('click', () => {

    operation = parseInt(inpbill.value) * 0.50;
    validperson(operation);
    if (inpperson.value == 0 || inpperson.value == "" || inpbill.value == "" || inpbill.value == "0") {
        return false;
    } else {
        persontip(operation);
        total(operation);
    }

});

//this event resets all fields to default.
btnreset.addEventListener('click', () => {
    inpbill.value = "";
    inpcustom.value = "";
    inpperson.value = "";
    totamount.value = "";
    totbill.value = "";
    inperror.style.display = 'none';
    inpperson.style.borderColor = '#d6d1d1';
});


//this event is valid and sends the variable with the result to the custom.
inpcustom.addEventListener('input', () => {
    validperson();
    if (inpperson.value == 0 || inpperson.value == "" || inpbill.value == "" || inpbill.value == "0") {
        return false;
    } else {
        result();
    }
});


inpbill.addEventListener('keypress', onlynumber, false);
inpcustom.addEventListener('keypress', onlynumber, false);
inpperson.addEventListener('keypress', onlynumber, false);



//Functions

//this function validates the person field.
validperson = (operation) => {

    if (inpbill.value == "" || inpbill.value == "0") {
        return false;
    } else if (inpperson.value == 0 || inpperson.value == "") {
        inperror.style.display = 'block';
        inpperson.style.borderColor = '#FF4C29';

    } else {
        inperror.style.display = 'none';
        inpperson.style.borderColor = '#d6d1d1';

    }
}

//this function shows the tip.
persontip = (result) => {
    totamount.value = "$" + result / parseInt(inpperson.value);
};

//this function shows the total with the tip included.
total = (result) => {
    totbill.value = "$" + (parseInt(inpbill.value) + result) / parseInt(inpperson.value);
}

//shows the total tip and the total amount per person.
result = () => {
    if (inpcustom.value < 10 && inpcustom.value > 0) {
        custom = "0.0" + inpcustom.value;
        let result = parseFloat(custom) * parseInt(inpbill.value);
        totamount.value = "$" + (result / inpperson.value);
        totbill.value = "$" + (parseInt(inpbill.value) + result) / parseInt(inpperson.value);


    } else if (inpcustom.value >= 10 && inpcustom.value <= 99) {
        custom = "0." + inpcustom.value;
        let result = parseFloat(custom) * parseInt(inpbill.value);
        totamount.value = "$" + (result / inpperson.value);
        totbill.value = "$" + (parseInt(inpbill.value) + result) / parseInt(inpperson.value);
    }
}

//this function only allow numbers.
function onlynumber(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}