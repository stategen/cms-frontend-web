/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import RoleType from "../enums/RoleType";
import {Bean} from "@utils/DvaUtil";

/** userId */
export const USER_ID: string = 'userId';
export enum UserFields {
  /** visitsIds */
  visitsIds = 'visitsIds',
  /** userId */
  userId = 'userId',
  /** username */
  username = 'username',
  /** password */
  password = 'password',
  /** roleType */
  roleType = 'roleType',
  /** name */
  name = 'name',
  /** nickName */
  nickName = 'nickName',
  /** age */
  age = 'age',
  /** address */
  address = 'address',
  /** isMale */
  isMale = 'isMale',
  /** avatar */
  avatar = 'avatar',
  /** email */
  email = 'email',
  /** createTime */
  createTime = 'createTime',
  /** updateTime */
  updateTime = 'updateTime',
  /** deleteFlag */
  deleteFlag = 'deleteFlag',
}

export default interface User extends Bean {

  /** 用户可访问的节点 */
  visitsIds?: number[];

  /** 用户ID */
  userId?: string;

  /** 用户名 */
  username?: string;

  /** 密码，测试，明文 */
  password?: string;

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER */
  roleType?: RoleType;

  /** name */
  name?: string;

  /** nickName */
  nickName?: string;

  /** age */
  age?: number;

  /** address */
  address?: string;

  /** isMale */
  isMale?: boolean;

  /** avatar */
  avatar?: string;

  /** 邮箱 */
  email?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

}

