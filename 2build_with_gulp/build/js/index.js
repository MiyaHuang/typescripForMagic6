function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Miya", lastname: "User" };
document.body.innerHTML = greeter(user);
