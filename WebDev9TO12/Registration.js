// console.log("hello");

function valid(){

    console.log("hello");
    

 //Access input values
 const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone =  document.getElementById("Phone").value.trim();
   const position =  document.getElementById("position").value.trim();
    const resume =  document.getElementById("resume").value.trim();
     

    //Error element
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError =  document.getElementById("phoneError");
   const positionError =  document.getElementById("positionError");
    const resumeError =  document.getElementById("resumeError");
    const successMsg =  document.getElementById("successMsg");


//Reset Messages
   nameError.textContent = "";
   emailError.textContent = "";
   phoneError.textContent = "";
   positionError.textContent = "";
   resumeError.textContent = "";
   successMsg.textContent = "";

let isValid = true;
//Name Validation
if(name === ""){
       nameError.textContent = "Name is required";
       isValid = false;
}
else if(name.length < 3){
     nameError.textContent = "Name must be at least 3 characters";
     isValid = false;
}

//Email Validation
const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(email === ""){
    emailError.textContent = "Email is required";
    isValid = false;
}
else if(!email.match(emailpattern)){
    emailError.textContent = "Enter a valid email (e.g . arti@gmail.com)";
    isValid = false;
}


//phone Validations
const phonepattern = /^[0-9]{10}$/ ; 
if(phone === ""){
    phoneError.textContent = "phone number is required";
    isValid = false;
}else if(!phone.match(phonepattern)){
    phoneError.textContent = "Enter a valid 10-digit number";
    isValid = false;
}

// position Validation
if(position === ""){
    positionError.textContent = "please select a position"
    isValid = false;
}

//Resume Validation
debugger;
if(resume === ""){
    resumeError.textContent = "please upload your resume";
    isValid = false;
}

//final success message 
if(isValid){
    successMsg.textContent = "Application Submited Successfully!";
}

return isValid;

}


// function valid(){
//     console.log("call");
//     return false;
    

//     console.log("hello");
    
// }