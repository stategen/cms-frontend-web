/**
 *  Do not remove this unless you get business authorization.
 *  ResponseStatus
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Options} from "@utils/DvaUtil"

enum ResponseStatus {
  /** OK */
  OK = "OK",
  /** NO_TOKEN */
  NO_TOKEN = "NO_TOKEN",
  /** ERROR */
  ERROR = "ERROR",
  /** MISSED */
  MISSED = "MISSED",
  /** PAY_NO_TOKEN */
  PAY_NO_TOKEN = "PAY_NO_TOKEN",
  /** NOT_LOGIN */
  NOT_LOGIN = "NOT_LOGIN",
  /** NO_USER_ID */
  NO_USER_ID = "NO_USER_ID"

}

export const responseStatusOptions: Options = {
  /** OK */
  OK: {
    value: ResponseStatus.OK,
    title: 'OK',
  },

  /** NO_TOKEN */
  NO_TOKEN: {
    value: ResponseStatus.NO_TOKEN,
    title: 'NO_TOKEN',
  },

  /** ERROR */
  ERROR: {
    value: ResponseStatus.ERROR,
    title: 'ERROR',
  },

  /** MISSED */
  MISSED: {
    value: ResponseStatus.MISSED,
    title: 'MISSED',
  },

  /** PAY_NO_TOKEN */
  PAY_NO_TOKEN: {
    value: ResponseStatus.PAY_NO_TOKEN,
    title: 'PAY_NO_TOKEN',
  },

  /** NOT_LOGIN */
  NOT_LOGIN: {
    value: ResponseStatus.NOT_LOGIN,
    title: 'NOT_LOGIN',
  },

  /** NO_USER_ID */
  NO_USER_ID: {
    value: ResponseStatus.NO_USER_ID,
    title: 'NO_USER_ID',
  }

}

export default ResponseStatus;