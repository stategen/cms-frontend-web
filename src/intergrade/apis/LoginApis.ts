/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";
import {tradeCmsBaseUrlKey} from "../configs/tradeCms-config";

export default class LoginApis {
  /**
   * POST /api/login/login
   * 
   */
  static login(params: { username: string, password: string }): SimpleResponse {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/login/login';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/login/loginByMobile
   * 
   */
  static loginByMobile(params: { interCode: string, mobile: string, password: string }): User {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeCmsBaseUrlKey;
    requestInit.url = '/api/login/loginByMobile';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

}