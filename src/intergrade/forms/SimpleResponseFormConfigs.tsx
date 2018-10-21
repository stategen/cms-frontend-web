/**
 *  Do not remove this unless you get business authorization.
 *  SimpleResponse
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import SimpleResponse from "../beans/SimpleResponse"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';

export interface SimpleResponseFormConfigs extends FormConfigs {
  /** message  */
  message?: FormItemConfigs,

  /** success  */
  success?: FormItemConfigs,

  [columnName: string]: FormItemConfigs,

}

export const getSimpleResponseFormConfigs = (simpleResponse: SimpleResponse): SimpleResponseFormConfigs => {
  const result: SimpleResponseFormConfigs = {
    /** message  */
    message: {
      name: 'message',
      label: "message",
      config: {
        initialValue: simpleResponse.message,
      }
    },
    /** success  */
    success: {
      name: 'success',
      label: "success",
      config: {
        initialValue: simpleResponse.success,
      }
    },
  }


  result.message.editor = UIUtil.buildInputEditor(result.message);
  result.success.editor = UIUtil.buildInputEditor(result.success);

  return result;
}


