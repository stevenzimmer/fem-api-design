import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const createJWT = (user) => {
  const token = jwt.sign(
    { 
      id: user.id, 
      username: user.username 
    }, 
    process.env.JWT_SECRET
  );
  return token;
};

export const comparePasswords = async (password, hash) => {
  return await bcrypt.compare(password, hash);
}

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 5);
}