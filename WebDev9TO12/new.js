// //getElementById("IdName")   --> first element
// function changeColor(){
// let element = document.getElementById("heading");
// element.style.color = "red";
// }


//getElementByClassName("className")
// function changeText(){
//    let elements =  document.getElementsByClassName("para");
//    elements[0].innerText = "hi....";
//    elements[1].innerText = "How are you ? ....";
//    elements[2].innerText = "Good Morning";
// }


//getElementByTagName("tag")

// function changeColor(){
//     let para = document.getElementsByTagName("p");
//     for(let i = 0; i<para.length; i++){
//         para[i].style.color = "blue";
//     }

// }

//querySelector("tagName" , "class" , "id") 
// function change(){
//     let para = document.querySelector(".note");
//     console.log(para.innerHTML = "My Paragraph");
    
// }

//querySelectorAll("tagName" , "class" , "id") 
// function change(){
// let notes = document.querySelectorAll(".note");
// notes.forEach(n=> {
//     console.log(n.innerHTML);    
// })
// }



// let text= document.getElementById("text");
// text.addEventListener("mouseover" , function(){
//     text.style.color = "red";
// } );

// function colorChange(){
//     text.style.color = "purple";
// }

// text.addEventListener("mouseout" , colorChange() );

// document.getElementById("name").addEventListener("keyup" , function(event){
//     console.log("key pressed: " + event.key); 
// })


// function changeText() {
//     document.getElementById("heading").innerText = "<b>Good Evening!</b>" ; 
// }

// function changeHtml() {
//     document.getElementById("heading").innerHTML = "<mark>Good Evening ....!</mark>" ; 
// }

function changeImage() {
    document.getElementById("myImage").setAttribute("src" , "/first_img.jpg");
      document.getElementById("myImage").setAttribute("width" , "500px");
}


function changeContent()
{
    document.getElementById("link").setAttribute("href" , "https://developer.mozilla.org/en-US/docs/Web/HTML")
    document.getElementById("link").innerText = "Html MDN Link" ; 
}





let car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;

console.log(car.brand);  // Toyota




let numbers = new Array(10, 20, 30);
console.log(numbers[1]); // 20



let students = [
  { name: "John", age: 20 },
  { name: "Emma", age: 22 },
  { name: "Mike", age: 21 }
];



let box = document.getElementById("box");
box.addEventListener('mouseover' , ()=>{
      box.style.backgroundColor = "lightgreen";
});
      
box.addEventListener('mouseout' , ()=>{
      box.style.backgroundColor = "lightblue";
});

const inputBox= document.getElementById("input");

inputBox.addEventListener("keyup" , (event)=>{
  console.log(event.key);
  
})


//prompt("Enter your Name");

// confirm("are you want to close?");

document.getElementById("btn").addEventListener('click' , ()=>{

 let result =  confirm("Are you sure you want to delete this ?");

 if(result){
  alert("Item deleted sunccessully");

 }
 else{
  alert("Action cancelled")
 }

})
let name="Arti"
console.log("Hello"+name)