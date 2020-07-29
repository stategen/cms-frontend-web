/**
 *  Do not remove this unless you get business authorization.
 *  RoleMenu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** id */
export const RoleMenu_ID: string = 'id';

export const RoleMenuFields = {
  id: RoleMenu_ID,
}

export default interface RoleMenu extends Bean {

  /** 数据创建时间 */
  createTime?: Date;

  /** 数据创建时间Max */
  createTimeMax?: Date;

  /** 数据创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** id */
  id?: number;

  /** idMax */
  idMax?: number;

  /** idMin */
  idMin?: number;

  /** id s */
  ids?: number[];

  /** menuId */
  menuId?: number;

  /** menuId s */
  menuIds?: number[];

  /** roleId */
  roleId?: string;

  /** roleId s */
  roleIds?: string[];

  /** 数据更新时间 */
  updateTime?: Date;

  /** 数据更新时间Max */
  updateTimeMax?: Date;

  /** 数据更新时间Min */
  updateTimeMin?: Date;

}

