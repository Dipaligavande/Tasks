const validation=(reset)=>{
    let errors={};

    
    if(!reset.password){
        errors.password="Password is Required";
    }else if(reset.password.length<8){
        errors.password="Password have atleast 8 characters";
    }
    return errors;
}
export default validation;