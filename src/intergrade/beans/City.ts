/**
 *  Do not remove this unless you get business authorization.
 *  City
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** cityId */
export const City_ID: string = 'cityId';

export enum CityFields {
  /** label */
  label = 'label',
  /** value */
  value = 'value',
  /** cityId */
  cityId = 'cityId',
  /** name */
  name = 'name',
  /** pycode */
  pycode = 'pycode',
  /** provinceId */
  provinceId = 'provinceId',
  /** postcode */
  postcode = 'postcode',
  /** areacode */
  areacode = 'areacode',
  /** createTime */
  createTime = 'createTime',
  /** updateTime */
  updateTime = 'updateTime',
  /** deleteFlag */
  deleteFlag = 'deleteFlag',
  /** title */
  title = 'title',
}

export default interface City extends Bean {

  /** label */
  label?: string;

  /** value */
  value?: string;

  /** cityId */
  cityId?: string;

  /** name */
  name?: string;

  /** pycode */
  pycode?: string;

  /** provinceId */
  provinceId?: string;

  /** postcode */
  postcode?: string;

  /** areacode */
  areacode?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** title */
  title?: string;

}

