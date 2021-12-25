import { UserUsecase } from './usecase';
import { UserRepo } from './repo';

export class UserHandler {
  constructor() {
    this.userUsecase = new UserUsecase(new UserRepo());
  }

  async listUser(req, res, next) {
    try {
      const result = await this.userUsecase.listUser(req.query);

      res.send({
        message: 'Success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }
}
