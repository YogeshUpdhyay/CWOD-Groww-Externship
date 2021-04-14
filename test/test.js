let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../server');

describe('Get Products', () => {
    it('It should get products', (done) => {
        chai.request(server)
        .get('/api/v1/product?category=Stocks')
        .end((err, res) => {
            (res).should.have.status(200);
            (res.body).should.be.a('array');
            done();
        });
    });
});
