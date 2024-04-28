var comingSoonTitleText = "WE'RE";
var comingSoonTitleColor = "#be9498";
var informationParagraphText = "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.";

var comingSoonTitle = document.getElementById("comingSoonTitle");
comingSoonTitle.innerHTML = '<span style="color: ' + comingSoonTitleColor + ';">' + comingSoonTitleText + '</span> COMING SOON';
var informationParagraph = document.getElementById("informationParagraph");
informationParagraph.textContent = informationParagraphText;

function validateEmail() {
    var emailInput = document.getElementById("emailInput");
    var validationIcon = document.getElementById("validationIcon");
    var invalidEmailMessage = document.querySelector(".invalid-email");

    if (!emailInput.checkValidity()) {
        validationIcon.style.display = "block"; // Show the exclamation mark
        emailInput.style.outline = "2px solid red"; // Adding red outline
        invalidEmailMessage.style.display = "block"; // Display invalid email message
    } else {
        validationIcon.style.display = "none"; // Hide the exclamation mark
        emailInput.style.outline = "none"; // Removing outline if email is valid
        invalidEmailMessage.style.display = "none"; // Hide invalid email message
    }
}