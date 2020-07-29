/**
 *  Do not remove this unless you get business authorization.
 *  Region
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import RegionType from "../enums/RegionType";
import {Bean} from "@utils/DvaUtil";

/** regionId */
export const Region_ID: string = 'regionId';

export const RegionFields = {
  regionId: Region_ID,
}

export default interface Region extends Bean {

  /** 代码 */
  code?: string;

  /** 代码Like */
  codeLike?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除 (0:正常，1删除) */
  deleteFlag?: boolean;

  /** isLeaf */
  isLeaf?: boolean;

  /** 层级 */
  level?: number;

  /** 层级Max */
  levelMax?: number;

  /** 层级Min */
  levelMin?: number;

  /** 中文名称 */
  name?: string;

  /** 英文名称 */
  nameEn?: string;

  /** 英文名称Like */
  nameEnLike?: string;

  /** 中文名称Like */
  nameLike?: string;

  /** 中文拼音 */
  namePinyin?: string;

  /** 中文拼音Like */
  namePinyinLike?: string;

  /** 父ID */
  parentRegionId?: number;

  /** 父ID s */
  parentRegionIds?: number[];

  /** 路径 */
  path?: string;

  /** 路径Like */
  pathLike?: string;

  /** 主键 */
  regionId?: number;

  /** 主键 s */
  regionIds?: number[];

  /** regionType */
  regionType?: RegionType;

  /** regionType s */
  regionTypes?: RegionType[];

  /** title */
  title?: string;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** value */
  value?: string;

}

