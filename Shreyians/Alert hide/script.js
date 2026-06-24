const alertBox = document.querySelector(".alert");

setTimeout(() => {
    alertBox.style.opacity = "0";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 500);
}, 3000);