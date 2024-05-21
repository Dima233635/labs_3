// const login = prompt("Enter your login:");

// if (login === "Admin") {
//     const password = prompt("Enter your password:");

//     if (password === "TheMaster") {
//         alert("Welcome!");
//     } else if (password === "" || password === null) {
//         alert("Canceled.");
//     } else {
//         alert("Wrong password");
//     }
// } else if (login === "" || login === null) {
//     alert("Canceled.");
// } else {
//     alert("I don't know you");
// }



const login = prompt("Who's there?")

if(login === "Admin") {
    const password = prompt("Password?");

    if (password === "TheMaster") {
        alert('Welcome!')
    } 
    
    else if(password === "" || password === null)  {
         alert("Canceled");
    }
       

    else {
        alert('Wrong password');
    }
    

}
else if(login === "" || login === null) {
    alert('Cenceled')
}
else {
    alert('I don`t know you')
}