window.addEventListener("load", (event) => {
  let storageString = localStorage.getItem("storageList");
  let storage = JSON.parse(storageString);

  if (storage.length > 0) {
    storage.forEach((e) => {
      const div_sep = document.createElement("div");
      div_sep.setAttribute("class", "sep");

      const div_row = document.createElement("div");
      div_row.setAttribute("class", "row");

      const div_col = document.createElement("div");
      div_col.setAttribute("class", "col");

      const img = document.createElement("img");
      img.setAttribute("class", "Img"); 
      img.src = e.Imageurl;

      const Title = document.createElement("h1");
      Title.innerHTML = e.title;

      const center = document.createElement("center");

      const para = document.createElement("p");
      para.innerHTML = e.description;

      center.appendChild(img);
      div_sep.appendChild(center);
      div_sep.appendChild(Title);
      div_sep.appendChild(para);

      div_row.appendChild(div_sep);
      div_col.appendChild(div_row);

      let blogPath = document.getElementById("blogPath");
      blogPath.appendChild(div_col);
    });
  } else {
    alert("No items found in storageList");
  }
});
