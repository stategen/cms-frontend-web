/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {userInitModel, UserModel, UserState} from "../interfaces/UserFaces";
import UserApis from "../apis/UserApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import AntdPageList from "../beans/AntdPageList";
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";

export class UserCommand {
  static * setup_effect({payload}, {call, put, select}) {
    let newPayload = {};
    /** 用户列表 */

    const getUsersPayload = yield UserCommand.getUsers_effect({payload}, {call, put, select});
    newPayload = UserCommand.getUsers_success_reducer(<UserState>newPayload, getUsersPayload);
    return newPayload;
  };

  /** 创建用户 */
  static * createUser_effect({payload}, {call, put, select}) {
    const user: User = yield call(UserApis.createUser, payload);
    const oldUsers: User[]  = yield select(({user: userState}) => userState.userArea.list);
    const users = updateArray(oldUsers, user ? user : null, "userId");

    const newPayload: UserState = {
      userArea: {
        list: users,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 创建用户  成功后 更新状态*/
  static createUser_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 删除用户 */
  static * deleteUserById_effect({payload}, {call, put, select}) {
    const simpleResponse: SimpleResponse = yield call(UserApis.deleteUserById, payload);
    if (simpleResponse && !simpleResponse.success) {
      throw simpleResponse.message;
    }

    const newPayload: UserState = {
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 删除用户  成功后 更新状态*/
  static deleteUserById_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 批量删除用户 */
  static * deleteUserByIds_effect({payload}, {call, put, select}) {
    const simpleResponse: SimpleResponse = yield call(UserApis.deleteUserByIds, payload);
    if (simpleResponse && !simpleResponse.success) {
      throw simpleResponse.message;
    }

    const newPayload: UserState = {
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 批量删除用户  成功后 更新状态*/
  static deleteUserByIds_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 用户列表 */
  static * getUsers_effect({payload}, {call, put, select}) {
    const userPageList: AntdPageList<User> = yield call(UserApis.getUsers, payload);
    const oldUsers: User[]  = yield select(({user: userState}) => userState.userArea.list);
    const pagination = userPageList ? userPageList.pagination : null;
    const users = updateArray(oldUsers, userPageList ? userPageList.list : null, "userId");

    const newPayload: UserState = {
      userArea: {
        list: users,
        pagination,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 用户列表  成功后 更新状态*/
  static getUsers_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 修改用户 */
  static * patchUser_effect({payload}, {call, put, select}) {
    const user: User = yield call(UserApis.patchUser, payload);
    const oldUsers: User[]  = yield select(({user: userState}) => userState.userArea.list);
    const users = updateArray(oldUsers, user ? user : null, "userId");

    const newPayload: UserState = {
      userArea: {
        list: users,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 修改用户  成功后 更新状态*/
  static patchUser_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const userDefaultModel: UserModel = <UserModel>(mergeObjects(abstractModel, userInitModel));

userDefaultModel.subscriptions.setup = ({dispatch, history}) => {
  history.listen((location) => {
    if (!RouteUtil.isRoutMatchPathname(userDefaultModel.pathname, location.pathname)){
      return;
    }

    const payload = location.query || {page: 1, pageSize: 10};
    dispatch({
      type: 'user/setup',
      payload,
    })
  })
};
;

userDefaultModel.effects.setup = function* ({payload}, {call, put, select}) {
  const appState = yield select(_=>_.app);
  const routeOpend = RouteUtil.isRouteOpend(appState.routeOrders, userDefaultModel.pathname);
  if (!routeOpend){
    return;
  }
  const newPayload = yield UserCommand.setup_effect({payload}, {call, put, select});

  yield put({
      type: 'setup_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.setup_success = (state: UserState, {payload}): UserState => {
  return mergeObjects(
    state,
    payload,
  );
};

/** 创建用户 */
userDefaultModel.effects.createUser = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.createUser_effect({payload}, {call, put, select});
  yield put({
      type: 'createUser_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.createUser_success = (state: UserState, {payload}): UserState => {
  return UserCommand.createUser_success_reducer(state, payload);
};

/** 删除用户 */
userDefaultModel.effects.deleteUserById = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.deleteUserById_effect({payload}, {call, put, select});
  yield put({
      type: 'deleteUserById_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.deleteUserById_success = (state: UserState, {payload}): UserState => {
  return UserCommand.deleteUserById_success_reducer(state, payload);
};

/** 批量删除用户 */
userDefaultModel.effects.deleteUserByIds = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.deleteUserByIds_effect({payload}, {call, put, select});
  yield put({
      type: 'deleteUserByIds_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.deleteUserByIds_success = (state: UserState, {payload}): UserState => {
  return UserCommand.deleteUserByIds_success_reducer(state, payload);
};

/** 用户列表 */
userDefaultModel.effects.getUsers = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.getUsers_effect({payload}, {call, put, select});
  yield put({
      type: 'getUsers_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.getUsers_success = (state: UserState, {payload}): UserState => {
  return UserCommand.getUsers_success_reducer(state, payload);
};

/** 修改用户 */
userDefaultModel.effects.patchUser = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.patchUser_effect({payload}, {call, put, select});
  yield put({
      type: 'patchUser_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.patchUser_success = (state: UserState, {payload}): UserState => {
  return UserCommand.patchUser_success_reducer(state, payload);
};

