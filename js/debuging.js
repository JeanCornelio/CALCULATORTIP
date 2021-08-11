//this event calls the function only allows numbers
inpbill.addEventListener('keypress', onlynumber, false);
inpcustom.addEventListener('keypress', onlynumber, false);
inpperson.addEventListener('keypress', onlynumber, false);




btn5.addEventListener('click', () => {

    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        customupdate = parseInt(billupdate) * 0.05;
        totamount.value = (customupdate / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + customupdate) / parseInt(personupdate);

    }
});

btn10.addEventListener('click', () => {

    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        customupdate = parseInt(billupdate) * 0.10;
        totamount.value = (customupdate / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + customupdate) / parseInt(personupdate);

    }
});

btn15.addEventListener('click', () => {
    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        customupdate = parseInt(billupdate) * 0.15;
        totamount.value = (customupdate / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + customupdate) / parseInt(personupdate);

    }
});

btn25.addEventListener('click', () => {
    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        customupdate = parseInt(billupdate) * 0.25;
        totamount.value = (customupdate / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + customupdate) / parseInt(personupdate);

    }
});

btn50.addEventListener('click', () => {
    if (inpbill.value == "" || inpbill.value == 0 || inpperson.value == "" || inpperson.value == 0) {
        validperson();
    } else {
        validperson();
        customupdate = parseInt(billupdate) * 0.50;
        totamount.value = (customupdate / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + customupdate) / parseInt(personupdate);

    }
});



inpbill.addEventListener('input', () => {
    billupdate = parseInt(inpbill.value);
    if (inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0" || inpcustom.value == "0" || inpcustom.value == "") {
        return false;
    } else {
        if (inpcustom.value < 10 && inpcustom.value > 0 || inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0") {
            custom = "0.0" + customupdate;
            let result = parseFloat(custom) * parseInt(billupdate);
            totamount.value = result / parseInt(personupdate);
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
            console.log(custom);

        } else if (inpcustom.value >= 10 && inpcustom.value <= 99 || inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0") {
            custom = "0." + customupdate;
            let result = parseFloat(custom) * parseInt(billupdate);
            totamount.value = (result / parseInt(personupdate));
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
            console.log(custom);

        } else if (inpcustom.value >= 100 || inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0") {
            custom = customupdate;
            let result = 1 * parseInt(billupdate) * parseInt(custom);
            totamount.value = (result / parseInt(personupdate));
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
            console.log(custom);
        }

    }
});
inpcustom.addEventListener('input', () => {
    customupdate = parseFloat(inpcustom.value);
    console.log(customupdate);
    if (inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0") {
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

inpperson.addEventListener('input', () => {
    personupdate = parseInt(inpperson.value);
    if (inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == 0 || inpcustom.value == "" || inpcustom.value == "") {
        return false;
    } else {
        if (inpcustom.value < 10 && inpcustom.value > 0 || inpperson.value !== "" || inpperson.value !== 0) {
            custom = "0.0" + customupdate;
            console.log(customupdate);
            console.log(custom);
            let result = parseFloat(custom) * parseInt(billupdate);
            console.log(result);
            totamount.value = result / parseInt(personupdate);
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
            console.log(personupdate);
        } else if (inpcustom.value >= 10 && inpcustom.value <= 99 || inpperson.value !== "" || inpperson.value !== 0) {
            custom = "0." + customupdate;
            let result = parseFloat(custom) * parseInt(billupdate);
            totamount.value = (result / parseInt(personupdate));
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
            console.log(custom);

        } else if (inpcustom.value >= 100 || inpperson.value == "" || inpperson.value !== 0) {
            custom = customupdate;
            let result = 1 * parseInt(billupdate) * parseInt(custom);
            totamount.value = (result / parseInt(personupdate));
            totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
            console.log(totamount.value);
            console.log(totbill.value);
            console.log(custom);
        }

    }
});




//this event resets all fields to default.
btnreset.addEventListener('click', () => {
    reset();
});



//Functions

let updateop = () => {
    if (inpcustom.value < 10 && inpcustom.value > 0 || inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0") {
        custom = "0.0" + customupdate;
        let result = parseFloat(custom) * parseInt(billupdate);
        totamount.value = result / parseInt(personupdate);
        totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
        console.log(totamount.value);
        console.log(totbill.value);
        console.log(custom);
    } else if (inpcustom.value >= 10 && inpcustom.value <= 99 || inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0") {
        custom = "0." + customupdate;
        let result = parseFloat(custom) * parseInt(billupdate);
        totamount.value = (result / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
        console.log(totamount.value);
        console.log(totbill.value);
        console.log(custom);

    } else if (inpcustom.value >= 100 || inpbill.value == "" || inpbill.value == "0" || inpperson.value == "" || inpperson.value == "0") {
        custom = customupdate;
        let result = 1 * parseInt(billupdate) * parseInt(custom);
        totamount.value = (result / parseInt(personupdate));
        totbill.value = (parseInt(billupdate) + result) / parseInt(personupdate);
        console.log(totamount.value);
        console.log(totbill.value);
        console.log(custom);
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