export function validate(userData){
    let errors = {};                

    if(!userData.email){
        errors.email = "Ingrese un email";
    }
	if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email = "Email invalido";
    }
    if(userData.email.length >= 35){
        errors.email = "Demasiados caracteres";
    }
    if(!/\d/.test(userData.password)){
        errors.password = "Password must contain minimun a letter";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Password must be between 6 to 10 characters"
    }
    return errors;
};