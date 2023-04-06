import { NextFunction, Request, Response, Router } from 'express';
import { catchErrors } from '../../utilities/api/catchErrors';
import * as fromUseCases from './useCases';

const router: Router = Router();

/**
 * QUERY
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
const query = catchErrors(async (
    req: Request,
    res: Response,
): Promise<any> => {
    const response = await fromUseCases.query(req.query);

    return res.status(200).json(response);
})

router.get('/', query);

export default router;
