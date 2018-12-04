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
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 角色IDs  */
const getRolePageListByDefaultQuery_roleIds = {
  name: 'roleIds',
  isArray: true,
  label: "角色IDs",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleIds.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_roleIds};
    return UIUtil.buildInputEditor(props);
  }

/** 角色名称Like  */
const getRolePageListByDefaultQuery_roleNameLike = {
  name: 'roleNameLike',
  label: "角色名称Like",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleNameLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_roleNameLike};
    return UIUtil.buildInputEditor(props);
  }

/** 描述Like  */
const getRolePageListByDefaultQuery_descriptionLike = {
  name: 'descriptionLike',
  label: "描述Like",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_descriptionLike.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_descriptionLike};
    return UIUtil.buildInputEditor(props);
  }

/** 创建时间Min  TIMESTAMP*/
const getRolePageListByDefaultQuery_createTimeMin = {
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
getRolePageListByDefaultQuery_createTimeMin.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_createTimeMin};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 创建时间Max  TIMESTAMP*/
const getRolePageListByDefaultQuery_createTimeMax = {
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
getRolePageListByDefaultQuery_createTimeMax.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_createTimeMax};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 更新时间Min  TIMESTAMP*/
const getRolePageListByDefaultQuery_updateTimeMin = {
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
getRolePageListByDefaultQuery_updateTimeMin.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_updateTimeMin};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 更新时间Max  TIMESTAMP*/
const getRolePageListByDefaultQuery_updateTimeMax = {
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
getRolePageListByDefaultQuery_updateTimeMax.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_updateTimeMax};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 角色类型s  */
const getRolePageListByDefaultQuery_roleTypes = {
  name: 'roleTypes',
  isEnum: true,
  options: roleTypeOptions,
  isArray: true,
  label: "角色类型s",
  type: "",
  editor: UIUtil.buildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_roleTypes.editor =
  (props: UIUtil.EnumEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_roleTypes};
    return UIUtil.buildEnumEditor(props);
  }

/** showDateMin  */
const getRolePageListByDefaultQuery_showDateMin = {
  name: 'showDateMin',
  label: "showDateMin",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateMin.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_showDateMin};
    return UIUtil.buildInputEditor(props);
  }

/** showDateMax  */
const getRolePageListByDefaultQuery_showDateMax = {
  name: 'showDateMax',
  label: "showDateMax",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateMax.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_showDateMax};
    return UIUtil.buildInputEditor(props);
  }

/** showTimeMin  */
const getRolePageListByDefaultQuery_showTimeMin = {
  name: 'showTimeMin',
  label: "showTimeMin",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showTimeMin.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_showTimeMin};
    return UIUtil.buildInputEditor(props);
  }

/** showTimeMax  */
const getRolePageListByDefaultQuery_showTimeMax = {
  name: 'showTimeMax',
  label: "showTimeMax",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showTimeMax.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_showTimeMax};
    return UIUtil.buildInputEditor(props);
  }

/** showDateTimeMin  */
const getRolePageListByDefaultQuery_showDateTimeMin = {
  name: 'showDateTimeMin',
  label: "showDateTimeMin",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateTimeMin.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_showDateTimeMin};
    return UIUtil.buildInputEditor(props);
  }

/** showDateTimeMax  */
const getRolePageListByDefaultQuery_showDateTimeMax = {
  name: 'showDateTimeMax',
  label: "showDateTimeMax",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
getRolePageListByDefaultQuery_showDateTimeMax.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: getRolePageListByDefaultQuery_showDateTimeMax};
    return UIUtil.buildInputEditor(props);
  }


export namespace RoleApiForms {
  export interface GetRolePageListByDefaultQueryFormConfigs extends FormConfigs {
    /** 角色IDs  */
    roleIds?: typeof getRolePageListByDefaultQuery_roleIds & FormItemConfig,
    /** 角色名称Like  */
    roleNameLike?: typeof getRolePageListByDefaultQuery_roleNameLike & FormItemConfig,
    /** 描述Like  */
    descriptionLike?: typeof getRolePageListByDefaultQuery_descriptionLike & FormItemConfig,
    /** 创建时间Min  TIMESTAMP*/
    createTimeMin?: typeof getRolePageListByDefaultQuery_createTimeMin & FormItemConfig,
    /** 创建时间Max  TIMESTAMP*/
    createTimeMax?: typeof getRolePageListByDefaultQuery_createTimeMax & FormItemConfig,
    /** 更新时间Min  TIMESTAMP*/
    updateTimeMin?: typeof getRolePageListByDefaultQuery_updateTimeMin & FormItemConfig,
    /** 更新时间Max  TIMESTAMP*/
    updateTimeMax?: typeof getRolePageListByDefaultQuery_updateTimeMax & FormItemConfig,
    /** 角色类型s  */
    roleTypes?: typeof getRolePageListByDefaultQuery_roleTypes & FormItemConfig,
    /** showDateMin  */
    showDateMin?: typeof getRolePageListByDefaultQuery_showDateMin & FormItemConfig,
    /** showDateMax  */
    showDateMax?: typeof getRolePageListByDefaultQuery_showDateMax & FormItemConfig,
    /** showTimeMin  */
    showTimeMin?: typeof getRolePageListByDefaultQuery_showTimeMin & FormItemConfig,
    /** showTimeMax  */
    showTimeMax?: typeof getRolePageListByDefaultQuery_showTimeMax & FormItemConfig,
    /** showDateTimeMin  */
    showDateTimeMin?: typeof getRolePageListByDefaultQuery_showDateTimeMin & FormItemConfig,
    /** showDateTimeMax  */
    showDateTimeMax?: typeof getRolePageListByDefaultQuery_showDateTimeMax & FormItemConfig,
  }

  export const getGetRolePageListByDefaultQueryFormConfigs = (queryRule: ObjectMap<any> = {}, formPropsUtils?: FormPropsUtils): GetRolePageListByDefaultQueryFormConfigs => {
    /** 角色IDs  */
    getRolePageListByDefaultQuery_roleIds.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_roleIds.config.initialValue = queryRule.roleIds;
    getRolePageListByDefaultQuery_roleIds.value = queryRule.roleIds;
    /** 角色名称Like  */
    getRolePageListByDefaultQuery_roleNameLike.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_roleNameLike.config.initialValue = queryRule.roleNameLike;
    getRolePageListByDefaultQuery_roleNameLike.value = queryRule.roleNameLike;
    /** 描述Like  */
    getRolePageListByDefaultQuery_descriptionLike.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_descriptionLike.config.initialValue = queryRule.descriptionLike;
    getRolePageListByDefaultQuery_descriptionLike.value = queryRule.descriptionLike;
    /** 创建时间Min  TIMESTAMP*/
    getRolePageListByDefaultQuery_createTimeMin.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_createTimeMin.config.initialValue = queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getRolePageListByDefaultQuery_createTimeMin.value = queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    /** 创建时间Max  TIMESTAMP*/
    getRolePageListByDefaultQuery_createTimeMax.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_createTimeMax.config.initialValue = queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getRolePageListByDefaultQuery_createTimeMax.value = queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    /** 更新时间Min  TIMESTAMP*/
    getRolePageListByDefaultQuery_updateTimeMin.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_updateTimeMin.config.initialValue = queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getRolePageListByDefaultQuery_updateTimeMin.value = queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    /** 更新时间Max  TIMESTAMP*/
    getRolePageListByDefaultQuery_updateTimeMax.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_updateTimeMax.config.initialValue = queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getRolePageListByDefaultQuery_updateTimeMax.value = queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    /** 角色类型s  */
    getRolePageListByDefaultQuery_roleTypes.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_roleTypes.config.initialValue = queryRule.roleTypes;
    getRolePageListByDefaultQuery_roleTypes.value = queryRule.roleTypes;
    /** showDateMin  */
    getRolePageListByDefaultQuery_showDateMin.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_showDateMin.config.initialValue = queryRule.showDateMin;
    getRolePageListByDefaultQuery_showDateMin.value = queryRule.showDateMin;
    /** showDateMax  */
    getRolePageListByDefaultQuery_showDateMax.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_showDateMax.config.initialValue = queryRule.showDateMax;
    getRolePageListByDefaultQuery_showDateMax.value = queryRule.showDateMax;
    /** showTimeMin  */
    getRolePageListByDefaultQuery_showTimeMin.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_showTimeMin.config.initialValue = queryRule.showTimeMin;
    getRolePageListByDefaultQuery_showTimeMin.value = queryRule.showTimeMin;
    /** showTimeMax  */
    getRolePageListByDefaultQuery_showTimeMax.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_showTimeMax.config.initialValue = queryRule.showTimeMax;
    getRolePageListByDefaultQuery_showTimeMax.value = queryRule.showTimeMax;
    /** showDateTimeMin  */
    getRolePageListByDefaultQuery_showDateTimeMin.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_showDateTimeMin.config.initialValue = queryRule.showDateTimeMin;
    getRolePageListByDefaultQuery_showDateTimeMin.value = queryRule.showDateTimeMin;
    /** showDateTimeMax  */
    getRolePageListByDefaultQuery_showDateTimeMax.formPropsUtils = formPropsUtils;
    getRolePageListByDefaultQuery_showDateTimeMax.config.initialValue = queryRule.showDateTimeMax;
    getRolePageListByDefaultQuery_showDateTimeMax.value = queryRule.showDateTimeMax;

    return {
      roleIds: getRolePageListByDefaultQuery_roleIds,
      roleNameLike: getRolePageListByDefaultQuery_roleNameLike,
      descriptionLike: getRolePageListByDefaultQuery_descriptionLike,
      createTimeMin: getRolePageListByDefaultQuery_createTimeMin,
      createTimeMax: getRolePageListByDefaultQuery_createTimeMax,
      updateTimeMin: getRolePageListByDefaultQuery_updateTimeMin,
      updateTimeMax: getRolePageListByDefaultQuery_updateTimeMax,
      roleTypes: getRolePageListByDefaultQuery_roleTypes,
      showDateMin: getRolePageListByDefaultQuery_showDateMin,
      showDateMax: getRolePageListByDefaultQuery_showDateMax,
      showTimeMin: getRolePageListByDefaultQuery_showTimeMin,
      showTimeMax: getRolePageListByDefaultQuery_showTimeMax,
      showDateTimeMin: getRolePageListByDefaultQuery_showDateTimeMin,
      showDateTimeMax: getRolePageListByDefaultQuery_showDateTimeMax,
    }
  }
}