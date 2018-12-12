/**
 *  Do not remove this unless you get business authorization.
 *  Menu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import MenuType from "../enums/MenuType";
import VisitCheckType from "../enums/VisitCheckType";
import {Bean} from "@utils/DvaUtil";

/** menuId */
export const Menu_ID: string = 'menuId';

export enum MenuFields {
  /** roleId */
  roleId = 'roleId',
  /** checked */
  checked = 'checked',
  /** menuId */
  menuId = 'menuId',
  /** bpid */
  bpid = 'bpid',
  /** mpid */
  mpid = 'mpid',
  /** projectName */
  projectName = 'projectName',
  /** controllerName */
  controllerName = 'controllerName',
  /** methodName */
  methodName = 'methodName',
  /** url */
  url = 'url',
  /** icon */
  icon = 'icon',
  /** name */
  name = 'name',
  /** route */
  route = 'route',
  /** menuType */
  menuType = 'menuType',
  /** checkType */
  checkType = 'checkType',
  /** createTime */
  createTime = 'createTime',
  /** updateTime */
  updateTime = 'updateTime',
  /** deleteFlag */
  deleteFlag = 'deleteFlag',
  /** id */
  id = 'id',
  /** opendOrder */
  opendOrder = 'opendOrder',
  /** menuChildren */
  menuChildren = 'menuChildren',
}

export default interface Menu extends Bean {

  /** roleId */
  roleId?: string;

  /** checked */
  checked?: boolean;

  /** 菜单ID */
  menuId?: number;

  /** 面包屑父ID menuId与bpid组成树图 */
  bpid?: number;

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1 */
  mpid?: number;

  /** 对应的项目id */
  projectName?: string;

  /** 对应后台系统controlle名称 */
  controllerName?: string;

  /** 对应后台系统method名称 */
  methodName?: string;

  /** 对应的api路径 */
  url?: string;

  /** icon */
  icon?: string;

  /** 名称 */
  name?: string;

  /** 路由路径 */
  route?: string;

  /** menuType */
  menuType?: MenuType;

  /** checkType */
  checkType?: VisitCheckType;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** id,和MenuId相同，为了生成树 */
  id?: number;

  /** 打开顺序，前端model存储用 */
  opendOrder?: number;

  /** menuChildren */
  menuChildren?: Menu[];

}

