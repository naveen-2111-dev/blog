window.addEventListener("load", (event) => {
  let Logout = document.getElementById("logout");
  let isLogin = document.getElementById("isLogin");

  Logout.addEventListener("click", () => {
    localStorage.removeItem("isLogin");
    localStorage.setItem("isLogin", JSON.stringify(false));

    if (JSON.parse(localStorage.getItem("isLogin")) === false) {
      window.location.href = "../index.html";
    }
  });

  Post.addEventListener("click", () => {
    let Url = document.getElementById("ImageUrl");
    let Title = document.getElementById("description");
    let Message = document.getElementById("message");
    let Post = document.getElementById("Post");
    let storage = [];
    localStorage.setItem("storageList", JSON.stringify(storage));
    
    if (Url.value === "" || Title.value === "") {
      alert('please fill url & title');
    } else {
      let msg = prompt("please enter password");
      let memo = localStorage.getItem("password");

      if (msg === memo) {
        let existingList = localStorage.getItem("storageList");
        if (existingList !== "") {
          let store = { Imageurl: Url.value, title: Title.value };
          storage.push(store);
          localStorage.setItem("storageList", JSON.stringify(storage));
          alert("message", "added", "succesfully ");
        }
      } else {
        alert('please prompt a correct password')
      }
    }
  });
});
