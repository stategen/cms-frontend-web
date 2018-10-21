/**
 *  Do not remove this unless you get business authorization.
 *  SimpleResponse
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {Bean} from "@utils/DvaUtil";

export enum SimpleResponseFields {
  /** message */
  message = 'message',
  /** success */
  success = 'success',
}

export default interface SimpleResponse extends Bean {

  /** message */
  message?: string;

  /** success */
  success?: boolean;

}

