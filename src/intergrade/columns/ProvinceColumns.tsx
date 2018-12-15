/**
 *  Do not remove this unless you get business authorization.
 *  Province
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import Province from "../beans/Province"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';

export interface ProvinceColumns<P> {
  /** label  */
  label?: ColumnProps<P>,

  /** value  */
  value?: ColumnProps<P>,

  /** provinceId  */
  provinceId?: ColumnProps<P>,

  /** name  */
  name?: ColumnProps<P>,

  /** pycode  */
  pycode?: ColumnProps<P>,

  /** 创建时间  TIMESTAMP*/
  createTime?: ColumnProps<P>,

  /** 更新时间  TIMESTAMP*/
  updateTime?: ColumnProps<P>,

  /** title  */
  title?: ColumnProps<P>,

 /** 操作 */
 Operation?: ColumnProps<P>,

 [columnName: string]: ColumnProps<P>,

}

export const provinceDefaultColumns: ProvinceColumns<Province> = {

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

  /** provinceId  */
  provinceId: {
    title: 'provinceId',
    dataIndex: 'provinceId',
    key: 'provinceId',
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

  /** 创建时间  TIMESTAMP*/
  createTime: {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (text: any, record: Province, index: number) => record.createTime ? moment(record.createTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 更新时间  TIMESTAMP*/
  updateTime: {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    render: (text: any, record: Province, index: number) => record.updateTime ? moment(record.updateTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** title  */
  title: {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },

}
