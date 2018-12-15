/**
 *  Do not remove this unless you get business authorization.
 *  City
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import City from "../beans/City"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';

export interface CityColumns<C> {
  /** label  */
  label?: ColumnProps<C>,

  /** value  */
  value?: ColumnProps<C>,

  /** cityId  */
  cityId?: ColumnProps<C>,

  /** name  */
  name?: ColumnProps<C>,

  /** pycode  */
  pycode?: ColumnProps<C>,

  /** provinceId  */
  provinceId?: ColumnProps<C>,

  /** postcode  */
  postcode?: ColumnProps<C>,

  /** areacode  */
  areacode?: ColumnProps<C>,

  /** 创建时间  TIMESTAMP*/
  createTime?: ColumnProps<C>,

  /** 更新时间  TIMESTAMP*/
  updateTime?: ColumnProps<C>,

  /** title  */
  title?: ColumnProps<C>,

 /** 操作 */
 Operation?: ColumnProps<C>,

 [columnName: string]: ColumnProps<C>,

}

export const cityDefaultColumns: CityColumns<City> = {

  /** label  */
  label: {
    title: 'label',
    dataIndex: 'label',
    key: 'label',
  },

  /** value  */
  value: {
    title: 'value',
    dataIndex: 'value',
    key: 'value',
  },

  /** cityId  */
  cityId: {
    title: 'cityId',
    dataIndex: 'cityId',
    key: 'cityId',
  },

  /** name  */
  name: {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },

  /** pycode  */
  pycode: {
    title: 'pycode',
    dataIndex: 'pycode',
    key: 'pycode',
  },

  /** provinceId  */
  provinceId: {
    title: 'provinceId',
    dataIndex: 'provinceId',
    key: 'provinceId',
  },

  /** postcode  */
  postcode: {
    title: 'postcode',
    dataIndex: 'postcode',
    key: 'postcode',
  },

  /** areacode  */
  areacode: {
    title: 'areacode',
    dataIndex: 'areacode',
    key: 'areacode',
  },

  /** 创建时间  TIMESTAMP*/
  createTime: {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (text: any, record: City, index: number) => record.createTime ? moment(record.createTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 更新时间  TIMESTAMP*/
  updateTime: {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    render: (text: any, record: City, index: number) => record.updateTime ? moment(record.updateTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** title  */
  title: {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },

}
