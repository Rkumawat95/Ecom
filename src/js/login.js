let form = document.getElementById("login");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation()
})

function validation(){
    let mail = email.value.trim();
    let pass = password.value.trim();

    let obj = localStorage.getItem(mail);

    let check = document.getElementById("check");

    if(obj === null){
        check.innerHTML = "You dont have account. please create new account!"
    }
    else{
        let data = JSON.parse(obj);
        if(data.Email === mail && data.Password === pass){
            location.replace(`/src/index.html?${data.Name}?${data.Email}`);
        }
        else{
            check.innerHTML = "Username or password incorrect!"
        }
    }
}
