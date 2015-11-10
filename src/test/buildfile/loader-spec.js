'use strict';

const expect = require('chai').expect;
const path = require('path');
const buildFileLoader = require('../../main/buildfile/loader');

describe('#loadBuildFile', () => {
    const root = path.join(__dirname, 'a');
    describe('From same directory', () => {
        const result = buildFileLoader.loadBuildFile(root);
        it('Found a file', () => {
            return expect(result).to.eventually.be.resolved;
        });
        it('Was the correct file', () => {
            return expect(result).to.eventually.have.property('buildFile', path.join(root, 'cobbler.json'));
        });
        it('Had the correct details', () => {
            return Promise.all([
                expect(result).to.eventually.have.property('name', 'Cobbler Example - Simple'),
                expect(result).to.eventually.have.property('version', '1.0.0')
            ]);
        });
    });
    describe('From one directory down', () => {
        const result = buildFileLoader.loadBuildFile(path.join(root, 'b'));
        it('Found a file', () => {
            return expect(result).to.eventually.be.resolved;
        });
        it('Was the correct file', () => {
            return expect(result).to.eventually.have.property('buildFile', path.join(root, 'cobbler.json'));
        });
    });
    describe('From two directories down', () => {
        const result = buildFileLoader.loadBuildFile(path.join(root, 'b', 'c'));
        it('Found a file', () => {
            return expect(result).to.eventually.be.resolved;
        });
        it('Was the correct file', () => {
            return expect(result).to.eventually.have.property('buildFile', path.join(root, 'cobbler.json'));
        });
    });
    describe('From a non-existant directory', () => {
        const result = buildFileLoader.loadBuildFile(path.join(root, 'c'));
        it('Found a file', () => {
            return expect(result).to.eventually.be.rejected;
        });
    });
});
