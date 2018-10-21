/**
 *  Do not remove this unless you get business authorization.
 *  App
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import Menu from "../beans/Menu";
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";
import {apiUrlKey} from "../configs/tradeCms-config";

export default class AppApis {
  /**
   * GET /api/app/getAllMenus
   * 获所所有菜单
   */
  static getAllMenus(params?: {}): Menu[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/app/getAllMenus';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/app/getCookieUser
   * 
   */
  static getCookieUser(params?: {}): User {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/app/getCookieUser';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/app/logout
   * 
   */
  static logout(params?: {}): SimpleResponse {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/app/logout';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

}