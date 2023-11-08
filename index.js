
const inputEl = document.getElementById("email-input-id");
const errorMsg = document.getElementById("error-msg");
const errorLogo = document.getElementById("error-sign-logo");

let mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



function checker() {
  if (inputEl.value.match(mailRegex)) {
    errorMsg.style.display = "none";
    inputEl.style.borderColor = "initial";
    inputEl.style.color = "initial";
    inputEl.style.background = "initial";
    errorLogo.style.display = "none";
  } else if (inputEl.value === "") {
    errorMsg.style.display = "none";
    inputEl.style.borderColor = "initial";
    inputEl.style.color = "initial";
    inputEl.style.background = "initial";
    errorLogo.style.display = "none";
  } else {
    errorMsg.style.display = "block";
    inputEl.style.borderColor = "hsl(0, 93%, 68%)";
    inputEl.style.color = "hsl(0, 0%, 0%)";
    inputEl.style.background = "hsl(0, 0%, 100%)";
    errorLogo.style.display = "block";
  }
}


inputEl.addEventListener('focus', function() {
  this.style.borderColor = 'hsl(0, 93%, 68%)'; 
});

inputEl.addEventListener('blur', function() {
  this.style.borderColor = 'hsl(0, 36%, 70%)'; 
});