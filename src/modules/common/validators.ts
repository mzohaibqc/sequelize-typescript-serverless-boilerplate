import * as Joi from 'joi';
import { form } from 'joi-errors-for-forms';

import { InvalidUsageError, AppError } from './errors';

const joiDefaultOptions = { convert: true, abortEarly: false };
const formErrorFormatter = form();

interface ValidatorOptions {
  joiOptions: any;
  errorType: any;
  statusCode: number;
}


export class AppValidator {
  public joiOptions: any;
  public errorType: any;
  public statusCode: number;

  constructor(options: ValidatorOptions | any) {
    this.joiOptions = options.joiOptions || joiDefaultOptions;
    this.errorType = InvalidUsageError;
    this.statusCode = 400;
  }

  validateData(data: any, schema: any) {
    const { error, value } = Joi.validate(data, schema, this.joiOptions);
    if (error) {
      throw new InvalidUsageError('Data is invalid', 'INVALID_USAGE', 400, formErrorFormatter(error))
    }
    return value;
  }
}
