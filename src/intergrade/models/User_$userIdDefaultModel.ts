/**
 *  Do not remove this unless you get business authorization.
 *  User_$userId
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {user_$userIdInitModel, User_$userIdModel, User_$userIdState} from "../interfaces/User_$userIdFaces";
import User_$userIdApis from "../apis/User_$userIdApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import User from "../beans/User";

export class User_$userIdCommand {
  /** 获取用户详情 */
  static * getUserById_effect({payload}, {call, put, select}) {
    const user: User = yield call(User_$userIdApis.getUserById, payload);
    const oldUsers: User[] = yield select(({user_$userId: user_$userIdState}) => user_$userIdState.userArea.list);
    const users = updateArray(oldUsers, user ? user : null, "userId");

    const newPayload: User_$userIdState = {
      userArea: {
        list: users,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };

  /** 获取用户详情  成功后 更新状态*/
  static getUserById_success_reducer = (state: User_$userIdState, payload): User_$userIdState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const user_$userIdDefaultModel: User_$userIdModel = <User_$userIdModel>(mergeObjects(abstractModel, user_$userIdInitModel));
/** 获取用户详情 */
user_$userIdDefaultModel.effects.getUserById = function* ({payload}, {call, put, select}) {
  const newPayload = yield User_$userIdCommand.getUserById_effect({payload}, {call, put, select});
  yield put({
      type: 'getUserById_success',
      payload: newPayload,
    }
  )
};

user_$userIdDefaultModel.reducers.getUserById_success = (state: User_$userIdState, {payload}): User_$userIdState => {
  return User_$userIdCommand.getUserById_success_reducer(state, payload);
};

