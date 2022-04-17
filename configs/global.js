const config = require('./config');

//config domain
const LOG_FORMAT_TYPES = {
    HOUR: 'hour',
    DAY: 'day',
};

const NO_AUTH_REQUIRED_ROUTES = [
];

const global = {};

global.S3_BUCKET = '';
global.MONGOOSE_CONFIG = {};
global.MONGO_REPLICA_SET = '';
global.LOG_FORMAT_TYPE = LOG_FORMAT_TYPES.DAY;
global.REDIS_BULL_DB = 1;
global.REDIS_DB = 2;
global.API_KEY_FOR_3RD = '';
global.API_KEY_OF_BOT = ''
global.SHOW_LOG = true;
global.API_V1 = '';
global.NO_AUTH_REQUIRED_ROUTES = NO_AUTH_REQUIRED_ROUTES;

global.TEST_FB_USER_IDS = [];
global.MY_API_DOMAIN = '';
global.MY_WEB_DOMAIN = '';

const ENV = process.env.ENV || "development";
switch (ENV) {
    case 'development':
        global.MONGOOSE_CONFIG = {
            auth: { authSource: "admin" },
        };
        global.MONGO_REPLICA_SET = '';
        global.LOG_FORMAT_TYPE = LOG_FORMAT_TYPES.DAY;
        global.REDIS_BULL_DB = 1;
        global.REDIS_DB = 2;
        break;
    case "staging":
        global.MONGOOSE_CONFIG = {
            auth: { authSource: "admin" },
        };
        global.MONGO_REPLICA_SET = '';
        global.LOG_FORMAT_TYPE = LOG_FORMAT_TYPES.DAY;
        global.REDIS_BULL_DB = 1;
        global.REDIS_DB = 2;
        break;
    case "production":
        global.MONGOOSE_CONFIG = {
            auth: { authSource: "admin" },
        };
        global.MONGO_REPLICA_SET = '';
        global.LOG_FORMAT_TYPE = LOG_FORMAT_TYPES.DAY;
        global.REDIS_BULL_DB = 1;
        global.REDIS_DB = 2;
        break;
}

module.exports = global;
