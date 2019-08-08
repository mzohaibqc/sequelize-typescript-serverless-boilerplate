import { Post } from 'src/db';
import { PostValidator } from './validator';
import { handlerFactory } from 'modules/common';

const postValidator = new PostValidator({});


const posts: AWSLambda.Handler = handlerFactory()
  .GET(async (event: AWSLambda.APIGatewayEvent) => {
    if (event.pathParameters.id) {
      const post = await Post.findByPk(event.pathParameters.id);
      return { post };
    } else {
      const posts = await Post.findAll();
      return { posts };
    }
  })
  .POST(async (event: AWSLambda.APIGatewayEvent) => {
    // -------------------- Validations ------------------------------
    const data = postValidator.validateCreateData(event.body);

    // -------------------- Logic ------------------------------
    const post = await Post.create<Post>(data)
    return { post };
  })


export default posts;
