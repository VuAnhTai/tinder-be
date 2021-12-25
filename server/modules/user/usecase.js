import { CoreUsecase } from '../../core/service/usecase';

/**
 * @export
 * @class UserUsecase
 * @extends {CoreUsecase}
 */

export class UserUsecase extends CoreUsecase {
  /**
   * Creates an instance of UserUsecase.
   * @memberof UserUsecase
   */
  constructor(repo) {
    super(repo);
  }

  listUser(query) {
    return this.repo.listUser(query);
  }
}
