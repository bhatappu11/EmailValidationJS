function emailValidator(email){
    let emailRegex = RegExp("[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]");
    if(emailRegex.test(email))
        console.log("Valid");
    else throw 'email is not valid';
}

let emailArr = new Array();
emailArr.push("abc_");
emailArr.forEach(element => {
    try{
        emailValidator(element);
    }catch(e){
        console.error(e);
    }
});