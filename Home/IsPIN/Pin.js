let show = 0;
function showPass() {

    let pass = document.getElementById("PIN");
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

function AdressPIN() {
    let pin  = document.getElementById("PIN");
    let text = document.getElementById("text");

    if (pin.value === "") {
        
        text.style.color = "red";
        text.style.animation = "shake 1s linear"

        setTimeout(() => {
            
            text.style.color = "black"
            text.style.animation = "none"

        }, 1000);

    }
    else {
    localStorage.setItem("PIN?", PIN.value)
    alert("Vous allez maintenet devoir entrer votre PIN a cacque rencontre !")
    setTimeout(() => {
        window.location.href = "../home.html"
    }, 500);    
    }

}