import * as _ from 'lodash';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';
import { Console } from 'console';

/**
 * CHECK IF PASSWORD IS VALID PASSWORD
 * @param password
 * @param password_digest
 * @returns
 */
export const is_password_valid = async (
  password: string,
  password_digest: string
) => {
  console.log(password, password_digest);
  return bcrypt.compare(password, password_digest);
};

/**
 * ENCODE WITH SECRET
 * @param payload
 * @returns
 */
export const encode_jwt = async (payload: any, secret: string, expiry: any) => {
  return jwt.sign(
    {
      // exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: payload,
    },
    secret,
    { expiresIn: expiry }
  );
};

/**
 * HASH STING OR PASSWORD
 * @param password
 * @returns
 */
export const hash = async (password: string) => {
  const saltRounds = 10;

  return bcrypt.hash(password, saltRounds);
};

/**
 * IGNORE IF NO HEADER ELSE PROCESS ONWARD
 * @param _req
 * @param _res
 * @param _next
 * @returns
 */
export const check_auth_allowable = async (
  _req: any,
  _res: Response,
  _next: NextFunction
) => {
  const header = _req.headers.authorization as string;

  if (!header) {
    console.log('no header');
    return _next();
  }
  try {
    const token = header.split(' ')[1];
    const payload = await jwt.verify(token, 'secret');
    _req['user'] = payload;
    return _next();
  } catch (err) {
    console.log(err);
    return _next();
  }
};

/**
 * CHECK IF AUTHORIZATION IS PROVIDED
 * PERFORMED BEFORE CHECK_ROLE
 * @param _req
 * @param _res
 * @param _next
 * @returns
 */
export const check_auth = async (
  _req: any,
  _res: Response,
  _next: NextFunction
) => {
  const header = _req.headers.authorization as string;

  if (!header) {
    console.log('no header');
    return _next({ status: 400, message: 'unauthorized' });
  }
  try {
    const token = header.split(' ')[1];
    const payload = await jwt.verify(token, 'secret');
    _req['user'] = payload;
    return _next();
  } catch (err) {
    console.log(err);
    return _next();
  }
};

/**
 * CHECK IF ROLE IS PROVIDED
 * PERFORMED AFTER CHECK_AUTH
 * @param permitted_single_role
 * @param _req
 * @param _res
 * @param _next
 * @returns
 */
export const check_role = async (
  permitted_single_role: string,
  _req: any,
  _res: Response,
  _next: NextFunction
) => {
  const payload = _req['user'];
  if (permitted_single_role.localeCompare(payload.data.role.role) !== 0) {
    console.log(payload);
    console.log('no permission');
    return _next({ status: 400, message: 'unauthorized' });
  }

  _next();
};

/**
 * NOT FOUND
 * @param req
 * @param res
 * @param next
 */
export const not_found = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: 'not found',
  });
};

/**
 * SYSTEMWISE ERROR HANDLER
 * @param error
 * @param req
 * @param res
 * @param next
 */
export const global_system_error_handler = (
  error: { status: number; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error?.status || 404);
  console.log(error);
  res.json(
    // error.message ||
    'Oops! Something went wrong.'
  );
};

/**
 * LOG RESPONSE BODY
 * @param _req
 * @param _res
 * @param _next
 */
export const log_response_body = (
  _req: any,
  _res: Response,
  _next: NextFunction
) => {
  if (_req.body) {
    console.log(_req.body);
  }
  _next();
};
