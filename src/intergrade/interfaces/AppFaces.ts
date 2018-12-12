/**
 *  Do not remove this unless you get business authorization.
 *  App
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, ConnectionPros, Reducer, AreaState, Subscription,
        Subscriptions, RouterReduxPushPros, SetupParamsFun, mergeObjects, initAreaState} from '@utils/DvaUtil';
import {appCustomState,AppCustomSubscriptions , AppCustomEffects, AppCustomReducers} from '@pages/app/AppCustomFaces'
import Menu from "../beans/Menu";
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface AppInitState extends BaseState {
  menuArea?: AreaState<Menu>;
  userArea?: AreaState<User>;
}

export type AppState = AppInitState & Partial<typeof appCustomState>;

export interface AppInitSubscriptions extends Subscriptions{
  setup?: Subscription;
}

export type AppSubscriptions = AppInitSubscriptions & AppCustomSubscriptions;

export interface AppInitEffects extends Effects {
  setup?: Effect;
  /** 获所所有菜单 */
  getAllMenus?: Effect,
  /**  */
  getCookieUser?: Effect,
  /**  */
  logout?: Effect,
}

export type AppEffects = AppInitEffects & AppCustomEffects;

interface AppInitReducers<S extends AppState> extends Reducers<S> {
  setup_success?: Reducer<AppState>,
  /** 获所所有菜单  成功后 更新状态*/
  getAllMenus_success?: Reducer<AppState>,
  /**   成功后 更新状态*/
  getCookieUser_success?: Reducer<AppState>,
  /**   成功后 更新状态*/
  logout_success?: Reducer<AppState>,
}

export type AppReducers = AppInitReducers<AppState> & AppCustomReducers;

export interface AppModel extends IModel<AppState, AppReducers, AppEffects> {
  /** app */
  namespace?: string;
  /** /app */
  pathname?: string;
  state?: AppState;
  reducers?: AppReducers;
  effects?: AppEffects;
  subscriptions?: AppSubscriptions;
  getAllMenusInitParamsFn?: SetupParamsFun;
  getCookieUserInitParamsFn?: SetupParamsFun;
  getInitState?: () => AppState;
}

export interface AppProps extends ConnectionPros {
  appState?: AppState,
}

export const appInitModel: AppModel = <AppModel>{
  namespace: 'app',
  pathname: '/app',
  state: {},
  subscriptions: {},
  reducers: <AppReducers>{},
  effects: <AppEffects>{},
};

export const appMenuAreaState = {
  areaName: 'menuArea',
};

export const appUserAreaState = {
  areaName: 'userArea',
};

appInitModel.getInitState = () => {
  const initState = mergeObjects({menuArea: {...appMenuAreaState, ...initAreaState}, userArea: {...appUserAreaState, ...initAreaState}},appCustomState);
  return initState;
}

appInitModel.state=appInitModel.getInitState();

/***把 namespace 带过来，以便生成路径*/
export const appEffects = modelPathsProxy<AppEffects>(appInitModel);

/***把 namespace 带过来，以便生成路径*/
export const appReducers = modelPathsProxy<AppReducers>(appInitModel);

export class AppDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: appInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  static setup_effect(
              getAllMenusInitParams?: {params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState},
              getCookieUserInitParams?: {params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState},
               params?: {}) {
    return {
      type: appInitModel.namespace + '/setup',
      payload: {
        ...params,
        getAllMenusInitParams,
        getCookieUserInitParams,
      }
    }
  }

  /** 获所所有菜单 */
  static getAllMenus_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState) {
    return {
      type: appInitModel.namespace + '/getAllMenus',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };


  /**  */
  static getCookieUser_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState) {
    return {
      type: appInitModel.namespace + '/getCookieUser',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };


  /**  */
  static logout_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: AppState) {
    return {
      type: appInitModel.namespace + '/logout',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };


  static updateState_reducer(appState: AppState) {
    return {
      type: appInitModel.namespace + '/updateState',
      payload: {
        ...appState,
      }
    }
  }

}