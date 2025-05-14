const API_URL = "https://employee-api-using-nodejs.onrender.com/employee";

function fetchEmployeeData() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Employees:", data);
            const output = document.getElementById("output");
            output.innerHTML = ""; // Clear existing rows

            data.forEach((e, index) => {
                output.innerHTML += `
                    <tr>
                        <td>${e.id}</td>
                        <td>${e.name}</td>
                        <td>${e.email}</td>
                        <td>${e.role}</td>
                        <td>${e.salary}</td>
                        <td>
                    
                            <button onclick= "${openModal(e._id)}"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            EDIT
                                </button>
                    
                            <button onclick="${deleteEmployee(e.id)}">DELETE</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error("Error fetching employee data:", error);
        });
}
fetchEmployeeData();

function openModal(id) {
    fetch(API_URL + '/' +id)
        .then(response => response.json())
        .then(data => {
            document.getElementById('modal-name').value = data.name;
            document.getElementById('modal-email').value = data.email;
            document.getElementById('modal-role').value = data.role;
            document.getElementById('modal-salary').value = data.salary;
        });
}

function createEmployee() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
    const salary = document.getElementById("salary").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, role, salary })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Employee created:", data);
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          setTimeout(()=> {
            window.location.href="index.html";
          },2000)
        window.location.href = "index.html"; 
    })
    .catch(error => {
        console.error("Error creating employee:", error);
    });
}

if (document.getElementById("output")) {
    fetchEmployeeData();
}


function deleteEmployee(id) {
    

    fetch(API_URL, {
        method: "DELETE",
    })
    .then(response => response.json())
    .then(data => {
        console.log("Employee Deleted:", data);
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          fetchEmployeeData();
    })
    .catch(error => {
        console.error("Error creating employee:", error);
    });
}

if (document.getElementById("output")) {
    fetchEmployeeData();
}
