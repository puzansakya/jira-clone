// import { roles } from "../../model";
import { wrapMessage } from "./wrapMessage";

// check if user is admin
export const checkAdmin = (req, res, next) => {

    // const { role } = req.get('Authorization');
    // if (role === roles.SUPER_ADMIN || role === roles.ADMIN) {
    //     return next()
    // }

    // return res.status(403).json(wrapMessage('forbidden'))
}
