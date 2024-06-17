document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var password = document.getElementById("password").value;
  
    if (password === "r1x22r36") {
      window.location.href = "file:///C:/Users/rayen/Desktop/test%20app/app1.html"; // Redirect to success page or do something on successful login
    } else {
      document.getElementById("message").innerText = "Incorrect password. Please try again.";
    }
  });
  