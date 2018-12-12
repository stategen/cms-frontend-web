/**
 *  Do not remove this unless you get business authorization.
 *  RoleMenu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import RoleMenu from "../beans/RoleMenu"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';

export interface RoleMenuColumns<R> {
  /** id  */
  id?: ColumnProps<R>,

  /** roleId  */
  roleId?: ColumnProps<R>,

  /** menuId  */
  menuId?: ColumnProps<R>,

  /** 数据创建时间  TIMESTAMP*/
  createTime?: ColumnProps<R>,

  /** 数据更新时间  TIMESTAMP*/
  updateTime?: ColumnProps<R>,

 /** 操作 */
 Operation?: ColumnProps<R>,

 [columnName: string]: ColumnProps<R>,

}

export const roleMenuDefaultColumns: RoleMenuColumns<RoleMenu> = {

  /** id  */
  id: {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },

  /** roleId  */
  roleId: {
    title: 'roleId',
    dataIndex: 'roleId',
    key: 'roleId',
  },

  /** menuId  */
  menuId: {
    title: 'menuId',
    dataIndex: 'menuId',
    key: 'menuId',
  },

  /** 数据创建时间  TIMESTAMP*/
  createTime: {
    title: '数据创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (text: any, record: RoleMenu, index: number) => record.createTime ? moment(record.createTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 数据更新时间  TIMESTAMP*/
  updateTime: {
    title: '数据更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    render: (text: any, record: RoleMenu, index: number) => record.updateTime ? moment(record.updateTime).format(TIMESTAMP_FORMAT) : null,
  },

}
