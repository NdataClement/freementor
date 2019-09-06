import UsersModel from '../model/user';
import SessionsModel from '../model/session';
import validate from '../helpers/session-validation';

export const ismentor = (req, res, next) => {
    try {
        const user = UsersModel.users.find(userid => userid.id === req.user.id);

        if (user.type !== 'mentor') return res.status(400).json({ status: 400, error: 'Only mentors are allowed to perform action' });

        next();
    } catch (error) {

        return res.status(401).json({ error: 'new' });

    }

};
export const checkinput = (req, res, next) => {
    try {
        const { error } = validate.validateSession(req.body);
        if (error) return res.status(400).json({ status: 400, error: error.details[0].message });

        next();
    } catch (error) {

        return res.status(401).json({ error: 'misconfiguration' });

    }

};
export const isavailable = (req, res, next) => {
    try {
        const search = SessionsModel.sessions.find(userId => userId.sessionId === parseInt(req.params.sessionId, 10));

        if (!search) {
            return res.status(404).send({
                status: 404,
                message: `session ${req.params.sessionId} doesn't exist`,
            });
        }

        next();
    } catch (error) {

        return res.status(401).json({ error: 'Not found' });

    }

}