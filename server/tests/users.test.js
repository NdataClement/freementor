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
            firstName: "Clement",
            lastName: "Ndata",
            email: "ndataclento@gmail.com",
            password: "1234567",
            bio: "master",
            occupation: "ceo",
            expertise: "programming",
            type: 'user'
        })

        .end((err, res) => {

            expect(res.body.status).to.be.equal(400);
            expect(res).to.have.property('status');
        });

    });



    it('check if admin', () => {

        chai.request(app)

        .post('/api/v1/auth/signin')

        .send({

            email: 'janedoe@gmail.com',

            password: '1234567',

        })

        .end((err, res) => {

            expect(res.body.status).to.be.equal(200);


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
            id: 5,

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



    it('Incorrect Password', () => {

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

        });

    });

});