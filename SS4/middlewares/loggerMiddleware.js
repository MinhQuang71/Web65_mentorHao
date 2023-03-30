const loggerMiddleware = (req, res, next) =>{
    console.log('request');
    next()
}

export default loggerMiddleware;