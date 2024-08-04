let form = document.getElementById("signup");
let uname = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation()
})

function validation(){
    let name = uname.value.trim();
    let mail = email.value.trim();
    let pass = password.value.trim();

    let username = {"Name":name, "Email":mail, "Password":pass};
    let check = localStorage.getItem(username.Email);
    
    if(check === null){
        let data = JSON.stringify(username);
        localStorage.setItem(`${mail}`,data);
        location.replace("/src/login.html");
    }
    else{
        let t1 = document.getElementById("check");
        t1.innerHTML = "User is already present, Please LogIn.";
    }

}