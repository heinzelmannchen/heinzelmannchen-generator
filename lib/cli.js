var program = require('commander'),
    Q = require('q'),
    winston = require('winston'),
    _ = require('underscore'),
    Generator = require('./generator'),
    me = module.exports;

me.start = function(argv) {
    me.setup();
    program.parse(argv);
    me.run();
};

me.setup = function() {
    program
        .description('foo')
        .version('0.0.1');
    program
        .command('install <package>')
        .description('install a generator')
        .action(function(package, options) {
            winston.info('Installing package', package);
            Generator.plugin.install(package)
                .then(function(stdout) {
                    winston.info('Installed', package);
                })
                .fail(onFail);
        });
    program
        .command('search <package>')
        .description('search a generator')
        .action(function(package, options) {
            winston.info('Searching', package);
            Generator.plugin.search(package)
                .then(function(stdout) {
                    winston.info('Result for', package, '\n',stdout);
                })
                .fail(onFail);
        });
    winston.cli();
};

me.run = function() {};

function onFail(error) {
    winston.error('Message: ' + error.message);
    if (program.debug) {
        winston.data(error);
    }
    if (program.trace) {
        console.trace();
    }
    process.kill();
}
