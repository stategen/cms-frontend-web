/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import User from "../beans/User"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';

/** 用户ID */
const user_userId = {
  name: 'userId',
  isId: true,
  label: "用户ID",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_userId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户名 */
const user_username = {
  name: 'username',
  label: "用户名",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_username;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户角色 ADMIN,DEFAULT,DEVELOPER */
const user_roleType = {
  name: 'roleType',
  label: "用户角色",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
user_roleType.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_roleType;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** name */
const user_name = {
  name: 'name',
  label: "name",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_name;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** nickName */
const user_nickName = {
  name: 'nickName',
  label: "nickName",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_nickName;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** age */
const user_age = {
  name: 'age',
  label: "age",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
user_age.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_age;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** address */
const user_address = {
  name: 'address',
  label: "address",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_address;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** isMale */
const user_isMale = {
  name: 'isMale',
  label: "isMale",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
user_isMale.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_isMale;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** avatarUrl */
const user_avatarUrl = {
  name: 'avatarUrl',
  label: "avatarUrl",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_avatarUrl;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 邮箱 */
const user_email = {
  name: 'email',
  label: "邮箱",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_email;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const user_createTime = {
  name: 'createTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
user_createTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_createTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const user_updateTime = {
  name: 'updateTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
user_updateTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || user_updateTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

export interface UserFormItemConfigMap extends FormItemConfigMap {
  /** 用户ID  */
  UserId?: typeof user_userId & Partial<FormItemConfig>,

  /** 用户名  */
  Username?: typeof user_username & Partial<FormItemConfig>,

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  RoleType?: typeof user_roleType & Partial<FormItemConfig>,

  /** name  */
  Name?: typeof user_name & Partial<FormItemConfig>,

  /** nickName  */
  NickName?: typeof user_nickName & Partial<FormItemConfig>,

  /** age  */
  Age?: typeof user_age & Partial<FormItemConfig>,

  /** address  */
  Address?: typeof user_address & Partial<FormItemConfig>,

  /** isMale  */
  IsMale?: typeof user_isMale & Partial<FormItemConfig>,

  /** avatarUrl  */
  AvatarUrl?: typeof user_avatarUrl & Partial<FormItemConfig>,

  /** 邮箱  */
  Email?: typeof user_email & Partial<FormItemConfig>,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof user_createTime & Partial<FormItemConfig>,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof user_updateTime & Partial<FormItemConfig>,

}
export const getUserFormItemConfigMap = (user: User, form?: FormPropsUtils): UserFormItemConfigMap => {
  /** 用户ID */
  user_userId.form = form;
  const user_userIdValue =user.userId;
  user_userId.config.initialValue = user_userIdValue;
  user_userId.data = user_userIdValue;
  /** 用户名 */
  user_username.form = form;
  const user_usernameValue =user.username;
  user_username.config.initialValue = user_usernameValue;
  user_username.data = user_usernameValue;
  /** 用户角色 ADMIN,DEFAULT,DEVELOPER */
  user_roleType.form = form;
  const user_roleTypeValue =user.roleType;
  user_roleType.config.initialValue = user_roleTypeValue;
  user_roleType.data = user_roleTypeValue;
  /** name */
  user_name.form = form;
  const user_nameValue =user.name;
  user_name.config.initialValue = user_nameValue;
  user_name.data = user_nameValue;
  /** nickName */
  user_nickName.form = form;
  const user_nickNameValue =user.nickName;
  user_nickName.config.initialValue = user_nickNameValue;
  user_nickName.data = user_nickNameValue;
  /** age */
  user_age.form = form;
  const user_ageValue =user.age;
  user_age.config.initialValue = user_ageValue;
  user_age.data = user_ageValue;
  /** address */
  user_address.form = form;
  const user_addressValue =user.address;
  user_address.config.initialValue = user_addressValue;
  user_address.data = user_addressValue;
  /** isMale */
  user_isMale.form = form;
  const user_isMaleValue =user.isMale;
  user_isMale.config.initialValue = user_isMaleValue;
  user_isMale.data = user_isMaleValue;
  /** avatarUrl */
  user_avatarUrl.form = form;
  const user_avatarUrlValue =user.avatarUrl;
  user_avatarUrl.config.initialValue = user_avatarUrlValue;
  user_avatarUrl.data = user_avatarUrlValue;
  /** 邮箱 */
  user_email.form = form;
  const user_emailValue =user.email;
  user_email.config.initialValue = user_emailValue;
  user_email.data = user_emailValue;
  /** 创建时间 TIMESTAMP*/
  user_createTime.form = form;
  const user_createTimeValue =user.createTime ? moment(user.createTime) : null;
  user_createTime.config.initialValue = user_createTimeValue;
  user_createTime.data = user_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  user_updateTime.form = form;
  const user_updateTimeValue =user.updateTime ? moment(user.updateTime) : null;
  user_updateTime.config.initialValue = user_updateTimeValue;
  user_updateTime.data = user_updateTimeValue;

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


