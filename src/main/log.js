'use strict';

const winston = require('winston');

const consoleTransport = new winston.transports.Console({
    timestamp: function() {
        return Date.now();
    },
    align: true,
    colorize: true,
    level: 'info'
});


const logConfig = {
    level: 'trace',
    levels: {
        trace: 4,
        debug: 3,
        info: 2,
        warn: 1,
        error: 0
    },
    colors: {
        trace: 'grey',
        debug: 'grey',
        info: 'white',
        warn: 'yellow',
        error: 'red'
    },
    transports: [consoleTransport]
};

const logger = new winston.Logger(logConfig);
winston.addColors(logConfig.colors);

/**
 * Set up the logger to have a group name for a certain subset of logging
 * @param {String} group The group name
 */
logger.startGroup = function(group) {
    consoleTransport.label = group;
}

/**
 * Set up the logger to no longer have a group name for logging
 */
logger.endGroup = function() {
    delete consoleTransport.label;
}

/**
 * Set the logging level to output
 * @param {String} level the logging level to output
 */
logger.setLevel = function(level) {
    consoleTransport.level = level;
}

module.exports = logger;
