/**
 *  Do not remove this unless you get business authorization.
 *  AntdPageList
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AntdPageList from "../beans/AntdPageList"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';

export interface AntdPageListFormConfigs extends FormConfigs {
  /** pagination  */
  pagination?: FormItemConfigs,

  [columnName: string]: FormItemConfigs,

}

export const getAntdPageListFormConfigs = (antdPageList: AntdPageList<any>): AntdPageListFormConfigs => {
  const result: AntdPageListFormConfigs = {
    /** pagination  */
    pagination: {
      name: 'pagination',
      label: "pagination",
      config: {
        initialValue: antdPageList.pagination,
      }
    },
  }


  result.pagination.editor = UIUtil.buildInputEditor(result.pagination);

  return result;
}


