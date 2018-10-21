/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import User from "../beans/User"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {roleTypeOptions} from '../enums/RoleType';

export interface UserFormConfigs extends FormConfigs {
  /** 用户ID  */
  userId?: FormItemConfigs,

  /** 用户名  */
  username?: FormItemConfigs,

  /** 密码，测试，明文  */
  password?: FormItemConfigs,

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

  /** avatar  */
  avatar?: FormItemConfigs,

  /** 邮箱  */
  email?: FormItemConfigs,

  /** 创建时间  TIMESTAMP*/
  createTime?: FormItemConfigs,

  /** 更新时间  TIMESTAMP*/
  updateTime?: FormItemConfigs,

  [columnName: string]: FormItemConfigs,

}

export const getUserFormConfigs = (user: User): UserFormConfigs => {
  const result: UserFormConfigs = {
    /** 用户ID  */
    userId: {
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
    },
    /** 用户名  */
    username: {
      name: 'username',
      label: "用户名",
      config: {
        initialValue: user.username,
        rules: [
          {
            max: 64,
            message: "{javax.validation.constraints.Max.message}",
          },
        ],
      }
    },
    /** 密码，测试，明文  */
    password: {
      name: 'password',
      label: "密码",
      config: {
        initialValue: user.password,
        rules: [
          {
            max: 64,
            message: "{javax.validation.constraints.Max.message}",
          },
        ],
      }
    },
    /** 用户角色 ADMIN,DEFAULT,DEVELOPER  */
    roleType: {
      name: 'roleType',
      isEnum: true,
      options: roleTypeOptions,
      label: "用户角色",
      config: {
        initialValue: user.roleType,
      }
    },
    /** name  */
    name: {
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
    },
    /** nickName  */
    nickName: {
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
    },
    /** age  */
    age: {
      name: 'age',
      label: "age",
      config: {
        initialValue: user.age,
      }
    },
    /** address  */
    address: {
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
    },
    /** isMale  */
    isMale: {
      name: 'isMale',
      label: "isMale",
      config: {
        initialValue: user.isMale,
      }
    },
    /** avatar  */
    avatar: {
      name: 'avatar',
      label: "avatar",
      config: {
        initialValue: user.avatar,
        rules: [
          {
            max: 255,
            message: "{javax.validation.constraints.Max.message}",
          },
        ],
      }
    },
    /** 邮箱  */
    email: {
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
    },
    /** 创建时间  TIMESTAMP*/
    createTime: {
      name: 'createTime',
      format: TIMESTAMP_FORMAT,
      label: "创建时间",
      config: {
        initialValue: user.createTime ? moment(user.createTime) : null,
      }
    },
    /** 更新时间  TIMESTAMP*/
    updateTime: {
      name: 'updateTime',
      format: TIMESTAMP_FORMAT,
      label: "更新时间",
      config: {
        initialValue: user.updateTime ? moment(user.updateTime) : null,
      }
    },
  }


  result.userId.editor = UIUtil.buildInputEditor(result.userId);
  result.username.editor = UIUtil.buildInputEditor(result.username);
  result.password.editor = UIUtil.buildInputEditor(result.password);
  result.roleType.editor = UIUtil.buildEnumEditor(result.roleType, roleTypeOptions);
  result.name.editor = UIUtil.buildInputEditor(result.name);
  result.nickName.editor = UIUtil.buildInputEditor(result.nickName);
  result.age.editor = UIUtil.buildInputEditor(result.age);
  result.address.editor = UIUtil.buildInputEditor(result.address);
  result.isMale.editor = UIUtil.buildInputEditor(result.isMale);
  result.avatar.editor = UIUtil.buildInputEditor(result.avatar);
  result.email.editor = UIUtil.buildInputEditor(result.email);
  result.createTime.editor = UIUtil.buildTimeStampEditor(result.createTime, TIMESTAMP_FORMAT);
  result.updateTime.editor = UIUtil.buildTimeStampEditor(result.updateTime, TIMESTAMP_FORMAT);

  return result;
}


