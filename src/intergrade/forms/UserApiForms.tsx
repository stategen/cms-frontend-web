/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AntdPageList from "../beans/AntdPageList";
import {PaginationProps} from "antd/lib/pagination";
import RoleType from "../enums/RoleType";
import User from "../beans/User";
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

export namespace UserApiForms {
  export interface GetUserPageListByDefaultQueryFormConfigs extends FormConfigs {
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

  export const getUserPageListByDefaultQueryFormConfigs = (queryRule: ObjectMap<any> = {}, formPropsUtils?: FormPropsUtils): GetUserPageListByDefaultQueryFormConfigs => {
    const _ ={formPropsUtils: formPropsUtils, createFormItemProps: UIUtil.createFormItemProps};
    /** 用户IDs  */
    const userIds: FormItemConfigs = {
      ..._,
      name: 'userIds',
      isArray: true,
      label: "用户IDs",
      config: {
        initialValue: queryRule.userIds,
      }
    };

    /** 用户名Like  */
    const usernameLike: FormItemConfigs = {
      ..._,
      name: 'usernameLike',
      label: "用户名Like",
      config: {
        initialValue: queryRule.usernameLike,
      }
    };

    /** 密码Like  */
    const passwordLike: FormItemConfigs = {
      ..._,
      name: 'passwordLike',
      label: "密码Like",
      config: {
        initialValue: queryRule.passwordLike,
      }
    };

    /** 用户角色s  */
    const roleTypes: FormItemConfigs = {
      ..._,
      name: 'roleTypes',
      isEnum: true,
      options: roleTypeOptions,
      isArray: true,
      label: "用户角色s",
      config: {
        initialValue: queryRule.roleTypes,
      }
    };

    /** 用户名nameLike  */
    const nameLike: FormItemConfigs = {
      ..._,
      name: 'nameLike',
      label: "用户名nameLike",
      config: {
        initialValue: queryRule.nameLike,
      }
    };

    /** nickNameLike  */
    const nickNameLike: FormItemConfigs = {
      ..._,
      name: 'nickNameLike',
      label: "nickNameLike",
      config: {
        initialValue: queryRule.nickNameLike,
      }
    };

    /** ageMin  */
    const ageMin: FormItemConfigs = {
      ..._,
      name: 'ageMin',
      label: "ageMin",
      config: {
        initialValue: queryRule.ageMin,
      }
    };

    /** ageMax  */
    const ageMax: FormItemConfigs = {
      ..._,
      name: 'ageMax',
      label: "ageMax",
      config: {
        initialValue: queryRule.ageMax,
      }
    };

    /** addressLike  */
    const addressLike: FormItemConfigs = {
      ..._,
      name: 'addressLike',
      label: "addressLike",
      config: {
        initialValue: queryRule.addressLike,
      }
    };

    /** avatarLike  */
    const avatarLike: FormItemConfigs = {
      ..._,
      name: 'avatarLike',
      label: "avatarLike",
      config: {
        initialValue: queryRule.avatarLike,
      }
    };

    /** 邮箱Like  */
    const emailLike: FormItemConfigs = {
      ..._,
      name: 'emailLike',
      label: "邮箱Like",
      config: {
        initialValue: queryRule.emailLike,
      }
    };

    /** 创建时间Min  TIMESTAMP*/
    const createTimeMin: FormItemConfigs = {
      ..._,
      name: 'createTimeMin',
      format: TIMESTAMP_FORMAT,
      label: "创建时间Min",
      config: {
        initialValue: queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null,
      }
    };

    /** 创建时间Max  TIMESTAMP*/
    const createTimeMax: FormItemConfigs = {
      ..._,
      name: 'createTimeMax',
      format: TIMESTAMP_FORMAT,
      label: "创建时间Max",
      config: {
        initialValue: queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null,
      }
    };

    /** 更新时间Min  TIMESTAMP*/
    const updateTimeMin: FormItemConfigs = {
      ..._,
      name: 'updateTimeMin',
      format: TIMESTAMP_FORMAT,
      label: "更新时间Min",
      config: {
        initialValue: queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null,
      }
    };

    /** 更新时间Max  TIMESTAMP*/
    const updateTimeMax: FormItemConfigs = {
      ..._,
      name: 'updateTimeMax',
      format: TIMESTAMP_FORMAT,
      label: "更新时间Max",
      config: {
        initialValue: queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null,
      }
    };

    userIds.editor = UIUtil.buildInputEditor;
    usernameLike.editor = UIUtil.buildInputEditor;
    passwordLike.editor = UIUtil.buildInputEditor;
    roleTypes.editor = UIUtil.buildEnumEditor;
    roleTypes.options = roleTypeOptions;
    nameLike.editor = UIUtil.buildInputEditor;
    nickNameLike.editor = UIUtil.buildInputEditor;
    ageMin.editor = UIUtil.buildInputEditor;
    ageMax.editor = UIUtil.buildInputEditor;
    addressLike.editor = UIUtil.buildInputEditor;
    avatarLike.editor = UIUtil.buildInputEditor;
    emailLike.editor = UIUtil.buildInputEditor;
    createTimeMin.editor = UIUtil.buildTimeStampEditor;
    createTimeMin.format = TIMESTAMP_FORMAT;
    createTimeMax.editor = UIUtil.buildTimeStampEditor;
    createTimeMax.format = TIMESTAMP_FORMAT;
    updateTimeMin.editor = UIUtil.buildTimeStampEditor;
    updateTimeMin.format = TIMESTAMP_FORMAT;
    updateTimeMax.editor = UIUtil.buildTimeStampEditor;
    updateTimeMax.format = TIMESTAMP_FORMAT;

    return {
      userIds,
      usernameLike,
      passwordLike,
      roleTypes,
      nameLike,
      nickNameLike,
      ageMin,
      ageMax,
      addressLike,
      avatarLike,
      emailLike,
      createTimeMin,
      createTimeMax,
      updateTimeMin,
      updateTimeMax,
    }
  }
}