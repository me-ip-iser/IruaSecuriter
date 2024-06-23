document.addEventListener("DOMContentLoaded", ()=> {
    let logo  = document.getElementById("logo");
    localStorage.getItem("PIN?")
    if(localStorage.getItem("PIN?")) {
        console.warn("Pin Accessed Succesfully !" + localStorage.getItem("PIN?"))
    }
    else {window.location.href = "../isPIN/Pin.html"}

    setTimeout(() => {
        
        logo.style.marginTop = "40px"
        logo.style.marginLeft = "1600px"
        logo.style.rotate = "360deg"
        logo.style.height = "40px"
        logo.style.transition = "all 2s ease-out"

    }, 1000);
})
function deco() {
    localStorage.clear("ACC?")
    localStorage.clear("Name");
    localStorage.clear("Password");
    localStorage.clear("PIN?")
}
