import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import jwt from 'jsonwebtoken';



const { expect } = chai;

chai.use(chaiHttp);


describe('create', () => {
    const generate = {
        id: 2,
        email: "clementsy@gmail.com",
        type: "user",
    };
    it('Allow user to create session', () => {
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        chai.request(app)

        .post('/api/v1/sessions')
            .set('Authorization', token)
            .send({
                mentorId: 1,
                questions: 'what is love',
            })
            .end((err, res) => {
                expect(res.body.status).to.equal(201);

            });
    });
    it('check validation', () => {
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        chai.request(app)
            .post('/api/v1/sessions')
            .set('Authorization', token)
            .send({
                mentorId: 3,
                questions: '',
            })

        .end((err, res) => {
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.be.equal(201);
            expect(res.body).to.have.property('status');

        });

    });
    it('check token', () => {
        const token = jwt.sign(generate, 'rest', { expiresIn: '24h' });
        chai.request(app)
            .post('/api/v1/sessions')
            .set('Authorization', token)
            .send({
                mentorId: 3,
                questions: 'the real man',
            })

        .end((err, res) => {
            expect(res.body).to.be.an('object');


        });

    });
    it('check token', () => {
        const token = jwt.sign(generate, 'rest', { expiresIn: '24h' });
        chai.request(app)
            .post('/api/v1/sessions')
            .set('Authorization', token)
            .send({
                mentorId: 3,
                questions: 'the real man',
            })

        .end((err, res) => {
            expect(res.body).to.be.an('object');


        });

    });

    it('Accept session', () => {
        const token = jwt.sign(generate, 'REST_FUL_API', { expiresIn: '24h' });
        chai.request(app)
            .patch(`/api/v1/sessions/1/accept`)
            .set('Authorization', token)
            .send({
                status: 'accepted',
            })
            .end((err, res) => {
                expect(res).to.be.an('object');
                expect(res.status).to.deep.equal(400);
            });
    });
});