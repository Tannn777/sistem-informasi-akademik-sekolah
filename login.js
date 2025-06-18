function togglePassword() {
  const pass = document.getElementById("password");
  const eyeIcon = document.querySelector(".eye-icon");

  if (pass.type === "password") {
    pass.type = "text";
    eyeIcon.src = "..show.png";
    eyeIcon.alt = "Hide Password";
  } else {
    pass.type = "password";
    eyeIcon.src = "hide.png";
    eyeIcon.alt = "Show Password";
  }
}

const roleSelect = document.getElementById("role");
const loginTitle = document.getElementById("login-title");
const usernameLabel = document.querySelector("label[for='username']");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

roleSelect.addEventListener("change", () => {
  const role = roleSelect.value;
  let roleText = "";
  let usernameText = "";
  let usernamePlaceholder = "";
  let passwordPlaceholder = "";

  switch(role) {
    case "siswa":
      roleText = "Siswa";
      usernameText = "Nama Siswa";
      usernamePlaceholder = "Masukkan nama siswa";
      passwordPlaceholder = "Masukkan password siswa";
      break;
    case "guru":
      roleText = "Guru";
      usernameText = "Nama Guru";
      usernamePlaceholder = "Masukkan nama guru";
      passwordPlaceholder = "Masukkan password guru";
      break;
    case "admin":
      roleText = "Admin";
      usernameText = "Nama Admin";
      usernamePlaceholder = "Masukkan nama admin";
      passwordPlaceholder = "Masukkan password admin";
      break;
  }

  loginTitle.textContent = `Login ${roleText}`;
  usernameLabel.textContent = usernameText;
  usernameInput.placeholder = usernamePlaceholder;
  passwordInput.placeholder = passwordPlaceholder;
});

const loginForm = document.getElementById("loginForm");
const loadingScreen = document.getElementById("loading-screen");

loginForm.addEventListener("submit", function () {
  loadingScreen.style.display = "flex";
  loadingScreen.style.opacity = "0";
  setTimeout(() => {
    loadingScreen.style.opacity = "1";
  }, 50);

  setTimeout(() => {
    loginForm.submit();
  }, 2500);
});
