import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

describe('testing user', () => {
    const user = {
        firstName: ' uhfuwih',
        lastName: 'fhuerifhuier',
        email: 'ufhuwr@ygdeyw.fhurl',
        bio: 'user.bio',
        occupation: 'user.occupation',
        expertise: ' user.expertise',
    }

    it('should do this', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send(user)
            .end((err, res) => {
                console.log(res.body);

                expect(res.body.status).to.be.equal(400);
            })
        done();
    });
    it('Check user', () => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                console.log(res.body);

                expect(res.body.status).to.be.equal(400);
            })
    });
});