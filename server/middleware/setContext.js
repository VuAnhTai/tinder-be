import { Context } from '../helpers/context';

export function setContext(req, res, next) {
  const user_uuid = req.headers['user_uuid'];
  const context = new Context();
  context.currentUser = { user_uuid };
  next();
}
