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
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

export namespace RoleApiForms {
  export interface GetRolePageListByDefaultQueryFormConfigs extends FormConfigs {
  /** 角色IDs  */
  roleIds?: FormItemConfigs,
  /** 角色名称Like  */
  roleNameLike?: FormItemConfigs,
  /** 描述Like  */
  descriptionLike?: FormItemConfigs,
  /** 创建时间Min  TIMESTAMP*/
  createTimeMin?: FormItemConfigs,
  /** 创建时间Max  TIMESTAMP*/
  createTimeMax?: FormItemConfigs,
  /** 更新时间Min  TIMESTAMP*/
  updateTimeMin?: FormItemConfigs,
  /** 更新时间Max  TIMESTAMP*/
  updateTimeMax?: FormItemConfigs,
  /** 角色类型s  */
  roleTypes?: FormItemConfigs,
  /** showDateMin  */
  showDateMin?: FormItemConfigs,
  /** showDateMax  */
  showDateMax?: FormItemConfigs,
  /** showTimeMin  */
  showTimeMin?: FormItemConfigs,
  /** showTimeMax  */
  showTimeMax?: FormItemConfigs,
  /** showDateTimeMin  */
  showDateTimeMin?: FormItemConfigs,
  /** showDateTimeMax  */
  showDateTimeMax?: FormItemConfigs,
  }

  export const getRolePageListByDefaultQueryFormConfigs = (queryRule: ObjectMap<any> = {}, formPropsUtils?: FormPropsUtils): GetRolePageListByDefaultQueryFormConfigs => {
    const _ ={formPropsUtils: formPropsUtils, createFormItemProps: UIUtil.createFormItemProps};
    /** 角色IDs  */
    const roleIds: FormItemConfigs = {
      ..._,
      name: 'roleIds',
      isArray: true,
      label: "角色IDs",
      config: {
        initialValue: queryRule.roleIds,
      }
    };

    /** 角色名称Like  */
    const roleNameLike: FormItemConfigs = {
      ..._,
      name: 'roleNameLike',
      label: "角色名称Like",
      config: {
        initialValue: queryRule.roleNameLike,
      }
    };

    /** 描述Like  */
    const descriptionLike: FormItemConfigs = {
      ..._,
      name: 'descriptionLike',
      label: "描述Like",
      config: {
        initialValue: queryRule.descriptionLike,
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

    /** 角色类型s  */
    const roleTypes: FormItemConfigs = {
      ..._,
      name: 'roleTypes',
      isEnum: true,
      options: roleTypeOptions,
      isArray: true,
      label: "角色类型s",
      config: {
        initialValue: queryRule.roleTypes,
      }
    };

    /** showDateMin  */
    const showDateMin: FormItemConfigs = {
      ..._,
      name: 'showDateMin',
      label: "showDateMin",
      config: {
        initialValue: queryRule.showDateMin,
      }
    };

    /** showDateMax  */
    const showDateMax: FormItemConfigs = {
      ..._,
      name: 'showDateMax',
      label: "showDateMax",
      config: {
        initialValue: queryRule.showDateMax,
      }
    };

    /** showTimeMin  */
    const showTimeMin: FormItemConfigs = {
      ..._,
      name: 'showTimeMin',
      label: "showTimeMin",
      config: {
        initialValue: queryRule.showTimeMin,
      }
    };

    /** showTimeMax  */
    const showTimeMax: FormItemConfigs = {
      ..._,
      name: 'showTimeMax',
      label: "showTimeMax",
      config: {
        initialValue: queryRule.showTimeMax,
      }
    };

    /** showDateTimeMin  */
    const showDateTimeMin: FormItemConfigs = {
      ..._,
      name: 'showDateTimeMin',
      label: "showDateTimeMin",
      config: {
        initialValue: queryRule.showDateTimeMin,
      }
    };

    /** showDateTimeMax  */
    const showDateTimeMax: FormItemConfigs = {
      ..._,
      name: 'showDateTimeMax',
      label: "showDateTimeMax",
      config: {
        initialValue: queryRule.showDateTimeMax,
      }
    };

    roleIds.editor = UIUtil.buildInputEditor;
    roleNameLike.editor = UIUtil.buildInputEditor;
    descriptionLike.editor = UIUtil.buildInputEditor;
    createTimeMin.editor = UIUtil.buildTimeStampEditor;
    createTimeMin.format = TIMESTAMP_FORMAT;
    createTimeMax.editor = UIUtil.buildTimeStampEditor;
    createTimeMax.format = TIMESTAMP_FORMAT;
    updateTimeMin.editor = UIUtil.buildTimeStampEditor;
    updateTimeMin.format = TIMESTAMP_FORMAT;
    updateTimeMax.editor = UIUtil.buildTimeStampEditor;
    updateTimeMax.format = TIMESTAMP_FORMAT;
    roleTypes.editor = UIUtil.buildEnumEditor;
    roleTypes.options = roleTypeOptions;
    showDateMin.editor = UIUtil.buildInputEditor;
    showDateMax.editor = UIUtil.buildInputEditor;
    showTimeMin.editor = UIUtil.buildInputEditor;
    showTimeMax.editor = UIUtil.buildInputEditor;
    showDateTimeMin.editor = UIUtil.buildInputEditor;
    showDateTimeMax.editor = UIUtil.buildInputEditor;

    return {
      roleIds,
      roleNameLike,
      descriptionLike,
      createTimeMin,
      createTimeMax,
      updateTimeMin,
      updateTimeMax,
      roleTypes,
      showDateMin,
      showDateMax,
      showTimeMin,
      showTimeMax,
      showDateTimeMin,
      showDateTimeMax,
    }
  }
}