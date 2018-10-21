/**
 *  Do not remove this unless you get business authorization.
 *  AntdPageList
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import AntdPageList from "../beans/AntdPageList"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';

export interface AntdPageListColumns<A> {
  /** pagination  */
  pagination?: ColumnProps<A>,

 /** 操作 */
 Operation?: ColumnProps<A>,

 [columnName: string]: ColumnProps<A>,

}

export const antdPageListDefaultColumns: AntdPageListColumns<AntdPageList<E>> = {

  /** pagination  */
  pagination: {
    title: 'pagination',
    dataIndex: 'pagination',
    key: 'pagination',
  },

}
