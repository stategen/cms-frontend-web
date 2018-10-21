/**
 *  Do not remove this unless you get business authorization.
 *  AntdPageList
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
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


