
const validation=(values)=>{
    let errors={};

    if(!values.email){
        errors.email="Email is required";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Invalid Email";
    }
    if(!values.password){
        errors.password="Password is Required";
    }else if(values.password.length<8){
        errors.password="Password have atleast 8 characters";
    }
    return errors;
}
export default validation;