import { Response } from "express";
import { CXN } from "typeorm/data-source";
import { Session } from "typeorm/entities/session";
import { User } from "typeorm/entities/user";
import { UserRepository } from "utils/repository";
import { ErrorMessage, SuccessMessage } from "utils/response";
import { GenerateAccessToken, GenerateRefreshToken } from "utils/token";
import { GenerateBcryptPassword, PasswordCheck } from "./helper";

export const singUp = async (req: any, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await UserRepository.findOne({ where: email });
        if (user) {
            return ErrorMessage({ res, message: "User already exists" })
        };

        const create = new User();
        create.firstName = firstName
        create.lastName = lastName
        create.email = email
        create.password = await GenerateBcryptPassword({ password })

        await CXN.manager.save(create)

        return SuccessMessage({ res, message: "User successfully registered" })

    } catch (error) {
        return ErrorMessage({ res, message: error?.message })
    }

}

export const signIn = async (req: any, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await UserRepository.findOne({ where: email });

        if (!user) {
            return ErrorMessage({ res, message: "User not found" })
        }

        const isMatch = await PasswordCheck({ password, dbPassword: user.password });
        if (!isMatch) {
            return ErrorMessage({ res, message: "Please provid valid password" })
        }
        
        const accessToken = await GenerateAccessToken({ email: user.email });
        const refreshToken = await GenerateRefreshToken({ email: user.email });

        const session  = new Session();
        session.accessToken =  accessToken;
        session.refreshToken = refreshToken;
        
        return SuccessMessage({ res, message: "User successfully updated" })
    } catch (error) {
        return ErrorMessage({ res, message: error?.message })

    }
}

export const update = async (req: any, res: Response) => {
    try {
        const { firstName, lastName, email } = req.body
        const user = await UserRepository.findOne({ where: email });

        if (!user) {
            return ErrorMessage({ res, message: "User not found" })
        }

        user.firstName = firstName
        user.lastName = lastName

        await UserRepository.save(user)

        return SuccessMessage({ res, message: "User successfully updated" })
    } catch (error) {
        return ErrorMessage({ res, message: error?.message })

    }
}


