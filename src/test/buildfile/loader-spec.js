const expect = require('chai').expect;
const path = require('path');
const buildFileLoader = require('../../main/buildfile');

describe('#loadBuildFile', () => {
    const root = path.join(__dirname, 'a');
    describe('From same directory', () => {
        const result = buildFileLoader.loadBuildFile(root);
        it('Found a file', () => {
            return expect(result).to.eventually.be.resolved;
        });
    });
    describe('From one directory down', () => {
        const result = buildFileLoader.loadBuildFile(path.join(root, 'b'));
        it('Found a file', () => {
            return expect(result).to.eventually.be.resolved;
        });
    });
    describe('From two directories down', () => {
        const result = buildFileLoader.loadBuildFile(path.join(root, 'b', 'c'));
        it('Found a file', () => {
            return expect(result).to.eventually.be.resolved;
        });
    });
    describe('From a non-existant directory', () => {
        const result = buildFileLoader.loadBuildFile(path.join(root, 'c'));
        it('Found a file', () => {
            return expect(result).to.eventually.be.rejected;
        });
    });
});
