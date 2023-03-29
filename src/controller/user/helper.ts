import bcrypt from "bcrypt"

export const GenerateBcryptPassword = async ({ password }: { password: string }) => {
    try {
        const hashPassword = await bcrypt.hash(password, process.env.BCRYPT_SALT_ROUNDS);
        return hashPassword
    } catch (error) {
        return error
    }
}

export const PasswordCheck = async ({ password, dbPassword }: { password: string, dbPassword: string }) => {
    try {
        const isMatch = await bcrypt.compare(password, dbPassword);
        return isMatch
    } catch (error) {
        return error
    }
}