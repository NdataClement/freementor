import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header || header === "") return res.status(401).json({ status: 401, error: "Authentication failed" });

        const token = jwt.verify(header, 'REST_FUL_API');
        req.user = token;
        next();
    } catch (error) {

        return res.status(401).json({ error: 'Invalid token' });

    }

}

export default authentication