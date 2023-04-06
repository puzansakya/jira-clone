// import { roles as _roles } from "../../model";
// import { wrapMessage } from "./wrapMessage";

// import * as jwt from 'jsonwebtoken';

// export const checkAuthorization = (req, res, next, { allowedClaims }) => {
//     try {
//         const authorizationHeader = req.get('Authorization').split(" ");

//         if (authorizationHeader[0] !== "Bearer") {
//             return res.status(403).json(wrapMessage("Forbidden"))
//         }

//         const token = authorizationHeader[1];

//         console.log('token', token)

//         const { data: { roles, claims }, err }: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);


//         if (roles.includes(_roles.SUPER_ADMIN) || roles.includes(_roles.ADMIN)) {
//             return next()
//         }

//         if (allowedClaims?.length === 0 || allowedClaims.some(claim => claims.includes(claim))) {
//             return next()
//         }
//         return res.status(403).json(wrapMessage("Forbidden"))
//     } catch (err) {
//         return res.status(403).json(wrapMessage(err.message))
//     }

// }

export { }