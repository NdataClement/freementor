import validate from '../helpers/user-validation';
import UsersModel from '../model/user';
import bcrypt from 'bcryptjs';

export const usersignup = (req, res, next) => {
    try {
        const { error } = validate.validateUser(req.body);
        if (error) return res.status(400).json({ status: 400, error: error.details[0].message });

        let user = UsersModel.users.find(username => username.email === req.body.email);
        if (user) return res.status(400).json({ status: 400, error: 'Email already registered' });


        next();
    } catch (error) {

        return res.status(401).json({ error: 'new' });

    }

};
export const userlogin = (req, res, next) => {
    try {
        const { error } = validate.validateLogin(req.body);
        if (error) return res.status(400).json({ status: 400, error: error.details[0].message });


        const user = UsersModel.users.find(username => username.email === req.body.email);
        if (!user) return res.status(400).json({ status: 400, error: 'Incorrect email or password' });

        const compare = bcrypt.compareSync(req.body.password, user.password);
        if (!compare) return res.status(400).json({ status: 400, error: 'Incorrect email or password' });


        next();
    } catch (error) {

        return res.status(401).json({ error: 'login problem' });

    }

};
export const isadmin = (req, res, next) => {
    try {
        const user = UsersModel.users.find(userid => userid.id === req.user.id);

        if (user.type !== 'admin') return res.status(400).json({ status: 400, error: 'Not allowed to perform action' });

        next();
    } catch (error) {

        return res.status(401).json({ error: 'new' });

    }

}