import * as logger from './logger-service';
import * as todos from './todos-api-client';
import * as counter from './counter-service';

export default {
  logger,
  api: {
    todos,
    counter,
  },
};
