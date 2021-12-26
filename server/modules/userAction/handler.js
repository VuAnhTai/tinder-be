import { UserActionUsecase } from './usecase';
import { UserActionRepo } from './repo';

export class UserActionHandler {
  constructor() {
    this.userActionUsecase = new UserActionUsecase(new UserActionRepo());
  }

  async like({ body }, res, next) {
    try {
      const result = await this.userActionUsecase.like(body);

      res.send({
        message: 'Success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  async pass({ body }, res, next) {
    try {
      const result = await this.userActionUsecase.pass(body);

      res.send({
        message: 'Success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }
}
