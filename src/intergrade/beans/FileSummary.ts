/**
 *  Do not remove this unless you get business authorization.
 *  FileSummary
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** fileId */
export const FileSummary_ID: string = 'fileId';

export const FileSummaryFields = {
  fileId: FileSummary_ID,
}

export default interface FileSummary extends Bean {

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除 (0:正常，1删除) */
  deleteFlag?: number;

  /** fileId */
  fileId?: string;

  /** fileId s */
  fileIds?: string[];

  /** name */
  name?: string;

  /** nameLike */
  nameLike?: string;

  /** size */
  size?: number;

  /** sizeMax */
  sizeMax?: number;

  /** sizeMin */
  sizeMin?: number;

  /** type */
  type?: string;

  /** typeLike */
  typeLike?: string;

  /** type s */
  types?: string[];

  /** uid */
  uid?: string;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** url */
  url?: string;

  /** userId */
  userId?: string;

  /** userId s */
  userIds?: string[];

}

