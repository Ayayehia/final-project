// let zero = 0;
// // let counter = 3;
// let my = ["Ahmed", "mazero", "elham", "osama", "gamal", "ameer"];

// console.log(my.reverse().splice(counter - 1));
// console.log(my.slice(-3, -5));
// my.unshift("el zero");

// console.log(`${my[1][5]}`);

// // new assg
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(--myFriends.lenght - num, ++num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];

// let newFriends = myFriends.pop();

// console.log(myFriends);
// console.log(myFriends.slice("", num));
// // assg two
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// let friend = friends.pop() + friends.shift();
// console.log(friend); // ["Eman", "Osama"]

/*
  Loop Challenge problem:
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
// let counter=0
// document.write(`<div>We Have X Admins</div>`);
// solve
// for(let i=0;i<myadmin.lenght;i++){document.write(`<div>${counter++1}${myAdmins[i]}</div>`)
//   for(let j=0;j,myEmployees.lenght,j++) if (myAdmins[i][i]===myEmployees[j][j]){
//     document.write(`<div>${counter++1}${myemployees[j]}</div>`)
// }}


/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${us}</h2>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hour Rate: $${rt}</p>`);
//     if (show === "Yes") {
//       if (sk.length > 0) {
//         document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//       } else {
//         document.write(`<p>Skills: No Skills</p>`);
//       }
//     } else {
//       document.write(`<p>Skills Is Hidden</p>`);
//     }
//     document.write(`</div>`);
//   }
  
//   showInfo("Osama", 38, 20, "No", "Html", "CSS");


  /*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(name="unknown",age,_hiringinfo){
    if(name=>String){document.write(`<p> hello ${name}</p>`);}
if(age=>Number){document.write(`<p>age:${age}</p>`);}
if (_hiringinfo=>Boolean&&_hiringinfo=="true"){document.write(`<p>you are available for hire</p>`);}
else(_hiringinfo=>Boolean&&_hiringinfo=="false"){document.write(`<p>you are not available for hire</p>`);}}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// another solution with function and loop
// function showDetails(k, l, f) {
//     document.write(`<div>`)
//     for (let i = 0; i < arguments.length; i++) {
//       typeof arguments[i] === 'string'
//         ? (us = arguments[i])
//         : typeof arguments[i] === 'number'
//         ? (ag = arguments[i])
//         : typeof arguments[i] === 'boolean' && arguments[i] === true
//         ? (statue = 'Available')
//         : (statue = 'Not Available')}
//     document.write(`<h1>Hello ${us}, Your Age Is ${ag}, You Are ${statue} For Hire</h1>`,)
//     document.write(`</div>`)} 
    // answer msh sah




    // bug in the code
    // let products=["keyboard", "mouse", "pen"]
    // let colors=["red","blue","green"]
    // let models["2020","2021" ]

    // for(i=0;i<products.length;i++){console.log([i])
    //   for(p=0;colors.length;p++){console.log(`"colors:"${p}`)
    //     for(k=0;k<models.lenght;k++){
    //       console.log(`"models"${k}`)
    //     }
    //   }
    // }
    // var icon = document.getElementById("icon");
    // icon.onclick=function(){
    //   document.body.classList.toggle("dark-theme");
    // }