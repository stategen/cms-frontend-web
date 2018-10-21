/**
 *  Do not remove this unless you get business authorization.
 *  RoleType
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Options} from "@utils/DvaUtil"

enum RoleType {
  /** 管理员 */
  ADMIN = "ADMIN",
  /** 默认角色 */
  DEFAULT = "DEFAULT",
  /** 开发人员 */
  DEVELOPER = "DEVELOPER"

}

export const roleTypeOptions: Options = {
  /** 管理员 */
  ADMIN: {
    value: RoleType.ADMIN,
    title: '管理员',
  },

  /** 默认角色 */
  DEFAULT: {
    value: RoleType.DEFAULT,
    title: '默认角色',
  },

  /** 开发人员 */
  DEVELOPER: {
    value: RoleType.DEVELOPER,
    title: '开发人员',
  }

}

export default RoleType;