/**
 *  Do not remove this unless you get business authorization.
 *  VisitType
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Options} from "@utils/DvaUtil"

enum VisitType {
  /** MENU */
  MENU = "MENU",
  /** API_PATH */
  API_PATH = "API_PATH"

}

export const visitTypeOptions = {
  _None:{
    value: null,
    title: '请选择',
  },
  /** MENU */
  MENU: {
    value: VisitType.MENU,
    title: 'MENU',
  },

  _None:{
    value: null,
    title: '请选择',
  },
  /** API_PATH */
  API_PATH: {
    value: VisitType.API_PATH,
    title: 'API_PATH',
  }

}

export default VisitType;