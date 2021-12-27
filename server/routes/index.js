require('express-group-routes');
import { setContext } from '../middleware/setContext';
import { UserHandler } from '../modules/user/handler';
import { UserActionHandler } from '../modules/userAction/handler';

export default app => {
  app.all('*', setContext);
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
    user.get('/liked', handlerUser.listLiked.bind(handlerUser));
    user.get('/matches', handlerUser.listMatches.bind(handlerUser));
    user.post('/pass', handlerUserAction.pass.bind(handlerUserAction));
    user.post('/like', handlerUserAction.like.bind(handlerUserAction));
  });
};
