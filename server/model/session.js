class Sessions {
    constructor() {
        this.sessions = [{
            sessionId: 1,
            mentorId: 1,
            menteeId: 1,
            questions: "what is it",
            menteeEmail: "dlement@gmail.com",
            status: "pending",
        }];
    }

    createSession(data) {
        const newSession = {
            sessionId: this.sessions.length + 1,
            mentorId: data.mentorId,
            menteeId: data.menteeId,
            questions: data.questions,
            menteeEmail: data.menteeEmail,
            status: 'pending'
        };
        this.sessions.push(newSession);
        return newSession;
    }
}
export default new Sessions();