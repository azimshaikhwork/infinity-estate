export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.message = message;
    error.statusCode = statusCode;
    console.log('this is from errorHandler', error.message);
    return error;
}

/*we are using this to create error when there is none but we need to show that there was an error actually*/