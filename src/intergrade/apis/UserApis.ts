/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import AntdPageList from "../beans/AntdPageList";
import {PaginationProps} from "antd/lib/pagination";
import RoleType from "../enums/RoleType";
import User from "../beans/User";
import {apiUrlKey} from "../configs/tradeCms-config";

export default class UserApis {
  /**
   * POST /api/user/createUser
   * 创建用户
   */
  static createUser(user: User): User {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/user/createUser';
    requestInit.mediaType = MediaType.JSON;
    requestInit.data = user;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * DELETE /api/user/:userId
   * 删除用户
   */
  static delete(params: { userId: string }): string {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/user/:userId';
    requestInit.data = params;
    requestInit.method = Method.DELETE;
    return Net.fetch(requestInit);
  }

  /**
   * DELETE /api/user/deleteByUserIds
   * 批量删除用户
   */
  static deleteByUserIds(params: { userIds?: string[] }): string[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/user/deleteByUserIds';
    requestInit.data = params;
    requestInit.method = Method.DELETE;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/user/getUserPageListByDefaultQuery
   * 用户列表
   */
  static getUserPageListByDefaultQuery(params: { userIds?: string[], usernameLike?: string, passwordLike?: string, roleTypes?: RoleType[], nameLike?: string, nickNameLike?: string, ageMin?: number, ageMax?: number, addressLike?: string, avatarLike?: string, emailLike?: string, createTimeMin?: Date, createTimeMax?: Date, updateTimeMin?: Date, updateTimeMax?: Date, page?: number, pageSize?: number }): AntdPageList<User> {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/user/getUserPageListByDefaultQuery';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * PATCH /api/user/:userId
   * 修改用户
   */
  static patchUser(user: User): User {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/user/:userId';
    requestInit.mediaType = MediaType.JSON;
    requestInit.data = user;
    requestInit.method = Method.PATCH;
    return Net.fetch(requestInit);
  }

}