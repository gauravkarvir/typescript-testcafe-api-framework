import { merge } from 'lodash';
const defaults = require('./dev.ts');
const config: any = require('./' + (process.env.ENV || 'dev') + '.ts');
process.env.HTML_REPORT_PATH = './reports/testrail';
module.exports = merge({}, defaults, config);
