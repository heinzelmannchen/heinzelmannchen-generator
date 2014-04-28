var Q = require('q'),
    PluginManager = require('heinzelmannchen-npm'),
    inherit;

function Generator(config) {}

Generator.plugin = PluginManager;
Generator.inherit = function() {
    return Generator;
};

Generator.prototype.setConfig = function(config) {
    this.config = config;
};

Generator.prototype.setFilters = function(filters) {
    this.filters = filters;
};

Generator.prototype.createData = function() {};

Generator.prototype.explain = function() {};

Generator.prototype.help = function() {};

module.exports = Generator;
