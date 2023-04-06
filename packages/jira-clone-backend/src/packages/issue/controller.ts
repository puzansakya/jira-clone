import { Request, Response, Router } from 'express';
import { catchErrors } from '../../utilities/api/catchErrors';
import Issue from './domain/issue';
import * as fromUseCases from './useCases';

const router: Router = Router();


/**
 * QUERY
 * @param req 
 * @param res 
 * @returns 
 */
const query = catchErrors(async (
    req: Request,
    res: Response,
): Promise<any> => {
    const response = await fromUseCases.query(req.query);

    return res.status(200).json(response);
})

/**
 * UPDATE
 * @param req 
 * @param res 
 * @returns 
 */
const update = catchErrors(async (
    req: Request,
    res: Response,
): Promise<any> => {
    const response = await fromUseCases.update(req.body);

    return res.status(200).json(response);
})

router.get('/', query);
router.put('/', update);

export default router;
