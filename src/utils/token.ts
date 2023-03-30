import * as jwt from 'jsonwebtoken';

export const GenerateAccessToken = async ({ email }: { email: string }) => {
  try {
    const token = jwt.sign(
      {
        exp: process.env.ACCESS_TOKEN_EXPIRES_IN,
        data: {
          email,
        },
      },
      process.env.JWT_ACCESS_TOKEN_KEY,
    );
    return token;
  } catch (error) {
    return error;
  }
};

export const VerifyAccessToken = async ({ token }: { token: string }) => {
  try {
    const data = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_KEY);
    return data;
  } catch (error) {
    return error;
  }
};
export const GenerateRefreshToken = async ({ email }: { email: string }) => {
  try {
    const token = jwt.sign(
      {
        exp: process.env.REFRESH_TOKEN_EXPIRES_IN,
        data: { email },
      },
      process.env.JWT_REFRESH_TOKEN_KEY,
    );
    return token;
  } catch (error) {
    return error;
  }
};

export const VerifyRefreshToken = async ({ token }: { token: string }) => {
  try {
    const data = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_KEY);
    return data;
  } catch (error) {
    return error;
  }
};
