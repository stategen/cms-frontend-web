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
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 用户IDs */
const getUserPageList_userIds = {
  name: 'userIds',
  isArray: true,
  label: "用户IDs",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_userIds.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_userIds;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户名Like */
const getUserPageList_usernameLike = {
  name: 'usernameLike',
  label: "用户名Like",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_usernameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_usernameLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 密码Like */
const getUserPageList_passwordLike = {
  name: 'passwordLike',
  label: "密码Like",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_passwordLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_passwordLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 用户角色s */
const getUserPageList_roleTypes = {
  name: 'roleTypes',
  isEnum: true,
  options: roleTypeOptions,
  isArray: true,
  label: "用户角色s",
  Editor: UIUtil.BuildEnumEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_roleTypes.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_roleTypes;
    props = {...props, formItemConfig};
    return UIUtil.BuildEnumEditor(props);
  }

/** 用户名nameLike */
const getUserPageList_nameLike = {
  name: 'nameLike',
  label: "用户名nameLike",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_nameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_nameLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** nickNameLike */
const getUserPageList_nickNameLike = {
  name: 'nickNameLike',
  label: "nickNameLike",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_nickNameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_nickNameLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** ageMin */
const getUserPageList_ageMin = {
  name: 'ageMin',
  label: "ageMin",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_ageMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_ageMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** ageMax */
const getUserPageList_ageMax = {
  name: 'ageMax',
  label: "ageMax",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_ageMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_ageMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** addressLike */
const getUserPageList_addressLike = {
  name: 'addressLike',
  label: "addressLike",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_addressLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_addressLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** avatarLike */
const getUserPageList_avatarLike = {
  name: 'avatarLike',
  label: "avatarLike",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_avatarLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_avatarLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 邮箱Like */
const getUserPageList_emailLike = {
  name: 'emailLike',
  label: "邮箱Like",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_emailLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_emailLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间Min TIMESTAMP*/
const getUserPageList_createTimeMin = {
  name: 'createTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Min",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_createTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_createTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 创建时间Max TIMESTAMP*/
const getUserPageList_createTimeMax = {
  name: 'createTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Max",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_createTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_createTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Min TIMESTAMP*/
const getUserPageList_updateTimeMin = {
  name: 'updateTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Min",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_updateTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_updateTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Max TIMESTAMP*/
const getUserPageList_updateTimeMax = {
  name: 'updateTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Max",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getUserPageList_updateTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getUserPageList_updateTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }


export namespace UserApiForms {
  export interface UserApiGetUserPageListFormItemConfigMap extends FormItemConfigMap {
    /** 用户IDs  */
    UserIds?: typeof getUserPageList_userIds & Partial<FormItemConfig>,
    /** 用户名Like  */
    UsernameLike?: typeof getUserPageList_usernameLike & Partial<FormItemConfig>,
    /** 密码Like  */
    PasswordLike?: typeof getUserPageList_passwordLike & Partial<FormItemConfig>,
    /** 用户角色s  */
    RoleTypes?: typeof getUserPageList_roleTypes & Partial<FormItemConfig>,
    /** 用户名nameLike  */
    NameLike?: typeof getUserPageList_nameLike & Partial<FormItemConfig>,
    /** nickNameLike  */
    NickNameLike?: typeof getUserPageList_nickNameLike & Partial<FormItemConfig>,
    /** ageMin  */
    AgeMin?: typeof getUserPageList_ageMin & Partial<FormItemConfig>,
    /** ageMax  */
    AgeMax?: typeof getUserPageList_ageMax & Partial<FormItemConfig>,
    /** addressLike  */
    AddressLike?: typeof getUserPageList_addressLike & Partial<FormItemConfig>,
    /** avatarLike  */
    AvatarLike?: typeof getUserPageList_avatarLike & Partial<FormItemConfig>,
    /** 邮箱Like  */
    EmailLike?: typeof getUserPageList_emailLike & Partial<FormItemConfig>,
    /** 创建时间Min  TIMESTAMP*/
    CreateTimeMin?: typeof getUserPageList_createTimeMin & Partial<FormItemConfig>,
    /** 创建时间Max  TIMESTAMP*/
    CreateTimeMax?: typeof getUserPageList_createTimeMax & Partial<FormItemConfig>,
    /** 更新时间Min  TIMESTAMP*/
    UpdateTimeMin?: typeof getUserPageList_updateTimeMin & Partial<FormItemConfig>,
    /** 更新时间Max  TIMESTAMP*/
    UpdateTimeMax?: typeof getUserPageList_updateTimeMax & Partial<FormItemConfig>,
  }

  export const getGetUserPageListFormItemConfigMap = (queryRule: ObjectMap<any> = {}, pagesProps: PagesProps): UserApiGetUserPageListFormItemConfigMap => {
    /** 用户IDs */
    getUserPageList_userIds.pagesProps = pagesProps;
    const getUserPageList_userIdsValue =queryRule.userIds;
    getUserPageList_userIds.config.initialValue = getUserPageList_userIdsValue;
    getUserPageList_userIds.data = getUserPageList_userIdsValue;
    /** 用户名Like */
    getUserPageList_usernameLike.pagesProps = pagesProps;
    const getUserPageList_usernameLikeValue =queryRule.usernameLike;
    getUserPageList_usernameLike.config.initialValue = getUserPageList_usernameLikeValue;
    getUserPageList_usernameLike.data = getUserPageList_usernameLikeValue;
    /** 密码Like */
    getUserPageList_passwordLike.pagesProps = pagesProps;
    const getUserPageList_passwordLikeValue =queryRule.passwordLike;
    getUserPageList_passwordLike.config.initialValue = getUserPageList_passwordLikeValue;
    getUserPageList_passwordLike.data = getUserPageList_passwordLikeValue;
    /** 用户角色s */
    getUserPageList_roleTypes.pagesProps = pagesProps;
    const getUserPageList_roleTypesValue =queryRule.roleTypes;
    getUserPageList_roleTypes.config.initialValue = getUserPageList_roleTypesValue;
    getUserPageList_roleTypes.data = getUserPageList_roleTypesValue;
    /** 用户名nameLike */
    getUserPageList_nameLike.pagesProps = pagesProps;
    const getUserPageList_nameLikeValue =queryRule.nameLike;
    getUserPageList_nameLike.config.initialValue = getUserPageList_nameLikeValue;
    getUserPageList_nameLike.data = getUserPageList_nameLikeValue;
    /** nickNameLike */
    getUserPageList_nickNameLike.pagesProps = pagesProps;
    const getUserPageList_nickNameLikeValue =queryRule.nickNameLike;
    getUserPageList_nickNameLike.config.initialValue = getUserPageList_nickNameLikeValue;
    getUserPageList_nickNameLike.data = getUserPageList_nickNameLikeValue;
    /** ageMin */
    getUserPageList_ageMin.pagesProps = pagesProps;
    const getUserPageList_ageMinValue =queryRule.ageMin;
    getUserPageList_ageMin.config.initialValue = getUserPageList_ageMinValue;
    getUserPageList_ageMin.data = getUserPageList_ageMinValue;
    /** ageMax */
    getUserPageList_ageMax.pagesProps = pagesProps;
    const getUserPageList_ageMaxValue =queryRule.ageMax;
    getUserPageList_ageMax.config.initialValue = getUserPageList_ageMaxValue;
    getUserPageList_ageMax.data = getUserPageList_ageMaxValue;
    /** addressLike */
    getUserPageList_addressLike.pagesProps = pagesProps;
    const getUserPageList_addressLikeValue =queryRule.addressLike;
    getUserPageList_addressLike.config.initialValue = getUserPageList_addressLikeValue;
    getUserPageList_addressLike.data = getUserPageList_addressLikeValue;
    /** avatarLike */
    getUserPageList_avatarLike.pagesProps = pagesProps;
    const getUserPageList_avatarLikeValue =queryRule.avatarLike;
    getUserPageList_avatarLike.config.initialValue = getUserPageList_avatarLikeValue;
    getUserPageList_avatarLike.data = getUserPageList_avatarLikeValue;
    /** 邮箱Like */
    getUserPageList_emailLike.pagesProps = pagesProps;
    const getUserPageList_emailLikeValue =queryRule.emailLike;
    getUserPageList_emailLike.config.initialValue = getUserPageList_emailLikeValue;
    getUserPageList_emailLike.data = getUserPageList_emailLikeValue;
    /** 创建时间Min TIMESTAMP*/
    getUserPageList_createTimeMin.pagesProps = pagesProps;
    const getUserPageList_createTimeMinValue =queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getUserPageList_createTimeMin.config.initialValue = getUserPageList_createTimeMinValue;
    getUserPageList_createTimeMin.data = getUserPageList_createTimeMinValue;
    /** 创建时间Max TIMESTAMP*/
    getUserPageList_createTimeMax.pagesProps = pagesProps;
    const getUserPageList_createTimeMaxValue =queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getUserPageList_createTimeMax.config.initialValue = getUserPageList_createTimeMaxValue;
    getUserPageList_createTimeMax.data = getUserPageList_createTimeMaxValue;
    /** 更新时间Min TIMESTAMP*/
    getUserPageList_updateTimeMin.pagesProps = pagesProps;
    const getUserPageList_updateTimeMinValue =queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getUserPageList_updateTimeMin.config.initialValue = getUserPageList_updateTimeMinValue;
    getUserPageList_updateTimeMin.data = getUserPageList_updateTimeMinValue;
    /** 更新时间Max TIMESTAMP*/
    getUserPageList_updateTimeMax.pagesProps = pagesProps;
    const getUserPageList_updateTimeMaxValue =queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getUserPageList_updateTimeMax.config.initialValue = getUserPageList_updateTimeMaxValue;
    getUserPageList_updateTimeMax.data = getUserPageList_updateTimeMaxValue;

    return {
      UserIds: getUserPageList_userIds,
      UsernameLike: getUserPageList_usernameLike,
      PasswordLike: getUserPageList_passwordLike,
      RoleTypes: getUserPageList_roleTypes,
      NameLike: getUserPageList_nameLike,
      NickNameLike: getUserPageList_nickNameLike,
      AgeMin: getUserPageList_ageMin,
      AgeMax: getUserPageList_ageMax,
      AddressLike: getUserPageList_addressLike,
      AvatarLike: getUserPageList_avatarLike,
      EmailLike: getUserPageList_emailLike,
      CreateTimeMin: getUserPageList_createTimeMin,
      CreateTimeMax: getUserPageList_createTimeMax,
      UpdateTimeMin: getUserPageList_updateTimeMin,
      UpdateTimeMax: getUserPageList_updateTimeMax,
    }
  }
}