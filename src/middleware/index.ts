import logger from './logger';
import api from './api';

export const middlewares = {
    logger: logger({description: "Console Logger:"}),
    api,
}