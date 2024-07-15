
document.querySelector('.applyBtn').addEventListener('click',()=>{
document.querySelector('body').classList.toggle('form');
});

document.querySelector('.submitBtn').addEventListener('click',()=>{
/*NAMES VALIDATION*/
if(document.querySelector('.names').value==""){
document.querySelector('.names').style.borderColor = "#ff0000";
document.querySelector('#nameError').innerHTML = "NAME CANNOT BE BLANK";
}else{
document.querySelector('#nameError').innerHTML = "";
document.querySelector('.names').style.borderColor = "#008080";
}

/*COUNTY VALUDATION*/
if(document.querySelector('.county').value=="click here"){
document.querySelector('#countyError').innerHTML = "WHERE ARE YOU FROM";
document.querySelector('.county').style.borderColor = "#ff0000";
}else{
document.querySelector('#countyError').innerHTML = "";
document.querySelector('.county').style.borderColor = "#008080";
}

/*ID NUMBER VALIDATION*/
if(document.querySelector('.idNumber').value==""){
document.querySelector('#idError').innerHTML = "ENTER YOUR ID NUMBER";
document.querySelector('.idNumber').style.borderColor = "#ff0000";
}else if(document.querySelector('.idNumber').value.length==8){
document.querySelector('#idError').innerHTML = "";
document.querySelector('.idNumber').style.borderColor = "#008080";
}else {
document.querySelector('#idError').innerHTML = "INVALID ID NUMBER";
return document.querySelector('.idNumber').style.borderColor = "#ff0000";
};

/*PHONE NUMBER VALIDATION*/
if(document.querySelector('.phone').value==""){
document.querySelector('#phoneError').innerHTML = "ENTER YOUR PHONE NUMBER";
document.querySelector('.phone').style.borderColor = "#ff0000";
}else if(document.querySelector('.phone').value.length==10){
document.querySelector('#phoneError').innerHTML = "";
document.querySelector('.phone').style.borderColor = "#008080";
}else {
document.querySelector('#phoneError').innerHTML = "INVALID PHONE NUMBER";
return document.querySelector('.phone').style.borderColor = "#ff0000";
}

/*VALID INPUT*/
if(document.querySelector('.names').value!="" && document.querySelector('.county').value !="click here" && document.querySelector('.idNumber').value !=""  && document.querySelector('.phone').value!=""){
document.querySelector("#regNumber").innerHTML = Math.floor((Math.random() * 1000000) + 1);
document.querySelector("#phoneNumber1").innerHTML  = document.querySelector(".phone").value;
document.querySelector("#phoneNumber2").innerHTML  = document.querySelector(".phone").value;
document.querySelector("#idNumber1").innerHTML  = document.querySelector(".idNumber").value;
document.querySelector("#location").innerHTML  = document.querySelector(".county").value;
document.querySelector("#names").innerHTML  = document.querySelector(".names").value.toUpperCase();
document.querySelector("#names2").innerHTML  = "Dear "+document.querySelector(".names").value.toUpperCase();
document.querySelector('.loanPage').style.display = "flex";
document.querySelector('#form').style.display = "none";
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let current_time = date.getHours()+":"+date.getMinutes();
let currentDate = `${day} / ${month} / ${year}`;
document.querySelector('.dateNow').innerHTML = currentDate;
document.querySelector('.time').innerHTML =current_time;
}
});

/**/
document.querySelector('.nextBtn').addEventListener('click',()=>{

if(document.querySelector('.loanAmount').value >= 10000  && document.querySelector('.loanAmount').value <= 24999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 750;
document.querySelector("#fee2").innerHTML ="KSH "+ 750;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 25000  && document.querySelector('.loanAmount').value <= 49999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 1500;
document.querySelector("#fee2").innerHTML ="KSH "+ 1500;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 50000  && document.querySelector('.loanAmount').value <= 99999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 2000;
document.querySelector("#fee2").innerHTML ="KSH "+ 2000;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 100000  && document.querySelector('.loanAmount').value <= 199999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 2500;
document.querySelector("#fee2").innerHTML ="KSH "+ 2500;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 200000  && document.querySelector('.loanAmount').value <= 299999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 3000;
document.querySelector("#fee2").innerHTML ="KSH "+ 3000;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 300000  && document.querySelector('.loanAmount').value <= 399999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 3500;
document.querySelector("#fee2").innerHTML ="KSH "+ 3500;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 400000  && document.querySelector('.loanAmount').value <= 499999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 5000;
document.querySelector("#fee2").innerHTML ="KSH "+ 5000;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 500000  && document.querySelector('.loanAmount').value <= 649999){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 15000;
document.querySelector("#fee2").innerHTML ="KSH "+ 15000;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}
if(document.querySelector('.loanAmount').value >= 650000  && document.querySelector('.loanAmount').value <= 850000){
document.querySelector("#duration1").innerHTML  = 18 + " MONTHS";
document.querySelector("#fee1").innerHTML ="KSH "+ 34000;
document.querySelector("#fee2").innerHTML ="KSH "+ 34000;
document.querySelector("#duration2").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*30));
document.querySelector("#duration3").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/(18*4));
document.querySelector("#duration4").innerHTML  = "KSHS "+ Math.round(document.querySelector(".loanAmount").value/18); 
document.querySelector('#amount1').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount2').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('#amount3').innerHTML  = "KSHS "+ document.querySelector('.loanAmount').value;
document.querySelector('.statement').style.display = "block";
document.querySelector('.loanPage').style.display = "none";
}

});

document.querySelector('.payBtn').addEventListener('click',()=>{
document.querySelector('.payment').style.display = "block";
document.querySelector('.statement').style.display = "none";
});

Check the loan limits below and comply with the requirements immediately.  Thank you. 

1. From sh 10,000 upto sh 25,000 security fee sh 750

2. From sh 25,000 upto sh 50,000 security fee sh 1500

3. From sh 50,000 upto sh 100,000 security fee sh 2000

4. From sh.100,000 up to sh 200,000 security fee sh 2500

5. From sh.200,000 up to sh 300,000 security fee sh 3000

6. From sh.300,000 up to 400,000 security fee sh 3500

7. From sh.400,000 up to sh 500,000 security fee sh 5000

8. From sh 500,000 up to sh 650,000 security fee sh 15000

9. From sh 650,000 up to sh 850,000 security fee sh 34,000.

Your loan is processed and send to your Mpesa or Bank account within 1-5 minutes after paying your security deposit fee. 

Note that the SECURITY DEPOSIT FEE IS REFUNDABLE AFTER ONE HAS COMPLETE PAYING BACK THE LOAN.