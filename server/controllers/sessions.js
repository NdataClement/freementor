import SessionsModel from '../model/session';
const Sessions = {
    createSession(req, res) {
        const session = SessionsModel.createSession(req.body);
        const menteeId = req.user.id;
        const menteeEmail = req.user.email;
        return res.status(201).json({
            status: 201,
            message: 'Session created successfully',
            data: {
                "sessionId": session.sessionId,
                "mentorId": session.mentorId,
                "menteeId": menteeId,
                "questions": session.questions,
                "menteeEmail": menteeEmail,
                "statuses": session.status
            }

        });
    },

    acceptSession(req, res) {
        const search = SessionsModel.sessions.find(userId => userId.sessionId === parseInt(req.params.sessionId, 10));
        search.status = 'accepted';
        const menteeId = req.user.id;
        const menteeEmail = req.user.email;
        return res.status(200).json({
            status: 200,
            data: {
                "sessionId": search.sessionId,
                "mentorId": search.mentorId,
                "menteeId": menteeId,
                "questions": search.questions,
                "menteeEmail": menteeEmail,
                "status": search.status,
            }
        });
    },

    declineSession(req, res) {
        const search = SessionsModel.sessions.find(userId => userId.sessionId === parseInt(req.params.sessionId, 10));
        search.status = 'declined';
        const menteeId = req.user.id;
        const menteeEmail = req.user.email;
        return res.status(200).json({
            status: 200,
            data: {
                "sessionId": search.sessionId,
                "mentorId": search.mentorId,
                "menteeId": menteeId,
                "questions": search.questions,
                "menteeEmail": menteeEmail,
                "status": search.status,
            }
        });
    },


};

export default Sessions;