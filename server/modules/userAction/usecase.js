import { Constant } from '../../config/constant';
import { CoreUsecase } from '../../core/service/usecase';

/**
 * @export
 * @class UserActionUsecase
 * @extends {CoreUsecase}
 */

export class UserActionUsecase extends CoreUsecase {
  /**
   * Creates an instance of UserActionUsecase.
   * @memberof UserActionUsecase
   */
  constructor(repo) {
    super(repo);
  }

  async like(data) {
    const matches = await this.repo.findMatches({ data });
    const promises = [];
    let is_matches = Constant.DEACTIVE;
    if (matches && matches.is_liked === Constant.ACTIVE) {
      is_matches = Constant.ACTIVE;
      promises.push(this.repo.updateMatches({ data }));
    }

    promises.push(
      this.repo.create({
        user_uuid: data.user_uuid,
        user_action_uuid: data.user_action_uuid,
        is_liked: Constant.ACTIVE,
        is_matches,
      })
    );

    await Promise.all(promises);
    return is_matches;
  }

  pass(data) {
    return this.repo.create({
      user_uuid: data.user_uuid,
      user_action_uuid: data.user_action_uuid,
      is_liked: Constant.DEACTIVE,
    });
  }
}
