
import gradient from 'gradient-string';

const requestLogger = (req, res, next) => {
    console.log(gradient.rainbow(`${req.method} ${req.path}`));
    // console.log(JSON.stringify(req.headers));
    next();
}

export default requestLogger;