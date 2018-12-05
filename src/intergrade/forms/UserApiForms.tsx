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
import {FormItemConfig, FormItemConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 用户IDs */
const getUserPageListByDefaultQuery_userIds = {
  name: 'userIds',
  isArray: true,
  label: "用户IDs",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_userIds.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_userIds};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户名Like */
const getUserPageListByDefaultQuery_usernameLike = {
  name: 'usernameLike',
  label: "用户名Like",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_usernameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_usernameLike};
    return UIUtil.BuildInputEditor(props);
  }

/** 密码Like */
const getUserPageListByDefaultQuery_passwordLike = {
  name: 'passwordLike',
  label: "密码Like",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_passwordLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_passwordLike};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户角色s */
const getUserPageListByDefaultQuery_roleTypes = {
  name: 'roleTypes',
  isEnum: true,
  options: roleTypeOptions,
  isArray: true,
  label: "用户角色s",
  Editor: UIUtil.BuildEnumEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_roleTypes.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_roleTypes};
    return UIUtil.BuildEnumEditor(props);
  }

/** 用户名nameLike */
const getUserPageListByDefaultQuery_nameLike = {
  name: 'nameLike',
  label: "用户名nameLike",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_nameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_nameLike};
    return UIUtil.BuildInputEditor(props);
  }

/** nickNameLike */
const getUserPageListByDefaultQuery_nickNameLike = {
  name: 'nickNameLike',
  label: "nickNameLike",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_nickNameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_nickNameLike};
    return UIUtil.BuildInputEditor(props);
  }

/** ageMin */
const getUserPageListByDefaultQuery_ageMin = {
  name: 'ageMin',
  label: "ageMin",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_ageMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_ageMin};
    return UIUtil.BuildInputEditor(props);
  }

/** ageMax */
const getUserPageListByDefaultQuery_ageMax = {
  name: 'ageMax',
  label: "ageMax",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_ageMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_ageMax};
    return UIUtil.BuildInputEditor(props);
  }

/** addressLike */
const getUserPageListByDefaultQuery_addressLike = {
  name: 'addressLike',
  label: "addressLike",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_addressLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_addressLike};
    return UIUtil.BuildInputEditor(props);
  }

/** avatarLike */
const getUserPageListByDefaultQuery_avatarLike = {
  name: 'avatarLike',
  label: "avatarLike",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_avatarLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_avatarLike};
    return UIUtil.BuildInputEditor(props);
  }

/** 邮箱Like */
const getUserPageListByDefaultQuery_emailLike = {
  name: 'emailLike',
  label: "邮箱Like",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_emailLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_emailLike};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间Min TIMESTAMP*/
const getUserPageListByDefaultQuery_createTimeMin = {
  name: 'createTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Min",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_createTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_createTimeMin};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 创建时间Max TIMESTAMP*/
const getUserPageListByDefaultQuery_createTimeMax = {
  name: 'createTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Max",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_createTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_createTimeMax};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Min TIMESTAMP*/
const getUserPageListByDefaultQuery_updateTimeMin = {
  name: 'updateTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Min",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_updateTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_updateTimeMin};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Max TIMESTAMP*/
const getUserPageListByDefaultQuery_updateTimeMax = {
  name: 'updateTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Max",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getUserPageListByDefaultQuery_updateTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getUserPageListByDefaultQuery_updateTimeMax};
    return UIUtil.BuildTimeStampEditor(props);
  }


export namespace UserApiForms {
  export interface UserApiGetUserPageListByDefaultQueryFormItemConfigs extends FormItemConfigs {
    /** 用户IDs  */
    UserIds?: typeof getUserPageListByDefaultQuery_userIds & Partial<FormItemConfig>,
    /** 用户名Like  */
    UsernameLike?: typeof getUserPageListByDefaultQuery_usernameLike & Partial<FormItemConfig>,
    /** 密码Like  */
    PasswordLike?: typeof getUserPageListByDefaultQuery_passwordLike & Partial<FormItemConfig>,
    /** 用户角色s  */
    RoleTypes?: typeof getUserPageListByDefaultQuery_roleTypes & Partial<FormItemConfig>,
    /** 用户名nameLike  */
    NameLike?: typeof getUserPageListByDefaultQuery_nameLike & Partial<FormItemConfig>,
    /** nickNameLike  */
    NickNameLike?: typeof getUserPageListByDefaultQuery_nickNameLike & Partial<FormItemConfig>,
    /** ageMin  */
    AgeMin?: typeof getUserPageListByDefaultQuery_ageMin & Partial<FormItemConfig>,
    /** ageMax  */
    AgeMax?: typeof getUserPageListByDefaultQuery_ageMax & Partial<FormItemConfig>,
    /** addressLike  */
    AddressLike?: typeof getUserPageListByDefaultQuery_addressLike & Partial<FormItemConfig>,
    /** avatarLike  */
    AvatarLike?: typeof getUserPageListByDefaultQuery_avatarLike & Partial<FormItemConfig>,
    /** 邮箱Like  */
    EmailLike?: typeof getUserPageListByDefaultQuery_emailLike & Partial<FormItemConfig>,
    /** 创建时间Min  TIMESTAMP*/
    CreateTimeMin?: typeof getUserPageListByDefaultQuery_createTimeMin & Partial<FormItemConfig>,
    /** 创建时间Max  TIMESTAMP*/
    CreateTimeMax?: typeof getUserPageListByDefaultQuery_createTimeMax & Partial<FormItemConfig>,
    /** 更新时间Min  TIMESTAMP*/
    UpdateTimeMin?: typeof getUserPageListByDefaultQuery_updateTimeMin & Partial<FormItemConfig>,
    /** 更新时间Max  TIMESTAMP*/
    UpdateTimeMax?: typeof getUserPageListByDefaultQuery_updateTimeMax & Partial<FormItemConfig>,
  }

  export const getGetUserPageListByDefaultQueryFormItemConfigs = (queryRule: ObjectMap<any> = {}, form?: FormPropsUtils): UserApiGetUserPageListByDefaultQueryFormItemConfigs => {
    /** 用户IDs */
    getUserPageListByDefaultQuery_userIds.form = form;
    const getUserPageListByDefaultQuery_userIdsValue =queryRule.userIds;
    getUserPageListByDefaultQuery_userIds.config.initialValue = getUserPageListByDefaultQuery_userIdsValue;
    getUserPageListByDefaultQuery_userIds.data = getUserPageListByDefaultQuery_userIdsValue;
    /** 用户名Like */
    getUserPageListByDefaultQuery_usernameLike.form = form;
    const getUserPageListByDefaultQuery_usernameLikeValue =queryRule.usernameLike;
    getUserPageListByDefaultQuery_usernameLike.config.initialValue = getUserPageListByDefaultQuery_usernameLikeValue;
    getUserPageListByDefaultQuery_usernameLike.data = getUserPageListByDefaultQuery_usernameLikeValue;
    /** 密码Like */
    getUserPageListByDefaultQuery_passwordLike.form = form;
    const getUserPageListByDefaultQuery_passwordLikeValue =queryRule.passwordLike;
    getUserPageListByDefaultQuery_passwordLike.config.initialValue = getUserPageListByDefaultQuery_passwordLikeValue;
    getUserPageListByDefaultQuery_passwordLike.data = getUserPageListByDefaultQuery_passwordLikeValue;
    /** 用户角色s */
    getUserPageListByDefaultQuery_roleTypes.form = form;
    const getUserPageListByDefaultQuery_roleTypesValue =queryRule.roleTypes;
    getUserPageListByDefaultQuery_roleTypes.config.initialValue = getUserPageListByDefaultQuery_roleTypesValue;
    getUserPageListByDefaultQuery_roleTypes.data = getUserPageListByDefaultQuery_roleTypesValue;
    /** 用户名nameLike */
    getUserPageListByDefaultQuery_nameLike.form = form;
    const getUserPageListByDefaultQuery_nameLikeValue =queryRule.nameLike;
    getUserPageListByDefaultQuery_nameLike.config.initialValue = getUserPageListByDefaultQuery_nameLikeValue;
    getUserPageListByDefaultQuery_nameLike.data = getUserPageListByDefaultQuery_nameLikeValue;
    /** nickNameLike */
    getUserPageListByDefaultQuery_nickNameLike.form = form;
    const getUserPageListByDefaultQuery_nickNameLikeValue =queryRule.nickNameLike;
    getUserPageListByDefaultQuery_nickNameLike.config.initialValue = getUserPageListByDefaultQuery_nickNameLikeValue;
    getUserPageListByDefaultQuery_nickNameLike.data = getUserPageListByDefaultQuery_nickNameLikeValue;
    /** ageMin */
    getUserPageListByDefaultQuery_ageMin.form = form;
    const getUserPageListByDefaultQuery_ageMinValue =queryRule.ageMin;
    getUserPageListByDefaultQuery_ageMin.config.initialValue = getUserPageListByDefaultQuery_ageMinValue;
    getUserPageListByDefaultQuery_ageMin.data = getUserPageListByDefaultQuery_ageMinValue;
    /** ageMax */
    getUserPageListByDefaultQuery_ageMax.form = form;
    const getUserPageListByDefaultQuery_ageMaxValue =queryRule.ageMax;
    getUserPageListByDefaultQuery_ageMax.config.initialValue = getUserPageListByDefaultQuery_ageMaxValue;
    getUserPageListByDefaultQuery_ageMax.data = getUserPageListByDefaultQuery_ageMaxValue;
    /** addressLike */
    getUserPageListByDefaultQuery_addressLike.form = form;
    const getUserPageListByDefaultQuery_addressLikeValue =queryRule.addressLike;
    getUserPageListByDefaultQuery_addressLike.config.initialValue = getUserPageListByDefaultQuery_addressLikeValue;
    getUserPageListByDefaultQuery_addressLike.data = getUserPageListByDefaultQuery_addressLikeValue;
    /** avatarLike */
    getUserPageListByDefaultQuery_avatarLike.form = form;
    const getUserPageListByDefaultQuery_avatarLikeValue =queryRule.avatarLike;
    getUserPageListByDefaultQuery_avatarLike.config.initialValue = getUserPageListByDefaultQuery_avatarLikeValue;
    getUserPageListByDefaultQuery_avatarLike.data = getUserPageListByDefaultQuery_avatarLikeValue;
    /** 邮箱Like */
    getUserPageListByDefaultQuery_emailLike.form = form;
    const getUserPageListByDefaultQuery_emailLikeValue =queryRule.emailLike;
    getUserPageListByDefaultQuery_emailLike.config.initialValue = getUserPageListByDefaultQuery_emailLikeValue;
    getUserPageListByDefaultQuery_emailLike.data = getUserPageListByDefaultQuery_emailLikeValue;
    /** 创建时间Min TIMESTAMP*/
    getUserPageListByDefaultQuery_createTimeMin.form = form;
    const getUserPageListByDefaultQuery_createTimeMinValue =queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getUserPageListByDefaultQuery_createTimeMin.config.initialValue = getUserPageListByDefaultQuery_createTimeMinValue;
    getUserPageListByDefaultQuery_createTimeMin.data = getUserPageListByDefaultQuery_createTimeMinValue;
    /** 创建时间Max TIMESTAMP*/
    getUserPageListByDefaultQuery_createTimeMax.form = form;
    const getUserPageListByDefaultQuery_createTimeMaxValue =queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getUserPageListByDefaultQuery_createTimeMax.config.initialValue = getUserPageListByDefaultQuery_createTimeMaxValue;
    getUserPageListByDefaultQuery_createTimeMax.data = getUserPageListByDefaultQuery_createTimeMaxValue;
    /** 更新时间Min TIMESTAMP*/
    getUserPageListByDefaultQuery_updateTimeMin.form = form;
    const getUserPageListByDefaultQuery_updateTimeMinValue =queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getUserPageListByDefaultQuery_updateTimeMin.config.initialValue = getUserPageListByDefaultQuery_updateTimeMinValue;
    getUserPageListByDefaultQuery_updateTimeMin.data = getUserPageListByDefaultQuery_updateTimeMinValue;
    /** 更新时间Max TIMESTAMP*/
    getUserPageListByDefaultQuery_updateTimeMax.form = form;
    const getUserPageListByDefaultQuery_updateTimeMaxValue =queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getUserPageListByDefaultQuery_updateTimeMax.config.initialValue = getUserPageListByDefaultQuery_updateTimeMaxValue;
    getUserPageListByDefaultQuery_updateTimeMax.data = getUserPageListByDefaultQuery_updateTimeMaxValue;

    return {
      UserIds: getUserPageListByDefaultQuery_userIds,
      UsernameLike: getUserPageListByDefaultQuery_usernameLike,
      PasswordLike: getUserPageListByDefaultQuery_passwordLike,
      RoleTypes: getUserPageListByDefaultQuery_roleTypes,
      NameLike: getUserPageListByDefaultQuery_nameLike,
      NickNameLike: getUserPageListByDefaultQuery_nickNameLike,
      AgeMin: getUserPageListByDefaultQuery_ageMin,
      AgeMax: getUserPageListByDefaultQuery_ageMax,
      AddressLike: getUserPageListByDefaultQuery_addressLike,
      AvatarLike: getUserPageListByDefaultQuery_avatarLike,
      EmailLike: getUserPageListByDefaultQuery_emailLike,
      CreateTimeMin: getUserPageListByDefaultQuery_createTimeMin,
      CreateTimeMax: getUserPageListByDefaultQuery_createTimeMax,
      UpdateTimeMin: getUserPageListByDefaultQuery_updateTimeMin,
      UpdateTimeMax: getUserPageListByDefaultQuery_updateTimeMax,
    }
  }
}