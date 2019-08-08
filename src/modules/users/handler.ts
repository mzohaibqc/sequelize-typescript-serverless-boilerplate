import { User } from 'src/db';
import { UserValidator } from './validator';
import { handlerFactory } from 'modules/common';

const userValidator = new UserValidator({});


const users: AWSLambda.Handler = handlerFactory()
  .GET(async (event: AWSLambda.APIGatewayEvent) => {
    if (event.pathParameters.id) {
      const user = await User.findByPk(event.pathParameters.id);
      return { user };
    } else {
      const users = await User.findAll();
      return { users, event };
    }
  })
  .POST(async (event: AWSLambda.APIGatewayEvent) => {
    // -------------------- Validations ------------------------------
    const data = userValidator.validateCreateData(event.body);

    // -------------------- Logic ------------------------------
    const user = await User.create<User>(data)
    return { user };
  })


export default users;
