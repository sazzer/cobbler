const logger = require('./log');
const commandLineArgs = require('command-line-args');

const cli = commandLineArgs([
    {name: 'verbose', alias: 'v', type: Boolean},
    {name: 'buildFile', alias: 'b', type: String},
    {name: 'commands', type: String, multiple: true, defaultOption: true}
]);

const args = cli.parse();

if (args.verbose) {
    logger.setLevel('debug');
}

logger.trace('Command line args', args);

if (args.commands && args.commands.length > 0) {
    logger.info("Starting Cobbler");
    args.commands.forEach((cmd) => {
        logger.debug("Executing command %s", cmd);
    });
    logger.info("Finished Cobbler");
} else {
    console.log(cli.getUsage());
}
