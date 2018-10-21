/**
 *  Do not remove this unless you get business authorization.
 *  ResponseExtend
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import ResponseExtend from "../beans/ResponseExtend"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {responseStatusOptions} from '../enums/ResponseStatus';

export interface ResponseExtendFormConfigs extends FormConfigs {
  /** code  */
  code?: FormItemConfigs,

  /** exeptionClass  */
  exeptionClass?: FormItemConfigs,

  /** data  */
  data?: FormItemConfigs,

  /** status  */
  status?: FormItemConfigs,

  /** message  */
  message?: FormItemConfigs,

  /** success  */
  success?: FormItemConfigs,

  [columnName: string]: FormItemConfigs,

}

export const getResponseExtendFormConfigs = (responseExtend: ResponseExtend<any>): ResponseExtendFormConfigs => {
  const result: ResponseExtendFormConfigs = {
    /** code  */
    code: {
      name: 'code',
      label: "code",
      config: {
        initialValue: responseExtend.code,
      }
    },
    /** exeptionClass  */
    exeptionClass: {
      name: 'exeptionClass',
      label: "exeptionClass",
      config: {
        initialValue: responseExtend.exeptionClass,
      }
    },
    /** data  */
    data: {
      name: 'data',
      label: "data",
      config: {
        initialValue: responseExtend.data,
      }
    },
    /** status  */
    status: {
      name: 'status',
      isEnum: true,
      options: responseStatusOptions,
      label: "status",
      config: {
        initialValue: responseExtend.status,
      }
    },
    /** message  */
    message: {
      name: 'message',
      label: "message",
      config: {
        initialValue: responseExtend.message,
      }
    },
    /** success  */
    success: {
      name: 'success',
      label: "success",
      config: {
        initialValue: responseExtend.success,
      }
    },
  }


  result.code.editor = UIUtil.buildInputEditor(result.code);
  result.exeptionClass.editor = UIUtil.buildInputEditor(result.exeptionClass);
  result.data.editor = UIUtil.buildInputEditor(result.data);
  result.status.editor = UIUtil.buildEnumEditor(result.status, responseStatusOptions);
  result.message.editor = UIUtil.buildInputEditor(result.message);
  result.success.editor = UIUtil.buildInputEditor(result.success);

  return result;
}


