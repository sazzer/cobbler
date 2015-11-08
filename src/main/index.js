const winston = require('winston');

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
    transports: [
        new winston.transports.Console({
            timestamp: function() {
                return Date.now();
            },
            align: true,
            colorize: true,
            label: 'Hello'
        })
    ]
};

const logger = new winston.Logger(logConfig);
winston.addColors(logConfig.colors);

logger.trace('Trace');
logger.debug('Debug');
logger.info('Info');
logger.warn('Warn');
logger.error('Error');
