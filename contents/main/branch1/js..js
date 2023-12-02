window.addEventListener("load", (event) => {
  let userName = document.getElementById("user");
  let Password = document.getElementById("pass");
  let extra = document.getElementById("ext");
  let Auth = document.getElementById("login");

  localStorage.setItem("username", "smitha");
  localStorage.setItem("password", "ssce");

  Auth.addEventListener("click", () => {
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (
      userName.value === storedUsername &&
      Password.value === storedPassword
    ) {
      extra.innerText = "Authentication successful. Redirecting...";
      setTimeout(() => {
        window.location.href = "index3.html";
      }, 2000);
    } else {
      extra.innerText = "Authentication failed. Please try again.";
    }
  });
});
