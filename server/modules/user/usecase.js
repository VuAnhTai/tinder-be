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
    // this.userActionUsecase.findActionOfUser();
    return this.repo.listUser(query);
  }
}
