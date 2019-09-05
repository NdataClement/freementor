import UsersModel from '../model/user';

const Mentors = {

    getAllMentors(req, res) {
        const mentors = UsersModel.users.filter(userType => userType.type === 'mentor');
        if (!mentors) { return res.status(404).json({ status: 404, error: 'There is no mentor' }); }
        return res.status(200).json({
            status: 200,
            data: mentors,
        });
    },

    getSpecificMentor(req, res) {
        const specific = UsersModel.users.find(userId => userId.id === parseInt(req.params.id, 10) && userId.type === 'mentor');
        if (!specific) { return res.status(404).json({ status: 404, error: `There is no mentor with id ${req.params.id} ` }); }
        return res.status(200).json({
            status: 200,
            data: specific,
        });
    },


};
export default Mentors;