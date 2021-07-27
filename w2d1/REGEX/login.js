// window.onload = function () {
//     let submit = document.getElementById("sbmt");
//     submit.onclick.validate();
//     function validate() {
//     let eml= document.getElementById("eml");
//     let psw = document.getElementById("psswd");
//         let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{10})$/;
//         if (psw.value.match(regex)) {
//             window.location("productForm.html");
//         }
//         else {
//             alert("Enter the Required fields!")
//         }
//     }


// }
function validate(form){
    if(FormData.password.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{10})$/)){
        window.location("productForm.html");

    }
}