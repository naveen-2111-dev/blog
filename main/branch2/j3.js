window.addEventListener("load", (event) => {
  let Logout = document.getElementById("logout");
  let isLogin = document.getElementById("isLogin");

  Logout.addEventListener("click", () => {
    localStorage.removeItem("isLogin");
    localStorage.setItem("isLogin", JSON.stringify(false));

    if (JSON.parse(localStorage.getItem("isLogin")) === false) {
      window.location.href = "../mainBranch/index.html";
    }
  });

  Post.addEventListener("click", () => {
    let Url = document.getElementById("ImageUrl");
    let Title = document.getElementById("description");
    let Message = document.getElementById("message");
    let existingList = localStorage.getItem("storageList");
    let storage;

    console.log(Message.value);
    //checks whether its avalid url or not if not it will say na na na its a wrong url
    function isValidURL(url) {
      try {
        let src = new URL(url);
        console.log(src.href);
        return true;
      } catch (error) {
        return false;
      }
    }

    if (existingList) {
      storage = JSON.parse(existingList);
    } else {
      storage = [];
      localStorage.setItem("storageList", JSON.stringify(storage));
    }

    if (Url.value === "" || Title.value === "") {
      alert("please fill url & title");
    } else {
      let msg = prompt("please enter password");
      let memo = localStorage.getItem("password");
      if (isValidURL(Url.value)) {
        
      } else {
        console.error("Invalid URL please enter a valid url!!!");
        alert("enter a valid url");
        Url.value = "";
        return 0;
      }
      if (msg === memo) {
        let store = {
          Imageurl: Url.value,
          title: Title.value,
          description: Message.value,
        };
        Url.value = "";
        Title.value = "";
        Message.value = "";
        storage.push(store);
        localStorage.setItem("storageList", JSON.stringify(storage));
        alert("message added successfully ");
      } else {
        alert("please prompt a correct password");
      }
    }
  });
  let Student = document.getElementById("Student");
  Student.addEventListener("click", () => {
    window.location.href = "../branch3/index4.html";
  });
});
