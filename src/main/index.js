const logger = require('./log');

logger.trace('Trace');
logger.debug('Debug');
logger.info('Info');
logger.warn('Warn');
logger.error('Error');

logger.startGroup("Group");
logger.trace('Trace');
logger.debug('Debug');
logger.info('Info');
logger.warn('Warn');
logger.error('Error');
logger.endGroup();

logger.trace('Trace');
logger.debug('Debug');
logger.info('Info');
logger.warn('Warn');
logger.error('Error');
