import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const generate = {
    id: 2,
    email: "clementsy@gmail.com",
    type: "user",
};
const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
describe('Not allowed', () => {
    it('Only Admin change user', () => {
        chai.request(app)
            .patch('/api/v1/users/2')
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.be.equal(401);
            });
    });
    it('change to mentor', () => {
        chai.request(app)
            .patch('/api/v1/users/2')
            .set('Authorization', token)
            .send({
                type: 'mentor',
            })
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.be.equal(401);
            });
    });

    it('Only mentor can accept session', () => {
        chai.request(app)
            .patch('/api/v1/sessions/1/accept')
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.be.equal(401);
            });
    });
    it('Only mentor can accept session', () => {
        chai.request(app)
            .patch('/api/v1/sessions/1/decline')
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.be.equal(401);
            });
    });


});