'use strict';

const path = require('path');

/**
 * Representation of a module in the build File
 */
class Module {
    /**
     * Construct the module
     * @param {Object} data The details of the module
     */
    constructor(data) {
        this._data = data;
    }
    
    /**
     * Get the name of the module
     * @return {String} the name of the module
     */
    get name() {
        return this._data.name;
    }
    
    /**
     * Get the version of the module
     * @return {String} the version of the module
     */
    get version() {
        return this._data.version;
    }
    
    /**
     * Get the type of the module
     * @return {String} the type of the module
     */
    get type() {
        return this._data.type;
    }
    
    /**
     * Get the language of the module
     * @return {String} the language of the module
     */
    get language() {
        return this._data.language;
    }
    
    /**
     * Get the various paths of the module
     * @return {Object} the paths of the module
     */
    get paths() {
        return {
            base: this._data.base,
            target: path.join(this._data.base, 'target'),
            'source-main': path.join(this._data.base, 'src', 'main'),
            'source-test': path.join(this._data.base, 'src', 'test')
        }
    }
}

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
    
    /**
     * Get the modules that make up the project
     * @return {Array} The modules
     */
    get modules() {
        return [
            new Module({
                name: this._contents.name,
                version: this._contents.version,
                type: this._contents.type,
                language: this._contents.language,
                base: path.dirname(this._file)
            })
        ];
    }
}

module.exports = BuildFile;
