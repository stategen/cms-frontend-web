/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import SimpleResponse from "../beans/SimpleResponse";
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';

/** 用户名  */
const login_username = {
  name: 'username',
  label: "用户名",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
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
login_username.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: login_username};
    return UIUtil.buildInputEditor(props);
  }

/** 密码  */
const login_password = {
  name: 'password',
  label: "密码",
  type: "password",
  editor: UIUtil.buildPasswordEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        required: true,
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
login_password.editor =
  (props: UIUtil.PasswordEditorProps) => {
    props ={...props, formItemConfig: login_password};
    return UIUtil.buildPasswordEditor(props);
  }


export namespace LoginApiForms {
  export interface LoginFormConfigs extends FormConfigs {
    /** 用户名  */
    username?: typeof login_username & FormItemConfig,
    /** 密码  */
    password?: typeof login_password & FormItemConfig,
  }

  export const getLoginFormConfigs = (queryRule: ObjectMap<any> = {}, formPropsUtils?: FormPropsUtils): LoginFormConfigs => {
    /** 用户名  */
    login_username.formPropsUtils = formPropsUtils;
    login_username.config.initialValue = queryRule.username;
    login_username.value = queryRule.username;
    /** 密码  */
    login_password.formPropsUtils = formPropsUtils;
    login_password.config.initialValue = queryRule.password;
    login_password.value = queryRule.password;

    return {
      username: login_username,
      password: login_password,
    }
  }
}