/**
 *  Do not remove this unless you get business authorization.
 *  ResponseExtend
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import ResponseExtend from "../beans/ResponseExtend"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';
import {responseStatusOptions} from '../enums/ResponseStatus';

export interface ResponseExtendColumns<R> {
  /** code  */
  code?: ColumnProps<R>,

  /** exeptionClass  */
  exeptionClass?: ColumnProps<R>,

  /** data  */
  data?: ColumnProps<R>,

  /** status  */
  status?: ColumnProps<R>,

  /** message  */
  message?: ColumnProps<R>,

  /** success  */
  success?: ColumnProps<R>,

 /** 操作 */
 Operation?: ColumnProps<R>,

 [columnName: string]: ColumnProps<R>,

}

export const responseExtendDefaultColumns: ResponseExtendColumns<ResponseExtend<T>> = {

  /** code  */
  code: {
    title: 'code',
    dataIndex: 'code',
    key: 'code',
  },

  /** exeptionClass  */
  exeptionClass: {
    title: 'exeptionClass',
    dataIndex: 'exeptionClass',
    key: 'exeptionClass',
  },

  /** data  */
  data: {
    title: 'data',
    dataIndex: 'data',
    key: 'data',
  },

  /** status  */
  status: {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    render: (text: any, record: ResponseExtend<T>, index: number) => {
      const optionProp = responseStatusOptions[text];
      return optionProp != null ? optionProp.title : null;
    },
  },

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
