import { Request, Response } from 'express';
import { ErrorMessage, SuccessMessage } from '../../utils/response';
import { UserRepository } from '../../utils/repository';

export const AllUser = async (_req: Request, res: Response) => {
  try {
    const user = await UserRepository.find();
    return SuccessMessage({ res, message: 'User list', data: user });
  } catch (error) {
    return ErrorMessage({ res, message: error?.message });
  }
};
