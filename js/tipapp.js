
'use strict'

let billupdate;
let customupdate;
let personupdate;
//elements buttons
let btn5 = document.getElementById("btn5");
let btn10 = document.getElementById("btn10");
let btn15 = document.getElementById("btn15");
let btn25 = document.getElementById("btn25");
let btn50 = document.getElementById("btn50");
let btnreset = document.getElementById("btn-reset");

//elements inputs
let bill = document.getElementById("input-bill");
let custom = document.getElementById("input-custom");
let person = document.getElementById("input-person");
let totamount = document.getElementById("input-tip-amount");
let totbill = document.getElementById("input-top-person");

//elemetn text
let inperror = document.getElementById("text-error");


//events
bill.addEventListener('input',()=>{
    billupdate = parseInt(bill.value);
    operacion();
    });
    
    custom.addEventListener('input',()=>{
    customupdate = Number.parseInt(custom.value) / 100 ;
    if(person.value == "0" || person.value == ""){
            error();
    }else{
            
            operacion();
    }
    });
    
    person.addEventListener('input',()=>{
    personupdate = parseInt(person.value);
    if(person.value == "0" || person.value == ""){
             error();
    }else{
            operacion();
    }
    });

    btn5.addEventListener('click', ()=>{
        customupdate = Number.parseFloat('0.05');
        if(person.value == "0" || person.value == ""){
            error();
    }else{
            
            operacion();
    }
    });
    
    btn10.addEventListener('click', ()=>{
        customupdate = Number.parseFloat('0.10');
        if(person.value == "0" || person.value == ""){
            error();
    }else{
            operacion();
    }
    });
     
    btn15.addEventListener('click', ()=>{
        customupdate = Number.parseFloat('0.15');
        if(person.value == "0" || person.value == ""){
            error();
    }else{
            operacion();
    }
    });
        
    btn25.addEventListener('click', ()=>{
        customupdate = Number.parseFloat('0.25');
        if(person.value == "0" || person.value == ""){
            error();
    }else{
            operacion();
    }
    });
    
    btn50.addEventListener('click', ()=>{
        customupdate = Number.parseFloat('0.50');
        if(person.value == "0" || person.value == ""){
            error();
    }else{
            operacion();
    }
    });
            

    btnreset.addEventListener('click', ()=>{
        reset();
    })




let operacion =()=>{
    noterror();
    let porcientobill = customupdate * billupdate;       
    totamount.value = porcientobill / personupdate ;
    totbill.value = (billupdate + porcientobill) / personupdate;

}


//this function validates the person field.
let error =()=> {
    inperror.style.display = 'block';
    person.style.borderColor = '#FF4C29';
  
};

let noterror=()=>{
    inperror.style.display = 'none';
    person.style.borderColor = '#d6d1d1';
};

let reset =()=>{
    bill.value= 0;
    person.value= 0;
    custom.value= "Custom";
    billupdate= 0;
    personupdate= 0;
    customupdate = 0;
    totamount.value = "$0.00";
    totbill.value = "$0.00";
};
