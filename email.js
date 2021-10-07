function emailValidator(email){
    let emailRegex = RegExp("([a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9])(([+-_.][a-zA-Z0-9]*)?)(@[a-zA-Z0-9]*)[.]([a-z]{2,})(([.][a-zA-z]{2})?)");
    if(emailRegex.test(email))
        console.log("Valid");
    else throw 'email is not valid';
}

let emailArr = new Array();
emailArr.push("abc_");
emailArr.push("arp@gmail")
emailArr.push("arp@gmail.com")
emailArr.push("arp.xyz@gmail.com")
emailArr.push("arp.xa_@gmail.com.in")
emailArr.forEach(element => {
    try{
        emailValidator(element);
    }catch(e){
        console.error(e);
    }
});
console.log("--------------");
let emailArray = new Array ( "abc@bridgelabz.co.in",  "abc@gmail.com.com","abc@yahoo.com",  "abc@1.com","abc-100@yahoo.com",
 "abc.100@yahoo.com","abc111@abc.com","abc-100@abc.net","abc.100@abc.com.au","abc+100@gmail.com",
 ".abc@abc.com", "abc", "abc@.com.my","abc@abc@gmail.com","abc()*@gmail.com","abc..2002@gmail.com","abc.@gmail.com",
 "abc123@.com","abc123@.com.com","abc123@gmail.a","abc@%*.com",".abc@gmail.com.aa.au" );
 emailArray.forEach(element => {
    try{
        emailValidator(element);
    }catch(e){
        console.error(e);
    }
});