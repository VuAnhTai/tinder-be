import { UserUsecase } from './usecase';
import { UserRepo } from './repo';

export class UserHandler {
  constructor() {
    this.userUsecase = new UserUsecase(new UserRepo());
  }

  async getUser({ params }, res, next) {
    try {
      const result = await this.userUsecase.getUser(params);

      res.send({
        message: 'Success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
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

  async listLiked({ query }, res, next) {
    try {
      const result = await this.userUsecase.listLiked(query);

      res.send({
        message: 'Success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  async listMatches({ query }, res, next) {
    try {
      const result = await this.userUsecase.listMatches(query);

      res.send({
        message: 'Success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }
}
