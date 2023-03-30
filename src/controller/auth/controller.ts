import { GenerateBcryptPassword, MatchBcryptPassword } from './helper';
import { Request, Response } from 'express';
import { UserRepository } from '../../utils/repository';
import { CXN } from '../../typeorm/data-source';
import { User } from '../../typeorm/entity/user';
import { ErrorMessage, SuccessMessage } from '../../utils/response';
import { GenerateAccessToken, GenerateRefreshToken } from '../../utils/token';
import { Session } from '../../typeorm/entity/session';

export const singUp = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await UserRepository.findOne({ where: email });
    if (user) {
      return ErrorMessage({ res, message: 'User already exists' });
    }

    const create = new User();
    create.firstName = firstName;
    create.lastName = lastName;
    create.email = email;
    create.password = await GenerateBcryptPassword({ password });

    await CXN.manager.save(create);

    return SuccessMessage({ res, message: 'User successfully registered' });
  } catch (error) {
    return ErrorMessage({ res, message: error?.message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserRepository.findOne({ where: email });

    if (!user) {
      return ErrorMessage({ res, message: 'User not found' });
    }

    const isMatch = await MatchBcryptPassword({ password, dbPassword: user.password });
    if (!isMatch) {
      return ErrorMessage({ res, message: 'Please provid valid password' });
    }

    const accessToken = await GenerateAccessToken({ email: user.email });
    const refreshToken = await GenerateRefreshToken({ email: user.email });

    const session = new Session();
    session.accessToken = accessToken;
    session.refreshToken = refreshToken;

    return SuccessMessage({ res, message: 'User successfully updated' });
  } catch (error) {
    return ErrorMessage({ res, message: error?.message });
  }
};
