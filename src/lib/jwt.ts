import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  userId: number;
}

const SECRET_KEY = process.env.JWT_SECRET || "secret-key";

export const signToken = (payload: object) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export function verifyToken(token: string): CustomJwtPayload | undefined {
  try {
    return jwt.verify(token, SECRET_KEY) as CustomJwtPayload;
  } catch (error) {
    console.error(error);
  }
}
