'use strict'
let billupdate;
let customupdate;
let personupdate;
let operation;
let custom;
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

//this event calls the function only allows numbers
inpbill.addEventListener('keypress', onlynumber, false);
inpcustom.addEventListener('keypress', onlynumber, false);
inpperson.addEventListener('keypress', onlynumber, false);



//each event validates the person field and calls the functions if the validation is met, only (buttons 5%--50%).
btn5.addEventListener('click', () => {

    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        operation = parseInt(billupdate) * 0.05;
        totamount.value = (operation / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + operation) / parseInt(personupdate);
        inpcustom.value = "5";
    }
});

btn10.addEventListener('click', () => {

    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        operation = parseInt(billupdate) * 0.10;
        totamount.value = (operation / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + operation) / parseInt(personupdate);
        inpcustom.value = 10;
    }
});

btn15.addEventListener('click', () => {
    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        operation = parseInt(billupdate) * 0.15;
        totamount.value = (operation / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + operation) / parseInt(personupdate);
        inpcustom.value = 15;
    }
});

btn25.addEventListener('click', () => {
    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        operation = parseInt(billupdate) * 0.25;
        totamount.value = (operation / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + operation) / parseInt(personupdate);
        inpcustom.value = 25;
    }
});

btn50.addEventListener('click', () => {
    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        operation = parseInt(billupdate) * 0.50;
        totamount.value = (operation / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + operation) / parseInt(personupdate);
        inpcustom.value = 50;
    }
});



inpbill.addEventListener('input', () => {
    billupdate = parseInt(inpbill.value);
    if (inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0" || inpcustom.value == "0" || inpcustom.value == "") {
        return false;
    } else {

        updateop()
    }
});

inpperson.addEventListener('input', () => {
    personupdate = parseInt(inpperson.value);
    if (inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0" || inpcustom.value == "" || inpcustom.value == "") {

    } else {

        updateop()
    }
});


inpcustom.addEventListener('input', () => {
    customupdate = parseFloat(inpcustom.value);
    if (inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == 0) {
        validperson();
        return false;
    } else {


        if (inpcustom.value < 10 && inpcustom.value > 0) {
            custom = "0.0" + customupdate;
            let result = parseFloat(custom) * parseInt(billupdate);
            totamount.value = (result / parseInt(personupdate));
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
        } else if (inpcustom.value >= 10 && inpcustom.value <= 99) {
            custom = "0." + customupdate;
            let result = parseFloat(custom) * parseInt(billupdate);
            totamount.value = (result / parseInt(personupdate));
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);

        } else if (inpcustom.value >= 100) {
            custom = customupdate;
            let result = 1 * parseInt(billupdate) * parseInt(custom);
            totamount.value = (result / parseInt(personupdate));
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
        }

    }
});

//this event resets all fields to default.
btnreset.addEventListener('click', () => {
    reset();
});



//Functions

let updateop = () => {
    if (inpcustom.value < 10 && inpcustom.value > 0) {
        custom = "0.0" + customupdate;
        let result = parseFloat(custom) * parseInt(billupdate);
        totamount.value = (result / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
        console.log(totamount.value);
        console.log(totbill.value);
    } else if (inpcustom.value >= 10 && inpcustom.value <= 99) {
        custom = "0." + customupdate;
        let result = parseFloat(custom) * parseInt(billupdate);
        totamount.value = (result / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
        console.log(totamount.value);
        console.log(totbill.value);

    } else if (inpcustom.value >= 100) {
        custom = customupdate;
        let result = 1 * parseInt(billupdate) * parseInt(custom);
        totamount.value = (result / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
        console.log(totamount.value);
        console.log(totbill.value);
    }

}

//this function only allow numbers.
function onlynumber(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

//this event resets all fields to default.
let reset = () => {
        inpbill.value = "";
        inpcustom.value = "";
        inpperson.value = "";
        totamount.value = "";
        totbill.value = "";
        inperror.style.display = 'none';
        inpperson.style.borderColor = '#d6d1d1';

    }
    //this function validates the person field.
let validperson = () => {

    if (inpperson.value == "0" || inpperson.value == "") {
        inperror.style.display = 'block';
        inpperson.style.borderColor = '#FF4C29';

    } else {
        inperror.style.display = 'none';
        inpperson.style.borderColor = '#d6d1d1';

    }
};