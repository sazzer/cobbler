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
        eslint: {
            options: {
                configFile: "eslintrc"
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/main',
                    src: ["**/*.js"]
                }]
            },
            test: {
                options: {
                    envs: ["mocha"]
                },
                files: [{
                    expand: true,
                    cwd: 'src/test',
                    src: ["**/*.js"]
                }]
            },
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

    grunt.registerTask('build', ['eslint:main']);
    grunt.registerTask('test', ['build', 'eslint:test', 'mocha_istanbul:test']);

    grunt.registerTask('default', ['build', 'test']);
};
