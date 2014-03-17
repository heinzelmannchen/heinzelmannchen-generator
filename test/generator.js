var Generator = require('../lib/generator'),
    Q = require('q'),
    sinon = require('sinon');

require('mocha-as-promised')();

describe('Generator', function() {
    it('should be a class', function() {
        Generator.should.be.an('function');
        Generator.inherit.should.be.a('function');
    });

    it('should be inheritable', function() {
        Generator.inherit().should.be.a('function');
    });

    it('should respond to the nessesary interface', function() {
        var generator = Generator.inherit();
        generator.should.respondTo('createData');
        generator.should.respondTo('setConfig');
        generator.should.respondTo('explain');
        generator.should.respondTo('help');
    });

    it('should be typof generator', function() {
        var MyGenerator = Generator.inherit(),
            generator = new MyGenerator();
        generator.should.be.an.instanceof(Generator);
    });
});
