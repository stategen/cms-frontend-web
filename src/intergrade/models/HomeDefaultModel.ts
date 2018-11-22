/**
 *  Do not remove this unless you get business authorization.
 *  Home
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {homeInitModel, HomeModel, HomeState} from "../interfaces/HomeFaces";
import HomeApis from "../apis/HomeApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";

export class HomeCommand {
  /**  */
  static * getDashboard_effect({payload}, {call, put, select}) {
    const result: any = yield call(HomeApis.getDashboard, payload);

    const newPayload: HomeState = {
      ...result,
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };

  /**   成功后 更新状态*/
  static getDashboard_success_reducer = (state: HomeState, payload): HomeState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const homeDefaultModel: HomeModel = <HomeModel>(mergeObjects(abstractModel, homeInitModel));
/**  */
homeDefaultModel.effects.getDashboard = function* ({payload}, {call, put, select}) {
  const newPayload = yield HomeCommand.getDashboard_effect({payload}, {call, put, select});
  yield put({
      type: 'getDashboard_success',
      payload: newPayload,
    }
  )
};

homeDefaultModel.reducers.getDashboard_success = (state: HomeState, {payload}): HomeState => {
  return HomeCommand.getDashboard_success_reducer(state, payload);
};

