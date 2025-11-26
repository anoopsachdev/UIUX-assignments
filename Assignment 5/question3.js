let button = document.getElementById('submit');

button.addEventListener("click", function(event){
    event.preventDefault();
    let flag = 1;
    let name = document.getElementById('name').value;
    let email = document.querySelector('#email').value;
    let age = document.getElementById('age').value;
    if (name == ""){
        alert("Please enter your name")
        flag = 0;
    }
    else if (!email.includes("@") || !email.includes(".")){
        alert("Invalid email, please enter again")
        flag = 0;
    }
    else if (age > 100 || age < 18){
        alert("Sorry, age must be 18 or above")
        flag = 0;
    }
    if (flag == 1){
        document.getElementById("container").innerText = "name: " + name + "\nemail: " + email + "\nage: "+ age;
    }
})


// When you use a <form> with a <button type="submit">, the default action of the browser is:
// Refresh the page
// Try to send data to the server (based on action="")
