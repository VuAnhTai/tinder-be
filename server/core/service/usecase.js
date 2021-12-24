import { CoreRepo } from './repo';
import { AppError } from '../errors';

export class CoreUsecase {
  /**
   * Creates an instance of CoreUsecase.
   * @param {CoreRepo} repo
   * @memberof CoreUsecase
   */
  constructor(repo) {
    if (!(repo instanceof CoreRepo)) {
      throw new AppError('Wrong Repo Type', 500);
    }

    this.repo = repo;
  }
}
