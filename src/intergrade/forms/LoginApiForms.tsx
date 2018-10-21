/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import SimpleResponse from "../beans/SimpleResponse";
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';

export namespace LoginApiForms {
  export interface loginFormConfigs extends FormConfigs {
  /** 用户名  */
  username?: FormItemConfigs,
  /** 密码  */
  password?: FormItemConfigs,
  }

  export const loginFormConfigs = (queryRule: ObjectMap<any> = {}): loginFormConfigs => {
    const result: loginFormConfigs = {
    /** 用户名  */
    username: {
      name: 'username',
      label: "用户名",
      config: {
        initialValue: queryRule.username,
        rules: [
          {
            required: true,
            max: 64,
            message: "{javax.validation.constraints.Max.message}",
          },
        ],
      }
    },

    /** 密码  */
    password: {
      name: 'password',
      label: "密码",
      config: {
        initialValue: queryRule.password,
        rules: [
          {
            required: true,
            max: 64,
            message: "{javax.validation.constraints.Max.message}",
          },
        ],
      }
    },

    }

    result.username.editor = UIUtil.buildInputEditor(result.username);
    result.password.editor = UIUtil.buildInputEditor(result.password);

    return result;
  }
}