/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import AntdPageList from "../beans/AntdPageList";
import RoleType from "../enums/RoleType";
import User from "../beans/User";
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {roleTypeOptions} from '../enums/RoleType';

export namespace UserApiForms {
  export interface getUserPageListByDefaultQueryFormConfigs extends FormConfigs {
  /** 用户IDs  */
  userIds?: FormItemConfigs,
  /** 用户名Like  */
  usernameLike?: FormItemConfigs,
  /** 密码Like  */
  passwordLike?: FormItemConfigs,
  /** 用户角色s  */
  roleTypes?: FormItemConfigs,
  /** 用户名nameLike  */
  nameLike?: FormItemConfigs,
  /** nickNameLike  */
  nickNameLike?: FormItemConfigs,
  /** ageMin  */
  ageMin?: FormItemConfigs,
  /** ageMax  */
  ageMax?: FormItemConfigs,
  /** addressLike  */
  addressLike?: FormItemConfigs,
  /** avatarLike  */
  avatarLike?: FormItemConfigs,
  /** 邮箱Like  */
  emailLike?: FormItemConfigs,
  /** 创建时间Min  TIMESTAMP*/
  createTimeMin?: FormItemConfigs,
  /** 创建时间Max  TIMESTAMP*/
  createTimeMax?: FormItemConfigs,
  /** 更新时间Min  TIMESTAMP*/
  updateTimeMin?: FormItemConfigs,
  /** 更新时间Max  TIMESTAMP*/
  updateTimeMax?: FormItemConfigs,
  }

  export const getUserPageListByDefaultQueryFormConfigs = (queryRule: ObjectMap<any> = {}): getUserPageListByDefaultQueryFormConfigs => {
    const result: getUserPageListByDefaultQueryFormConfigs = {
    /** 用户IDs  */
    userIds: {
      name: 'userIds',
      isArray: true,
      label: "用户IDs",
      config: {
        initialValue: queryRule.userIds,
      }
    },

    /** 用户名Like  */
    usernameLike: {
      name: 'usernameLike',
      label: "用户名Like",
      config: {
        initialValue: queryRule.usernameLike,
      }
    },

    /** 密码Like  */
    passwordLike: {
      name: 'passwordLike',
      label: "密码Like",
      config: {
        initialValue: queryRule.passwordLike,
      }
    },

    /** 用户角色s  */
    roleTypes: {
      name: 'roleTypes',
      isEnum: true,
      options: roleTypeOptions,
      isArray: true,
      label: "用户角色s",
      config: {
        initialValue: queryRule.roleTypes,
      }
    },

    /** 用户名nameLike  */
    nameLike: {
      name: 'nameLike',
      label: "用户名nameLike",
      config: {
        initialValue: queryRule.nameLike,
      }
    },

    /** nickNameLike  */
    nickNameLike: {
      name: 'nickNameLike',
      label: "nickNameLike",
      config: {
        initialValue: queryRule.nickNameLike,
      }
    },

    /** ageMin  */
    ageMin: {
      name: 'ageMin',
      label: "ageMin",
      config: {
        initialValue: queryRule.ageMin,
      }
    },

    /** ageMax  */
    ageMax: {
      name: 'ageMax',
      label: "ageMax",
      config: {
        initialValue: queryRule.ageMax,
      }
    },

    /** addressLike  */
    addressLike: {
      name: 'addressLike',
      label: "addressLike",
      config: {
        initialValue: queryRule.addressLike,
      }
    },

    /** avatarLike  */
    avatarLike: {
      name: 'avatarLike',
      label: "avatarLike",
      config: {
        initialValue: queryRule.avatarLike,
      }
    },

    /** 邮箱Like  */
    emailLike: {
      name: 'emailLike',
      label: "邮箱Like",
      config: {
        initialValue: queryRule.emailLike,
      }
    },

    /** 创建时间Min  TIMESTAMP*/
    createTimeMin: {
      name: 'createTimeMin',
      format: TIMESTAMP_FORMAT,
      label: "创建时间Min",
      config: {
        initialValue: queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null,
      }
    },

    /** 创建时间Max  TIMESTAMP*/
    createTimeMax: {
      name: 'createTimeMax',
      format: TIMESTAMP_FORMAT,
      label: "创建时间Max",
      config: {
        initialValue: queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null,
      }
    },

    /** 更新时间Min  TIMESTAMP*/
    updateTimeMin: {
      name: 'updateTimeMin',
      format: TIMESTAMP_FORMAT,
      label: "更新时间Min",
      config: {
        initialValue: queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null,
      }
    },

    /** 更新时间Max  TIMESTAMP*/
    updateTimeMax: {
      name: 'updateTimeMax',
      format: TIMESTAMP_FORMAT,
      label: "更新时间Max",
      config: {
        initialValue: queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null,
      }
    },

    }

    result.userIds.editor = UIUtil.buildInputEditor(result.userIds);
    result.usernameLike.editor = UIUtil.buildInputEditor(result.usernameLike);
    result.passwordLike.editor = UIUtil.buildInputEditor(result.passwordLike);
    result.roleTypes.editor = UIUtil.buildEnumEditor(result.roleTypes, roleTypeOptions);
    result.nameLike.editor = UIUtil.buildInputEditor(result.nameLike);
    result.nickNameLike.editor = UIUtil.buildInputEditor(result.nickNameLike);
    result.ageMin.editor = UIUtil.buildInputEditor(result.ageMin);
    result.ageMax.editor = UIUtil.buildInputEditor(result.ageMax);
    result.addressLike.editor = UIUtil.buildInputEditor(result.addressLike);
    result.avatarLike.editor = UIUtil.buildInputEditor(result.avatarLike);
    result.emailLike.editor = UIUtil.buildInputEditor(result.emailLike);
    result.createTimeMin.editor = UIUtil.buildTimeStampEditor(result.createTimeMin, TIMESTAMP_FORMAT);
    result.createTimeMax.editor = UIUtil.buildTimeStampEditor(result.createTimeMax, TIMESTAMP_FORMAT);
    result.updateTimeMin.editor = UIUtil.buildTimeStampEditor(result.updateTimeMin, TIMESTAMP_FORMAT);
    result.updateTimeMax.editor = UIUtil.buildTimeStampEditor(result.updateTimeMax, TIMESTAMP_FORMAT);

    return result;
  }
}