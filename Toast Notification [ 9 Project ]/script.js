let toastBox = document.querySelector(".toastBox");

let SuccessMsg = "Successfully submitted";
let errorMsg = "Please fix the error!";
let invalidMsg = "Invalid input, check again";

let SuccessImg = "images/correct icon.png";
let errorImg = "images/incorrect icon.png";
let invalidImg = "images/invalid icon.png"


function showToast(message,images){
    let toast = document.createElement("div");
    let img = document.createElement("img");
    toast.classList.add("toast");
    img.classList.add("img1");
    img.src = images;
    toast.innerHTML = message;
    toastBox.appendChild(toast);
    toast.appendChild(img);

    setTimeout(()=>{
        toast.remove()
    },5000);
}