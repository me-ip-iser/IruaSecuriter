let show = 0;
let account = "false";
let rotate = 0;
document.addEventListener("DOMContentLoaded", ()=> {
    localStorage.getItem("ACC?");
    if (localStorage.getItem("ACC?") === "true") {
        window.location.href = "./Home/home.html"
    }

    let logo = document.getElementById("logo");
    setTimeout(() => {
        logo.style.marginTop = "20px";
        logo.style.height = "100px"
        logo.style.transition = "all 0.5s ease-in-out"
    }, 1000);
})
function showPass() {
    let pass = document.getElementById("pass");
    let eye = document.getElementById("eye");
    if (show === 0) {
        pass.type = "text"
        show = 1;
        eye.src = "https://cdn-icons-png.flaticon.com/128/2767/2767146.png"
    }
    else {
        pass.type = "password"
        show = 0;
        eye.src = "https://cdn-icons-png.flaticon.com/128/11502/11502607.png"
    } 
}   
function connect() {
    let nameInput  = document.getElementById("name");
    let passInput  = document.getElementById("pass");
    let error = document.getElementById("errText")

    if (nameInput.value === "" || passInput.value === "") {
        error.innerHTML = "Toutes les informations necessaire sont requise !"
        let logo = document.getElementById("logo");
        if (rotate === 0) {
            logo.style.rotate = "360deg"
            logo.style.transition = "all 500ms ease-in-out"
            rotate = 1;
        }
        else {
            logo.style.rotate = "-360deg"
            rotate = 0;
        }
        setTimeout(() => {
            error.innerHTML = ""
        }, 5000);
    }
    else {
        account = "true";
        let time = Math.floor(Math.random()*30000*Math.PI)
        console.log(time);
        let logo = document.getElementById("logo")
        console.warn(nameInput.value + " is the Name, " + passInput.value + " is Password");
        console.warn("If you are reading this your are probably the dev, Ahmed. If you're not the dev pls refrain from letting anyone, nor anything be written here, only devs know waht thrire doing !")
        localStorage.setItem("Name", nameInput.value);
        localStorage.setItem("Password", passInput.value);
        error.innerHTML = `Bonjour, ${nameInput.value}, Connection au Routeur Wifi ! :)` + "<br>" + "Cela peut dependre de votre connection internet !" + "<br>" + "Ce system de Securite develloper par Ahmed Moumin !"
        error.style.color = "green"
        logo.style.animation = "loading 2s infinite linear"
        localStorage.setItem("ACC?", account)
        setTimeout(() => {
            window.location.href = "./Home/home.html"
        }, time);
    }
}
function deco() {
    localStorage.clear("ACC?")
    localStorage.clear("Name");
    localStorage.clear("Password");
    localStorage.clear("PIN?")
}