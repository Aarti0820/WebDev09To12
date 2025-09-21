// console.log("Hello World");

// let age = 10;
// console.log(age);

// let AGE = 10;
// age = 20;
// console.log(age);

// const pi = 3.14;
// //pi= 4376.436;
// console.log(pi);


// // Data Types
// // Primitive Data Types
// // 1. Number
// let num = 10; // Number
// let num2 = 4573.47;
// console.log(typeof num2);

// // 2. String
// let str = "Hello World";
// console.log(typeof str);

// //3. Boolean
// let isLoggedIn = true;
// console.log(typeof isLoggedIn);

// //4. Null
// let emptyValue = null;
// console.log(typeof emptyValue);

// //5. Undefined
// let undef;
// console.log(typeof undef);

// //6. Symbol
// let sym = Symbol("My Symbol");
// console.log(typeof sym);

// // Reference Data Types
// // 1. Object
// let person = {
//     name: "John",
// }

// console.log(typeof person);

// // 2. Array
// let numbers = [1,2,3,4,5];
// console.log(typeof numbers);



//operators 
// Arithmetic Operators + , - , * , / , % ,
let a = 10;
let b = 13;
console.log(a + b); // Addition Operator -->13
console.log(a - b); // Subtraction Operator --> 7
console.log(a * b); // Multiplication Operator --> 30
console.log(a / b); // Division Operator --> 3.3333
console.log(a % b); // Modulus Operator --> 1

// Assignment Operators = , += , -= , *= , /= , %=
let c = 10;
console.log(c); //10

  a+=b;      // a = a + b;  // a = 10 + 3;
    console.log(a); //13

 // Comparison Operators  == , === , != , !== , > , < , >= , <=
 let x = 10;
 let y = 10;
 console.log(x >= y); 
 

 // Logical Operators  && , || , !
 console.log(!(x >= y)  || (x<y));   
 
 // Ternary Operator  condition ? expr1 : expr2
    let age = 18;
    let statement = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
    console.log(statement);

//unary Operators   
//Increment --> 1. preIncrement  2. postIncrement , ++  
//Decrement Operators --> 1. preDecrement 2. postDecrement , --
// console.log(age++); //18
// console.log(age);

// console.log(++age);


// console.log(age--);
// console.log(--age); //19 


//Conditional Statements
// if , if-else , if-else-if , switch-case
console.log(age);
 // 1- 18   --> not adult
 // 18 - 60 --> adult
 // 60+     --> senior citizen


 age = -4674;
if(age >= 1 && age <= 18){
    console.log("not adult");
}
else if(age > 18 && age <= 60){
      console.log("adult"); 
    }
else if(age > 60 && age <= 120){
       console.log("senior citizen");   
    }
else {
   console.log("Invalid age");
   greet();
}

let num = 1;
if(num % 2 == 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
    
}


// switch-case
let day = 3;
switch(day){
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7:
    console.log("Sunday");
    break;
default:
    console.log("Invalid Day");
}




//loops ....
// 1. for loop
// let table = 2;

// for(let i = 1; i<=10 ; i++)
// {
//     console.log(`${table} x ${i} = ${i * table}`);  
// }

// for(let i = 10; i>=1; i--){
//     console.log(`reverse loop : ${i}`);
    
// }

// let i = 1;
// while(i<=10){
//     //console.log(`while loop : ${i}`);
//     i++;
// }


// let j = 1;
//     console.log(j);
//     j++;
// }
// while(j>=10);

// functions
//function is block of code perform specific task ...
//pre-define function             
// user define 

//syntax--> 
//define 
function greet(){
    console.log("Good Morning....");
}

//execute/call


//parametrized function

function greetStudent(){
    if(true){
      let x1 = 10;
     // console.log(`Hello ${name} Welcomem To WebDev Class!  ${x1}`);
      console.log(`var inside if block ${x1}`);
    }
     //console.log(`var outside if block ${x1}`);
     
}

 let val = greetStudent();
 console.log(val);

//function with Return Type 
function add(a , b){
    return "hello";
} 


 let result = add(100 , 200);
 console.log(result);

 //Anonymous function 

  let multiply = function(x, y){
    return x*y;
 };

 console.log(`Multiplication is:, ${multiply(4,3)}`);

 //Arrow Function

 console.log(greet2(10 , 2));