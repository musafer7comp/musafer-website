

var back=document.getElementById("backtotop");
(window).scroll(function () {
    if ((this).scrollTop() > 100) {
        back.fadeIn('slow');
    } else {
        back.fadeOut('slow');
    }
});
back.click(function () {
    ('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});


/* validation form function*/
/*
function submit(){
    var npattern=/[A-Za-z]{3,}/;
    var name=document.getElementById("name").value;
    var empattern= /[A-Z][a-z0-9_.]+@[a-z]+.com/;
    var em=document.getElementById("email").value;
    var phpattern= /\d{10,15}/g;
    var ph=document.getElementById("phone").value;
if (npattern.test(name)==true && phpattern.test(ph)==true && empattern.test(em)==true){
    document.getElementById("sign-up").href="";    
}
else  
{   
    
if (npattern.test(name)==false){
    console.log(false);
        document.getElementById("invalid-name").style.display="block";
        document.getElementById("sign-up").href="#";    
} 
else {
    document.getElementById("invalid-name").style.display="none";
            if (empattern.test(em)==false){
                document.getElementById("invalid-email").style.display="block";
                document.getElementById("sign-up").href="#";
            }
            else {
                document.getElementById("invalid-email").style.display="none";
                    if (phpattern.test(ph)==false){
                        document.getElementById("invalid-phone").style.display="block";
                        document.getElementById("sign-up").href="#";
                    }
                    else{
                        document.getElementById("invalid-phone").style.display="none";

                    }
                }
            }
        }
}
    

*/

