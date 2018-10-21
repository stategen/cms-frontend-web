/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import Role from "../beans/Role"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

export interface RoleColumns<R> {
  /** 角色ID  */
  roleId?: ColumnProps<R>,

  /** 角色名称  */
  roleName?: ColumnProps<R>,

  /** 描述  */
  description?: ColumnProps<R>,

  /** 创建时间  TIMESTAMP*/
  createTime?: ColumnProps<R>,

  /** 更新时间  TIMESTAMP*/
  updateTime?: ColumnProps<R>,

  /** roleType  */
  roleType?: ColumnProps<R>,

 /** 操作 */
 Operation?: ColumnProps<R>,

 [columnName: string]: ColumnProps<R>,

}

export const roleDefaultColumns: RoleColumns<Role> = {

  /** 角色ID  */
  roleId: {
    title: '角色ID',
    dataIndex: 'roleId',
    key: 'roleId',
  },

  /** 角色名称  */
  roleName: {
    title: '角色名称',
    dataIndex: 'roleName',
    key: 'roleName',
  },

  /** 描述  */
  description: {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },

  /** 创建时间  TIMESTAMP*/
  createTime: {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (text: any, record: Role, index: number) => record.createTime ? moment(record.createTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 更新时间  TIMESTAMP*/
  updateTime: {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    render: (text: any, record: Role, index: number) => record.updateTime ? moment(record.updateTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** roleType  */
  roleType: {
    title: 'roleType',
    dataIndex: 'roleType',
    key: 'roleType',
    render: (text: any, record: Role, index: number) => {
      const optionProp = roleTypeOptions[text];
      return optionProp != null ? optionProp.title : null;
    },
  },

}
