var email="info@rampex.in";
var pass="123456";
var useremail="inframpex.in";
var userpass="123456";

if(useremail===email){
    if(userpass===pass){
        console.log("Login Successfully");
    }
    else{
        console.log("Password is incorrect");
    }
}
else{
    console.log("Email is not valid");
}