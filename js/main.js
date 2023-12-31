let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
}
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

//Email
function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(name.value == ""|| email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}

validate();

function sendmail(name, email, msg){
    emailjs.send("service_mkhx8og","template_6b2ox8l",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "No es posible enviar!",
        text: "Campos Vacíos",
        icon: "error",
    });
}

function success(){
    swal({
        title: "Enviado!",
        text: "Envia otro más tarde",
        icon: "success",
    });
}

//Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", ()=> {
    header.classList.toggle("header-active", window.scrollY > 0)
})

//Scroll top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", ()=> {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
})