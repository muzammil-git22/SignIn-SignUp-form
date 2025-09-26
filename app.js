class User {
    constructor(firstName, LastName,email,password){
        this.firstName = firstName,
        this.LastName = LastName,
        this.email = email,
        this.password = password
    }
}
class SignUser {
    constructor(email,password){
        this.email = email,
        this.password = password
    }
}

let users = []
function Formsubmit(event){
  event.preventDefault();
    let loginSuccess = false;
  let firstName = document.getElementById("firstName");
  let LastName = document.getElementById("lastName");
    let email = document.getElementById("email");
  let password = document.getElementById("password");

let user = new User(firstName.value,LastName.value,email.value,password.value)
users.push(user)
localStorage.setItem("User",JSON.stringify(users))
if(firstName.value === "" || LastName.value === "" || email.value === "" || password.value === ""){
    alert("Invalid email or password");
    return
}
for (let i = 0; i < users.length; i++) {
  if (users[i].firstName === firstName.value && users[i].LastName === LastName.value && users[i].email=== email.value  && users[i].password=== password.value ) {
    loginSuccess = true;
    break;
  }
}
if (loginSuccess) {
  alert("Login successful");
}
console.log(users)
firstName.value = ""
LastName.value = ""
email.value = ""
password.value = ""
}

function SignIn(event){
  event.preventDefault();
    let loginSuccess = false;
    let email = document.getElementById("email");
  let password = document.getElementById("password");

let user = new SignUser(email.value,password.value)
users.push(user)
localStorage.setItem("User",JSON.stringify(users))
if( email.value === "" || password.value === ""){
    alert("Invalid email or password");
    return
}
for (let i = 0; i < users.length; i++) {
  if (users[i].email === email.value && users[i].password === password.value) {
    loginSuccess = true;
    break;
  }
}
if (loginSuccess) {
  alert("Login successful");
}
console.log(users)
email.value = ""
password.value = ""
}
