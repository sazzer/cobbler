'use strict';

const expect = require('chai').expect;
const BuildFile = require('../../main/buildfile/buildfile');

describe('BuildFile', () => {
    describe('For a single module', () => {
        const buildfile = new BuildFile('/tmp/project/cobbler.json', {
            name: 'Single Module',
            version: '1.0.0',
            type: 'executable',
            language: 'c++11'
        });
        
        it('Has the correct filename', () => {
            expect(buildfile.buildFile).to.equal('/tmp/project/cobbler.json');
        });
        it('Has the correct name', () => {
            expect(buildfile.name).to.equal('Single Module');
        });
        it('Has the correct version', () => {
            expect(buildfile.version).to.equal('1.0.0');
        });
        it('Has a single module', () => {
            expect(buildfile.modules).to.be.an('array').and.to.have.length(1);
        });
        describe('The module', () => {
            const mod = buildfile.modules[0];
            it('Has the correct name', () => {
                expect(mod.name).to.equal('Single Module');
            });
            it('Has the correct version', () => {
                expect(mod.version).to.equal('1.0.0');
            });
            it('Has the correct type', () => {
                expect(mod.type).to.equal('executable');
            });
            it('Has the correct language', () => {
                expect(mod.language).to.equal('c++11');
            });
            it('Has the correct base path', () => {
                expect(mod.paths['base']).to.equal('/tmp/project');
            });
            it('Has the correct main source path', () => {
                expect(mod.paths['source-main']).to.equal('/tmp/project/src/main');
            });
            it('Has the correct test source path', () => {
                expect(mod.paths['source-test']).to.equal('/tmp/project/src/test');
            });
            it('Has the correct target path', () => {
                expect(mod.paths['target']).to.equal('/tmp/project/target');
            });
        });
    });
});
