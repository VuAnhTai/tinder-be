import { Constant } from '../../config/constant';
import { CoreRepo } from '../../core/service/repo';
import { UserActionModel } from './model';

/**
 * @export
 * @class UserActionRepo
 * @extends {CoreRepo}
 */
export class UserActionRepo extends CoreRepo {
  /**
   * Creates an instance of UserActionRepo.
   * @memberof UserActionRepo
   */
  constructor() {
    super(UserActionModel);
  }

  listUserAction(query) {
    return this.model.find(query);
  }

  findMatches({ user_uuid, user_action_uuid }) {
    return this.model.findOne({
      user_uuid: user_action_uuid,
      user_action_uuid: user_uuid,
    });
  }

  updateMatches({ user_uuid, user_action_uuid }) {
    return this.model.updateOne({
      user_uuid: user_action_uuid,
      user_action_uuid: user_uuid,
      is_matches: Constant.ACTIVE,
    });
  }

  create(data) {
    return this.model.create(data);
  }
}
