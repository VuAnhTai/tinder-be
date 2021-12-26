require('express-group-routes');
import { UserHandler } from '../modules/user/handler';
import { UserActionHandler } from '../modules/userAction/handler';

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
    const handlerUser = new UserHandler();
    const handlerUserAction = new UserActionHandler();
    user.get('/', handlerUser.listUser.bind(handlerUser));
    user.get('/pass', handlerUserAction.pass.bind(handlerUserAction));
    user.get('/like', handlerUserAction.like.bind(handlerUserAction));
  });
};
