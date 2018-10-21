/**
 *  Do not remove this unless you get business authorization.
 *  ResponseExtend
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import ResponseStatus from "../enums/ResponseStatus";
import SimpleResponse from "../beans/SimpleResponse";
import {Bean} from "@utils/DvaUtil";

export enum ResponseExtendFields {
  /** code */
  code = 'code',
  /** exeptionClass */
  exeptionClass = 'exeptionClass',
  /** data */
  data = 'data',
  /** status */
  status = 'status',
}

export default interface ResponseExtend<T> extends Bean, SimpleResponse {

  /** code */
  code?: number;

  /** exeptionClass */
  exeptionClass?: string;

  /** data */
  data?: T;

  /** status */
  status?: ResponseStatus;

}

