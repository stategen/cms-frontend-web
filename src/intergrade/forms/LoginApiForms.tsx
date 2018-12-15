/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import SimpleResponse from "../beans/SimpleResponse";
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';

/** 用户名 */
const login_username = {
  name: 'username',
  label: "用户名",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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
login_username.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || login_username;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 密码 */
const login_password = {
  name: 'password',
  label: "密码",
  type: "password",
  Editor: UIUtil.BuildPasswordEditor,
  pagesProps: null,
  data: null,
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
login_password.Editor =
  (props?: UIUtil.PasswordEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || login_password;
    props = {...props, formItemConfig};
    return UIUtil.BuildPasswordEditor(props);
  }


export namespace LoginApiForms {
  export interface LoginApiLoginFormItemConfigMap extends FormItemConfigMap {
    /** 用户名  */
    Username?: typeof login_username & Partial<FormItemConfig>,
    /** 密码  */
    Password?: typeof login_password & Partial<FormItemConfig>,
  }

  export const getLoginFormItemConfigMap = (queryRule: ObjectMap<any> = {}, pagesProps: PagesProps): LoginApiLoginFormItemConfigMap => {
    /** 用户名 */
    login_username.pagesProps = pagesProps;
    const login_usernameValue =queryRule.username;
    login_username.config.initialValue = login_usernameValue;
    login_username.data = login_usernameValue;
    /** 密码 */
    login_password.pagesProps = pagesProps;
    const login_passwordValue =queryRule.password;
    login_password.config.initialValue = login_passwordValue;
    login_password.data = login_passwordValue;

    return {
      Username: login_username,
      Password: login_password,
    }
  }
}