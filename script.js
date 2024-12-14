// login verifying
let cachier = [
    {
        userName: "cashier1",
        password: "ca123"
    },
    {
        userName: "cashier2",
        password: "ca456"
    }
];

let admin = {
    userName: "admin",
    password: "admin123"
};

// login fucntion
function signIn() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("pass").value;

    let isExist = false;

    for (let i = 0; i < cachier.length; i++) {
        if (userName == cachier[i].userName && password == cachier[i].password) {
            isExist = true;
            window.location.assign("home.html")
        }
    }
    if (!isExist) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong User Name or Password..."
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}

// all Item Array


// Item Arrays
let BurgersArr = [
    {
        itemCode: "B1001",
        itemNAme: "Classic Burger (Large)",
        price: 1500.00,
        discount: 15,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1002",
        itemNAme: "Classic Burger (Regular)",
        price: 1600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1003",
        itemNAme: "Turkey Burger",
        price: 1400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1004",
        itemNAme: "Chicken Burger (Large)",
        price: 800.00,
        discount: 20,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1005",
        itemNAme: "Chicken Burger (Regular)",
        price: 1000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1006",
        itemNAme: "Cheese Burger (Large)",
        price: 750.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1007",
        itemNAme: "Classic Burger (Large)",
        price: 600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1008",
        itemNAme: "Bacon Burger",
        price: 650.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1009",
        itemNAme: "Shawarma Burger",
        price: 800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1010",
        itemNAme: "Olive Burger",
        price: 1800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1011",
        itemNAme: "Double-Cheese Burger",
        price: 1250.00,
        discount: 20,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1012",
        itemNAme: "Crispy Chicken Burger (Regular)",
        price: 1200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1013",
        itemNAme: "Crispy Chicken Burger (Large)",
        price: 1600.00,
        discount: 10,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1014",
        itemNAme: "Paneer Burger",
        price: 900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    }
];

let submarinesArr = [
    {
        itemCode: "B1015",
        itemNAme: "Crispy Chicken Submarine (Large)",
        price: 2000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1016",
        itemNAme: "Crispy Chicken Submarine (Regular)",
        price: 1500.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1017",
        itemNAme: "Chicken Submarine (Large)",
        price: 1800.00,
        discount: 3,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1018",
        itemNAme: "Chicken Submarine (Regular)",
        price: 1400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1019",
        itemNAme: "Grinder Submarine",
        price: 2300.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1020",
        itemNAme: "Cheese Submarine",
        price: 2200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1021",
        itemNAme: "Double Cheese n Chicken Submarine",
        price: 1900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1022",
        itemNAme: "Special Horgie Submarine",
        price: 2800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1023",
        itemNAme: "MOS Special Submarine",
        price: 3000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    }
];

let friesArr = [
    {
        itemCode: "B1024",
        itemNAme: "Steak Fries (Large)",
        price: 1200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1025",
        itemNAme: "Steak Fries (Medium)",
        price: 600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1026",
        itemNAme: "French Fries (Large)",
        price: 800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1027",
        itemNAme: "French Fries (Medium)",
        price: 650.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1028",
        itemNAme: "French Fries (Small)",
        price: 450.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1029",
        itemNAme: "Sweet Potato Fries (Large)",
        price: 600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    }
];

let pastaArr = [
    {
        itemCode: "B1030",
        itemNAme: "Chicken n Cheese Pasta",
        price: 1600.00,
        discount: 15,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1031",
        itemNAme: "Chicken Penne Pasta",
        price: 1700.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1032",
        itemNAme: "Ground Turkey Pasta Bake",
        price: 2900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1033",
        itemNAme: "Creamy Shrimp Pasta",
        price: 2000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1034",
        itemNAme: "Lemon Butter Pasta",
        price: 1950.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1035",
        itemNAme: "Tagliatelle Pasta",
        price: 2400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1036",
        itemNAme: "Baked Ravioli",
        price: 2000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    }
];

let chickenArr = [
    {
        itemCode: "B1037",
        itemNAme: "Fried Chicken (Small)",
        price: 1200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1038",
        itemNAme: "Fried Chicken (Regular)",
        price: 2300.00,
        discount: 10,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1039",
        itemNAme: "Fried Chicken (Large)",
        price: 3100.00,
        discount: 5,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1040",
        itemNAme: "Hot Wings (Large)",
        price: 2400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1041",
        itemNAme: "Devilled Chicken (Large)",
        price: 900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1042",
        itemNAme: "BBQ Chicken (Regular)",
        price: 2100.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    }
];

let beveragesArr = [
    {
        itemCode: "B1043",
        itemNAme: "Pepsi (330ml)",
        price: 990.00,
        discount: 5,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1044",
        itemNAme: "Coca-Cola (330ml)",
        price: 1230.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1045",
        itemNAme: "Sprite (330ml)",
        price: 1500.00,
        discount: 3,
        image: "Images/card burger - 1.jpg"
    },
    {
        itemCode: "B1046",
        itemNAme: "Mirinda (330ml)",
        price: 850.00,
        discount: 0,
        image: "Images/card burger - 1.jpg"
    }
];
// ============================  Array End  =================================

// cliclked Section Array declare by globaly...
let clickSectionArr;

function loadItems(clickSection) {    
    //checking the click Section

    if(clickSection=='Burger'){
        clickSectionArr=BurgersArr;
    }else if(clickSection=='Submarines'){
        clickSectionArr=submarinesArr;
    }else if(clickSection=='Fries'){
        clickSectionArr=friesArr;
    }else if(clickSection=='Pasta'){
        clickSectionArr=pastaArr;
    }else if(clickSection=='Chicken'){
        clickSectionArr=chickenArr;
    }else if(clickSection=='Beverages'){
        clickSectionArr=beveragesArr;
    }


    let itemCards = document.getElementById("itemCards");

    let setBody = "";
    clickSectionArr.forEach(items => {
        setBody += `<div class="newCard">
                <div class="image_container">
                  <img src="${items.image}" alt="" class="image">                    
                </div>
                <div class="newTitle">
                    <span>${items.itemNAme}</span>
                </div>                
                <div class="action">
                    <div class="price">
                        <span>RS.${items.price}</span>
                    </div>                    
                    <button class="cartBtn" onclick="addCart('${items.itemCode}')">
                        <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
                            </path>
                        </svg>
                        ADD TO CART
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product">
                            <path
                                d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>`

        itemCards.innerHTML = setBody;
    });

}
// let itemCards = document.getElementById("itemCards");

// let setBody = "";
// itemArr.forEach(items => {
//     setBody += `<div class="newCard">
//                 <div class="image_container">
//                   <img src="${items.image}" alt="" class="image">                    
//                 </div>
//                 <div class="newTitle">
//                     <span>${items.itemNAme}</span>
//                 </div>                
//                 <div class="action">
//                     <div class="price">
//                         <span>RS.${items.price}</span>
//                     </div>                    
//                     <button class="cartBtn" onclick="addCart('${items.itemCode}')">
//                         <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
//                             </path>
//                         </svg>
//                         ADD TO CART
//                         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product">
//                             <path
//                                 d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z">
//                             </path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>`

//     itemCards.innerHTML = setBody;
// });

// cart array
let cartArr = [];

// Cart adding function
function addCart(code) {
    let cartAdding = document.getElementById("cartAdding");
    let addArray = "";

    Swal.fire({
        title: "Enter Quantity",
        input: "text",
        showCancelButton: true, // Optional: Adds a cancel button
        confirmButtonText: "OK", // Optional: Customizes the OK button text
    }).then((result) => {
        if (result.isConfirmed) {
            let qty = result.value


            // Call your custom function here
            quantity(qty);
        } else {
            console.log("Action was cancelled or dismissed.");
        }
    });

    // // Define your custom function
    // function handleOkButtonClick(quantity) {
    //     alert("You entered: " + quantity);
    //     // Add additional logic here as needed
    // }


    for (let i = 0; i < clickSectionArr.length; i++) {
        if (code == clickSectionArr[i].itemCode) {
            addArray = ` <div class="addedCart">
                            <div class="cartCard">
                                <div class="icon">
                                <img class="cartImg" src="${clickSectionArr[i].image}" alt="">
                                    
                                </div>
                                <div class="content">
                                    <span class="cartTitle">${clickSectionArr[i].itemNAme}</span>                                                                      
                                    <div class="actions">
                                        <div>
                                            <h4 class="prise">RS.${clickSectionArr[i].price}</h4>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="close">
                                    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div> `

        }
    }
    cartArr.push(addArray);
    cartAdding.innerHTML += addArray;



    // remove item in the 









}