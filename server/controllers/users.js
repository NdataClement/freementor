import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validate from '../helpers/user-validation';
import UsersModel from '../model/user';

const Users = {
    signup(req, res) {
        const { error } = validate.validateUser(req.body);
        if (error) return res.status(400).json({ status: 400, error: error.details[0].message });


        let user = UsersModel.users.find(username => username.email === req.body.email);
        if (user) return res.status(400).json({ status: 400, error: 'Email already registered' });

        user = UsersModel.signup(req.body);
        const generate = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio,
            occupation: user.occupation,
            expertise: user.expertise,
        };

        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        return res.header('Authorization', token).status(201).json({
            status: 201,
            message: 'User created successfully',
            data: {
                "token": token,
                message: "User created successfully",
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                type: user.type
            },
        });
    },

    login(req, res) {

        const { error } = validate.validateLogin(req.body);
        if (error) return res.status(400).json({ status: 400, error: error.details[0].message });


        const user = UsersModel.users.find(username => username.email === req.body.email);
        if (!user) return res.status(400).json({ status: 400, error: 'Incorrect email or password' });

        // Chech whether the entered password match the one in database
        const compare = bcrypt.compareSync(req.body.password, user.password);
        if (!compare) return res.status(400).json({ status: 400, error: 'Incorrect email or password' });

        // Generate token
        const generate = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio,
            occupation: user.occupation,
            expertise: user.expertise,
        };
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        return res.header('Authorization', token).status(200).json({
            status: 200,
            message: 'User is successfully logged in',
            data: {
                "token": token,
                id: generate.id,
                firstName: generate.firstName,
                lastName: generate.lastName,
                email: generate.email,
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

    getAllMentors(req, res) {
        console.log(req.user.firstName);
        const mentors = UsersModel.users.filter(userType => userType.type === 'mentor');
        if (!mentors) { return res.status(404).json({ status: 404, error: 'There is no mentor' }); }
        return res.status(200).json({
            status: 200,
            data: mentors,
        });
    },

    getSpecificMentor(req, res) {
        const specific = UsersModel.users.find(userId => userId.id === parseInt(req.params.id, 10));
        const mentor = UsersModel.users.filter(userType => userType.type === 'mentor');
        if (!mentor && !specific) { return res.status(404).json({ status: 404, error: `There is no mentor with id ${req.params.id} ` }); }
        return res.status(200).json({
            status: 200,
            data: mentor,
        });
    },


};
export default Users;