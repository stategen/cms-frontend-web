/**
 *  Do not remove this unless you get business authorization.
 *  VisitType
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Options} from "@utils/DvaUtil"

enum VisitType {
  /** MENU */
  MENU = "MENU",
  /** API_PATH */
  API_PATH = "API_PATH"

}

export const visitTypeOptions: Options = {
  /** MENU */
  MENU: {
    value: VisitType.MENU,
    title: 'MENU',
  },

  /** API_PATH */
  API_PATH: {
    value: VisitType.API_PATH,
    title: 'API_PATH',
  }

}

export default VisitType;