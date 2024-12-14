//Item Adding Part
let addItemArr = [];
let setBody = "";

function addItems() {
    let itemName = document.getElementById("itemName").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let image = document.getElementById("image");

    let addItemCard = document.getElementById("addItemCard")

    addItemArr.push({
        itemName: itemName,
        price: price,
        quantity: quantity,
        iamge: image
    });

    console.log(addItemArr);


    addItemArr.forEach(item => {
        setBody = `<div class="card">
                    <div class="card-img">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="card-info">
                        <p class="text-title">${item.itemName}</p>
                        
                    </div>
                    <div class="card-footer">
                        <span class="text-title">Rs.${item.price}</span>
                    </div>
                </div>`
    })

    addItemCard.innerHTML += setBody;
}

//searching part
//IItem array
let itemArr = [
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
    },
    //submarines
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
    },
    //Fries
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
    },
    //Pasta
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
    },
    //chicken
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
    },
    //Beverages
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
]

function search() {
    let searchItem = document.getElementById("searchItem").value;
    let setSearchItem = "";  
    console.log(searchItem);
    

    let searchCard = document.getElementById("searchCard")

    for (let i = 0; i < itemArr.length; i++) {        
        if (searchItem == itemArr[i].itemCode) {            
            
            setSearchItem += `<div class="cardSearch">
                    <div class="card-imageSearch"></div>
                    <p class="card-titleSearch">${itemArr[i].itemNAme}</p>
                    <p class="card-bodySearch">
                        Rs.${itemArr[i].price}
                    </p>
                </div>`
        }
    }
    searchCard.innerHTML+=setSearchItem;
}