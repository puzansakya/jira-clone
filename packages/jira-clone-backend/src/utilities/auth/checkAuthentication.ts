import { wrapMessage } from "./wrapMessage";

// check if token is present
export const checkAuthentication = (req, res, next) => {

    const authorization = req.get('Authorization');
    if (authorization) {
        return next()
    }
    return res.status(403).json(wrapMessage('forbidden'))

}
