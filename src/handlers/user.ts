import prisma from '../db';
import { createJWT, hashPassword, comparePasswords } from "../modules/auth";

export const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });

  const token = createJWT(user);

  res.json({ token });
};

export const signin = async (req,res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    res.status(404);
    res.json({ message: "User not found" });
    return;
  }

  const valid = await comparePasswords(req.body.password, user.password);

  if (!valid) {
    res.status(401);
    res.json({ message: "Invalid password" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });

}