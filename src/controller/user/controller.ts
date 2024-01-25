import { Request, Response } from 'express';
import { UserRepository } from 'src/utils/repository';
import { ErrorMessage, SuccessMessage } from 'src/utils/response';

export const get = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await UserRepository.findOne({ where: email });

    if (!user) {
      return ErrorMessage({ res, message: 'User not found' });
    }

    user.firstName = firstName;
    user.lastName = lastName;

    await UserRepository.save(user);

    return SuccessMessage({ res, message: 'User successfully updated' });
  } catch (error) {
    return ErrorMessage({ res, message: error?.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await UserRepository.findOne({ where: email });

    if (!user) {
      return ErrorMessage({ res, message: 'User not found' });
    }

    user.firstName = firstName;
    user.lastName = lastName;

    await UserRepository.save(user);

    return SuccessMessage({ res, message: 'User successfully updated' });
  } catch (error) {
    return ErrorMessage({ res, message: error?.message });
  }
};
