/**
 *  Do not remove this unless you get business authorization.
 *  Dashboard
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
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

