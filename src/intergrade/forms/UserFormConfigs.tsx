/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import User from "../beans/User"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

export interface UserFormConfigs extends FormConfigs {
  /** 用户ID  */
  userId?: FormItemConfigs,

  /** 用户名  */
  username?: FormItemConfigs,

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  roleType?: FormItemConfigs,

  /** name  */
  name?: FormItemConfigs,

  /** nickName  */
  nickName?: FormItemConfigs,

  /** age  */
  age?: FormItemConfigs,

  /** address  */
  address?: FormItemConfigs,

  /** isMale  */
  isMale?: FormItemConfigs,

  /** avatarUrl  */
  avatarUrl?: FormItemConfigs,

  /** 邮箱  */
  email?: FormItemConfigs,

  /** 创建时间  TIMESTAMP*/
  createTime?: FormItemConfigs,

  /** 更新时间  TIMESTAMP*/
  updateTime?: FormItemConfigs,

  [columnName: string]: FormItemConfigs,

}

export const getUserFormConfigs = (user: User, formPropsUtils?: FormPropsUtils): UserFormConfigs => {
  const _ ={formPropsUtils: formPropsUtils, createFormItemProps: UIUtil.createFormItemProps};
  /** 用户ID  */
  const userId: FormItemConfigs = {
    ..._,
    name: 'userId',
    isId: true,
    label: "用户ID",
    config: {
      initialValue: user.userId,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 用户名  */
  const username: FormItemConfigs = {
    ..._,
    name: 'username',
    label: "用户名",
    config: {
      initialValue: user.username,
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

  /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
  const roleType: FormItemConfigs = {
    ..._,
    name: 'roleType',
    isEnum: true,
    options: roleTypeOptions,
    label: "用户角色",
    config: {
      initialValue: user.roleType,
    }
  };

  /** name  */
  const name: FormItemConfigs = {
    ..._,
    name: 'name',
    label: "name",
    config: {
      initialValue: user.name,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** nickName  */
  const nickName: FormItemConfigs = {
    ..._,
    name: 'nickName',
    label: "nickName",
    config: {
      initialValue: user.nickName,
      rules: [
        {
          max: 32,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** age  */
  const age: FormItemConfigs = {
    ..._,
    name: 'age',
    label: "age",
    config: {
      initialValue: user.age,
    }
  };

  /** address  */
  const address: FormItemConfigs = {
    ..._,
    name: 'address',
    label: "address",
    config: {
      initialValue: user.address,
      rules: [
        {
          max: 255,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** isMale  */
  const isMale: FormItemConfigs = {
    ..._,
    name: 'isMale',
    label: "isMale",
    config: {
      initialValue: user.isMale,
    }
  };

  /** avatarUrl  */
  const avatarUrl: FormItemConfigs = {
    ..._,
    name: 'avatarUrl',
    label: "avatarUrl",
    config: {
      initialValue: user.avatarUrl,
      rules: [
        {
          max: 255,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 邮箱  */
  const email: FormItemConfigs = {
    ..._,
    name: 'email',
    label: "邮箱",
    config: {
      initialValue: user.email,
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

  /** 创建时间  TIMESTAMP*/
  const createTime: FormItemConfigs = {
    ..._,
    name: 'createTime',
    format: TIMESTAMP_FORMAT,
    label: "创建时间",
    config: {
      initialValue: user.createTime ? moment(user.createTime) : null,
    }
  };

  /** 更新时间  TIMESTAMP*/
  const updateTime: FormItemConfigs = {
    ..._,
    name: 'updateTime',
    format: TIMESTAMP_FORMAT,
    label: "更新时间",
    config: {
      initialValue: user.updateTime ? moment(user.updateTime) : null,
    }
  };

  userId.editor = UIUtil.buildInputEditor;
  username.editor = UIUtil.buildInputEditor;
  roleType.editor = UIUtil.buildEnumEditor;
  roleType.options = roleTypeOptions;
  name.editor = UIUtil.buildInputEditor;
  nickName.editor = UIUtil.buildInputEditor;
  age.editor = UIUtil.buildInputEditor;
  address.editor = UIUtil.buildInputEditor;
  isMale.editor = UIUtil.buildInputEditor;
  avatarUrl.editor = UIUtil.buildInputEditor;
  email.editor = UIUtil.buildInputEditor;
  createTime.editor = UIUtil.buildTimeStampEditor;
  createTime.format = TIMESTAMP_FORMAT;
  updateTime.editor = UIUtil.buildTimeStampEditor;
  updateTime.format = TIMESTAMP_FORMAT;

  return {
    userId,
    username,
    roleType,
    name,
    nickName,
    age,
    address,
    isMale,
    avatarUrl,
    email,
    createTime,
    updateTime,
  }
}


