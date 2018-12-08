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
import {PaginationProps} from "antd/lib/pagination";
import RoleType from "../enums/RoleType";
import User from "../beans/User";

export class UserCommand {
  static * setup_effect({payload}, {call, put, select}) {
    let newPayload = {};

    /** 用户列表 */
    const getUserPageListByDefaultQueryPayload = yield UserCommand.getUserPageListByDefaultQuery_effect({payload}, {call, put, select});
    newPayload = UserCommand.getUserPageListByDefaultQuery_success_reducer(<UserState>newPayload, getUserPageListByDefaultQueryPayload);
    return newPayload;
  };

  /** 创建用户 */
  static * createUser_effect({payload}, {call, put, select}) {
    const user: User = yield call(UserApis.createUser, payload);
    const oldUserArea = yield select((_) => _.user.userArea);
    const users = updateArray(oldUserArea.list, user ? user : null, "userId");

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
  static * delete_effect({payload}, {call, put, select}) {
    const result: string = yield call(UserApis.delete, payload);
    const oldUserArea = yield select((_) => _.user.userArea);
    const users = delateArray(oldUserArea.list, result ? result : null, "userId");

    const newPayload: UserState = {
      userArea: {
        list: users,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };


  /** 删除用户  成功后 更新状态*/
  static delete_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 批量删除用户 */
  static * deleteByUserIds_effect({payload}, {call, put, select}) {
    const result: string[] = yield call(UserApis.deleteByUserIds, payload);
    const oldUserArea = yield select((_) => _.user.userArea);
    const users = delateArray(oldUserArea.list, result ? result : null, "userId");

    const newPayload: UserState = {
      userArea: {
        list: users,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };


  /** 批量删除用户  成功后 更新状态*/
  static deleteByUserIds_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 用户列表 */
  static * getUserPageListByDefaultQuery_effect({payload}, {call, put, select}) {
    const oldUserArea = yield select((_) => _.user.userArea);
    payload = {...oldUserArea.queryRule, ...payload};
    const userPageList: AntdPageList<User> = yield call(UserApis.getUserPageListByDefaultQuery, payload);
    const pagination = userPageList ? userPageList.pagination : null;
    const users = updateArray(oldUserArea.list, userPageList ? userPageList.list : null, "userId");

    const newPayload: UserState = {
      userArea: {
        list: users,
        pagination,
        queryRule: payload,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };

  static * getUserPageListByDefaultQuery_next_effect({payload}, {call, put, select}) {
    const oldUserArea = yield select((_) => _.user.userArea);
    const pagination = oldUserArea.pagination;
    let page = pagination.current;
    page = (page ? page : 0) + 1;
    const totalPages = Math.trunc(pagination.total / (pagination.pageSize || 10)) + 1;
    page = Math.min(page, totalPages)
    payload = {...oldUserArea.queryRule, page};
    const newPayload = yield UserCommand.getUserPageListByDefaultQuery_effect({payload}, {call, put, select});
    return newPayload;
  }


  /** 用户列表  成功后 更新状态*/
  static getUserPageListByDefaultQuery_success_reducer = (state: UserState, payload): UserState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 修改用户 */
  static * patchUser_effect({payload}, {call, put, select}) {
    const user: User = yield call(UserApis.patchUser, payload);
    const oldUserArea = yield select((_) => _.user.userArea);
    const users = updateArray(oldUserArea.list, user ? user : null, "userId");

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
  history.listen((listener) => {
    const pathname = listener.pathname;
    const match = RouteUtil.getMatch(userDefaultModel.pathname, pathname);
    if (!match) {
      return;
    }
    let payload = {page: 1, pageSize: 10, ...RouteUtil.getQuery(listener)} ;
    const getUserPageListByDefaultQueryParams = userDefaultModel.getUserPageListByDefaultQueryInitParamsFn ? userDefaultModel.getUserPageListByDefaultQueryInitParamsFn({pathname, match}) : null;
    payload = {...payload, ...getUserPageListByDefaultQueryParams}
    dispatch({
      type: 'user/setup',
      payload,
    })
  })
};

userDefaultModel.effects.setup = function* ({payload}, {call, put, select}) {
  const appState = yield select(_ => _.app);
  const routeOpend = RouteUtil.isRouteOpend(appState.routeOrders, userDefaultModel.pathname);
  if (!routeOpend) {
    return;
  }

  if (userDefaultModel.getInitState){
    const initState =userDefaultModel.getInitState();
    yield put({
        type: 'updateState',
        payload: initState,
      }
    )
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
userDefaultModel.effects.delete = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.delete_effect({payload}, {call, put, select});
  yield put({
      type: 'delete_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.delete_success = (state: UserState, {payload}): UserState => {
  return UserCommand.delete_success_reducer(state, payload);
};

/** 批量删除用户 */
userDefaultModel.effects.deleteByUserIds = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.deleteByUserIds_effect({payload}, {call, put, select});
  yield put({
      type: 'deleteByUserIds_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.deleteByUserIds_success = (state: UserState, {payload}): UserState => {
  return UserCommand.deleteByUserIds_success_reducer(state, payload);
};

/** 用户列表 */
userDefaultModel.effects.getUserPageListByDefaultQuery = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.getUserPageListByDefaultQuery_effect({payload}, {call, put, select});
  yield put({
      type: 'getUserPageListByDefaultQuery_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.effects.getUserPageListByDefaultQuery_next = function* ({payload}, {call, put, select}) {
  const newPayload = yield UserCommand.getUserPageListByDefaultQuery_next_effect({payload}, {call, put, select});
  yield put({
      type: 'getUserPageListByDefaultQuery_success',
      payload: newPayload,
    }
  )
};

userDefaultModel.reducers.getUserPageListByDefaultQuery_success = (state: UserState, {payload}): UserState => {
  return UserCommand.getUserPageListByDefaultQuery_success_reducer(state, payload);
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

