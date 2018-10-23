/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import User from "../beans/User"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

export interface UserColumns<U> {
  /** 用户ID  */
  userId?: ColumnProps<U>,

  /** 用户名  */
  username?: ColumnProps<U>,

  /** 密码，测试，明文  */
  password?: ColumnProps<U>,

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  roleType?: ColumnProps<U>,

  /** name  */
  name?: ColumnProps<U>,

  /** nickName  */
  nickName?: ColumnProps<U>,

  /** age  */
  age?: ColumnProps<U>,

  /** address  */
  address?: ColumnProps<U>,

  /** isMale  */
  isMale?: ColumnProps<U>,

  /** avatar  */
  avatar?: ColumnProps<U>,

  /** 邮箱  */
  email?: ColumnProps<U>,

  /** 创建时间  TIMESTAMP*/
  createTime?: ColumnProps<U>,

  /** 更新时间  TIMESTAMP*/
  updateTime?: ColumnProps<U>,

 /** 操作 */
 Operation?: ColumnProps<U>,

 [columnName: string]: ColumnProps<U>,

}

export const userDefaultColumns: UserColumns<User> = {

  /** 用户ID  */
  userId: {
    title: '用户ID',
    dataIndex: 'userId',
    key: 'userId',
  },

  /** 用户名  */
  username: {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },

  /** 密码，测试，明文  */
  password: {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
  },

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  roleType: {
    title: '用户角色',
    dataIndex: 'roleType',
    key: 'roleType',
    render: (text: any, record: User, index: number) => {
      const optionProp = roleTypeOptions[text];
      return optionProp != null ? optionProp.title : null;
    },
  },

  /** name  */
  name: {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },

  /** nickName  */
  nickName: {
    title: 'nickName',
    dataIndex: 'nickName',
    key: 'nickName',
  },

  /** age  */
  age: {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
  },

  /** address  */
  address: {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
  },

  /** isMale  */
  isMale: {
    title: 'isMale',
    dataIndex: 'isMale',
    key: 'isMale',
  },

  /** avatar  */
  avatar: {
    title: 'avatar',
    dataIndex: 'avatar',
    key: 'avatar',
  },

  /** 邮箱  */
  email: {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },

  /** 创建时间  TIMESTAMP*/
  createTime: {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (text: any, record: User, index: number) => record.createTime ? moment(record.createTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 更新时间  TIMESTAMP*/
  updateTime: {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    render: (text: any, record: User, index: number) => record.updateTime ? moment(record.updateTime).format(TIMESTAMP_FORMAT) : null,
  },

}
