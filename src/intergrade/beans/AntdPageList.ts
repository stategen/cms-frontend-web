/**
 *  Do not remove this unless you get business authorization.
 *  AntdPageList
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {PaginationProps} from "antd/lib/pagination";
import {Bean} from "@utils/DvaUtil";

export enum AntdPageListFields {
  /** pagination */
  pagination = 'pagination',
  /** list */
  list = 'list',
}

export default interface AntdPageList<E> extends Bean {

  /** pagination */
  pagination?: PaginationProps;

  /** list */
  list?: E[];

}

