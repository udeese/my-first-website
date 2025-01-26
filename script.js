document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("customModal");
    let closeBtn = document.querySelector(".close");
    let button = document.getElementById("magicButton");

    button.addEventListener("click", function () {
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

    // Spaceship Cursor Effects
    document.addEventListener("mousemove", function (e) {
        let cursor = document.createElement("div");
        cursor.classList.add("cursor-trail");
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
        document.body.appendChild(cursor);

        setTimeout(() => {
            cursor.remove();
        }, 500);
    });
});
