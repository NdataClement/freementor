import bcrypt from 'bcryptjs';

class Users {
    constructor() {
        this.users = [{
            id: 1,
            firstName: "Jane",
            lastName: "Doe",
            email: "janedoe@gmail.com",
            password: "$2a$10$g8O5wwQVDhvAi6xkcVDnyuBOOditRjvJtCozf4.Y2R6sQ/EbWmcaO",
            bio: "master",
            occupation: "ceo",
            expertise: "programming",
            type: 'admin',
        }];
    }


    signup(data) {
        const newUser = {
            id: this.users.length + 1,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: bcrypt.hashSync(data.password),
            bio: data.bio,
            occupation: data.occupation,
            expertise: data.expertise,
            type: 'user'
        };
        this.users.push(newUser);
        return newUser;
    }
}
export default new Users();