/**
 *  Do not remove this unless you get business authorization.
 *  AntdPageList
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
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
