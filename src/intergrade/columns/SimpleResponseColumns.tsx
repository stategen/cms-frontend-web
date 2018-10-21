/**
 *  Do not remove this unless you get business authorization.
 *  SimpleResponse
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import SimpleResponse from "../beans/SimpleResponse"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';

export interface SimpleResponseColumns<S> {
  /** message  */
  message?: ColumnProps<S>,

  /** success  */
  success?: ColumnProps<S>,

 /** 操作 */
 Operation?: ColumnProps<S>,

 [columnName: string]: ColumnProps<S>,

}

export const simpleResponseDefaultColumns: SimpleResponseColumns<SimpleResponse> = {

  /** message  */
  message: {
    title: 'message',
    dataIndex: 'message',
    key: 'message',
  },

  /** success  */
  success: {
    title: 'success',
    dataIndex: 'success',
    key: 'success',
  },

}
