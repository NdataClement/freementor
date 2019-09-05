import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../server';



const { expect } = chai;

chai.use(chaiHttp);


describe('Signup', () => {

    it('Allow user to signup', () => {

        chai.request(app)

        .post('/api/v1/auth/signup')

        .send({
            firstName: 'Clement',
            lastName: 'Ndatabaye',
            email: 'clementndatabaye@gmail.com',
            password: '123456',
            bio: 'master',
            occupation: 'ceo',
            expertise: 'programming',

        })

        .end((err, res) => {

            expect(res.body.status).to.equal(201);

        });

    });



    it('check if admin', () => {

        chai.request(app)

        .post('/api/v1/auth/signin')

        .send({

            email: 'janedoe@gmail.com',

            password: '$2a$10$g8O5wwQVDhvAi6xkcVDnyuBOOditRjvJtCozf4.Y2R6sQ/EbWmcaO',

        })

        .end((err, res) => {

            expect(res.body.status).to.equal(400);

            expect(res.body).to.have.property('status');

            expect(res.body).to.have.property('error');

            expect(res.body).to.be.an('object');

        });

    });


    it('All fields are required', () => {

        chai.request(app)

        .post('/api/v1/auth/signup')

        .send({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            bio: '',
            occupation: '',
            expertise: '',

        })

        .end((err, res) => {

            expect(res.body.status).to.equal(400);

            expect(res.body).to.have.property('status');

            expect(res.body).to.have.property('error');

            expect(res.body).to.be.an('object');

        });

    });



    it('Email exist', () => {

        chai.request(app)

        .post('/api/v1/auth/signup')

        .set('Content-type', 'application/json')

        .set('Accept', 'application/json')

        .send({

            firstName: 'jane',

            lastName: 'doe',

            email: 'janedoe@gmail.com',

            password: '1234567',

        })

        .end((err, res) => {

            expect(res.body.status).to.equal(400);

            expect(res.body).to.have.property('status');

            expect(res.body).to.have.property('error');

            expect(res.body).to.be.an('object');

        });

    });

});



describe('signin', () => {


    it('All field are required', (done) => {

        chai.request(app)

        .post('/api/v1/auth/signin')

        .send({

            email: '',

            password: '',

        })

        .end((err, res) => {

            expect(res.body.status).to.equal(400);

            expect(res.body).to.have.property('status');

            expect(res.body).to.have.property('error');

            expect(res.body).to.be.an('object');

            done();

        });

    });



    it('Incorrect email', (done) => {

        chai.request(app)

        .post('/api/v1/auth/signin')

        .send({

            email: 'janefoers@gmail.com',

            password: '1234567',

        })

        .end((err, res) => {

            expect(res.body.status).to.equal(400);

            expect(res.body).to.have.property('status');

            expect(res.body).to.have.property('error');

            expect(res.body).to.be.an('object');

            done();

        });

    });



    it('Incorrect Password', (done) => {

        chai.request(app)

        .post('/api/v1/auth/signin')

        .send({

            email: 'janedoe@gmail.com',

            password: '12345678',

        })

        .end((err, res) => {

            expect(res.body.status).to.equal(400);

            expect(res.body).to.have.property('status');

            expect(res.body).to.have.property('error');

            expect(res.body).to.be.an('object');

            done();

        });

    });

});