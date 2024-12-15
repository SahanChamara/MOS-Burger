//Item Adding Part
let addItemArr = [];


function addItems() {
    let itemName = document.getElementById("itemName").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let imageInput = document.getElementById("image");

    if (imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            // Add the item to the array with the uploaded image as a base64 string
            addItemArr.push({
                itemName: itemName,
                price: price,
                quantity: quantity,
                image: e.target.result, // Base64 image data
            });

            // Update the UI
            updatingCard();
        };

        reader.readAsDataURL(imageInput.files[0]); // Convert image to base64
    } else {
        alert("Please upload an image!");
    }
}


function updatingCard() {
    let addItemCard = document.getElementById("addItemCard");
    let setBody = "";

    addItemArr.forEach(item => {
        setBody = `<div class="card">
    <div class="card-img">
        <img src="${item.image}" alt="${item.itemName}">
    </div>
    <div class="card-info">
        <p class="text-title">${item.itemName}</p>
        <span class="text-price">Rs.${item.price}</span>
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
        image: "Images/card burger - 1.jpg",
        quantity: 5
    },
    {
        itemCode: "B1002",
        itemNAme: "Classic Burger (Regular)",
        price: 1600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 2
    },
    {
        itemCode: "B1003",
        itemNAme: "Turkey Burger",
        price: 1400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 10
    },
    {
        itemCode: "B1004",
        itemNAme: "Chicken Burger (Large)",
        price: 800.00,
        discount: 20,
        image: "Images/card burger - 1.jpg",
        quantity: 7
    },
    {
        itemCode: "B1005",
        itemNAme: "Chicken Burger (Regular)",
        price: 1000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 20
    },
    {
        itemCode: "B1006",
        itemNAme: "Cheese Burger (Large)",
        price: 750.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 14
    },
    {
        itemCode: "B1007",
        itemNAme: "Classic Burger (Large)",
        price: 600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 5
    },
    {
        itemCode: "B1008",
        itemNAme: "Bacon Burger",
        price: 650.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 18
    },
    {
        itemCode: "B1009",
        itemNAme: "Shawarma Burger",
        price: 800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 16
    },
    {
        itemCode: "B1010",
        itemNAme: "Olive Burger",
        price: 1800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 2
    },
    {
        itemCode: "B1011",
        itemNAme: "Double-Cheese Burger",
        price: 1250.00,
        discount: 20,
        image: "Images/card burger - 1.jpg",
        quantity: 18
    },
    {
        itemCode: "B1012",
        itemNAme: "Crispy Chicken Burger (Regular)",
        price: 1200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 8
    },
    {
        itemCode: "B1013",
        itemNAme: "Crispy Chicken Burger (Large)",
        price: 1600.00,
        discount: 10,
        image: "Images/card burger - 1.jpg",
        quantity: 9
    },
    {
        itemCode: "B1014",
        itemNAme: "Paneer Burger",
        price: 900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 5
    },
    //submarines
    {
        itemCode: "B1015",
        itemNAme: "Crispy Chicken Submarine (Large)",
        price: 2000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 11
    },
    {
        itemCode: "B1016",
        itemNAme: "Crispy Chicken Submarine (Regular)",
        price: 1500.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 15
    },
    {
        itemCode: "B1017",
        itemNAme: "Chicken Submarine (Large)",
        price: 1800.00,
        discount: 3,
        image: "Images/card burger - 1.jpg",
        quantity: 14
    },
    {
        itemCode: "B1018",
        itemNAme: "Chicken Submarine (Regular)",
        price: 1400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 3
    },
    {
        itemCode: "B1019",
        itemNAme: "Grinder Submarine",
        price: 2300.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 5
    },
    {
        itemCode: "B1020",
        itemNAme: "Cheese Submarine",
        price: 2200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 7
    },
    {
        itemCode: "B1021",
        itemNAme: "Double Cheese n Chicken Submarine",
        price: 1900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 4
    },
    {
        itemCode: "B1022",
        itemNAme: "Special Horgie Submarine",
        price: 2800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 1
    },
    {
        itemCode: "B1023",
        itemNAme: "MOS Special Submarine",
        price: 3000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 10
    },
    //Fries
    {
        itemCode: "B1024",
        itemNAme: "Steak Fries (Large)",
        price: 1200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 8
    },
    {
        itemCode: "B1025",
        itemNAme: "Steak Fries (Medium)",
        price: 600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 3
    },
    {
        itemCode: "B1026",
        itemNAme: "French Fries (Large)",
        price: 800.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 8
    },
    {
        itemCode: "B1027",
        itemNAme: "French Fries (Medium)",
        price: 650.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 5
    },
    {
        itemCode: "B1028",
        itemNAme: "French Fries (Small)",
        price: 450.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 13
    },
    {
        itemCode: "B1029",
        itemNAme: "Sweet Potato Fries (Large)",
        price: 600.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 9
    },
    //Pasta
    {
        itemCode: "B1030",
        itemNAme: "Chicken n Cheese Pasta",
        price: 1600.00,
        discount: 15,
        image: "Images/card burger - 1.jpg",
        quantity: 15
    },
    {
        itemCode: "B1031",
        itemNAme: "Chicken Penne Pasta",
        price: 1700.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 4
    },
    {
        itemCode: "B1032",
        itemNAme: "Ground Turkey Pasta Bake",
        price: 2900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 6
    },
    {
        itemCode: "B1033",
        itemNAme: "Creamy Shrimp Pasta",
        price: 2000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 8
    },
    {
        itemCode: "B1034",
        itemNAme: "Lemon Butter Pasta",
        price: 1950.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 2
    },
    {
        itemCode: "B1035",
        itemNAme: "Tagliatelle Pasta",
        price: 2400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 3
    },
    {
        itemCode: "B1036",
        itemNAme: "Baked Ravioli",
        price: 2000.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 15
    },
    //chicken
    {
        itemCode: "B1037",
        itemNAme: "Fried Chicken (Small)",
        price: 1200.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 5
    },
    {
        itemCode: "B1038",
        itemNAme: "Fried Chicken (Regular)",
        price: 2300.00,
        discount: 10,
        image: "Images/card burger - 1.jpg",
        quantity: 8
    },
    {
        itemCode: "B1039",
        itemNAme: "Fried Chicken (Large)",
        price: 3100.00,
        discount: 5,
        image: "Images/card burger - 1.jpg",
        quantity: 4
    },
    {
        itemCode: "B1040",
        itemNAme: "Hot Wings (Large)",
        price: 2400.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 3
    },
    {
        itemCode: "B1041",
        itemNAme: "Devilled Chicken (Large)",
        price: 900.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 18
    },
    {
        itemCode: "B1042",
        itemNAme: "BBQ Chicken (Regular)",
        price: 2100.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 7
    },
    //Beverages
    {
        itemCode: "B1043",
        itemNAme: "Pepsi (330ml)",
        price: 990.00,
        discount: 5,
        image: "Images/card burger - 1.jpg",
        quantity: 7
    },
    {
        itemCode: "B1044",
        itemNAme: "Coca-Cola (330ml)",
        price: 1230.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 4
    },
    {
        itemCode: "B1045",
        itemNAme: "Sprite (330ml)",
        price: 1500.00,
        discount: 3,
        image: "Images/card burger - 1.jpg",
        quantity: 9
    },
    {
        itemCode: "B1046",
        itemNAme: "Mirinda (330ml)",
        price: 850.00,
        discount: 0,
        image: "Images/card burger - 1.jpg",
        quantity: 2
    }
]

function search() {
    let searchItem = document.getElementById("searchItem").value;
    let setSearchItem = "";
    console.log(searchItem);


    let searchCard = document.getElementById("searchCard")

    for (let i = 0; i < itemArr.length; i++) {
        if (searchItem == itemArr[i].itemCode) {

            Swal.fire({
                title: `<strong style="font-size: 1.8rem; color: #333;">${itemArr[i].itemNAme}</strong>`,
                html: `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <img src="${itemArr[i].image}" 
                             alt="Item Image" 
                             style="width: 300px; height: 200px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0,0,0,0.2); margin-bottom: 1rem;" />
                        <p style="font-size: 1.2rem; font-weight: bold; margin: 0; color: #555;">Price: Rs. ${itemArr[i].price}</p>
                        <p style="font-size: 1rem; color: #777; margin-top: 0.5rem;">
                            Available Now!
                        </p>
                    </div>
                `,
                showCloseButton: true,
                showCancelButton: false,
                confirmButtonText: 'OK',
                confirmButtonColor: '#007aff',
                background: '#f9f9f9',
                backdrop: `
                    rgba(0, 0, 0, 0.4)
                    url("https://media.giphy.com/media/26gslrAo81D9fuRBe/giphy.gif")
                    center center
                    no-repeat
                `,
                customClass: {
                    popup: 'custom-popup',
                    title: 'custom-title',
                    htmlContainer: 'custom-html'
                }
            });

        }
    }
}


// update items
function loadItemsToUpdate() {
    let updateItems = document.getElementById("updateItems")
    let setBody = "";

    itemArr.forEach(items => {
        setBody += `<div class="item-card">
                    <img src="${items.image}" alt="Burger">
                    <h3>${items.itemNAme}</h3>
                    <p>Price: RS. ${items.price}</p>
                    <p>Quantity: ${items.quantity}</p>
                    <div class="actions">
                        <button class="update" onclick="updateItems('${items.itemCode}')">Update</button>
                        <button class="delete" onclick="deleteItem('${items.itemCode}')">Delete</button>
                    </div>
                </div>`
    });
    updateItems.innerHTML = setBody;
}

async function updateItems(itemCode) {
    for (let i = 0; i < itemArr.length; i++) {
        if (itemArr[i].itemCode == itemCode) {
            const { value: formValues } = await Swal.fire({
                title: `<strong style="font-size: 1.5rem; color: #333;">Update Item Details</strong>`,
                title: `<strong style="font-size: 1rem; color: #333;">Item Name : ${itemArr[i].itemNAme}</strong>`,
                html: `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
                        <div style="width: 100%; text-align: left;">
                            <label for="swal-input1" style="font-size: 1rem; color: #555; font-weight: bold;">Price (Rs.):</label>
                            <input id="EnteredPrice" class="swal2-input" placeholder="Enter price" type="number" style="width: 90%; margin-top: 5px;" />
                        </div>
                        <div style="width: 100%; text-align: left;">
                            <label for="swal-input2" style="font-size: 1rem; color: #555; font-weight: bold;">Quantity:</label>
                            <input id="EnteredQty" class="swal2-input" placeholder="Enter quantity" type="number" style="width: 90%; margin-top: 5px;" />
                        </div>
                    </div>
                `,
                focusConfirm: false,
                confirmButtonText: 'Submit',
                confirmButtonColor: '#007aff',
                background: '#f9f9f9',
                preConfirm: () => {
                    const price = document.getElementById("EnteredPrice").value;
                    const quantity = document.getElementById("EnteredQty").value;

                    if (!price || !quantity) {
                        Swal.showValidationMessage("Please fill in both fields!");
                    }
                    return {
                        price: price,
                        quantity: quantity,
                    };
                },
            });

            if (formValues) {
                await Swal.fire({
                    title: 'Entered Values',
                    html: `
                        <p><strong>Price:</strong> Rs. ${formValues.price}</p>
                        <p><strong>Quantity:</strong> ${formValues.quantity}</p>
                    `,
                    icon: 'success',
                    confirmButtonText: 'OK',
                    preConfirm: () => {
                        itemArr[i].price = formValues.price;
                        itemArr[i].quantity = formValues.quantity;

                        loadItemsToUpdate();

                        return true; // Required for the SweetAlert to close after the custom work
                    },
                });
            }

        }
    }
}


function deleteItem(itemCode) {

    for (let i = 0; i < itemArr.length; i++) {
        if (itemArr[i].itemCode == itemCode) {
            Swal.fire({
                title: itemArr[i].itemNAme,
                text: "Are you sure? You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    // removing the array element
                    itemArr.splice(i,1);
                    loadItemsToUpdate();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        }
    }
    
}