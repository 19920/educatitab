const Validation =(value,rules)=>{
    let valid = true;
   for(let rule in rules){
       switch(rule){
           case 'isRequred':
           valid = valid && ValidateRequired(value)
           break;
           case 'minLength':
           valid = valid && ValidateMinLength(value,rules[rule])
           break;
           case 'maxLength':
           valid = valid && ValidateMaxLength(value,rules[rule])
           break;
           default:
           return valid
       }
   }
   return valid
}
const ValidateRequired =value=>{
    if(value != ''){
        return true
    }
    return false;
    
}

const ValidateMinLength =(value,rule)=>{
    if(value.length>=rule){
        return true
    }
    return false
}
const ValidateMaxLength =(value,rule)=>{
    if(value.length>rule){
        return alert('personnumber must be only 10 digits')

    }
    return true
}
export default Validation;