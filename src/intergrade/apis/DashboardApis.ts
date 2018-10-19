/**
 *  Do not remove this unless you get business authorization.
 *  Dashboard
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import {apiUrlKey} from "../configs/tradeCms-config";

export default class DashboardApis {
  /**
   * GET /api/dashboard/getDashboard
   * 
   */
  static getDashboard(params?: {}): any {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/dashboard/getDashboard';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

}