// ========================================
// CENDEKIA MEDIKA
// Login System
// ========================================


// ----------------------------------------
// ROLE SELECTION
// ----------------------------------------

const roleCards = document.querySelectorAll(".role-card");

let selectedRole = "admin";

roleCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove active state from all cards
        roleCards.forEach(item => {
            item.classList.remove("active");
        });

        // Add active state to selected card
        card.classList.add("active");

        // Save selected role
        selectedRole = card.dataset.role;

        console.log("Selected role:", selectedRole);
    });

});


// ----------------------------------------
// SHOW / HIDE PASSWORD
// ----------------------------------------

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "Show";

    }

});


// ----------------------------------------
// LOGIN FORM
// ----------------------------------------

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // ------------------------------------
    // DEMO LOGIN
    // ------------------------------------

    const demoAccounts = {

        admin: {
            email: "admin@cendekiamedika.com",
            password: "admin123"
        },

        doctor: {
            email: "doctor@cendekiamedika.com",
            password: "doctor123"
        },

        nurse: {
            email: "nurse@cendekiamedika.com",
            password: "nurse123"
        },

        patient: {
            email: "patient@cendekiamedika.com",
            password: "patient123"
        }

    };


    const account = demoAccounts[selectedRole];


    // ------------------------------------
    // CHECK LOGIN
    // ------------------------------------

    if (
        email === account.email &&
        password === account.password
    ) {

        loginMessage.textContent =
            "Login successful!";

        loginMessage.style.color = "#176b87";


        console.log(
            "Logged in as:",
            selectedRole
        );


        // Temporary message
        setTimeout(() => {

            alert(
                `Welcome to Cendekia Medika!\n\nRole: ${selectedRole}`
            );

        }, 300);

    } else {

        loginMessage.textContent =
            "Invalid email or password.";

        loginMessage.style.color = "#c0392b";

    }

});