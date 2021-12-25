import { CoreRepo } from '../../core/service/repo';
import { UserModel } from './model';

/**
 * @export
 * @class UserRepo
 * @extends {CoreRepo}
 */
export class UserRepo extends CoreRepo {
  /**
   * Creates an instance of UserRepo.
   * @memberof UserRepo
   */
  constructor() {
    super(UserModel);
  }

  listUser(query) {
    return this.model.find(query);
  }
}
