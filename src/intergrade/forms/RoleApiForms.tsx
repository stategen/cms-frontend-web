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
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 角色IDs */
const getRolePageListByDefaultQuery_roleIds = {
  name: 'roleIds',
  isArray: true,
  label: "角色IDs",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleIds.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_roleIds;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 角色名称Like */
const getRolePageListByDefaultQuery_roleNameLike = {
  name: 'roleNameLike',
  label: "角色名称Like",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleNameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_roleNameLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 描述Like */
const getRolePageListByDefaultQuery_descriptionLike = {
  name: 'descriptionLike',
  label: "描述Like",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_descriptionLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_descriptionLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间Min TIMESTAMP*/
const getRolePageListByDefaultQuery_createTimeMin = {
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
getRolePageListByDefaultQuery_createTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_createTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 创建时间Max TIMESTAMP*/
const getRolePageListByDefaultQuery_createTimeMax = {
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
getRolePageListByDefaultQuery_createTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_createTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Min TIMESTAMP*/
const getRolePageListByDefaultQuery_updateTimeMin = {
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
getRolePageListByDefaultQuery_updateTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_updateTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Max TIMESTAMP*/
const getRolePageListByDefaultQuery_updateTimeMax = {
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
getRolePageListByDefaultQuery_updateTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_updateTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 角色类型s */
const getRolePageListByDefaultQuery_roleTypes = {
  name: 'roleTypes',
  isEnum: true,
  options: roleTypeOptions,
  isArray: true,
  label: "角色类型s",
  Editor: UIUtil.BuildEnumEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleTypes.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_roleTypes;
    props = {...props, formItemConfig};
    return UIUtil.BuildEnumEditor(props);
  }

/** showDateMin */
const getRolePageListByDefaultQuery_showDateMin = {
  name: 'showDateMin',
  label: "showDateMin",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_showDateMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateMax */
const getRolePageListByDefaultQuery_showDateMax = {
  name: 'showDateMax',
  label: "showDateMax",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_showDateMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showTimeMin */
const getRolePageListByDefaultQuery_showTimeMin = {
  name: 'showTimeMin',
  label: "showTimeMin",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showTimeMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_showTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showTimeMax */
const getRolePageListByDefaultQuery_showTimeMax = {
  name: 'showTimeMax',
  label: "showTimeMax",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showTimeMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_showTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateTimeMin */
const getRolePageListByDefaultQuery_showDateTimeMin = {
  name: 'showDateTimeMin',
  label: "showDateTimeMin",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateTimeMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_showDateTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateTimeMax */
const getRolePageListByDefaultQuery_showDateTimeMax = {
  name: 'showDateTimeMax',
  label: "showDateTimeMax",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateTimeMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageListByDefaultQuery_showDateTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }


export namespace RoleApiForms {
  export interface RoleApiGetRolePageListByDefaultQueryFormItemConfigMap extends FormItemConfigMap {
    /** 角色IDs  */
    RoleIds?: typeof getRolePageListByDefaultQuery_roleIds & Partial<FormItemConfig>,
    /** 角色名称Like  */
    RoleNameLike?: typeof getRolePageListByDefaultQuery_roleNameLike & Partial<FormItemConfig>,
    /** 描述Like  */
    DescriptionLike?: typeof getRolePageListByDefaultQuery_descriptionLike & Partial<FormItemConfig>,
    /** 创建时间Min  TIMESTAMP*/
    CreateTimeMin?: typeof getRolePageListByDefaultQuery_createTimeMin & Partial<FormItemConfig>,
    /** 创建时间Max  TIMESTAMP*/
    CreateTimeMax?: typeof getRolePageListByDefaultQuery_createTimeMax & Partial<FormItemConfig>,
    /** 更新时间Min  TIMESTAMP*/
    UpdateTimeMin?: typeof getRolePageListByDefaultQuery_updateTimeMin & Partial<FormItemConfig>,
    /** 更新时间Max  TIMESTAMP*/
    UpdateTimeMax?: typeof getRolePageListByDefaultQuery_updateTimeMax & Partial<FormItemConfig>,
    /** 角色类型s  */
    RoleTypes?: typeof getRolePageListByDefaultQuery_roleTypes & Partial<FormItemConfig>,
    /** showDateMin  */
    ShowDateMin?: typeof getRolePageListByDefaultQuery_showDateMin & Partial<FormItemConfig>,
    /** showDateMax  */
    ShowDateMax?: typeof getRolePageListByDefaultQuery_showDateMax & Partial<FormItemConfig>,
    /** showTimeMin  */
    ShowTimeMin?: typeof getRolePageListByDefaultQuery_showTimeMin & Partial<FormItemConfig>,
    /** showTimeMax  */
    ShowTimeMax?: typeof getRolePageListByDefaultQuery_showTimeMax & Partial<FormItemConfig>,
    /** showDateTimeMin  */
    ShowDateTimeMin?: typeof getRolePageListByDefaultQuery_showDateTimeMin & Partial<FormItemConfig>,
    /** showDateTimeMax  */
    ShowDateTimeMax?: typeof getRolePageListByDefaultQuery_showDateTimeMax & Partial<FormItemConfig>,
  }

  export const getGetRolePageListByDefaultQueryFormItemConfigMap = (queryRule: ObjectMap<any> = {}, form?: FormPropsUtils): RoleApiGetRolePageListByDefaultQueryFormItemConfigMap => {
    /** 角色IDs */
    getRolePageListByDefaultQuery_roleIds.form = form;
    const getRolePageListByDefaultQuery_roleIdsValue =queryRule.roleIds;
    getRolePageListByDefaultQuery_roleIds.config.initialValue = getRolePageListByDefaultQuery_roleIdsValue;
    getRolePageListByDefaultQuery_roleIds.data = getRolePageListByDefaultQuery_roleIdsValue;
    /** 角色名称Like */
    getRolePageListByDefaultQuery_roleNameLike.form = form;
    const getRolePageListByDefaultQuery_roleNameLikeValue =queryRule.roleNameLike;
    getRolePageListByDefaultQuery_roleNameLike.config.initialValue = getRolePageListByDefaultQuery_roleNameLikeValue;
    getRolePageListByDefaultQuery_roleNameLike.data = getRolePageListByDefaultQuery_roleNameLikeValue;
    /** 描述Like */
    getRolePageListByDefaultQuery_descriptionLike.form = form;
    const getRolePageListByDefaultQuery_descriptionLikeValue =queryRule.descriptionLike;
    getRolePageListByDefaultQuery_descriptionLike.config.initialValue = getRolePageListByDefaultQuery_descriptionLikeValue;
    getRolePageListByDefaultQuery_descriptionLike.data = getRolePageListByDefaultQuery_descriptionLikeValue;
    /** 创建时间Min TIMESTAMP*/
    getRolePageListByDefaultQuery_createTimeMin.form = form;
    const getRolePageListByDefaultQuery_createTimeMinValue =queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getRolePageListByDefaultQuery_createTimeMin.config.initialValue = getRolePageListByDefaultQuery_createTimeMinValue;
    getRolePageListByDefaultQuery_createTimeMin.data = getRolePageListByDefaultQuery_createTimeMinValue;
    /** 创建时间Max TIMESTAMP*/
    getRolePageListByDefaultQuery_createTimeMax.form = form;
    const getRolePageListByDefaultQuery_createTimeMaxValue =queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getRolePageListByDefaultQuery_createTimeMax.config.initialValue = getRolePageListByDefaultQuery_createTimeMaxValue;
    getRolePageListByDefaultQuery_createTimeMax.data = getRolePageListByDefaultQuery_createTimeMaxValue;
    /** 更新时间Min TIMESTAMP*/
    getRolePageListByDefaultQuery_updateTimeMin.form = form;
    const getRolePageListByDefaultQuery_updateTimeMinValue =queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getRolePageListByDefaultQuery_updateTimeMin.config.initialValue = getRolePageListByDefaultQuery_updateTimeMinValue;
    getRolePageListByDefaultQuery_updateTimeMin.data = getRolePageListByDefaultQuery_updateTimeMinValue;
    /** 更新时间Max TIMESTAMP*/
    getRolePageListByDefaultQuery_updateTimeMax.form = form;
    const getRolePageListByDefaultQuery_updateTimeMaxValue =queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getRolePageListByDefaultQuery_updateTimeMax.config.initialValue = getRolePageListByDefaultQuery_updateTimeMaxValue;
    getRolePageListByDefaultQuery_updateTimeMax.data = getRolePageListByDefaultQuery_updateTimeMaxValue;
    /** 角色类型s */
    getRolePageListByDefaultQuery_roleTypes.form = form;
    const getRolePageListByDefaultQuery_roleTypesValue =queryRule.roleTypes;
    getRolePageListByDefaultQuery_roleTypes.config.initialValue = getRolePageListByDefaultQuery_roleTypesValue;
    getRolePageListByDefaultQuery_roleTypes.data = getRolePageListByDefaultQuery_roleTypesValue;
    /** showDateMin */
    getRolePageListByDefaultQuery_showDateMin.form = form;
    const getRolePageListByDefaultQuery_showDateMinValue =queryRule.showDateMin;
    getRolePageListByDefaultQuery_showDateMin.config.initialValue = getRolePageListByDefaultQuery_showDateMinValue;
    getRolePageListByDefaultQuery_showDateMin.data = getRolePageListByDefaultQuery_showDateMinValue;
    /** showDateMax */
    getRolePageListByDefaultQuery_showDateMax.form = form;
    const getRolePageListByDefaultQuery_showDateMaxValue =queryRule.showDateMax;
    getRolePageListByDefaultQuery_showDateMax.config.initialValue = getRolePageListByDefaultQuery_showDateMaxValue;
    getRolePageListByDefaultQuery_showDateMax.data = getRolePageListByDefaultQuery_showDateMaxValue;
    /** showTimeMin */
    getRolePageListByDefaultQuery_showTimeMin.form = form;
    const getRolePageListByDefaultQuery_showTimeMinValue =queryRule.showTimeMin;
    getRolePageListByDefaultQuery_showTimeMin.config.initialValue = getRolePageListByDefaultQuery_showTimeMinValue;
    getRolePageListByDefaultQuery_showTimeMin.data = getRolePageListByDefaultQuery_showTimeMinValue;
    /** showTimeMax */
    getRolePageListByDefaultQuery_showTimeMax.form = form;
    const getRolePageListByDefaultQuery_showTimeMaxValue =queryRule.showTimeMax;
    getRolePageListByDefaultQuery_showTimeMax.config.initialValue = getRolePageListByDefaultQuery_showTimeMaxValue;
    getRolePageListByDefaultQuery_showTimeMax.data = getRolePageListByDefaultQuery_showTimeMaxValue;
    /** showDateTimeMin */
    getRolePageListByDefaultQuery_showDateTimeMin.form = form;
    const getRolePageListByDefaultQuery_showDateTimeMinValue =queryRule.showDateTimeMin;
    getRolePageListByDefaultQuery_showDateTimeMin.config.initialValue = getRolePageListByDefaultQuery_showDateTimeMinValue;
    getRolePageListByDefaultQuery_showDateTimeMin.data = getRolePageListByDefaultQuery_showDateTimeMinValue;
    /** showDateTimeMax */
    getRolePageListByDefaultQuery_showDateTimeMax.form = form;
    const getRolePageListByDefaultQuery_showDateTimeMaxValue =queryRule.showDateTimeMax;
    getRolePageListByDefaultQuery_showDateTimeMax.config.initialValue = getRolePageListByDefaultQuery_showDateTimeMaxValue;
    getRolePageListByDefaultQuery_showDateTimeMax.data = getRolePageListByDefaultQuery_showDateTimeMaxValue;

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