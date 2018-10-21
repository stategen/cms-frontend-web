/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {loginInitModel, LoginModel, LoginState} from "../interfaces/LoginFaces";
import LoginApis from "../apis/LoginApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import SimpleResponse from "../beans/SimpleResponse";

export class LoginCommand {
  /**  */
  static * login_effect({payload}, {call, put, select}) {
    const simpleResponse: SimpleResponse = yield call(LoginApis.login, payload);
    if (simpleResponse && !simpleResponse.success) {
      throw simpleResponse.message;
    }

    const newPayload: LoginState = {
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /**   成功后 更新状态*/
  static login_success_reducer = (state: LoginState, payload): LoginState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const loginDefaultModel: LoginModel = <LoginModel>(mergeObjects(abstractModel, loginInitModel));
/**  */
loginDefaultModel.effects.login = function* ({payload}, {call, put, select}) {
  const newPayload = yield LoginCommand.login_effect({payload}, {call, put, select});
  yield put({
      type: 'login_success',
      payload: newPayload,
    }
  )
};

loginDefaultModel.reducers.login_success = (state: LoginState, {payload}): LoginState => {
  return LoginCommand.login_success_reducer(state, payload);
};

