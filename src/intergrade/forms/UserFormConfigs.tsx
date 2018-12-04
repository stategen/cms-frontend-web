/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import User from "../beans/User"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 用户ID  */
const User_userId = {
  name: 'userId',
  isId: true,
  label: "用户ID",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
User_userId.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_userId};
    return UIUtil.buildInputEditor(props);
  }

/** 用户名  */
const User_username = {
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
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
User_username.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_username};
    return UIUtil.buildInputEditor(props);
  }

/** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
const User_roleType = {
  name: 'roleType',
  isEnum: true,
  options: roleTypeOptions,
  label: "用户角色",
  type: "",
  editor: UIUtil.buildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
User_roleType.editor =
  (props: UIUtil.EnumEditorProps) => {
    props ={...props, formItemConfig: User_roleType};
    return UIUtil.buildEnumEditor(props);
  }

/** name  */
const User_name = {
  name: 'name',
  label: "name",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
User_name.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_name};
    return UIUtil.buildInputEditor(props);
  }

/** nickName  */
const User_nickName = {
  name: 'nickName',
  label: "nickName",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 32,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
User_nickName.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_nickName};
    return UIUtil.buildInputEditor(props);
  }

/** age  */
const User_age = {
  name: 'age',
  label: "age",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
User_age.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_age};
    return UIUtil.buildInputEditor(props);
  }

/** address  */
const User_address = {
  name: 'address',
  label: "address",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 255,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
User_address.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_address};
    return UIUtil.buildInputEditor(props);
  }

/** isMale  */
const User_isMale = {
  name: 'isMale',
  label: "isMale",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
User_isMale.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_isMale};
    return UIUtil.buildInputEditor(props);
  }

/** avatarUrl  */
const User_avatarUrl = {
  name: 'avatarUrl',
  label: "avatarUrl",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 255,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
User_avatarUrl.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_avatarUrl};
    return UIUtil.buildInputEditor(props);
  }

/** 邮箱  */
const User_email = {
  name: 'email',
  label: "邮箱",
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
        max: 128,
        message: "{javax.validation.constraints.Max.message}",
      },
      {
        message: "{javax.validation.constraints.Email.message}",
        pattern: /.*/,
      },
    ],
  }
};
User_email.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: User_email};
    return UIUtil.buildInputEditor(props);
  }

/** 创建时间  TIMESTAMP*/
const User_createTime = {
  name: 'createTime',
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
User_createTime.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: User_createTime};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 更新时间  TIMESTAMP*/
const User_updateTime = {
  name: 'updateTime',
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
User_updateTime.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: User_updateTime};
    return UIUtil.buildTimeStampEditor(props);
  }

export interface UserFormConfigs extends FormConfigs {
  /** 用户ID  */
  userId?: typeof User_userId & FormItemConfig,

  /** 用户名  */
  username?: typeof User_username & FormItemConfig,

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  roleType?: typeof User_roleType & FormItemConfig,

  /** name  */
  name?: typeof User_name & FormItemConfig,

  /** nickName  */
  nickName?: typeof User_nickName & FormItemConfig,

  /** age  */
  age?: typeof User_age & FormItemConfig,

  /** address  */
  address?: typeof User_address & FormItemConfig,

  /** isMale  */
  isMale?: typeof User_isMale & FormItemConfig,

  /** avatarUrl  */
  avatarUrl?: typeof User_avatarUrl & FormItemConfig,

  /** 邮箱  */
  email?: typeof User_email & FormItemConfig,

  /** 创建时间  TIMESTAMP*/
  createTime?: typeof User_createTime & FormItemConfig,

  /** 更新时间  TIMESTAMP*/
  updateTime?: typeof User_updateTime & FormItemConfig,

  [columnName: string]: FormItemConfig,
}
export const getUserFormConfigs = (user: User, formPropsUtils?: FormPropsUtils): UserFormConfigs => {
  /** 用户ID  */
  User_userId.formPropsUtils = formPropsUtils;
  User_userId.config.initialValue = user.userId;
  User_userId.value = user.userId;
  /** 用户名  */
  User_username.formPropsUtils = formPropsUtils;
  User_username.config.initialValue = user.username;
  User_username.value = user.username;
  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  User_roleType.formPropsUtils = formPropsUtils;
  User_roleType.config.initialValue = user.roleType;
  User_roleType.value = user.roleType;
  /** name  */
  User_name.formPropsUtils = formPropsUtils;
  User_name.config.initialValue = user.name;
  User_name.value = user.name;
  /** nickName  */
  User_nickName.formPropsUtils = formPropsUtils;
  User_nickName.config.initialValue = user.nickName;
  User_nickName.value = user.nickName;
  /** age  */
  User_age.formPropsUtils = formPropsUtils;
  User_age.config.initialValue = user.age;
  User_age.value = user.age;
  /** address  */
  User_address.formPropsUtils = formPropsUtils;
  User_address.config.initialValue = user.address;
  User_address.value = user.address;
  /** isMale  */
  User_isMale.formPropsUtils = formPropsUtils;
  User_isMale.config.initialValue = user.isMale;
  User_isMale.value = user.isMale;
  /** avatarUrl  */
  User_avatarUrl.formPropsUtils = formPropsUtils;
  User_avatarUrl.config.initialValue = user.avatarUrl;
  User_avatarUrl.value = user.avatarUrl;
  /** 邮箱  */
  User_email.formPropsUtils = formPropsUtils;
  User_email.config.initialValue = user.email;
  User_email.value = user.email;
  /** 创建时间  TIMESTAMP*/
  User_createTime.formPropsUtils = formPropsUtils;
  User_createTime.config.initialValue = user.createTime ? moment(user.createTime) : null;
  User_createTime.value = user.createTime ? moment(user.createTime) : null;
  /** 更新时间  TIMESTAMP*/
  User_updateTime.formPropsUtils = formPropsUtils;
  User_updateTime.config.initialValue = user.updateTime ? moment(user.updateTime) : null;
  User_updateTime.value = user.updateTime ? moment(user.updateTime) : null;

  return {
    userId: User_userId,
    username: User_username,
    roleType: User_roleType,
    name: User_name,
    nickName: User_nickName,
    age: User_age,
    address: User_address,
    isMale: User_isMale,
    avatarUrl: User_avatarUrl,
    email: User_email,
    createTime: User_createTime,
    updateTime: User_updateTime,
  }
}


