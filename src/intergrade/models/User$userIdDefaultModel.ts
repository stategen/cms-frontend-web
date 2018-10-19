/**
 *  Do not remove this unless you get business authorization.
 *  User$userId
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {user$userIdInitModel, User$userIdModel, User$userIdState} from "../interfaces/User$userIdFaces";
import User$userIdApis from "../apis/User$userIdApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import User from "../beans/User";

export class User$userIdCommand {
  /** 获取用户详情 */
  static * getUserById_effect({payload}, {call, put, select}) {
    const user: User = yield call(User$userIdApis.getUserById, payload);
    const oldUsers: User[]  = yield select(({user$userId: user$userIdState}) => user$userIdState.userArea.list);
    const users = updateArray(oldUsers, user ? user : null, "userId");

    const newPayload: User$userIdState = {
      userArea: {
        list: users,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 获取用户详情  成功后 更新状态*/
  static getUserById_success_reducer = (state: User$userIdState, payload): User$userIdState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const user$userIdDefaultModel: User$userIdModel = <User$userIdModel>(mergeObjects(abstractModel, user$userIdInitModel));
/** 获取用户详情 */
user$userIdDefaultModel.effects.getUserById = function* ({payload}, {call, put, select}) {
  const newPayload = yield User$userIdCommand.getUserById_effect({payload}, {call, put, select});
  yield put({
      type: 'getUserById_success',
      payload: newPayload,
    }
  )
};

user$userIdDefaultModel.reducers.getUserById_success = (state: User$userIdState, {payload}): User$userIdState => {
  return User$userIdCommand.getUserById_success_reducer(state, payload);
};

