//toggle icon
// let menuIcon = document.querySelector('#mIcon');
// let navBar = document.querySelector('.nav_links');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navBar.classList.toggle('navigate_active');
// };

// Scroll sections active
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav_links a');

// window.onscroll = () => {
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('navigate_active');
//                 document.querySelector('header nav_links a[href*= '+ id +']').classList.add('navigate_active');
//             });
//         };
//     });
// remove toggle icon and navbar when click nav bar link
// menuIcon.classList.remove('bx-x');
// navBar.classList.remove('navigate_active');
//};


// login verifying
let cusLoginArr = [
    {
        userName: "sahan",
        password: "123"
    },
    {
        userName: "kasun",
        password: "456"
    }
];


function signIn() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("pass").value;

    for (let i = 0; i < cusLoginArr.length; i++) {
        if((userName==cusLoginArr[i].userName) && (password==cusLoginArr[i].password)){
            alert("log sucess")
        }else{
            alert("You dont have a account..please login")
            console.log("wetenawa");
            
        }

    }
}




