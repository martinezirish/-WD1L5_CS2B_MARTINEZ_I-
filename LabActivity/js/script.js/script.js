// Login function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "list.html";
    } else {
        document.getElementById("message").textContent =
            "Invalid username or password.";
    }
}

// Student data using an array
let students = JSON.parse(localStorage.getItem("students")) || [];

// Add student
function addStudent() {
    let name = document.getElementById("studentName").value;

    if (name !== "") {
        students.push(name);

        // Save data to localStorage
        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();
        document.getElementById("studentName").value = "";
    }
}

// Display student list
function displayStudents() {
    let list = document.getElementById("studentList");

    if (!list) return;

    list.innerHTML = "";

    students.forEach(function(student) {
        let item = document.createElement("li");
        item.textContent = student;
        list.appendChild(item);
    });
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// Display students when page loads
displayStudents();
