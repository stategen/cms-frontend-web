/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, BaseProps, Reducer, AreaState, Subscription, Subscriptions, RouterReduxPushPros} from '@utils/DvaUtil';
import {userCustomState,UserCustomSubscriptions , UserCustomEffects, UserCustomReducers} from '@pages/user/UserCustomFaces'
import AntdPageList from "../beans/AntdPageList";
import RoleType from "../enums/RoleType";
import User from "../beans/User";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface UserInitState extends BaseState {
  stringArea?: AreaState<string>;
  userArea?: AreaState<User>;
}

export type UserState = UserInitState & typeof userCustomState;

export interface UserInitSubscriptions extends Subscriptions{
  setup?: Subscription;
}

export type UserSubscriptions = UserInitSubscriptions & UserCustomSubscriptions;

export interface UserInitEffects extends Effects {
  setup?: Effect;
  /** 创建用户 */
  createUser?: Effect,
  /** 删除用户 */
  delete?: Effect,
  /** 批量删除用户 */
  deleteByUserIds?: Effect,
  /** 用户列表 */
  getUserPageListByDefaultQuery?: Effect,
  /** 修改用户 */
  patchUser?: Effect,
}

export type UserEffects = UserInitEffects & UserCustomEffects;

interface UserInitReducers<S extends UserState> extends Reducers<S> {
  setup_success?: Reducer<UserState>,
  /** 创建用户  成功后 更新状态*/
  createUser_success?: Reducer<UserState>,
  /** 删除用户  成功后 更新状态*/
  delete_success?: Reducer<UserState>,
  /** 批量删除用户  成功后 更新状态*/
  deleteByUserIds_success?: Reducer<UserState>,
  /** 用户列表  成功后 更新状态*/
  getUserPageListByDefaultQuery_success?: Reducer<UserState>,
  /** 修改用户  成功后 更新状态*/
  patchUser_success?: Reducer<UserState>,
}

export type UserReducers = UserInitReducers<UserState> & UserCustomReducers;

export interface UserModel extends IModel<UserState, UserReducers, UserEffects> {
  /** user */
  namespace?: string;
  /** /user */
  pathname?: string;
  state?: UserState;
  reducers?: UserReducers;
  effects?: UserEffects;
  subscriptions?: UserSubscriptions;
}

export interface UserProps extends BaseProps {
  userState?: UserState,
}

export const userInitModel: UserModel = <UserModel>{
  namespace: 'user',
  pathname: '/user',
  state: {},
  subscriptions: {},
  reducers: <UserReducers>{},
  effects: <UserEffects>{},
};

userInitModel.state.stringArea = {
  areaName: 'stringArea',
  item: null,
  list: [],
  pagination: null,
  selectedRowKeys: [],
  doEdit: false,
  doQuery: false,
  type: null,
};
userInitModel.state.userArea = {
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
export const userEffects = modelPathsProxy<UserEffects>(userInitModel);

/***把 namespace 带过来，以便生成路径*/
export const userReducers = modelPathsProxy<UserReducers>(userInitModel);

export class UserDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: userInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }
  static setup_effect(params: { userIds?: string[], usernameLike?: string, passwordLike?: string, roleTypes?: RoleType[], nameLike?: string, nickNameLike?: string, ageMin?: number, ageMax?: number, addressLike?: string, avatarLike?: string, emailLike?: string, createTimeMin?: Date, createTimeMax?: Date, updateTimeMin?: Date, updateTimeMax?: Date, pageSize?: number, page?: number }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: UserState) {
    return {
      type: userInitModel.namespace + '/setup',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  }

  /** 创建用户 */
  static createUser_effect(user: User, areaExtraProps__?: AreaState<any>, stateExtraProps__?: UserState) {
    return {
      type: userInitModel.namespace + '/createUser',
      payload: {
        user,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  /** 删除用户 */
  static delete_effect(params: { userId: string }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: UserState) {
    return {
      type: userInitModel.namespace + '/delete',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  /** 批量删除用户 */
  static deleteByUserIds_effect(params: { userIds?: string[] }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: UserState) {
    return {
      type: userInitModel.namespace + '/deleteByUserIds',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  /** 用户列表 */
  static getUserPageListByDefaultQuery_effect(params: { userIds?: string[], usernameLike?: string, passwordLike?: string, roleTypes?: RoleType[], nameLike?: string, nickNameLike?: string, ageMin?: number, ageMax?: number, addressLike?: string, avatarLike?: string, emailLike?: string, createTimeMin?: Date, createTimeMax?: Date, updateTimeMin?: Date, updateTimeMax?: Date, pageSize?: number, page?: number }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: UserState) {
    return {
      type: userInitModel.namespace + '/getUserPageListByDefaultQuery',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  /** 修改用户 */
  static patchUser_effect(user: User, areaExtraProps__?: AreaState<any>, stateExtraProps__?: UserState) {
    return {
      type: userInitModel.namespace + '/patchUser',
      payload: {
        user,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  static updateState_reducer(userState: UserState) {
    return {
      type: userInitModel.namespace + '/updateState',
      payload: {
        ...userState,
      }
    }
  }
}