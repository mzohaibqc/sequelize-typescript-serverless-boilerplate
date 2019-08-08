import * as Vandium from 'vandium';

import { sequelize } from 'src/db';
import { logger } from 'src/utils/Logger';
import { AppError } from 'src/modules/common/errors';

export function handlerFactory (opt: any = {}) : Vandium.VandiumHandler {
  return Vandium.api(opt)
    .cors({
      allowOrigin: '*',
      allowCredentials: true
    })
    .before(async () => {
      await sequelize.sync();
    })
    .onError((error: any) => {
      logger.error(error);
      if (error instanceof AppError) return error.toJson();
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Credentials" : true 
        },
        body: {
          message: 'Something went wrong. Please try later.',
        },
      };
    });
};
