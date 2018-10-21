/**
 *  Do not remove this unless you get business authorization.
 *  Dashboard
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
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