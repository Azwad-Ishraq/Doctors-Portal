


const errorGeneretor = (errorMsg) => {
    let error;
    if (errorMsg === 'Firebase: Error (auth/popup-closed-by-user).') {
        error = '' 
    }
    else if(errorMsg === 'Firebase: Error (auth/user-not-found).'){
        error = 'User Not Found'
    } else if(errorMsg === 'Firebase: Error (auth/wrong-password).'){
        error = 'Wrong Password'
    }
    else{
        error='Something went wrong!Try agian'
    }




    return error;

}



export default errorGeneretor;