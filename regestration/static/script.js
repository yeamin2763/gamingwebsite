
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"c9c0677164a9794061b225b9823b472d","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */


const showPassword1 = document.querySelector("#show-password1");
const passwordField1 = document.querySelector("#password1");
showPassword1.addEventListener("click",function()
{
    this.classList.toggle("fa-eye-slash");
    const type = passwordField1.getAttribute("type") === "password" ? "text" : "password";
    passwordField1.setAttribute("type", type);
});

const showPassword2 = document.querySelector("#show-password2");
const passwordField2 = document.querySelector("#password2");
showPassword2.addEventListener("click",function()
{
    this.classList.toggle("fa-eye-slash");
    const type = passwordField2.getAttribute("type") === "password" ? "text" : "password";
    passwordField2.setAttribute("type", type);
});










