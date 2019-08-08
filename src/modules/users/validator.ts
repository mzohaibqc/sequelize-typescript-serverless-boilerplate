import { AppValidator } from 'modules/common/validators';
import * as Joi from 'joi';


export class UserValidator extends AppValidator {
  validateCreateData (data: any) {
    const schema = Joi.object().keys({
      firstName: Joi.string().trim().required(),
      lastName: Joi.string().trim().required(),
      email: Joi.string().trim().email().required(),
      age: Joi.number().min(18).required(),
    });
    return this.validateData(data, schema);
  }
}