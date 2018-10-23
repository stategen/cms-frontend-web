/**
 *  Do not remove this unless you get business authorization.
 *  User$userId
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, BaseProps, Reducer, AreaState, Subscription, Subscriptions, RouterReduxPushPros} from '@utils/DvaUtil';
import {user$userIdCustomState,User$userIdCustomSubscriptions , User$userIdCustomEffects, User$userIdCustomReducers} from '@pages/user/$userId/User$userIdCustomFaces'
import User from "../beans/User";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface User$userIdInitState extends BaseState {
  userArea?: AreaState<User>;
}

export type User$userIdState = User$userIdInitState & typeof user$userIdCustomState;

export interface User$userIdInitSubscriptions extends Subscriptions{
}

export type User$userIdSubscriptions = User$userIdInitSubscriptions & User$userIdCustomSubscriptions;

export interface User$userIdInitEffects extends Effects {
  /** 获取用户详情 */
  getUserById?: Effect,
}

export type User$userIdEffects = User$userIdInitEffects & User$userIdCustomEffects;

interface User$userIdInitReducers<S extends User$userIdState> extends Reducers<S> {
  /** 获取用户详情  成功后 更新状态*/
  getUserById_success?: Reducer<User$userIdState>,
}

export type User$userIdReducers = User$userIdInitReducers<User$userIdState> & User$userIdCustomReducers;

export interface User$userIdModel extends IModel<User$userIdState, User$userIdReducers, User$userIdEffects> {
  /** user$userId */
  namespace?: string;
  /** /user/:userId */
  pathname?: string;
  state?: User$userIdState;
  reducers?: User$userIdReducers;
  effects?: User$userIdEffects;
  subscriptions?: User$userIdSubscriptions;
}

export interface User$userIdProps extends BaseProps {
  user$userIdState?: User$userIdState,
}

export const user$userIdInitModel: User$userIdModel = <User$userIdModel>{
  namespace: 'user$userId',
  pathname: '/user/:userId',
  state: {},
  subscriptions: {},
  reducers: <User$userIdReducers>{},
  effects: <User$userIdEffects>{},
};

user$userIdInitModel.state.userArea = {
  areaName: 'userArea',
  item: null,
  list: [],
  pagination: null,
  selectedRowKeys: [],
  doEdit: false,
  doQuery: false,
  type: null,
};

/***把 namespace 带过来，以便生成路径*/
export const user$userIdEffects = modelPathsProxy<User$userIdEffects>(user$userIdInitModel);

/***把 namespace 带过来，以便生成路径*/
export const user$userIdReducers = modelPathsProxy<User$userIdReducers>(user$userIdInitModel);

export class User$userIdDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: user$userIdInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  /** 获取用户详情 */
  static getUserById_effect(params: { userId: string }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: User$userIdState) {
    return {
      type: user$userIdInitModel.namespace + '/getUserById',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  static updateState_reducer(user$userIdState: User$userIdState) {
    return {
      type: user$userIdInitModel.namespace + '/updateState',
      payload: {
        ...user$userIdState,
      }
    }
  }
}