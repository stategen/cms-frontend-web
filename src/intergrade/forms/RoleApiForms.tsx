/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AntdPageList from "../beans/AntdPageList";
import {PaginationProps} from "antd/lib/pagination";
import Role from "../beans/Role";
import RoleType from "../enums/RoleType";
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 角色IDs */
const getRolePageListByDefaultQuery_roleIds = {
  name: 'roleIds',
  isArray: true,
  label: "角色IDs",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleIds.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_roleIds};
    return UIUtil.BuildInputEditor(props);
  }

/** 角色名称Like */
const getRolePageListByDefaultQuery_roleNameLike = {
  name: 'roleNameLike',
  label: "角色名称Like",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleNameLike.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_roleNameLike};
    return UIUtil.BuildInputEditor(props);
  }

/** 描述Like */
const getRolePageListByDefaultQuery_descriptionLike = {
  name: 'descriptionLike',
  label: "描述Like",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_descriptionLike.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_descriptionLike};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间Min TIMESTAMP*/
const getRolePageListByDefaultQuery_createTimeMin = {
  name: 'createTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Min",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_createTimeMin.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_createTimeMin};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 创建时间Max TIMESTAMP*/
const getRolePageListByDefaultQuery_createTimeMax = {
  name: 'createTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Max",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_createTimeMax.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_createTimeMax};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Min TIMESTAMP*/
const getRolePageListByDefaultQuery_updateTimeMin = {
  name: 'updateTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Min",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_updateTimeMin.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_updateTimeMin};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Max TIMESTAMP*/
const getRolePageListByDefaultQuery_updateTimeMax = {
  name: 'updateTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Max",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_updateTimeMax.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_updateTimeMax};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 角色类型s */
const getRolePageListByDefaultQuery_roleTypes = {
  name: 'roleTypes',
  isEnum: true,
  options: roleTypeOptions,
  isArray: true,
  label: "角色类型s",
  type: "",
  Editor: UIUtil.BuildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleTypes.Editor =
  (props: UIUtil.EnumEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_roleTypes};
    return UIUtil.BuildEnumEditor(props);
  }

/** showDateMin */
const getRolePageListByDefaultQuery_showDateMin = {
  name: 'showDateMin',
  label: "showDateMin",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateMin.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_showDateMin};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateMax */
const getRolePageListByDefaultQuery_showDateMax = {
  name: 'showDateMax',
  label: "showDateMax",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateMax.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_showDateMax};
    return UIUtil.BuildInputEditor(props);
  }

/** showTimeMin */
const getRolePageListByDefaultQuery_showTimeMin = {
  name: 'showTimeMin',
  label: "showTimeMin",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showTimeMin.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_showTimeMin};
    return UIUtil.BuildInputEditor(props);
  }

/** showTimeMax */
const getRolePageListByDefaultQuery_showTimeMax = {
  name: 'showTimeMax',
  label: "showTimeMax",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showTimeMax.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_showTimeMax};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateTimeMin */
const getRolePageListByDefaultQuery_showDateTimeMin = {
  name: 'showDateTimeMin',
  label: "showDateTimeMin",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateTimeMin.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_showDateTimeMin};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateTimeMax */
const getRolePageListByDefaultQuery_showDateTimeMax = {
  name: 'showDateTimeMax',
  label: "showDateTimeMax",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateTimeMax.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: getRolePageListByDefaultQuery_showDateTimeMax};
    return UIUtil.BuildInputEditor(props);
  }


export namespace RoleApiForms {
  export interface RoleApiGetRolePageListByDefaultQueryFormConfigs extends FormConfigs {
    /** 角色IDs  */
    RoleIds?: typeof getRolePageListByDefaultQuery_roleIds & FormItemConfig,
    /** 角色名称Like  */
    RoleNameLike?: typeof getRolePageListByDefaultQuery_roleNameLike & FormItemConfig,
    /** 描述Like  */
    DescriptionLike?: typeof getRolePageListByDefaultQuery_descriptionLike & FormItemConfig,
    /** 创建时间Min  TIMESTAMP*/
    CreateTimeMin?: typeof getRolePageListByDefaultQuery_createTimeMin & FormItemConfig,
    /** 创建时间Max  TIMESTAMP*/
    CreateTimeMax?: typeof getRolePageListByDefaultQuery_createTimeMax & FormItemConfig,
    /** 更新时间Min  TIMESTAMP*/
    UpdateTimeMin?: typeof getRolePageListByDefaultQuery_updateTimeMin & FormItemConfig,
    /** 更新时间Max  TIMESTAMP*/
    UpdateTimeMax?: typeof getRolePageListByDefaultQuery_updateTimeMax & FormItemConfig,
    /** 角色类型s  */
    RoleTypes?: typeof getRolePageListByDefaultQuery_roleTypes & FormItemConfig,
    /** showDateMin  */
    ShowDateMin?: typeof getRolePageListByDefaultQuery_showDateMin & FormItemConfig,
    /** showDateMax  */
    ShowDateMax?: typeof getRolePageListByDefaultQuery_showDateMax & FormItemConfig,
    /** showTimeMin  */
    ShowTimeMin?: typeof getRolePageListByDefaultQuery_showTimeMin & FormItemConfig,
    /** showTimeMax  */
    ShowTimeMax?: typeof getRolePageListByDefaultQuery_showTimeMax & FormItemConfig,
    /** showDateTimeMin  */
    ShowDateTimeMin?: typeof getRolePageListByDefaultQuery_showDateTimeMin & FormItemConfig,
    /** showDateTimeMax  */
    ShowDateTimeMax?: typeof getRolePageListByDefaultQuery_showDateTimeMax & FormItemConfig,
  }

  export const getGetRolePageListByDefaultQueryFormConfigs = (queryRule: ObjectMap<any> = {}, formPropsUtils?: FormPropsUtils): RoleApiGetRolePageListByDefaultQueryFormConfigs => {
    /** 角色IDs */
    getRolePageListByDefaultQuery_roleIds.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_roleIdsValue =queryRule.roleIds;
    getRolePageListByDefaultQuery_roleIds.config.initialValue = getRolePageListByDefaultQuery_roleIdsValue;
    getRolePageListByDefaultQuery_roleIds.value = getRolePageListByDefaultQuery_roleIdsValue;
    /** 角色名称Like */
    getRolePageListByDefaultQuery_roleNameLike.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_roleNameLikeValue =queryRule.roleNameLike;
    getRolePageListByDefaultQuery_roleNameLike.config.initialValue = getRolePageListByDefaultQuery_roleNameLikeValue;
    getRolePageListByDefaultQuery_roleNameLike.value = getRolePageListByDefaultQuery_roleNameLikeValue;
    /** 描述Like */
    getRolePageListByDefaultQuery_descriptionLike.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_descriptionLikeValue =queryRule.descriptionLike;
    getRolePageListByDefaultQuery_descriptionLike.config.initialValue = getRolePageListByDefaultQuery_descriptionLikeValue;
    getRolePageListByDefaultQuery_descriptionLike.value = getRolePageListByDefaultQuery_descriptionLikeValue;
    /** 创建时间Min TIMESTAMP*/
    getRolePageListByDefaultQuery_createTimeMin.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_createTimeMinValue =queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getRolePageListByDefaultQuery_createTimeMin.config.initialValue = getRolePageListByDefaultQuery_createTimeMinValue;
    getRolePageListByDefaultQuery_createTimeMin.value = getRolePageListByDefaultQuery_createTimeMinValue;
    /** 创建时间Max TIMESTAMP*/
    getRolePageListByDefaultQuery_createTimeMax.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_createTimeMaxValue =queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getRolePageListByDefaultQuery_createTimeMax.config.initialValue = getRolePageListByDefaultQuery_createTimeMaxValue;
    getRolePageListByDefaultQuery_createTimeMax.value = getRolePageListByDefaultQuery_createTimeMaxValue;
    /** 更新时间Min TIMESTAMP*/
    getRolePageListByDefaultQuery_updateTimeMin.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_updateTimeMinValue =queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getRolePageListByDefaultQuery_updateTimeMin.config.initialValue = getRolePageListByDefaultQuery_updateTimeMinValue;
    getRolePageListByDefaultQuery_updateTimeMin.value = getRolePageListByDefaultQuery_updateTimeMinValue;
    /** 更新时间Max TIMESTAMP*/
    getRolePageListByDefaultQuery_updateTimeMax.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_updateTimeMaxValue =queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getRolePageListByDefaultQuery_updateTimeMax.config.initialValue = getRolePageListByDefaultQuery_updateTimeMaxValue;
    getRolePageListByDefaultQuery_updateTimeMax.value = getRolePageListByDefaultQuery_updateTimeMaxValue;
    /** 角色类型s */
    getRolePageListByDefaultQuery_roleTypes.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_roleTypesValue =queryRule.roleTypes;
    getRolePageListByDefaultQuery_roleTypes.config.initialValue = getRolePageListByDefaultQuery_roleTypesValue;
    getRolePageListByDefaultQuery_roleTypes.value = getRolePageListByDefaultQuery_roleTypesValue;
    /** showDateMin */
    getRolePageListByDefaultQuery_showDateMin.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_showDateMinValue =queryRule.showDateMin;
    getRolePageListByDefaultQuery_showDateMin.config.initialValue = getRolePageListByDefaultQuery_showDateMinValue;
    getRolePageListByDefaultQuery_showDateMin.value = getRolePageListByDefaultQuery_showDateMinValue;
    /** showDateMax */
    getRolePageListByDefaultQuery_showDateMax.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_showDateMaxValue =queryRule.showDateMax;
    getRolePageListByDefaultQuery_showDateMax.config.initialValue = getRolePageListByDefaultQuery_showDateMaxValue;
    getRolePageListByDefaultQuery_showDateMax.value = getRolePageListByDefaultQuery_showDateMaxValue;
    /** showTimeMin */
    getRolePageListByDefaultQuery_showTimeMin.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_showTimeMinValue =queryRule.showTimeMin;
    getRolePageListByDefaultQuery_showTimeMin.config.initialValue = getRolePageListByDefaultQuery_showTimeMinValue;
    getRolePageListByDefaultQuery_showTimeMin.value = getRolePageListByDefaultQuery_showTimeMinValue;
    /** showTimeMax */
    getRolePageListByDefaultQuery_showTimeMax.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_showTimeMaxValue =queryRule.showTimeMax;
    getRolePageListByDefaultQuery_showTimeMax.config.initialValue = getRolePageListByDefaultQuery_showTimeMaxValue;
    getRolePageListByDefaultQuery_showTimeMax.value = getRolePageListByDefaultQuery_showTimeMaxValue;
    /** showDateTimeMin */
    getRolePageListByDefaultQuery_showDateTimeMin.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_showDateTimeMinValue =queryRule.showDateTimeMin;
    getRolePageListByDefaultQuery_showDateTimeMin.config.initialValue = getRolePageListByDefaultQuery_showDateTimeMinValue;
    getRolePageListByDefaultQuery_showDateTimeMin.value = getRolePageListByDefaultQuery_showDateTimeMinValue;
    /** showDateTimeMax */
    getRolePageListByDefaultQuery_showDateTimeMax.formPropsUtils = formPropsUtils;
    const getRolePageListByDefaultQuery_showDateTimeMaxValue =queryRule.showDateTimeMax;
    getRolePageListByDefaultQuery_showDateTimeMax.config.initialValue = getRolePageListByDefaultQuery_showDateTimeMaxValue;
    getRolePageListByDefaultQuery_showDateTimeMax.value = getRolePageListByDefaultQuery_showDateTimeMaxValue;

    return {
      RoleIds: getRolePageListByDefaultQuery_roleIds,
      RoleNameLike: getRolePageListByDefaultQuery_roleNameLike,
      DescriptionLike: getRolePageListByDefaultQuery_descriptionLike,
      CreateTimeMin: getRolePageListByDefaultQuery_createTimeMin,
      CreateTimeMax: getRolePageListByDefaultQuery_createTimeMax,
      UpdateTimeMin: getRolePageListByDefaultQuery_updateTimeMin,
      UpdateTimeMax: getRolePageListByDefaultQuery_updateTimeMax,
      RoleTypes: getRolePageListByDefaultQuery_roleTypes,
      ShowDateMin: getRolePageListByDefaultQuery_showDateMin,
      ShowDateMax: getRolePageListByDefaultQuery_showDateMax,
      ShowTimeMin: getRolePageListByDefaultQuery_showTimeMin,
      ShowTimeMax: getRolePageListByDefaultQuery_showTimeMax,
      ShowDateTimeMin: getRolePageListByDefaultQuery_showDateTimeMin,
      ShowDateTimeMax: getRolePageListByDefaultQuery_showDateTimeMax,
    }
  }
}