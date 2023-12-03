window.addEventListener('load', (event) => {
    let Logout = document.getElementById("logout");
    let isLogin = document.getElementById('isLogin');

    
      Logout.addEventListener("click", () => {
        localStorage.removeItem("isLogin");
        localStorage.setItem("isLogin", JSON.stringify(false));

        if (JSON.parse(localStorage.getItem("isLogin")) === false) {
          window.location.href = "../index.html";
        }
      });
});