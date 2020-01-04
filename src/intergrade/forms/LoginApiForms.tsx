/**
 *  Do not remove this unless you get business authorization.
 *  Login
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import SimpleResponse from "../beans/SimpleResponse";
import User from "../beans/User";
import UIEditors from "@utils/UIEditors";
import {
  FormItemConfig, FormItemConfigMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ObjectMap,
  TemporalType, FormProps, confirmChanges, moment
} from "@utils/DvaUtil";
import UIColumns from "@utils/UIColumns";
import SimpleResponseColumns from '../columns/SimpleResponseColumns';
import UserColumns from '../columns/UserColumns';


namespace LoginApiForms {
  /** 用户名 */
  const login_username = {
    key: 'username',
    dataIndex: 'username',
    title: '用户名',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          required: true,
          message: "不能为null",
        },
        {
          required: true,
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },

    UIEditor__: UIEditors.BuildInputEditor,
    Editor: UIEditors.BuildInputEditor,
  };
  /** 密码 */
  const login_password = {
    key: 'password',
    dataIndex: 'password',
    title: '密码',
    noJson: true,
    config: {
      rules: [
        {
          required: true,
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    nullTitle: '请选择',

    UIEditor__: UIEditors.BuildPasswordEditor,
    Editor: UIEditors.BuildPasswordEditor,
  };
  confirmChanges([
      login_username,
      login_password,
    ]
  );
  /** 国际区号 */
  const loginByMobile_interCode = {
    key: 'interCode',
    dataIndex: 'interCode',
    title: '国际区号',
    renderColumn: UIColumns.InputRender,
    config: {
    },

    UIEditor__: UIEditors.BuildInputEditor,
    Editor: UIEditors.BuildInputEditor,
  };
  /** 手机号 */
  const loginByMobile_mobile = {
    key: 'mobile',
    dataIndex: 'mobile',
    title: '手机号',
    renderColumn: UIColumns.InputRender,
    config: {
    },

    UIEditor__: UIEditors.BuildInputEditor,
    Editor: UIEditors.BuildInputEditor,
  };
  /** 密码 */
  const loginByMobile_password = {
    key: 'password',
    dataIndex: 'password',
    title: '密码',
    renderColumn: UIColumns.InputRender,
    config: {
    },

    UIEditor__: UIEditors.BuildInputEditor,
    Editor: UIEditors.BuildInputEditor,
  };
  confirmChanges([
      loginByMobile_interCode,
      loginByMobile_mobile,
      loginByMobile_password,
    ]
  );


  export interface ILoginFormItemConfigMap extends FormItemConfigMap {
    /** 用户名  */
    Username?: typeof login_username & Partial<FormItemConfig>,
    /** 密码  */
    Password?: typeof login_password & Partial<FormItemConfig>,
  }

  let LoginFormItemConfigMap = null;
  export const removeLoginFormItemConfigMapRef = ((ref) => ref ? null : LoginFormItemConfigMap = null);
  login_username.Editor = ((props?: UIEditors.InputEditorProps) => {
    return UIEditors.rebuildEditor(props, LoginFormItemConfigMap.Username, removeLoginFormItemConfigMapRef);
  }) as any;
  login_password.Editor = ((props?: UIEditors.PasswordEditorProps) => {
    return UIEditors.rebuildEditor(props, LoginFormItemConfigMap.Password, removeLoginFormItemConfigMapRef);
  }) as any;

  /**
   const UsernameEditor = loginFormItemConfigMap.Username.Editor;
   const PasswordEditor = loginFormItemConfigMap.Password.Editor;
   <UsernameEditor
   >
   </UsernameEditor>
   <PasswordEditor
   >
   </PasswordEditor>
   */
  export const getLoginFormItemConfigMap = (queryRule: ObjectMap<any> = {}, formProps?: FormProps): ILoginFormItemConfigMap => {
    /** Input */
    const login_usernameValue = queryRule.username;
    /** Password */
    const login_passwordValue = queryRule.password;
    queryRule.lastOptions__ ? null : queryRule.lastOptions__ = {};
    const componentMap = {};
    LoginFormItemConfigMap = {
      Username: {
        ...login_username,
        config: {...login_username.config, initialValue: login_usernameValue},
        formProps,
        record: queryRule,
        componentMap,
        
      },
      Password: {
        ...login_password,
        config: {...login_password.config, initialValue: login_passwordValue},
        formProps,
        record: queryRule,
        componentMap,
        
      },
    }
    return LoginFormItemConfigMap;
  }

  export interface ILoginByMobileFormItemConfigMap extends FormItemConfigMap {
    /** 国际区号  */
    InterCode?: typeof loginByMobile_interCode & Partial<FormItemConfig>,
    /** 手机号  */
    Mobile?: typeof loginByMobile_mobile & Partial<FormItemConfig>,
    /** 密码  */
    Password?: typeof loginByMobile_password & Partial<FormItemConfig>,
  }

  let LoginByMobileFormItemConfigMap = null;
  export const removeLoginByMobileFormItemConfigMapRef = ((ref) => ref ? null : LoginByMobileFormItemConfigMap = null);
  loginByMobile_interCode.Editor = ((props?: UIEditors.InputEditorProps) => {
    return UIEditors.rebuildEditor(props, LoginByMobileFormItemConfigMap.InterCode, removeLoginByMobileFormItemConfigMapRef);
  }) as any;
  loginByMobile_mobile.Editor = ((props?: UIEditors.InputEditorProps) => {
    return UIEditors.rebuildEditor(props, LoginByMobileFormItemConfigMap.Mobile, removeLoginByMobileFormItemConfigMapRef);
  }) as any;
  loginByMobile_password.Editor = ((props?: UIEditors.InputEditorProps) => {
    return UIEditors.rebuildEditor(props, LoginByMobileFormItemConfigMap.Password, removeLoginByMobileFormItemConfigMapRef);
  }) as any;

  /**
   const InterCodeEditor = loginByMobileFormItemConfigMap.InterCode.Editor;
   const MobileEditor = loginByMobileFormItemConfigMap.Mobile.Editor;
   const PasswordEditor = loginByMobileFormItemConfigMap.Password.Editor;
   <InterCodeEditor
   >
   </InterCodeEditor>
   <MobileEditor
   >
   </MobileEditor>
   <PasswordEditor
   >
   </PasswordEditor>
   */
  export const getLoginByMobileFormItemConfigMap = (queryRule: ObjectMap<any> = {}, formProps?: FormProps): ILoginByMobileFormItemConfigMap => {
    /** Input */
    const loginByMobile_interCodeValue = queryRule.interCode;
    /** Input */
    const loginByMobile_mobileValue = queryRule.mobile;
    /** Input */
    const loginByMobile_passwordValue = queryRule.password;
    queryRule.lastOptions__ ? null : queryRule.lastOptions__ = {};
    const componentMap = {};
    LoginByMobileFormItemConfigMap = {
      InterCode: {
        ...loginByMobile_interCode,
        config: {...loginByMobile_interCode.config, initialValue: loginByMobile_interCodeValue},
        formProps,
        record: queryRule,
        componentMap,
        
      },
      Mobile: {
        ...loginByMobile_mobile,
        config: {...loginByMobile_mobile.config, initialValue: loginByMobile_mobileValue},
        formProps,
        record: queryRule,
        componentMap,
        
      },
      Password: {
        ...loginByMobile_password,
        config: {...loginByMobile_password.config, initialValue: loginByMobile_passwordValue},
        formProps,
        record: queryRule,
        componentMap,
        
      },
    }
    return LoginByMobileFormItemConfigMap;
  }
}
export default LoginApiForms;