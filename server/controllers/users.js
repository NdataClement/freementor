import jwt from 'jsonwebtoken';
import UsersModel from '../model/user';

const Users = {
    signup(req, res) {
        const user = UsersModel.signup(req.body);
        const generate = {
            id: user.id,
            email: user.email,
            type: user.type,
        };

        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        return res.header('Authorization', token).status(201).json({
            status: 201,
            message: 'User created successfully',
            data: {
                "token": token,
                message: "User created successfully",
            },
        });
    },

    login(req, res) {
        const user = UsersModel.users.find(username => username.email === req.body.email);
        const generate = {
            id: user.id,
            email: user.email,
            type: user.type,
        };
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        return res.header('Authorization', token).status(200).json({
            status: 200,
            message: 'User is successfully logged in',
            data: {
                "token": token,
            },
        });
    },

    changeMentor(req, res) {
        const change = UsersModel.users.find(userId => userId.id === parseInt(req.params.id, 10));
        if (!change) {
            return res.status(404).send({
                status: 404,
                message: `user with ${req.params.id} doesn't exist`
            });
        }

        change.type = 'mentor';
        return res.status(200).json({
            status: 200,
            data: {
                message: 'User account changed to mentor',
            }
        });
    },

    getAllUsers(req, res) {
        if (!UsersModel.users.length) return res.status(404).json({ status: 404, error: 'There is no user' });
        return res.status(200).json({ status: 200, data: UsersModel.users });
    },


};
export default Users;