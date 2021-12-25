require('express-group-routes');
import { UserHandler } from '../modules/user/handler';

export default app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Codebase API!',
    })
  );

  app.get('/healthz', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the User API!',
    })
  );

  app.group('/user', user => {
    const handler = new UserHandler();
    user.get('/', handler.listUser.bind(handler));
  });
};
