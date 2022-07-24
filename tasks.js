let myNumbers=[1,2,3,4,5];
// Write Your Destructuring Assignment Here
let [a,,,,e] = myNumbers;
console.log(a*e);//5


const member={
    age:30,
    working:false,
    country:"Egypt",
    hobbies:["Reading","Swimming","Programming"],
};

  // Write Your Destructuring Assignment Here
  let {age: g, working : w , country : c , hobbies : [h1,,h3]} = member;

  console.log(`My Age Is ${g} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  console.log(`ILive in ${c}`);
  //ILive in Egypt
  console.log(`My Hobbies:${h1} And ${h3}`);
  // My Hobbies:Reading And Programming



let openMenu = document.querySelector(".openMenu");
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".closeMenu");
openMenu.addEventListener("click",() => { 
    menu.classList.add("active");
});

closeMenu.addEventListener("click",() => { 
    menu.classList.remove("active");
});
