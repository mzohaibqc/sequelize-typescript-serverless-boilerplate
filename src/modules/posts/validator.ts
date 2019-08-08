import { AppValidator } from 'modules/common/validators';
import * as Joi from 'joi';


export class PostValidator extends AppValidator {
  validateCreateData (data: any) {
    const schema = Joi.object().keys({
      title: Joi.string().trim().max(255).required(),
      text: Joi.string().trim().required(),
      userId: Joi.number().required(),
    });
    return this.validateData(data, schema);
  }
}