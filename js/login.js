const form = document.querySelector("form");
form.addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.querySelector("[name='username']");
    const email = document.querySelector("[name= 'email']");
    const password = document.querySelector("[name= 'password']");
    const confirmpassword = document.querySelector("[name= 'confirm-password']");
  
    const errors = [];
    if (username.value === "" || username.value == null)
      alert("Username can't be blank");
    if (email.value === "" || email.value == null)
      alert("Email can't be blank");
    if (password.value === "" || password.value == null)
      alert("Password can't be blank");
    if (password.value !== confirmpassword.value)
      alert("passwords must match");
});