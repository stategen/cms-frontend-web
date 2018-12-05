/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import User from "../beans/User"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 用户ID */
const user_userId = {
  name: 'userId',
  isId: true,
  label: "用户ID",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
user_userId.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_userId};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户名 */
const user_username = {
  name: 'username',
  label: "用户名",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
user_username.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_username};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户角色 ADMIN,DEFAULT,DEVELOPER */
const user_roleType = {
  name: 'roleType',
  isEnum: true,
  options: roleTypeOptions,
  label: "用户角色",
  type: "",
  Editor: UIUtil.BuildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
user_roleType.Editor =
  (props: UIUtil.EnumEditorProps) => {
    props = {...props, formItemConfig: user_roleType};
    return UIUtil.BuildEnumEditor(props);
  }

/** name */
const user_name = {
  name: 'name',
  label: "name",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
user_name.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_name};
    return UIUtil.BuildInputEditor(props);
  }

/** nickName */
const user_nickName = {
  name: 'nickName',
  label: "nickName",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
user_nickName.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_nickName};
    return UIUtil.BuildInputEditor(props);
  }

/** age */
const user_age = {
  name: 'age',
  label: "age",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
user_age.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_age};
    return UIUtil.BuildInputEditor(props);
  }

/** address */
const user_address = {
  name: 'address',
  label: "address",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
user_address.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_address};
    return UIUtil.BuildInputEditor(props);
  }

/** isMale */
const user_isMale = {
  name: 'isMale',
  label: "isMale",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
user_isMale.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_isMale};
    return UIUtil.BuildInputEditor(props);
  }

/** avatarUrl */
const user_avatarUrl = {
  name: 'avatarUrl',
  label: "avatarUrl",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
user_avatarUrl.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_avatarUrl};
    return UIUtil.BuildInputEditor(props);
  }

/** 邮箱 */
const user_email = {
  name: 'email',
  label: "邮箱",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
user_email.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: user_email};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const user_createTime = {
  name: 'createTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
user_createTime.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: user_createTime};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const user_updateTime = {
  name: 'updateTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
user_updateTime.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: user_updateTime};
    return UIUtil.BuildTimeStampEditor(props);
  }

export interface UserFormConfigs extends FormConfigs {
  /** 用户ID  */
  UserId?: typeof user_userId & FormItemConfig,

  /** 用户名  */
  Username?: typeof user_username & FormItemConfig,

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  RoleType?: typeof user_roleType & FormItemConfig,

  /** name  */
  Name?: typeof user_name & FormItemConfig,

  /** nickName  */
  NickName?: typeof user_nickName & FormItemConfig,

  /** age  */
  Age?: typeof user_age & FormItemConfig,

  /** address  */
  Address?: typeof user_address & FormItemConfig,

  /** isMale  */
  IsMale?: typeof user_isMale & FormItemConfig,

  /** avatarUrl  */
  AvatarUrl?: typeof user_avatarUrl & FormItemConfig,

  /** 邮箱  */
  Email?: typeof user_email & FormItemConfig,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof user_createTime & FormItemConfig,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof user_updateTime & FormItemConfig,

}
export const getUserFormConfigs = (user: User, formPropsUtils?: FormPropsUtils): UserFormConfigs => {
  /** 用户ID */
  user_userId.formPropsUtils = formPropsUtils;
  const user_userIdValue =user.userId;
  user_userId.config.initialValue = user_userIdValue;
  user_userId.value = user_userIdValue;
  /** 用户名 */
  user_username.formPropsUtils = formPropsUtils;
  const user_usernameValue =user.username;
  user_username.config.initialValue = user_usernameValue;
  user_username.value = user_usernameValue;
  /** 用户角色 ADMIN,DEFAULT,DEVELOPER */
  user_roleType.formPropsUtils = formPropsUtils;
  const user_roleTypeValue =user.roleType;
  user_roleType.config.initialValue = user_roleTypeValue;
  user_roleType.value = user_roleTypeValue;
  /** name */
  user_name.formPropsUtils = formPropsUtils;
  const user_nameValue =user.name;
  user_name.config.initialValue = user_nameValue;
  user_name.value = user_nameValue;
  /** nickName */
  user_nickName.formPropsUtils = formPropsUtils;
  const user_nickNameValue =user.nickName;
  user_nickName.config.initialValue = user_nickNameValue;
  user_nickName.value = user_nickNameValue;
  /** age */
  user_age.formPropsUtils = formPropsUtils;
  const user_ageValue =user.age;
  user_age.config.initialValue = user_ageValue;
  user_age.value = user_ageValue;
  /** address */
  user_address.formPropsUtils = formPropsUtils;
  const user_addressValue =user.address;
  user_address.config.initialValue = user_addressValue;
  user_address.value = user_addressValue;
  /** isMale */
  user_isMale.formPropsUtils = formPropsUtils;
  const user_isMaleValue =user.isMale;
  user_isMale.config.initialValue = user_isMaleValue;
  user_isMale.value = user_isMaleValue;
  /** avatarUrl */
  user_avatarUrl.formPropsUtils = formPropsUtils;
  const user_avatarUrlValue =user.avatarUrl;
  user_avatarUrl.config.initialValue = user_avatarUrlValue;
  user_avatarUrl.value = user_avatarUrlValue;
  /** 邮箱 */
  user_email.formPropsUtils = formPropsUtils;
  const user_emailValue =user.email;
  user_email.config.initialValue = user_emailValue;
  user_email.value = user_emailValue;
  /** 创建时间 TIMESTAMP*/
  user_createTime.formPropsUtils = formPropsUtils;
  const user_createTimeValue =user.createTime ? moment(user.createTime) : null;
  user_createTime.config.initialValue = user_createTimeValue;
  user_createTime.value = user_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  user_updateTime.formPropsUtils = formPropsUtils;
  const user_updateTimeValue =user.updateTime ? moment(user.updateTime) : null;
  user_updateTime.config.initialValue = user_updateTimeValue;
  user_updateTime.value = user_updateTimeValue;

  return {
    UserId: user_userId,
    Username: user_username,
    RoleType: user_roleType,
    Name: user_name,
    NickName: user_nickName,
    Age: user_age,
    Address: user_address,
    IsMale: user_isMale,
    AvatarUrl: user_avatarUrl,
    Email: user_email,
    CreateTime: user_createTime,
    UpdateTime: user_updateTime,
  }
}


