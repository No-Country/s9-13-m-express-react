import * as jwt from 'jsonwebtoken';
import { TokenPayload } from 'interfaces/TokenPayload';

class JWTUtils {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor() {
    this.secret = process.env.JWT_SECRET!;
    this.expiresIn = process.env.JWT_EXPIRES_IN || '1h';
  }

  public generateAccessToken = (payload: TokenPayload): string => {
    return jwt.sign(
      payload,
      this.secret,
      { expiresIn: this.expiresIn },
    );
  }

  public verifyToken = (token: string): any => {
    return jwt.verify(
      token,
      this.secret
    );
  }
}

export const jwtUtils = new JWTUtils();