/**
 *  Do not remove this unless you get business authorization.
 *  Dashboard
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, BaseProps, Reducer, AreaState, Subscription, Subscriptions, RouterReduxPushPros} from '@utils/DvaUtil';
import {dashboardCustomState,DashboardCustomSubscriptions , DashboardCustomEffects, DashboardCustomReducers} from '@pages/dashboard/DashboardCustomFaces'
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface DashboardInitState extends BaseState {
  anyArea?: AreaState<any>;
}

export type DashboardState = DashboardInitState & typeof dashboardCustomState;

export interface DashboardInitSubscriptions extends Subscriptions{
}

export type DashboardSubscriptions = DashboardInitSubscriptions & DashboardCustomSubscriptions;

export interface DashboardInitEffects extends Effects {
  /**  */
  getDashboard?: Effect,
}

export type DashboardEffects = DashboardInitEffects & DashboardCustomEffects;

interface DashboardInitReducers<S extends DashboardState> extends Reducers<S> {
  /**   成功后 更新状态*/
  getDashboard_success?: Reducer<DashboardState>,
}

export type DashboardReducers = DashboardInitReducers<DashboardState> & DashboardCustomReducers;

export interface DashboardModel extends IModel<DashboardState, DashboardReducers, DashboardEffects> {
  /** dashboard */
  namespace?: string;
  /** /dashboard */
  pathname?: string;
  state?: DashboardState;
  reducers?: DashboardReducers;
  effects?: DashboardEffects;
  subscriptions?: DashboardSubscriptions;
}

export interface DashboardProps extends BaseProps {
  dashboardState?: DashboardState,
}

export const dashboardInitModel: DashboardModel = <DashboardModel>{
  namespace: 'dashboard',
  pathname: '/dashboard',
  state: {},
  subscriptions: {},
  reducers: <DashboardReducers>{},
  effects: <DashboardEffects>{},
};

dashboardInitModel.state.anyArea = {
  areaName: 'anyArea',
  item: null,
  list: [],
  pagination: null,
  selectedRowKeys: [],
  doEdit: false,
  doQuery: false,
  type: null,
};

/***把 namespace 带过来，以便生成路径*/
export const dashboardEffects = modelPathsProxy<DashboardEffects>(dashboardInitModel);

/***把 namespace 带过来，以便生成路径*/
export const dashboardReducers = modelPathsProxy<DashboardReducers>(dashboardInitModel);

export class DashboardDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: dashboardInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  /**  */
  static getDashboard_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: DashboardState) {
    return {
      type: dashboardInitModel.namespace + '/getDashboard',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  static updateState_reducer(dashboardState: DashboardState) {
    return {
      type: dashboardInitModel.namespace + '/updateState',
      payload: {
        ...dashboardState,
      }
    }
  }
}