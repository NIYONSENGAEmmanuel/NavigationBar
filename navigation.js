document.addEventListener("DOMContentLoaded",()=>{
    const headerElement =document.querySelector("header");
    headerElement.innerHTML=`
    <nav>
        <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDINS-tdhEipsOFa4WoZNdu4kqK9n2grSMIA&s" alt="test">
        <a href="index.html">Home</a>
        <a href="contact_form.html">contact</a>
        <a href="service.html">Service</a>
        <a href="login.html">Login</a>
    </nav>
    `
})