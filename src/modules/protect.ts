import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    const {authorization} = req.headers;
    if (!authorization) {
        console.log('authorization not found');
        res.status(401);
        res.send("Not authorized");
        return;
    }
    const [,token] = authorization.split(" ");
    if (!token) {
        console.log('token not found');
        res.send("Not authorized");
        res.status(401);
        return;

    }

    try {
      console.log({token});
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      console.log({user});
      next();
    } catch (e) {
        console.error(e);
        res.send("There was an error generating the token");
        res.status(400);
        return;
    }


}