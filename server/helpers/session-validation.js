import joi from 'joi';

exports.validateSession = (session) => {
    const create = {
        mentorId: joi.number().required(),
        questions: joi.required(),
    };
    return joi.validate(session, create);
};