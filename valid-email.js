function validEmail( email ) {
  if(typeof (email) !== "string"){
    return false;
  }
  if(email[0] === "." || email[0] === "-" || email[0] === "_" || email[0] === "@" || email[0] === "+" || email[0] === "!" || email[0] === "#" || email[0] === "$"  || email[0] === "%" || email[0] === "^"  || email[0] === "&" || email[0] === "*"){
    return false;
  }
  if(email.includes(" ")){
    return false;
  }
  if(!email.endsWith(".com")){
    return false;
  }
  const atSplit = email.split("@");
  if(atSplit.length !== 2 && !atSplit[1]){
    return false;
  }
  else{
    return true;
  }
}
