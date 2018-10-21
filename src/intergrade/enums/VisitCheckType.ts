/**
 *  Do not remove this unless you get business authorization.
 *  VisitCheckType
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Options} from "@utils/DvaUtil"

enum VisitCheckType {
  /** VISIT_CHECK */
  VISIT_CHECK = "VISIT_CHECK",
  /** NONE */
  NONE = "NONE"

}

export const visitCheckTypeOptions: Options = {
  /** VISIT_CHECK */
  VISIT_CHECK: {
    value: VisitCheckType.VISIT_CHECK,
    title: 'VISIT_CHECK',
  },

  /** NONE */
  NONE: {
    value: VisitCheckType.NONE,
    title: 'NONE',
  }

}

export default VisitCheckType;