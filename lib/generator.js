var Q = require('q'),
    PluginManager = require('./pluginManager'),
    inherit;


function Generator(config) {}

Generator.plugin = PluginManager;
Generator.inherit = function() {
    return Generator;
};



Generator.prototype.setConfig = function(config) {
    this.config = config;
};

Generator.prototype.createData = function() {};

Generator.prototype.explain = function() {};

Generator.prototype.help = function() {};

module.exports = Generator;
