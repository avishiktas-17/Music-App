document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll for navigation links
  document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          // Prevent default behavior if it's an internal link
          if (this.getAttribute("href").startsWith("#")) {
              e.preventDefault();
              const targetSection = document.querySelector(this.getAttribute("href"));
              if (targetSection) {
                  targetSection.scrollIntoView({ behavior: "smooth" });
              }
          }
      });
  });

  // Button Click Alert before Redirecting
  document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", function () {
          alert("Redirecting to the appropriate page...");
          // Redirect to the button's destination if it's a link button
          if (this.getAttribute("onclick")) {
              const url = this.getAttribute("onclick").split("'")[1]; // Extract the URL from onclick
              setTimeout(() => {
                  window.location.href = url;
              }, 1000); // Delay redirect for better user experience
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Handle login form submission
  const loginForm = document.getElementById("loginForm");
  
  if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
          e.preventDefault();
          
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          if (email === "user@example.com" && password === "password123") {
              alert("Login successful! Redirecting...");
              window.location.href = "index.html"; // Redirect to home page
          } else {
              alert("Invalid credentials. Try again.");
          }
      });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Handle login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const input = document.getElementById("emailOrPhone").value.trim();
          const password = document.getElementById("password").value;

          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const phonePattern = /^[0-9]{10}$/;

          if ((emailPattern.test(input) || phonePattern.test(input)) && password === "password123") {
              alert("Login successful! Redirecting...");
              window.location.href = "index.html";
          } else {
              alert("Invalid credentials. Try again.");
          }
      });
  }

  // Handle sign-up
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const fullName = document.getElementById("fullName").value.trim();
          const input = document.getElementById("emailOrPhone").value.trim();
          const password = document.getElementById("password").value;
          const confirmPassword = document.getElementById("confirmPassword").value;

          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const phonePattern = /^[0-9]{10}$/;

          if (!fullName) {
              alert("Please enter your full name.");
              return;
          }
          if (!emailPattern.test(input) && !phonePattern.test(input)) {
              alert("Please enter a valid email or phone number.");
              return;
          }
          if (password.length < 6) {
              alert("Password must be at least 6 characters long.");
              return;
          }
          if (password !== confirmPassword) {
              alert("Passwords do not match.");
              return;
          }

          alert("Sign-up successful! Redirecting to login...");
          window.location.href = "login.html"; // Redirect to login page
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".nav-logo");

    // Ensure the logo exists before applying event listeners
    if (logo) {
        console.log("Logo image loaded successfully.");
        
        // Optional: Add a click event to navigate to home when clicked
        logo.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    } else {
        console.warn("Logo image not found! Check the path in HTML.");
    }
});

