function sendmail(){
    var paramas = {
        name : document.getElementById("name").value,
        em : document.getElementById("em").value,
        tel : document.getElementById("tel").value,
        msg : document.getElementById("msg").value,
    };
const service = "service_wedxpv4";
const template = "template_ppsvqoh"
emailjs.send(service,template,paramas)
.then(
    res=>{
        document.getElementById("em").value = ""
        document.getElementById("name").value = ""
        document.getElementById("tel").value = ""
        document.getElementById("msg").value = ""
        console.log(res);
        alert("your message sent successfuly");

    }
)
.catch(err => console.log(err));
}
