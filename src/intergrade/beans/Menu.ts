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

export default interface Menu extends Bean {

  /** menuId与bpid组成树图 */
  bpid?: number;

  /** menuId与bpid组成树图 s */
  bpids?: number[];

  /** checkType */
  checkType?: VisitCheckType;

  /** checkType s */
  checkTypes?: VisitCheckType[];

  /** checked */
  checked?: boolean;

  /** 对应后台系统controlle名称 */
  controllerName?: string;

  /** 对应后台系统controlle名称Like */
  controllerNameLike?: string;

  /** 数据创建时间 */
  createTime?: Date;

  /** 数据创建时间Max */
  createTimeMax?: Date;

  /** 数据创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** icon */
  icon?: string;

  /** id,和MenuId相同，为了生成树 */
  id?: number;

  /** menuChildren */
  menuChildren?: Menu[];

  /** menuId */
  menuId?: number;

  /** menuId s */
  menuIds?: number[];

  /** menuType */
  menuType?: MenuType;

  /** menuType s */
  menuTypes?: MenuType[];

  /** 对应后台系统method名称 */
  methodName?: string;

  /** 对应后台系统method名称Like */
  methodNameLike?: string;

  /** morder */
  morder?: number;

  /** morderMax */
  morderMax?: number;

  /** morderMin */
  morderMin?: number;

  /** 大部分情况下与bpid相同，当为动态目录时，mpid=-1 */
  mpid?: number;

  /** 大部分情况下与bpid相同 s */
  mpids?: number[];

  /** name */
  name?: string;

  /** 对应的项目idnameLike */
  nameLike?: string;

  /** 打开顺序，前端model存储用 */
  opendOrder?: number;

  /** 对应的项目id */
  projectName?: string;

  /** 对应的项目idLike */
  projectNameLike?: string;

  /** roleId */
  roleId?: string;

  /** route */
  route?: string;

  /** routeLike */
  routeLike?: string;

  /** 数据更新时间 */
  updateTime?: Date;

  /** 数据更新时间Max */
  updateTimeMax?: Date;

  /** 数据更新时间Min */
  updateTimeMin?: Date;

  /** 对应的api路径 */
  url?: string;

}

