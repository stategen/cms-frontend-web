/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
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