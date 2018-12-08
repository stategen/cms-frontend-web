/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {roleInitModel, RoleModel, RoleState} from "../interfaces/RoleFaces";
import RoleApis from "../apis/RoleApis";
import {abstractModel, updateArray, delateArray, mergeObjects, AreaState} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import AntdPageList from "../beans/AntdPageList";
import {PaginationProps} from "antd/lib/pagination";
import Role from "../beans/Role";
import RoleType from "../enums/RoleType";

export class RoleCommand {
  static * setup_effect({payload}, {call, put, select}) {
    let newPayload = {};

    /** 角色分页列表,多条件 */
    const getRolePageListByDefaultQueryPayload = yield RoleCommand.getRolePageListByDefaultQuery_effect({payload}, {call, put, select});
    newPayload = RoleCommand.getRolePageListByDefaultQuery_success_reducer(<RoleState>newPayload, getRolePageListByDefaultQueryPayload);
    return newPayload;
  };

  /** 删除角色 */
  static * delete_effect({payload}, {call, put, select}) {
    const result: string = yield call(RoleApis.delete, payload);
    const oldRoleArea = yield select((_) => _.role.roleArea);
    const roles = delateArray(oldRoleArea.list, result ? result : null, "roleId");

    const newPayload: RoleState = {
      roleArea: {
        list: roles,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };


  /** 删除角色  成功后 更新状态*/
  static delete_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 批量删除角色 */
  static * deleteByRoleIds_effect({payload}, {call, put, select}) {
    const result: string[] = yield call(RoleApis.deleteByRoleIds, payload);
    const oldRoleArea = yield select((_) => _.role.roleArea);
    const roles = delateArray(oldRoleArea.list, result ? result : null, "roleId");

    const newPayload: RoleState = {
      roleArea: {
        list: roles,
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };


  /** 批量删除角色  成功后 更新状态*/
  static deleteByRoleIds_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 角色分页列表,多条件 */
  static * getRolePageListByDefaultQuery_effect({payload}, {call, put, select}) {
    const oldRoleArea = yield select((_) => _.role.roleArea);
    payload = {...oldRoleArea.queryRule, ...payload};
    const rolePageList: AntdPageList<Role> = yield call(RoleApis.getRolePageListByDefaultQuery, payload);
    const pagination = rolePageList ? rolePageList.pagination : null;

    const newPayload: RoleState = {
      roleArea: {
        list: rolePageList ? rolePageList.list : [],
        pagination,
        queryRule: payload,
        ...{
          doEdit: false,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };

  static * getRolePageListByDefaultQuery_next_effect({payload}, {call, put, select}) {
    const oldRoleArea = yield select((_) => _.role.roleArea);
    const pagination = oldRoleArea.pagination;
    let page = pagination.current;
    page = (page ? page : 0) + 1;
    const totalPages = Math.trunc(pagination.total / (pagination.pageSize || 10)) + 1;
    page = Math.min(page, totalPages)
    payload = {...oldRoleArea.queryRule, page};
    const newPayload = yield RoleCommand.getRolePageListByDefaultQuery_effect({payload}, {call, put, select});
    return newPayload;
  }


  /** 角色分页列表,多条件  成功后 更新状态*/
  static getRolePageListByDefaultQuery_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };


  /** 关闭role对话框  更新状态*/
  static hideRoleModal_reducer = (state: RoleState, payload): RoleState => {
    const mergedState: RoleState = {
      roleArea: {
        ...{
          doEdit: false,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...{
        allModalVisible: false,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };

    return mergeObjects(
      state,
      mergedState,
      payload,
    );
  };

  /** 创建角色 */
  static * insert_effect({payload}, {call, put, select}) {
    const role: Role = yield call(RoleApis.insert, payload);
    const oldRoleArea = yield select((_) => _.role.roleArea);
    const roles = updateArray(oldRoleArea.list, role ? role : null, "roleId");

    const newPayload: RoleState = {
      roleArea: {
        list: roles,
        ...{
          doEdit: false,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };


  /** 创建角色  成功后 更新状态*/
  static insert_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };


  /** 打开role对话框  更新状态*/
  static showRoleModal_reducer = (state: RoleState, payload): RoleState => {
    const mergedState: RoleState = {
      roleArea: {
        ...{
          doEdit: true,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
    };

    return mergeObjects(
      state,
      mergedState,
      payload,
    );
  };

  /** 更新角色 */
  static * update_effect({payload}, {call, put, select}) {
    const role: Role = yield call(RoleApis.update, payload);
    const oldRoleArea = yield select((_) => _.role.roleArea);
    const roles = updateArray(oldRoleArea.list, role ? role : null, "roleId");

    const newPayload: RoleState = {
      roleArea: {
        list: roles,
        ...{
          doEdit: false,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;
  };


  /** 更新角色  成功后 更新状态*/
  static update_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

}

export const roleDefaultModel: RoleModel = <RoleModel>(mergeObjects(abstractModel, roleInitModel));

roleDefaultModel.subscriptions.setup = ({dispatch, history}) => {
  history.listen((listener) => {
    const pathname = listener.pathname;
    const match = RouteUtil.getMatch(roleDefaultModel.pathname, pathname);
    if (!match) {
      return;
    }
    let payload = {page: 1, pageSize: 10, ...RouteUtil.getQuery(listener)} ;
    const getRolePageListByDefaultQueryParams = roleDefaultModel.getRolePageListByDefaultQueryInitParamsFn ? roleDefaultModel.getRolePageListByDefaultQueryInitParamsFn({pathname, match}) : null;
    payload = {...payload, ...getRolePageListByDefaultQueryParams}
    dispatch({
      type: 'role/setup',
      payload,
    })
  })
};

roleDefaultModel.effects.setup = function* ({payload}, {call, put, select}) {
  const appState = yield select(_ => _.app);
  const routeOpend = RouteUtil.isRouteOpend(appState.routeOrders, roleDefaultModel.pathname);
  if (!routeOpend) {
    return;
  }

  if (roleDefaultModel.getInitState){
    const initState =roleDefaultModel.getInitState();
    yield put({
        type: 'updateState',
        payload: initState,
      }
    )
  }

  const newPayload = yield RoleCommand.setup_effect({payload}, {call, put, select});
  yield put({
      type: 'setup_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.setup_success = (state: RoleState, {payload}): RoleState => {
  return mergeObjects(
    state,
    payload,
  );
};

/** 删除角色 */
roleDefaultModel.effects.delete = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.delete_effect({payload}, {call, put, select});
  yield put({
      type: 'delete_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.delete_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.delete_success_reducer(state, payload);
};

/** 批量删除角色 */
roleDefaultModel.effects.deleteByRoleIds = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.deleteByRoleIds_effect({payload}, {call, put, select});
  yield put({
      type: 'deleteByRoleIds_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.deleteByRoleIds_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.deleteByRoleIds_success_reducer(state, payload);
};

/** 角色分页列表,多条件 */
roleDefaultModel.effects.getRolePageListByDefaultQuery = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.getRolePageListByDefaultQuery_effect({payload}, {call, put, select});
  yield put({
      type: 'getRolePageListByDefaultQuery_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.effects.getRolePageListByDefaultQuery_next = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.getRolePageListByDefaultQuery_next_effect({payload}, {call, put, select});
  yield put({
      type: 'getRolePageListByDefaultQuery_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.getRolePageListByDefaultQuery_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.getRolePageListByDefaultQuery_success_reducer(state, payload);
};


roleDefaultModel.reducers.hideRoleModal = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.hideRoleModal_reducer(state, payload);
};

/** 创建角色 */
roleDefaultModel.effects.insert = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.insert_effect({payload}, {call, put, select});
  yield put({
      type: 'insert_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.insert_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.insert_success_reducer(state, payload);
};


roleDefaultModel.reducers.showRoleModal = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.showRoleModal_reducer(state, payload);
};

/** 更新角色 */
roleDefaultModel.effects.update = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.update_effect({payload}, {call, put, select});
  yield put({
      type: 'update_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.update_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.update_success_reducer(state, payload);
};

