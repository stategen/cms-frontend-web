/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {loginInitModel, LoginModel, LoginState} from "../interfaces/LoginFaces";
import LoginApis from "../apis/LoginApis";
import {updateArray, delateArray, mergeObjects, AreaState, BaseCommand, DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";

export const loginModel: LoginModel = loginInitModel;

/**  */
loginModel.effects.login = function* ({payload}, {call, put, select}) {
  const newPayload = yield LoginCommand.login_effect({payload}, {call, put, select});
  yield put(LoginCommand.login_success_type(newPayload));
};

loginModel.reducers.login_success = (state: LoginState, {payload}): LoginState => {
  return LoginCommand.login_success_reducer(state, payload);
};

/**  */
loginModel.effects.loginByMobile = function* ({payload}, {call, put, select}) {
  const newPayload = yield LoginCommand.loginByMobile_effect({payload}, {call, put, select});
  yield put(LoginCommand.loginByMobile_success_type(newPayload));
};

loginModel.reducers.loginByMobile_success = (state: LoginState, {payload}): LoginState => {
  return LoginCommand.loginByMobile_success_reducer(state, payload);
};

export class LoginCommand extends BaseCommand {

  /**  */
  static * login_effect({payload}, {call, put, select}) {
    const simpleResponse: SimpleResponse = yield call(LoginApis.login, payload);
    if (simpleResponse && !simpleResponse.success) {
      throw simpleResponse.message;
    }

    const newPayload: LoginState = {
      ...payload,
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static login_success_type(payload) {
    return {type: "login_success", payload: payload};
  }

  /**   成功后 更新状态*/
  static login_success_reducer = (state: LoginState, payload): LoginState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /**  */
  static * loginByMobile_effect({payload}, {call, put, select}) {
    const user: User = yield call(LoginApis.loginByMobile, payload);
    const oldUserArea = yield select((_) => _.login.userArea);
    const users = updateArray(oldUserArea.list, user, "userId");

    const newPayload: LoginState = {
      userArea: {
        list: users,
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static loginByMobile_success_type(payload) {
    return {type: "loginByMobile_success", payload: payload};
  }

  /**   成功后 更新状态*/
  static loginByMobile_success_reducer = (state: LoginState, payload): LoginState => {
    return mergeObjects(
      state,
      payload,
    );
  };
}