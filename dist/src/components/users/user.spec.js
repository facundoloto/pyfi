const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('get user with dto', () => {
    describe('get /user/:id', () => {
        it('It should return info from some user', (done) => {
            chai
                .request(app)
                .post('/')
                .send({ title: 'Task 1', description: 'Description 1' })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('title', 'Task 1');
                    expect(res.body).to.have.property('description', 'Description 1');
                    done();
                });
        });
    });
});