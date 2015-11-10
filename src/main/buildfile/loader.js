const findParentDir = require('find-parent-dir');
const log = require('../log');
const path = require('path');
const fs = require('fs');

/**
 * Load the build file that is to be used. This is in the earliest parent directory from the provided leaf
 * @param {String} leaf The leaf directory to start searching in
 * @return {Promise} a promise for the build file
 */
function loadBuildFile(leaf) {
    return Promise.resolve(path.normalize(leaf))
        .then((leaf) => {
            return new Promise((resolve, reject) => {
                fs.stat(leaf, (err, stats) => {
                    if (err) {
                        log.error('Failed to resolve leaf directory', err);
                        reject(err);
                    }

                    resolve(leaf)
                });
            });
        })
        .then((leaf) => {
            return new Promise((resolve, reject) => {
                findParentDir(leaf, 'cobbler.json', (err, dir) => {
                    if (err) {
                        reject(err);
                    } else if (dir) {
                        log.debug('Found cobbler.json at %s', dir);
                        resolve(path.join(dir, 'cobbler.json'));
                    } else {
                        reject('No file found');
                    }
                });
            });
        })
        .then((buildFile) => {
            return {
                buildFile
            };
        });
}

module.exports = {
    loadBuildFile
};
