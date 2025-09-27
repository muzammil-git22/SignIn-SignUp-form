class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

let users = JSON.parse(localStorage.getItem("User")) || [];
function Formsubmit(event) {
  event.preventDefault();
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let savedData = JSON.parse(localStorage.getItem("User")) || [];
  let resuilt = savedData.find(
    (element) =>
      element.firstName === firstName.value && element.lastName === lastName.value && element.email === email.value && element.password === password.value
  );
  if (resuilt) {
    alert("User already exists");
  } else {
    let user = new User(
      firstName.value,
      lastName.value,
      email.value,
      password.value
    );
    users.push(user);
    localStorage.setItem("User", JSON.stringify(users));
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";

    alert("User added successfully");
  }
}


function SignIn(event) {
  event.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let savedData = JSON.parse(localStorage.getItem("User")) || [];
  let resuilt = savedData.find(
    (element) =>
      element.email === email.value && element.password === password.value
  );
  if (resuilt) {
    alert("login successfully");
    localStorage.setItem("logedInUser", JSON.stringify(resuilt))
  } else {
 alert("Invalid email or password");
  }

  email.value = ""
  password.value = ""
}
