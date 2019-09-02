import joi from 'joi';

exports.validateUser = (user) => {
    const userSchema = {
        firstName: joi.string().min(3).trim().required()
            .regex(/^[A-Za-z]+$/),
        lastName: joi.string().min(3).required().regex(/^[A-Za-z]+$/),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        bio: joi.string().required(),
        occupation: joi.string().required(),
        expertise: joi.string().required(),
    };
    return joi.validate(user, userSchema);
};

exports.validateLogin = (user) => {
    const login = {
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
    };
    return joi.validate(user, login);
};