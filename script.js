document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("customModal");
    let closeBtn = document.querySelector(".close");
    let button = document.getElementById("magicButton");
  
    document.getElementById("magicButton").addEventListener("click", function () {
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  