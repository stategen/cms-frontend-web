/**
 *  Do not remove this unless you get business authorization.
 *  App
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {appInitModel, AppModel, AppState} from "../interfaces/AppFaces";
import AppApis from "../apis/AppApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import Menu from "../beans/Menu";
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";

export class AppCommand {
  static * setup_effect({payload}, {call, put, select}) {
    let newPayload = {};
    /** 获所所有菜单 */

    const getAllMenusPayload = yield AppCommand.getAllMenus_effect({payload: {...payload, ...(payload ? payload.getAllMenusParams : null)}}, {call, put, select});
    newPayload = AppCommand.getAllMenus_success_reducer(<AppState>newPayload, getAllMenusPayload);
    /**  */

    const getCookieUserPayload = yield AppCommand.getCookieUser_effect({payload: {...payload, ...(payload ? payload.getCookieUserParams : null)}}, {call, put, select});
    newPayload = AppCommand.getCookieUser_success_reducer(<AppState>newPayload, getCookieUserPayload);
    return newPayload;
  };

  /** 获所所有菜单 */
  static * getAllMenus_effect({payload}, {call, put, select}) {
    const menus: Menu[] = yield call(AppApis.getAllMenus, payload);

    const newPayload: AppState = {
      menuArea: {
        list: menus ? menus : [],
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 获所所有菜单  成功后 更新状态*/
  static getAllMenus_success_reducer = (state: AppState, payload): AppState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /**  */
  static * getCookieUser_effect({payload}, {call, put, select}) {
    const user: User = yield call(AppApis.getCookieUser, payload);

    const newPayload: AppState = {
      userArea: {
        list: user ? [user] : [],
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /**   成功后 更新状态*/
  static getCookieUser_success_reducer = (state: AppState, payload): AppState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /**  */
  static * logout_effect({payload}, {call, put, select}) {
    const simpleResponse: SimpleResponse = yield call(AppApis.logout, payload);
    if (simpleResponse && !simpleResponse.success) {
      throw simpleResponse.message;
    }

    const newPayload: AppState = {
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /**   成功后 更新状态*/
  static logout_success_reducer = (state: AppState, payload): AppState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const appDefaultModel: AppModel = <AppModel>(mergeObjects(abstractModel, appInitModel));

appDefaultModel.subscriptions.setup = ({dispatch, history}) => {
  history.listen((location) => {
    if (!RouteUtil.isRoutMatchPathname(appDefaultModel.pathname, location.pathname)){
      return;
    }

    const payload = location.query || {page: 1, pageSize: 10};
    dispatch({
      type: 'app/setup',
      payload,
    })
  })
};
;

appDefaultModel.effects.setup = function* ({payload}, {call, put, select}) {
  const appState = yield select(_=>_.app);
  const routeOpend = RouteUtil.isRouteOpend(appState.routeOrders, appDefaultModel.pathname);
  if (!routeOpend){
    return;
  }
  const newPayload = yield AppCommand.setup_effect({payload}, {call, put, select});

  yield put({
      type: 'setup_success',
      payload: newPayload,
    }
  )
};

appDefaultModel.reducers.setup_success = (state: AppState, {payload}): AppState => {
  return mergeObjects(
    state,
    payload,
  );
};

/** 获所所有菜单 */
appDefaultModel.effects.getAllMenus = function* ({payload}, {call, put, select}) {
  const newPayload = yield AppCommand.getAllMenus_effect({payload}, {call, put, select});
  yield put({
      type: 'getAllMenus_success',
      payload: newPayload,
    }
  )
};

appDefaultModel.reducers.getAllMenus_success = (state: AppState, {payload}): AppState => {
  return AppCommand.getAllMenus_success_reducer(state, payload);
};

/**  */
appDefaultModel.effects.getCookieUser = function* ({payload}, {call, put, select}) {
  const newPayload = yield AppCommand.getCookieUser_effect({payload}, {call, put, select});
  yield put({
      type: 'getCookieUser_success',
      payload: newPayload,
    }
  )
};

appDefaultModel.reducers.getCookieUser_success = (state: AppState, {payload}): AppState => {
  return AppCommand.getCookieUser_success_reducer(state, payload);
};

/**  */
appDefaultModel.effects.logout = function* ({payload}, {call, put, select}) {
  const newPayload = yield AppCommand.logout_effect({payload}, {call, put, select});
  yield put({
      type: 'logout_success',
      payload: newPayload,
    }
  )
};

appDefaultModel.reducers.logout_success = (state: AppState, {payload}): AppState => {
  return AppCommand.logout_success_reducer(state, payload);
};

