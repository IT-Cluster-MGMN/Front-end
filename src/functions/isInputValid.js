function isInputValid(value, regex, isOptional){
    if(value === '' && isOptional){
        return true;
    }
    else{
        return regex.test(value);
    }
}

export default isInputValid