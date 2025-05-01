// Email Me! button function to open page smoothly
const button = document.querySelector("#emailbtn");
button.addEventListener('click', function () {
    document.body.style.opacity = 0.5;  // Fade out the current page
    setTimeout(() => {
        window.open("contact.html", "_blank"); // Open in new tab after fade
        document.body.style.opacity = 1;
    }, 500); // Wait for 0.5 second before opening
});


