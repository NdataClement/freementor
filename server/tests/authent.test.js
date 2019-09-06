import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import jwt from 'jsonwebtoken';

chai.use(chaiHttp);

describe('view mentors', () => {
    const generate = {
        id: 2,
        email: "clementsy@gmail.com",
        type: "user",
    };
    it('welcome message', () => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('message');
            });
    });

    it('Get all mentors', () => {
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        chai.request(app)
            .get('/api/v1/mentors')
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body.status).to.be.equal(200);
            });
    });
    it('Get specific mentors', () => {
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        chai.request(app)
            .get('/api/v1/mentors/1')
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body.status).to.be.equal(404);
            });
    });
    it('Get specific mentors', () => {
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        chai.request(app)
            .get('/api/v1/mentors/1')
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body.status).to.be.equal(404);
            });
    });
});