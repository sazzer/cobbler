var pkg = require('./package');

module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
    });
    require('time-grunt')(grunt);

    grunt.initConfig({
        mocha_istanbul: {
            options: {
                mochaOptions: ['--growl']
            },
            test: {
                src: 'src/test',
                options: {
                    require: [
                        'src/test/setup'
                    ],
                    mask: '**/*-spec.js',
                    coverageFolder: 'target/coverage',
                    reportFormats: ['html', 'lcov', 'text', 'text-summary'],
                    root: 'src'
                }
            }
        },
        watch: {
            test: {
                files: [
                    'package.json',
                    'GruntFile.js',
                    'src/**/*'
                ],
                tasks: ['test'],
                options: {
                    spawn: true,
                    interrupt: true,
                    atBegin: true
                }
            }
        }
    });

    grunt.registerTask('build', []);
    grunt.registerTask('test', ['build', 'mocha_istanbul:test']);

    grunt.registerTask('default', ['build', 'test']);
};