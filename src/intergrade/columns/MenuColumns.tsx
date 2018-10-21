/**
 *  Do not remove this unless you get business authorization.
 *  Menu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import Menu from "../beans/Menu"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';
import {visitCheckTypeOptions} from '../enums/VisitCheckType';
import {visitTypeOptions} from '../enums/VisitType';

export interface MenuColumns<M> {
  /** roleId  */
  roleId?: ColumnProps<M>,

  /** checked  */
  checked?: ColumnProps<M>,

  /** 菜单ID  */
  menuId?: ColumnProps<M>,

  /** 面包屑父ID menuId与bpid组成树图  */
  bpid?: ColumnProps<M>,

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  mpid?: ColumnProps<M>,

  /** 对应的项目id  */
  projectName?: ColumnProps<M>,

  /** 对应后台系统controlle名称  */
  controllerName?: ColumnProps<M>,

  /** 对应后台系统method名称  */
  methodName?: ColumnProps<M>,

  /** 对应的api路径  */
  url?: ColumnProps<M>,

  /** icon  */
  icon?: ColumnProps<M>,

  /** 名称  */
  name?: ColumnProps<M>,

  /** 路由路径  */
  route?: ColumnProps<M>,

  /** visitType  */
  visitType?: ColumnProps<M>,

  /** checkType  */
  checkType?: ColumnProps<M>,

  /** 创建时间  TIMESTAMP*/
  createTime?: ColumnProps<M>,

  /** 更新时间  TIMESTAMP*/
  updateTime?: ColumnProps<M>,

  /** id,和MenuId相同，为了生成树  */
  id?: ColumnProps<M>,

  /** 打开顺序，前端model存储用  */
  opendOrder?: ColumnProps<M>,

 /** 操作 */
 Operation?: ColumnProps<M>,

 [columnName: string]: ColumnProps<M>,

}

export const menuDefaultColumns: MenuColumns<Menu> = {

  /** roleId  */
  roleId: {
    title: 'roleId',
    dataIndex: 'roleId',
    key: 'roleId',
  },

  /** checked  */
  checked: {
    title: 'checked',
    dataIndex: 'checked',
    key: 'checked',
  },

  /** 菜单ID  */
  menuId: {
    title: '菜单ID',
    dataIndex: 'menuId',
    key: 'menuId',
  },

  /** 面包屑父ID menuId与bpid组成树图  */
  bpid: {
    title: '面包屑父ID',
    dataIndex: 'bpid',
    key: 'bpid',
  },

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  mpid: {
    title: '菜单父ID',
    dataIndex: 'mpid',
    key: 'mpid',
  },

  /** 对应的项目id  */
  projectName: {
    title: '对应的项目id',
    dataIndex: 'projectName',
    key: 'projectName',
  },

  /** 对应后台系统controlle名称  */
  controllerName: {
    title: '对应后台系统controlle名称',
    dataIndex: 'controllerName',
    key: 'controllerName',
  },

  /** 对应后台系统method名称  */
  methodName: {
    title: '对应后台系统method名称',
    dataIndex: 'methodName',
    key: 'methodName',
  },

  /** 对应的api路径  */
  url: {
    title: '对应的api路径',
    dataIndex: 'url',
    key: 'url',
  },

  /** icon  */
  icon: {
    title: 'icon',
    dataIndex: 'icon',
    key: 'icon',
    render: (text: any, record: Menu, index: number) => <img width={24} src={text} />,
  },

  /** 名称  */
  name: {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },

  /** 路由路径  */
  route: {
    title: '路由路径',
    dataIndex: 'route',
    key: 'route',
  },

  /** visitType  */
  visitType: {
    title: 'visitType',
    dataIndex: 'visitType',
    key: 'visitType',
    render: (text: any, record: Menu, index: number) => {
      const optionProp = visitTypeOptions[text];
      return optionProp != null ? optionProp.title : null;
    },
  },

  /** checkType  */
  checkType: {
    title: 'checkType',
    dataIndex: 'checkType',
    key: 'checkType',
    render: (text: any, record: Menu, index: number) => {
      const optionProp = visitCheckTypeOptions[text];
      return optionProp != null ? optionProp.title : null;
    },
  },

  /** 创建时间  TIMESTAMP*/
  createTime: {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (text: any, record: Menu, index: number) => record.createTime ? moment(record.createTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 更新时间  TIMESTAMP*/
  updateTime: {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    render: (text: any, record: Menu, index: number) => record.updateTime ? moment(record.updateTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** id,和MenuId相同，为了生成树  */
  id: {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },

  /** 打开顺序，前端model存储用  */
  opendOrder: {
    title: '打开顺序',
    dataIndex: 'opendOrder',
    key: 'opendOrder',
  },

}
