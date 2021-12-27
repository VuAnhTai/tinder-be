import { includes } from 'lodash';
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

  getUser({ user_uuid }) {
    return this.model.findOne({ uuid: user_uuid });
  }

  listUser(query, excludes, includes) {
    const condition = { ...query };
    if (excludes && excludes.length) {
      condition.uuid = { $nin: excludes };
    }

    if (includes && includes.length) {
      condition.uuid = { $in: includes };
    }

    return this.model.find(condition);
  }
}
