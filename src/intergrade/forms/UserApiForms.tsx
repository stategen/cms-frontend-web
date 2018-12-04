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
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 用户IDs  */
const getUserPageListByDefaultQuery_userIds = {
  name: 'userIds',
  isArray: true,
  label: "用户IDs",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_userIds.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_userIds};
    return UIUtil.buildInputEditor(props);
  }

/** 用户名Like  */
const getUserPageListByDefaultQuery_usernameLike = {
  name: 'usernameLike',
  label: "用户名Like",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_usernameLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_usernameLike};
    return UIUtil.buildInputEditor(props);
  }

/** 密码Like  */
const getUserPageListByDefaultQuery_passwordLike = {
  name: 'passwordLike',
  label: "密码Like",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_passwordLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_passwordLike};
    return UIUtil.buildInputEditor(props);
  }

/** 用户角色s  */
const getUserPageListByDefaultQuery_roleTypes = {
  name: 'roleTypes',
  isEnum: true,
  options: roleTypeOptions,
  isArray: true,
  label: "用户角色s",
  type: "",
  editor: UIUtil.buildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_roleTypes.editor =
  (props: UIUtil.EnumEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_roleTypes};
    return UIUtil.buildEnumEditor(props);
  }

/** 用户名nameLike  */
const getUserPageListByDefaultQuery_nameLike = {
  name: 'nameLike',
  label: "用户名nameLike",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_nameLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_nameLike};
    return UIUtil.buildInputEditor(props);
  }

/** nickNameLike  */
const getUserPageListByDefaultQuery_nickNameLike = {
  name: 'nickNameLike',
  label: "nickNameLike",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_nickNameLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_nickNameLike};
    return UIUtil.buildInputEditor(props);
  }

/** ageMin  */
const getUserPageListByDefaultQuery_ageMin = {
  name: 'ageMin',
  label: "ageMin",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_ageMin.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_ageMin};
    return UIUtil.buildInputEditor(props);
  }

/** ageMax  */
const getUserPageListByDefaultQuery_ageMax = {
  name: 'ageMax',
  label: "ageMax",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_ageMax.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_ageMax};
    return UIUtil.buildInputEditor(props);
  }

/** addressLike  */
const getUserPageListByDefaultQuery_addressLike = {
  name: 'addressLike',
  label: "addressLike",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_addressLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_addressLike};
    return UIUtil.buildInputEditor(props);
  }

/** avatarLike  */
const getUserPageListByDefaultQuery_avatarLike = {
  name: 'avatarLike',
  label: "avatarLike",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_avatarLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_avatarLike};
    return UIUtil.buildInputEditor(props);
  }

/** 邮箱Like  */
const getUserPageListByDefaultQuery_emailLike = {
  name: 'emailLike',
  label: "邮箱Like",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_emailLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_emailLike};
    return UIUtil.buildInputEditor(props);
  }

/** 创建时间Min  TIMESTAMP*/
const getUserPageListByDefaultQuery_createTimeMin = {
  name: 'createTimeMin',
  format: TIMESTAMP_FORMAT,
  label: "创建时间Min",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_createTimeMin.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_createTimeMin};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 创建时间Max  TIMESTAMP*/
const getUserPageListByDefaultQuery_createTimeMax = {
  name: 'createTimeMax',
  format: TIMESTAMP_FORMAT,
  label: "创建时间Max",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_createTimeMax.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_createTimeMax};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 更新时间Min  TIMESTAMP*/
const getUserPageListByDefaultQuery_updateTimeMin = {
  name: 'updateTimeMin',
  format: TIMESTAMP_FORMAT,
  label: "更新时间Min",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_updateTimeMin.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_updateTimeMin};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 更新时间Max  TIMESTAMP*/
const getUserPageListByDefaultQuery_updateTimeMax = {
  name: 'updateTimeMax',
  format: TIMESTAMP_FORMAT,
  label: "更新时间Max",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_updateTimeMax.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getUserPageListByDefaultQuery_updateTimeMax};
    return UIUtil.buildTimeStampEditor(props);
  }


export namespace UserApiForms {
  export interface GetUserPageListByDefaultQueryFormConfigs extends FormConfigs {
    /** 用户IDs  */
    userIds?: typeof getUserPageListByDefaultQuery_userIds & FormItemConfig,
    /** 用户名Like  */
    usernameLike?: typeof getUserPageListByDefaultQuery_usernameLike & FormItemConfig,
    /** 密码Like  */
    passwordLike?: typeof getUserPageListByDefaultQuery_passwordLike & FormItemConfig,
    /** 用户角色s  */
    roleTypes?: typeof getUserPageListByDefaultQuery_roleTypes & FormItemConfig,
    /** 用户名nameLike  */
    nameLike?: typeof getUserPageListByDefaultQuery_nameLike & FormItemConfig,
    /** nickNameLike  */
    nickNameLike?: typeof getUserPageListByDefaultQuery_nickNameLike & FormItemConfig,
    /** ageMin  */
    ageMin?: typeof getUserPageListByDefaultQuery_ageMin & FormItemConfig,
    /** ageMax  */
    ageMax?: typeof getUserPageListByDefaultQuery_ageMax & FormItemConfig,
    /** addressLike  */
    addressLike?: typeof getUserPageListByDefaultQuery_addressLike & FormItemConfig,
    /** avatarLike  */
    avatarLike?: typeof getUserPageListByDefaultQuery_avatarLike & FormItemConfig,
    /** 邮箱Like  */
    emailLike?: typeof getUserPageListByDefaultQuery_emailLike & FormItemConfig,
    /** 创建时间Min  TIMESTAMP*/
    createTimeMin?: typeof getUserPageListByDefaultQuery_createTimeMin & FormItemConfig,
    /** 创建时间Max  TIMESTAMP*/
    createTimeMax?: typeof getUserPageListByDefaultQuery_createTimeMax & FormItemConfig,
    /** 更新时间Min  TIMESTAMP*/
    updateTimeMin?: typeof getUserPageListByDefaultQuery_updateTimeMin & FormItemConfig,
    /** 更新时间Max  TIMESTAMP*/
    updateTimeMax?: typeof getUserPageListByDefaultQuery_updateTimeMax & FormItemConfig,
  }

  export const getGetUserPageListByDefaultQueryFormConfigs = (queryRule: ObjectMap<any> = {}, formPropsUtils?: FormPropsUtils): GetUserPageListByDefaultQueryFormConfigs => {
    /** 用户IDs  */
    getUserPageListByDefaultQuery_userIds.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_userIds.config.initialValue = queryRule.userIds;
    getUserPageListByDefaultQuery_userIds.value = queryRule.userIds;
    /** 用户名Like  */
    getUserPageListByDefaultQuery_usernameLike.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_usernameLike.config.initialValue = queryRule.usernameLike;
    getUserPageListByDefaultQuery_usernameLike.value = queryRule.usernameLike;
    /** 密码Like  */
    getUserPageListByDefaultQuery_passwordLike.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_passwordLike.config.initialValue = queryRule.passwordLike;
    getUserPageListByDefaultQuery_passwordLike.value = queryRule.passwordLike;
    /** 用户角色s  */
    getUserPageListByDefaultQuery_roleTypes.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_roleTypes.config.initialValue = queryRule.roleTypes;
    getUserPageListByDefaultQuery_roleTypes.value = queryRule.roleTypes;
    /** 用户名nameLike  */
    getUserPageListByDefaultQuery_nameLike.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_nameLike.config.initialValue = queryRule.nameLike;
    getUserPageListByDefaultQuery_nameLike.value = queryRule.nameLike;
    /** nickNameLike  */
    getUserPageListByDefaultQuery_nickNameLike.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_nickNameLike.config.initialValue = queryRule.nickNameLike;
    getUserPageListByDefaultQuery_nickNameLike.value = queryRule.nickNameLike;
    /** ageMin  */
    getUserPageListByDefaultQuery_ageMin.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_ageMin.config.initialValue = queryRule.ageMin;
    getUserPageListByDefaultQuery_ageMin.value = queryRule.ageMin;
    /** ageMax  */
    getUserPageListByDefaultQuery_ageMax.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_ageMax.config.initialValue = queryRule.ageMax;
    getUserPageListByDefaultQuery_ageMax.value = queryRule.ageMax;
    /** addressLike  */
    getUserPageListByDefaultQuery_addressLike.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_addressLike.config.initialValue = queryRule.addressLike;
    getUserPageListByDefaultQuery_addressLike.value = queryRule.addressLike;
    /** avatarLike  */
    getUserPageListByDefaultQuery_avatarLike.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_avatarLike.config.initialValue = queryRule.avatarLike;
    getUserPageListByDefaultQuery_avatarLike.value = queryRule.avatarLike;
    /** 邮箱Like  */
    getUserPageListByDefaultQuery_emailLike.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_emailLike.config.initialValue = queryRule.emailLike;
    getUserPageListByDefaultQuery_emailLike.value = queryRule.emailLike;
    /** 创建时间Min  TIMESTAMP*/
    getUserPageListByDefaultQuery_createTimeMin.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_createTimeMin.config.initialValue = queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getUserPageListByDefaultQuery_createTimeMin.value = queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    /** 创建时间Max  TIMESTAMP*/
    getUserPageListByDefaultQuery_createTimeMax.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_createTimeMax.config.initialValue = queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getUserPageListByDefaultQuery_createTimeMax.value = queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    /** 更新时间Min  TIMESTAMP*/
    getUserPageListByDefaultQuery_updateTimeMin.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_updateTimeMin.config.initialValue = queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getUserPageListByDefaultQuery_updateTimeMin.value = queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    /** 更新时间Max  TIMESTAMP*/
    getUserPageListByDefaultQuery_updateTimeMax.formPropsUtils = formPropsUtils;
    getUserPageListByDefaultQuery_updateTimeMax.config.initialValue = queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getUserPageListByDefaultQuery_updateTimeMax.value = queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;

    return {
      userIds: getUserPageListByDefaultQuery_userIds,
      usernameLike: getUserPageListByDefaultQuery_usernameLike,
      passwordLike: getUserPageListByDefaultQuery_passwordLike,
      roleTypes: getUserPageListByDefaultQuery_roleTypes,
      nameLike: getUserPageListByDefaultQuery_nameLike,
      nickNameLike: getUserPageListByDefaultQuery_nickNameLike,
      ageMin: getUserPageListByDefaultQuery_ageMin,
      ageMax: getUserPageListByDefaultQuery_ageMax,
      addressLike: getUserPageListByDefaultQuery_addressLike,
      avatarLike: getUserPageListByDefaultQuery_avatarLike,
      emailLike: getUserPageListByDefaultQuery_emailLike,
      createTimeMin: getUserPageListByDefaultQuery_createTimeMin,
      createTimeMax: getUserPageListByDefaultQuery_createTimeMax,
      updateTimeMin: getUserPageListByDefaultQuery_updateTimeMin,
      updateTimeMax: getUserPageListByDefaultQuery_updateTimeMax,
    }
  }
}