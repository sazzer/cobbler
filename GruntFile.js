var pkg = require('./package');

module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
    });
    require('time-grunt')(grunt);

    grunt.initConfig({
    });

    grunt.registerTask('build', []);
    grunt.registerTask('test', []);

    grunt.registerTask('default', ['build', 'test']);
};
