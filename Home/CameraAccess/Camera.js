function pin() {
    let Pininput = document.getElementById("PIN").value; // Get the value of the input field
    let storedPIN = localStorage.getItem("PIN?"); // Get the stored PIN from local storage
    
    if (Pininput === storedPIN) { // Compare the input PIN with the stored PIN
        cam(); // Call the cam function
        let IMG = document.getElementById("img");
        console.log("good");
        IMG.src = "https://cdn-icons-png.flaticon.com/128/327/327620.png";
    }
}
function cam() {
    IMG.src = "https://cdn-icons-png.flaticon.com/128/327/327620.png"
    let video   = document.getElementById("CameraRec");
    navigator.mediaDevices.getUserMedia({
        audio:false,
        video:true,
    }).then( stream =>{
        setTimeout(() => {
            video.srcObject = stream;
            video.style.animation = "intro 3s ease-out"
            document.getElementById("CameraRec").style.display = "block"
        }, 2000);
    }).catch(console.error())
}


// Assuming cam function is defined somewhere in your code
function cam() {
    let video   = document.getElementById("CameraRec");
    navigator.mediaDevices.getUserMedia({
        audio:false,
        video:true,
    }).then( stream =>{
        setTimeout(() => {
            video.srcObject = stream;
            video.style.animation = "intro 3s ease-out"
            document.getElementById("CameraRec").style.display = "block"
        }, 2000);
    }).catch(console.error())

}
