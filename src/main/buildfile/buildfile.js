'use strict';

/**
 * Representation of the parsed Build File
 */
class BuildFile {
    /**
     * Construct the build file
     * @param {String} file The name of the file that was laoded
     * @param {Object} contents The contents of the file
     */
    constructor(file, contents) {
        this._file = file;
        this._contents = contents;
    }
    
    /**
     * Get the name of the build file
     * @return {String} the name of the build file
     */
    get buildFile() {
        return this._file;
    }
    
    /**
     * Get the name of the project
     * @return {String} the name of the project
     */
    get name() {
        return this._contents.name;
    }
    
    /**
     * Get the version of the project
     * @return {String} the version of the project
     */
    get version() {
        return this._contents.version;
    }
}

module.exports = BuildFile;
