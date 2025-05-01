// Contact form send button functionality

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const contactInput = document.getElementById("contactInput");
const messageInput = document.getElementById("textArea");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const username = nameInput.value.trim();
  const email = emailInput.value.trim();
  const contact = contactInput.value.trim();
  const message = messageInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^[0-9]{10}$/;

  if (!username) {
    alert("Name is required.");
    nameInput.focus();
    return;
  }

  if (!email) {
    alert("Email is required.");
    emailInput.focus();
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  if (!contact) {
    alert("Contact number is required.");
    contactInput.focus();
    return;
  }

  if (!contactRegex.test(contact)) {
    alert("Please enter a valid 10-digit contact number.");
    contactInput.focus();
    return;
  }

  if (!message) {
    alert("Please type in your message.");
    messageInput.focus();
    return;
  }

  alert("Thanks! We will reach out to you soon!");

  // Clear input fields after successful submission
  nameInput.value = "";
  emailInput.value = "";
  contactInput.value = "";
  messageInput.value = "";
});
