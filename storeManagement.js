let addItemArr = [];

function addItems() {
    let itemName = document.getElementById("itemName").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let image = document.getElementById("image")

    addItemArr.push({
        itemName:itemName,
        price:price,
        quantity:quantity,
        iamge:image
    });
    

}
