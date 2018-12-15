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
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 角色IDs */
const getRolePageList_roleIds = {
  name: 'roleIds',
  isArray: true,
  label: "角色IDs",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_roleIds.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_roleIds;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 角色名称Like */
const getRolePageList_roleNameLike = {
  name: 'roleNameLike',
  label: "角色名称Like",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_roleNameLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_roleNameLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 描述Like */
const getRolePageList_descriptionLike = {
  name: 'descriptionLike',
  label: "描述Like",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_descriptionLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_descriptionLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间Min TIMESTAMP*/
const getRolePageList_createTimeMin = {
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
getRolePageList_createTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_createTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 创建时间Max TIMESTAMP*/
const getRolePageList_createTimeMax = {
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
getRolePageList_createTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_createTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Min TIMESTAMP*/
const getRolePageList_updateTimeMin = {
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
getRolePageList_updateTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_updateTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Max TIMESTAMP*/
const getRolePageList_updateTimeMax = {
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
getRolePageList_updateTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_updateTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 角色类型s */
const getRolePageList_roleTypes = {
  name: 'roleTypes',
  isEnum: true,
  options: roleTypeOptions,
  isArray: true,
  label: "角色类型s",
  Editor: UIUtil.BuildEnumEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_roleTypes.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_roleTypes;
    props = {...props, formItemConfig};
    return UIUtil.BuildEnumEditor(props);
  }

/** showDateMin */
const getRolePageList_showDateMin = {
  name: 'showDateMin',
  label: "showDateMin",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_showDateMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_showDateMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateMax */
const getRolePageList_showDateMax = {
  name: 'showDateMax',
  label: "showDateMax",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_showDateMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_showDateMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showTimeMin */
const getRolePageList_showTimeMin = {
  name: 'showTimeMin',
  label: "showTimeMin",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_showTimeMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_showTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showTimeMax */
const getRolePageList_showTimeMax = {
  name: 'showTimeMax',
  label: "showTimeMax",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_showTimeMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_showTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateTimeMin */
const getRolePageList_showDateTimeMin = {
  name: 'showDateTimeMin',
  label: "showDateTimeMin",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_showDateTimeMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_showDateTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** showDateTimeMax */
const getRolePageList_showDateTimeMax = {
  name: 'showDateTimeMax',
  label: "showDateTimeMax",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getRolePageList_showDateTimeMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getRolePageList_showDateTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }


export namespace RoleApiForms {
  export interface RoleApiGetRolePageListFormItemConfigMap extends FormItemConfigMap {
    /** 角色IDs  */
    RoleIds?: typeof getRolePageList_roleIds & Partial<FormItemConfig>,
    /** 角色名称Like  */
    RoleNameLike?: typeof getRolePageList_roleNameLike & Partial<FormItemConfig>,
    /** 描述Like  */
    DescriptionLike?: typeof getRolePageList_descriptionLike & Partial<FormItemConfig>,
    /** 创建时间Min  TIMESTAMP*/
    CreateTimeMin?: typeof getRolePageList_createTimeMin & Partial<FormItemConfig>,
    /** 创建时间Max  TIMESTAMP*/
    CreateTimeMax?: typeof getRolePageList_createTimeMax & Partial<FormItemConfig>,
    /** 更新时间Min  TIMESTAMP*/
    UpdateTimeMin?: typeof getRolePageList_updateTimeMin & Partial<FormItemConfig>,
    /** 更新时间Max  TIMESTAMP*/
    UpdateTimeMax?: typeof getRolePageList_updateTimeMax & Partial<FormItemConfig>,
    /** 角色类型s  */
    RoleTypes?: typeof getRolePageList_roleTypes & Partial<FormItemConfig>,
    /** showDateMin  */
    ShowDateMin?: typeof getRolePageList_showDateMin & Partial<FormItemConfig>,
    /** showDateMax  */
    ShowDateMax?: typeof getRolePageList_showDateMax & Partial<FormItemConfig>,
    /** showTimeMin  */
    ShowTimeMin?: typeof getRolePageList_showTimeMin & Partial<FormItemConfig>,
    /** showTimeMax  */
    ShowTimeMax?: typeof getRolePageList_showTimeMax & Partial<FormItemConfig>,
    /** showDateTimeMin  */
    ShowDateTimeMin?: typeof getRolePageList_showDateTimeMin & Partial<FormItemConfig>,
    /** showDateTimeMax  */
    ShowDateTimeMax?: typeof getRolePageList_showDateTimeMax & Partial<FormItemConfig>,
  }

  export const getGetRolePageListFormItemConfigMap = (queryRule: ObjectMap<any> = {}, pagesProps: PagesProps): RoleApiGetRolePageListFormItemConfigMap => {
    /** 角色IDs */
    getRolePageList_roleIds.pagesProps = pagesProps;
    const getRolePageList_roleIdsValue =queryRule.roleIds;
    getRolePageList_roleIds.config.initialValue = getRolePageList_roleIdsValue;
    getRolePageList_roleIds.data = getRolePageList_roleIdsValue;
    /** 角色名称Like */
    getRolePageList_roleNameLike.pagesProps = pagesProps;
    const getRolePageList_roleNameLikeValue =queryRule.roleNameLike;
    getRolePageList_roleNameLike.config.initialValue = getRolePageList_roleNameLikeValue;
    getRolePageList_roleNameLike.data = getRolePageList_roleNameLikeValue;
    /** 描述Like */
    getRolePageList_descriptionLike.pagesProps = pagesProps;
    const getRolePageList_descriptionLikeValue =queryRule.descriptionLike;
    getRolePageList_descriptionLike.config.initialValue = getRolePageList_descriptionLikeValue;
    getRolePageList_descriptionLike.data = getRolePageList_descriptionLikeValue;
    /** 创建时间Min TIMESTAMP*/
    getRolePageList_createTimeMin.pagesProps = pagesProps;
    const getRolePageList_createTimeMinValue =queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getRolePageList_createTimeMin.config.initialValue = getRolePageList_createTimeMinValue;
    getRolePageList_createTimeMin.data = getRolePageList_createTimeMinValue;
    /** 创建时间Max TIMESTAMP*/
    getRolePageList_createTimeMax.pagesProps = pagesProps;
    const getRolePageList_createTimeMaxValue =queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getRolePageList_createTimeMax.config.initialValue = getRolePageList_createTimeMaxValue;
    getRolePageList_createTimeMax.data = getRolePageList_createTimeMaxValue;
    /** 更新时间Min TIMESTAMP*/
    getRolePageList_updateTimeMin.pagesProps = pagesProps;
    const getRolePageList_updateTimeMinValue =queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getRolePageList_updateTimeMin.config.initialValue = getRolePageList_updateTimeMinValue;
    getRolePageList_updateTimeMin.data = getRolePageList_updateTimeMinValue;
    /** 更新时间Max TIMESTAMP*/
    getRolePageList_updateTimeMax.pagesProps = pagesProps;
    const getRolePageList_updateTimeMaxValue =queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getRolePageList_updateTimeMax.config.initialValue = getRolePageList_updateTimeMaxValue;
    getRolePageList_updateTimeMax.data = getRolePageList_updateTimeMaxValue;
    /** 角色类型s */
    getRolePageList_roleTypes.pagesProps = pagesProps;
    const getRolePageList_roleTypesValue =queryRule.roleTypes;
    getRolePageList_roleTypes.config.initialValue = getRolePageList_roleTypesValue;
    getRolePageList_roleTypes.data = getRolePageList_roleTypesValue;
    /** showDateMin */
    getRolePageList_showDateMin.pagesProps = pagesProps;
    const getRolePageList_showDateMinValue =queryRule.showDateMin;
    getRolePageList_showDateMin.config.initialValue = getRolePageList_showDateMinValue;
    getRolePageList_showDateMin.data = getRolePageList_showDateMinValue;
    /** showDateMax */
    getRolePageList_showDateMax.pagesProps = pagesProps;
    const getRolePageList_showDateMaxValue =queryRule.showDateMax;
    getRolePageList_showDateMax.config.initialValue = getRolePageList_showDateMaxValue;
    getRolePageList_showDateMax.data = getRolePageList_showDateMaxValue;
    /** showTimeMin */
    getRolePageList_showTimeMin.pagesProps = pagesProps;
    const getRolePageList_showTimeMinValue =queryRule.showTimeMin;
    getRolePageList_showTimeMin.config.initialValue = getRolePageList_showTimeMinValue;
    getRolePageList_showTimeMin.data = getRolePageList_showTimeMinValue;
    /** showTimeMax */
    getRolePageList_showTimeMax.pagesProps = pagesProps;
    const getRolePageList_showTimeMaxValue =queryRule.showTimeMax;
    getRolePageList_showTimeMax.config.initialValue = getRolePageList_showTimeMaxValue;
    getRolePageList_showTimeMax.data = getRolePageList_showTimeMaxValue;
    /** showDateTimeMin */
    getRolePageList_showDateTimeMin.pagesProps = pagesProps;
    const getRolePageList_showDateTimeMinValue =queryRule.showDateTimeMin;
    getRolePageList_showDateTimeMin.config.initialValue = getRolePageList_showDateTimeMinValue;
    getRolePageList_showDateTimeMin.data = getRolePageList_showDateTimeMinValue;
    /** showDateTimeMax */
    getRolePageList_showDateTimeMax.pagesProps = pagesProps;
    const getRolePageList_showDateTimeMaxValue =queryRule.showDateTimeMax;
    getRolePageList_showDateTimeMax.config.initialValue = getRolePageList_showDateTimeMaxValue;
    getRolePageList_showDateTimeMax.data = getRolePageList_showDateTimeMaxValue;

    return {
      RoleIds: getRolePageList_roleIds,
      RoleNameLike: getRolePageList_roleNameLike,
      DescriptionLike: getRolePageList_descriptionLike,
      CreateTimeMin: getRolePageList_createTimeMin,
      CreateTimeMax: getRolePageList_createTimeMax,
      UpdateTimeMin: getRolePageList_updateTimeMin,
      UpdateTimeMax: getRolePageList_updateTimeMax,
      RoleTypes: getRolePageList_roleTypes,
      ShowDateMin: getRolePageList_showDateMin,
      ShowDateMax: getRolePageList_showDateMax,
      ShowTimeMin: getRolePageList_showTimeMin,
      ShowTimeMax: getRolePageList_showTimeMax,
      ShowDateTimeMin: getRolePageList_showDateTimeMin,
      ShowDateTimeMax: getRolePageList_showDateTimeMax,
    }
  }
}