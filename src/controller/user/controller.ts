import { UserRepository } from "utils/repository";
import { ErrorMessage } from "utils/response";

export const create = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await UserRepository.findOne({ where: email });
        if (user) {
            return ErrorMessage({ res, message: "User already exists" })
        };


    } catch (error) {
        return ErrorMessage({ res, message: error?.message })
    }

}