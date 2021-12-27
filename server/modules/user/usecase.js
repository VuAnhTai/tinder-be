import { CoreUsecase } from '../../core/service/usecase';
import { Constant } from '../../config/constant';
import { UserActionRepo } from '../userAction/repo';

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
    this.UserActionRepo = new UserActionRepo();
  }

  async listUser(query) {
    const { user_uuid } = this.context.currentUser;
    const [actionUsers, actionUsersLikedUser] = await Promise.all([
      this.UserActionRepo.listUserAction({ user_uuid }),
      this.UserActionRepo.listUserAction({
        user_action_uuid: user_uuid,
        is_liked: Constant.ACTIVE,
      }),
    ]);

    const listUserActionUuid = actionUsers.map(
      action => action.user_action_uuid
    );

    const result = await this.repo.listUser(
      query,
      [user_uuid, ...listUserActionUuid],
      []
    );

    return { users: result, actions: actionUsersLikedUser };
  }

  async listLiked(query) {
    const { user_uuid } = this.context.currentUser;
    const actionUsers = await this.UserActionRepo.listUserAction({
      user_uuid,
      is_liked: Constant.ACTIVE,
    });
    const listUserActionUuid = actionUsers.map(
      action => action.user_action_uuid
    );
    if (!listUserActionUuid.length) {
      return [];
    }

    return this.repo.listUser(query, [], listUserActionUuid);
  }

  async listMatches(query) {
    const { user_uuid } = this.context.currentUser;
    const actionUsers = await this.UserActionRepo.listUserAction({
      user_uuid,
      is_matches: Constant.ACTIVE,
    });
    const listUserActionUuid = actionUsers.map(
      action => action.user_action_uuid
    );
    if (!listUserActionUuid.length) {
      return [];
    }

    return this.repo.listUser(query, [], listUserActionUuid);
  }
}
