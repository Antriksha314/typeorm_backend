/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const KEY = process.env.SECRET_KEY || '';

export const isJwtPayload = (data: any): data is JwtPayload => {
  return (data as JwtPayload)?.iat !== undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function verifyToken(req: Request, _res: Response) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return Promise.reject('Login is required');
    }
    const bearer = authorization.split(' ');
    const bearerToken = bearer[1];

    const token = await jwt.verify(bearerToken, KEY);
    return token;
  } catch (e) {
    return Promise.reject(e);
  }
}

export const Protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await verifyToken(req, res);
    return next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: error,
    });
  }
};

export const hasRole = (role: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await verifyToken(req, res);
      if (isJwtPayload(data) && data?.roles?.includes(role)) return next();
      return data;
    } catch (error) {
      return res.status(403).json({
        success: false,
        message: 'Something went wrong! Please login again',
      });
    }
  };
};
