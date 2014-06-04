var Q = require('q'),
    inherit;

function Generator(config) {}

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

Generator.explain = function() {};

Generator.help = function() {};

module.exports = Generator;
