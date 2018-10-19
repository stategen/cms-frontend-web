/**
 *  Do not remove this unless you get business authorization.
 *  SimpleResponse
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
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
