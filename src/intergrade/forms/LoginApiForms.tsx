/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import SimpleResponse from "../beans/SimpleResponse";
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';

export namespace LoginApiForms {
  export interface LoginFormConfigs extends FormConfigs {
  /** 用户名  */
  username?: FormItemConfigs,
  /** 密码  */
  password?: FormItemConfigs,
  }

  export const loginFormConfigs = (queryRule: ObjectMap<any> = {}, formPropsUtils?: FormPropsUtils): LoginFormConfigs => {
    const _ ={formPropsUtils: formPropsUtils, createFormItemProps: UIUtil.createFormItemProps};
    /** 用户名  */
    const username: FormItemConfigs = {
      ..._,
      name: 'username',
      label: "用户名",
      config: {
        initialValue: queryRule.username,
        rules: [
          {
            required: true,
            message: "{javax.validation.constraints.NotNull.message}",
          },
          {
            required: true,
            max: 64,
            message: "{javax.validation.constraints.Max.message}",
          },
        ],
      }
    };

    /** 密码  */
    const password: FormItemConfigs = {
      ..._,
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
    };

    username.editor = UIUtil.buildInputEditor;
    password.editor = UIUtil.buildInputEditor;

    return {
      username,
      password,
    }
  }
}