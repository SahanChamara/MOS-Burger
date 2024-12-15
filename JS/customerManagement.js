let customerArr = [];

async function addCustomer() {

    const { value: formValues } = await Swal.fire({
        title: `<strong style="font-size: 1.5rem; color: #333;">Add Customer Details</strong>`,
        html: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
                <div style="width: 100%; text-align: left;">
                    <label for="swal-input1" style="font-size: 1rem; color: #555; font-weight: bold;">Customer Name:</label>
                    <input id="EnteredName" class="swal2-input" placeholder="Enter Customer Name" type="text" style="width: 90%; margin-top: 5px;" />
                </div>
                <div style="width: 100%; text-align: left;">
                    <label for="swal-input2" style="font-size: 1rem; color: #555; font-weight: bold;">Email Address:</label>
                    <input id="EnteredEmail" class="swal2-input" placeholder="Enter Email" type="email" style="width: 90%; margin-top: 5px;" />
                </div>
                <div style="width: 100%; text-align: left;">
                    <label for="swal-input2" style="font-size: 1rem; color: #555; font-weight: bold;"> Phone Number:</label>
                    <input id="EnteredPhoneNumber" class="swal2-input" placeholder="Enter PhoneNumber" type="number" style="width: 90%; margin-top: 5px;" />
                </div>
            </div>
        `,
        focusConfirm: false,
        confirmButtonText: 'Submit',
        confirmButtonColor: '#007aff',
        background: '#f9f9f9',
        preConfirm: () => {
            const name = document.getElementById("EnteredName").value;
            const email = document.getElementById("EnteredEmail").value;
            const phoneNumber = document.getElementById("EnteredPhoneNumber").value;

            if (!name || !email || !phoneNumber) {
                Swal.showValidationMessage("Please fill in both fields!");
            }
            return {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
            };
        },
    });

    if (formValues) {
        await Swal.fire({
            title: 'Entered Values',
            html: `
                <p><strong>Name:</strong>${formValues.name}</p>
                <p><strong>Email:</strong> ${formValues.email}</p>
                <p><strong>PhoneNumber:</strong> ${formValues.phoneNumber}</p>
            `,
            icon: 'success',
            confirmButtonText: 'OK',
            preConfirm: () => {
                // add customer details to the array
                customerArr.push({
                    customerName: formValues.name,
                    customerEmail: formValues.email,
                    customerPhoneNumber: formValues.phoneNumber
                });

                loadCusDetailaArr();

                return true; // Required for the SweetAlert to close after the custom work
            },
        });
    }
}

function loadCusDetailaArr() {
    let customerDetails = document.getElementById("customerDetails");
    let setBody = "";

    customerArr.forEach(cusDetails => {
        setBody += `<div class="customer-info">
          <p class="customer-name">${cusDetails.customerName}</p>
          <p class="customer-email">${cusDetails.customerEmail}</p>
          <p class="customer-phone">${cusDetails.customerPhoneNumber}</p>
        </div>
        <div class="customer-actions">
          <button class="edit-btn" onclick="editCustomer(${cusDetails.customerPhoneNumber})">Edit</button>
          <button class="delete-btn" onclick="deleteCustomer(${cusDetails.customerPhoneNumber})">Delete</button>
        </div>`
    });

    customerDetails.innerHTML = setBody;

}

async function editCustomer(ExistCusPhoneNumber) {
    for (let i = 0; i < customerArr.length; i++) {
        if (customerArr[i].customerPhoneNumber == ExistCusPhoneNumber) {

            const existingCustomer = {
                name: customerArr[i].customerName,
                email: customerArr[i].customerEmail,
                phoneNumber: customerArr[i].customerPhoneNumber
            };

            const { value: formValues } = await Swal.fire({
                title: `<strong style="font-size: 1.5rem; color: #333;">Edit Customer Details</strong>`,
                html: `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
                        <div style="width: 100%; text-align: left;">
                            <label for="swal-input1" style="font-size: 1rem; color: #555; font-weight: bold;">Customer Name:</label>
                            <input id="EnteredName" class="swal2-input" placeholder="Enter Customer Name" type="text" style="width: 90%; margin-top: 5px;" value="${existingCustomer.name}"/>
                        </div>
                        <div style="width: 100%; text-align: left;">
                            <label for="swal-input2" style="font-size: 1rem; color: #555; font-weight: bold;">Email Address:</label>
                            <input id="EnteredEmail" class="swal2-input" placeholder="Enter Email" type="email" style="width: 90%; margin-top: 5px;" value="${existingCustomer.email}" />
                        </div>
                        <div style="width: 100%; text-align: left;">
                            <label for="swal-input2" style="font-size: 1rem; color: #555; font-weight: bold;"> Phone Number:</label>
                            <input id="EnteredPhoneNumber" class="swal2-input" placeholder="Enter PhoneNumber" type="number" style="width: 90%; margin-top: 5px;" value="${existingCustomer.phoneNumber}"/>
                        </div>
                    </div>
                `,
                focusConfirm: false,
                confirmButtonText: 'Submit',
                confirmButtonColor: '#007aff',
                background: '#f9f9f9',
                preConfirm: () => {
                    const name = document.getElementById("EnteredName").value;
                    const email = document.getElementById("EnteredEmail").value;
                    const phoneNumber = document.getElementById("EnteredPhoneNumber").value;

                    if (!name || !email || !phoneNumber) {
                        Swal.showValidationMessage("Please fill in both fields!");
                    }
                    return {
                        name: name,
                        email: email,
                        phoneNumber: phoneNumber,
                    };
                },
            });

            if (formValues) {
                await Swal.fire({
                    title: 'Entered Values',
                    html: `
                        <p><strong>Name:</strong>${formValues.name}</p>
                        <p><strong>Email:</strong> ${formValues.email}</p>
                        <p><strong>PhoneNumber:</strong> ${formValues.phoneNumber}</p>
                    `,
                    icon: 'success',
                    confirmButtonText: 'OK',
                    preConfirm: () => {

                        // editing the existing cutomer detils     
                        let cusIndex = customerArr.findIndex(i => i.customerPhoneNumber == ExistCusPhoneNumber);
                        console.log(cusIndex);

                        if (cusIndex !== -1) {
                            customerArr[cusIndex] = {
                                customerName: formValues.name,
                                customerEmail: formValues.email,
                                customerPhoneNumber: formValues.phoneNumber
                            }
                            loadCusDetailaArr();
                        }
                        return true; // Required for the SweetAlert to close after the custom work
                    },
                });
            }
        }
    }

}

function deleteCustomer(cusPhoneNumber) {
    for (let i = 0; i < customerArr.length; i++) {
        if (customerArr[i].customerPhoneNumber == cusPhoneNumber) {
            Swal.fire({
                title: "Customer Name : " + customerArr[i].customerName,
                text: "Are you sure? You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    // removing the array element
                    customerArr.splice(i, 1);
                    loadCusDetailaArr();

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

async function searchCustomer() {
    const { value: formValues } = await Swal.fire({
        title: `<strong style="font-size: 1.5rem; color: #333;">Search Customer Details</strong>`,
        html: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
                <div style="width: 100%; text-align: left;">
                    <label for="swal-input1" style="font-size: 1rem; color: #555; font-weight: bold;">Enter Customer Phone Number:</label>
                    <input id="EnteredPhoneNumber" class="swal2-input" placeholder="Enter Customer Phone Number" type="text" style="width: 90%; margin-top: 5px;" />
                </div>                
            </div>
        `,
        focusConfirm: false,
        confirmButtonText: 'Submit',
        confirmButtonColor: '#007aff',
        background: '#f9f9f9',
        preConfirm: () => {
            const phoneNumber = document.getElementById("EnteredPhoneNumber").value;

            if (!phoneNumber) {
                Swal.showValidationMessage("Please fill in both fields!");
            }
            return {
                phoneNumber: phoneNumber,
            };
        },
    });

    if (formValues) {
        await Swal.fire({
            title: 'Entered Values',
            html: `                
                <p><strong>PhoneNumber:</strong> ${formValues.phoneNumber}</p>
            `,
            icon: 'success',
            confirmButtonText: 'OK',
            preConfirm: () => {
                // add customer details to the array
                showSearchCustomer(formValues.phoneNumber);

                return true; // Required for the SweetAlert to close after the custom work
            },
        });

    }
}

function showSearchCustomer(cusNumber) {
    for (let i = 0; i < customerArr.length; i++) {
        if (customerArr[i].customerPhoneNumber == cusNumber) {
            Swal.fire({
                title: `<strong style="font-size: 1.5rem; color: #333;">Customer Details</strong>`,
                html: `
                    <div style="text-align: left; font-size: 1rem; color: #555;">
                        <p><strong>Name:</strong>${customerArr[i].customerName}</p>
                        <p><strong>Email:</strong> ${customerArr[i].customerEmail}</p>
                        <p><strong>Phone Number:</strong> ${customerArr[i].customerPhoneNumber}</p>
                    </div>
                `,
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `,
                },
                hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `,
                },
                confirmButtonText: "OK",
                confirmButtonColor: "#3085d6",
            });
            
        }
    }
}