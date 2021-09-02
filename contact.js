document.getElementById("send").addEventListener('click', (params) => {
    var em = document.getElementById("email");
    var na = document.getElementById("name");
    var msg = document.getElementById("msg");
    var emailPars = {
        from_email: document.getElementById("email").value,
        from_name: document.getElementById("name").value,
        message: document.getElementById("msg").value
    };


    if (em.value== "" || na.value== "" || msg.value == "") {
        alert("please fill all fields");
        return false;
    } else {
        emailjs.send('service_onlgq3k', 'template_hzqq8rb', emailPars)
            .then(function(res) {
                console.log('Success', res.status);
                alert("Message sending done");
            });
            return true;
    }
});