/**
 *  Do not remove this unless you get business authorization.
 *  City
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** cityId */
export const City_ID: string = 'cityId';

export const CityFields = {
  cityId: City_ID,
}

export default interface City extends Bean {

  /** areacode */
  areacode?: string;

  /** areacodeLike */
  areacodeLike?: string;

  /** cityId */
  cityId?: string;

  /** cityId s */
  cityIds?: string[];

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** name */
  name?: string;

  /** nameLike */
  nameLike?: string;

  /** postcode */
  postcode?: string;

  /** postcodeLike */
  postcodeLike?: string;

  /** provinceId */
  provinceId?: string;

  /** provinceId s */
  provinceIds?: string[];

  /** pycode */
  pycode?: string;

  /** pycodeLike */
  pycodeLike?: string;

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

