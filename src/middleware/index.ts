import {logger as loggerMiddleware} from './logger';
import api from './api';

const logger = loggerMiddleware({description: "Console Logger:"});
export const middlewares = [
    logger,
    api
]