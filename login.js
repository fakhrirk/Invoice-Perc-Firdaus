function validateForm(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Contoh kredensial (dalam praktik nyata, gunakan backend untuk autentikasi)
  const validUsername = "admin";
  const validPassword = "123321";

  if (username === validUsername && password === validPassword) {
    alert("Login berhasil!");
    // Di sini Anda bisa menambahkan redirect ke halaman dashboard
    window.location.href = "index.html";
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Username atau password salah!";
  }

  return false;
}

window.onload = function () {
  if (!sessionStorage.getItem("isLoggedIn")) {
    // If not logged in, stay on login page
    if (window.location.pathname !== "/login.html") {
      window.location.href = "login.html";
    }
  } else {
    // If logged in, redirect to index
    if (window.location.pathname === "/login.html") {
      window.location.href = "index.html";
    }
  }
};

function validateForm(event) {
  event.preventDefault();
  // Your login validation logic here

  // If login successful
  sessionStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
}

// dengan kodingan ini user tidak dapat mengklik tombol kiri pada mouse
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
