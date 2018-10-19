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
import Role from "../beans/Role";
import RoleType from "../enums/RoleType";
import SimpleResponse from "../beans/SimpleResponse";

export class RoleCommand {
  static * setup_effect({payload}, {call, put, select}) {
    let newPayload = {};
    /** 角色分页列表,多条件 */

    const getRolePageListByDefaultQueryPayload = yield RoleCommand.getRolePageListByDefaultQuery_effect({payload}, {call, put, select});
    newPayload = RoleCommand.getRolePageListByDefaultQuery_success_reducer(<RoleState>newPayload, getRolePageListByDefaultQueryPayload);
    return newPayload;
  };

  /** 批量删除角色 */
  static * batchDelete_effect({payload}, {call, put, select}) {
    const result: string[] = yield call(RoleApis.batchDelete, payload);
    const oldRoles: Role[]  = yield select(({role: roleState}) => roleState.roleArea.list);
    const roles = delateArray(oldRoles, result ? result : null, "roleId");

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
  static batchDelete_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 删除角色 */
  static * deleteByRoleId_effect({payload}, {call, put, select}) {
    const result: string = yield call(RoleApis.deleteByRoleId, payload);
    const oldRoles: Role[]  = yield select(({role: roleState}) => roleState.roleArea.list);
    const roles = delateArray(oldRoles, result ? result : null, "roleId");

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
  static deleteByRoleId_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 删除角色 */
  static * deleteWithResponse_effect({payload}, {call, put, select}) {
    const simpleResponse: SimpleResponse = yield call(RoleApis.deleteWithResponse, payload);
    if (simpleResponse && !simpleResponse.success) {
      throw simpleResponse.message;
    }

    const newPayload: RoleState = {
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 删除角色  成功后 更新状态*/
  static deleteWithResponse_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 角色列表 */
  static * getAll_effect({payload}, {call, put, select}) {
    const roles: Role[] = yield call(RoleApis.getAll, payload);

    const newPayload: RoleState = {
      roleArea: {
        list: roles ? roles : [],
        ...{
          doEdit: false,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 角色列表  成功后 更新状态*/
  static getAll_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 角色分页列表 */
  static * getRolePageList_effect({payload}, {call, put, select}) {
    const rolePageList: AntdPageList<Role> = yield call(RoleApis.getRolePageList, payload);
    const pagination = rolePageList ? rolePageList.pagination : null;

    const newPayload: RoleState = {
      roleArea: {
        list: rolePageList ? rolePageList.list : [],
        pagination,
        ...{
          doEdit: false,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

  /** 角色分页列表  成功后 更新状态*/
  static getRolePageList_success_reducer = (state: RoleState, payload): RoleState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 角色分页列表,多条件 */
  static * getRolePageListByDefaultQuery_effect({payload}, {call, put, select}) {
    const rolePageList: AntdPageList<Role> = yield call(RoleApis.getRolePageListByDefaultQuery, payload);
    const pagination = rolePageList ? rolePageList.pagination : null;

    const newPayload: RoleState = {
      roleArea: {
        list: rolePageList ? rolePageList.list : [],
        pagination,
        ...{
          doEdit: false,
        },
        ...payload ? payload.areaExtraProps__ : null,
      },
      ...payload ? payload.stateExtraProps__ : null,
    };
    return newPayload;

  };

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
    const oldRoles: Role[]  = yield select(({role: roleState}) => roleState.roleArea.list);
    const roles = updateArray(oldRoles, role ? role : null, "roleId");

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
    const oldRoles: Role[]  = yield select(({role: roleState}) => roleState.roleArea.list);
    const roles = updateArray(oldRoles, role ? role : null, "roleId");

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
  history.listen((location) => {
    if (!RouteUtil.isRoutMatchPathname(roleDefaultModel.pathname, location.pathname)){
      return;
    }

    const payload = location.query || {page: 1, pageSize: 10};
    dispatch({
      type: 'role/setup',
      payload,
    })
  })
};
;

roleDefaultModel.effects.setup = function* ({payload}, {call, put, select}) {
  const appState = yield select(_=>_.app);
  const routeOpend = RouteUtil.isRouteOpend(appState.routeOrders, roleDefaultModel.pathname);
  if (!routeOpend){
    return;
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

/** 批量删除角色 */
roleDefaultModel.effects.batchDelete = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.batchDelete_effect({payload}, {call, put, select});
  yield put({
      type: 'batchDelete_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.batchDelete_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.batchDelete_success_reducer(state, payload);
};

/** 删除角色 */
roleDefaultModel.effects.deleteByRoleId = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.deleteByRoleId_effect({payload}, {call, put, select});
  yield put({
      type: 'deleteByRoleId_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.deleteByRoleId_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.deleteByRoleId_success_reducer(state, payload);
};

/** 删除角色 */
roleDefaultModel.effects.deleteWithResponse = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.deleteWithResponse_effect({payload}, {call, put, select});
  yield put({
      type: 'deleteWithResponse_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.deleteWithResponse_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.deleteWithResponse_success_reducer(state, payload);
};

/** 角色列表 */
roleDefaultModel.effects.getAll = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.getAll_effect({payload}, {call, put, select});
  yield put({
      type: 'getAll_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.getAll_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.getAll_success_reducer(state, payload);
};

/** 角色分页列表 */
roleDefaultModel.effects.getRolePageList = function* ({payload}, {call, put, select}) {
  const newPayload = yield RoleCommand.getRolePageList_effect({payload}, {call, put, select});
  yield put({
      type: 'getRolePageList_success',
      payload: newPayload,
    }
  )
};

roleDefaultModel.reducers.getRolePageList_success = (state: RoleState, {payload}): RoleState => {
  return RoleCommand.getRolePageList_success_reducer(state, payload);
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

