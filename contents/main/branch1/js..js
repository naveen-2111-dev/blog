window.addEventListener("load", (event) => {
  let userName = document.getElementById("user");
  let Password = document.getElementById("pass");
  let extra = document.getElementById("ext");
  let Auth = document.getElementById("login");
  isLogin = document.getElementById('isLogin');

  localStorage.setItem("username", "smitha");
  localStorage.setItem("password", "ssce");

  Auth.addEventListener("click", () => {
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (
      userName.value === storedUsername &&
      Password.value === storedPassword
    ) {
      extra.innerText = "Authentication succesfull!"
      setTimeout(() => {
        window.location.href = "index3.html";
      }, 1000);
      localStorage.setItem("isLogin", true);
    } else {
      if (userName.value == "") {
        extra.innerText = "Authentication failed.please enter  username";
        userName.style.borderBottomColor = "red";
        setTimeout(() => {
          userName.style.borderBottomColor = "skyblue";
        }, 2000);
        setTimeout(() => {
          extra.innerText = "";
        }, 2000);
      } else {
        if (Password.value === "") {
          extra.innerText = "Authendication failed. please enter password";
          Password.style.borderBottomColor = "red";
          setTimeout(() => {
            Password.style.borderBottomColor = "skyblue";
          }, 2000);
          setTimeout(() => {
            extra.innerText = "";
          }, 2000);
        } else {
          extra.innerText = "authendication failed. please try again!!!";
          Password.style.borderBottomColor = "red";
          Password.style.color = "red";
          userName.style.borderBottomColor = "red";
          userName.style.color = "red";
          console.error("entered data does not match with previous data");
          setTimeout(() => {
            extra.innerText = "";
          }, 2000);
          setTimeout(() => {
            userName.value = "";
          }, 2000);
          setTimeout(() => {
            Password.style.borderBottomColor = "skyblue";
          }, 2000);
          setTimeout(() => {
            userName.style.borderBottomColor = "skyblue";
          }, 2000);
          setTimeout(() => {
            Password.value = "";
          }, 2000);
        }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let passwordElement = document.getElementById("pass");
  let isLogin = document.getElementById("islogin");

  passwordElement.addEventListener("dblclick", () => {
    passwordElement.style.marginTop = "0";  
    passwordElement.type = "text";
  });

  passwordElement.addEventListener("click", () => {
    passwordElement.type = "password";
  });
  if (JSON.parse(localStorage.getItem("isLogin"))===true) {
    window.location.href = "index3.html";
  }
});