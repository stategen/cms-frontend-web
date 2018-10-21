/**
 *  Do not remove this unless you get business authorization.
 *  Dashboard
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {dashboardInitModel, DashboardModel, DashboardState} from "../interfaces/DashboardFaces";
import DashboardApis from "../apis/DashboardApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";

export class DashboardCommand {
  /**  */
  static * getDashboard_effect({payload}, {call, put, select}) {
    const result: any = yield call(DashboardApis.getDashboard, payload);

    const newPayload: DashboardState = {
      ...result,
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /**   成功后 更新状态*/
  static getDashboard_success_reducer = (state: DashboardState, payload): DashboardState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const dashboardDefaultModel: DashboardModel = <DashboardModel>(mergeObjects(abstractModel, dashboardInitModel));
/**  */
dashboardDefaultModel.effects.getDashboard = function* ({payload}, {call, put, select}) {
  const newPayload = yield DashboardCommand.getDashboard_effect({payload}, {call, put, select});
  yield put({
      type: 'getDashboard_success',
      payload: newPayload,
    }
  )
};

dashboardDefaultModel.reducers.getDashboard_success = (state: DashboardState, {payload}): DashboardState => {
  return DashboardCommand.getDashboard_success_reducer(state, payload);
};

