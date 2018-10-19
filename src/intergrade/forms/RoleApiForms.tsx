/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AntdPageList from "../beans/AntdPageList";
import Role from "../beans/Role";
import RoleType from "../enums/RoleType";
import SimpleResponse from "../beans/SimpleResponse";
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {roleTypeOptions} from '../enums/RoleType';

export namespace RoleApiForms {
  export interface getRolePageListByDefaultQueryFormConfigs extends FormConfigs {
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

  export const getRolePageListByDefaultQueryFormConfigs = (queryRule: ObjectMap<any> = {}): getRolePageListByDefaultQueryFormConfigs => {
    const result: getRolePageListByDefaultQueryFormConfigs = {
    /** 角色IDs  */
    roleIds: {
      name: 'roleIds',
      isArray: true,
      label: "角色IDs",
      config: {
        initialValue: queryRule.roleIds,
      }
    },

    /** 角色名称Like  */
    roleNameLike: {
      name: 'roleNameLike',
      label: "角色名称Like",
      config: {
        initialValue: queryRule.roleNameLike,
      }
    },

    /** 描述Like  */
    descriptionLike: {
      name: 'descriptionLike',
      label: "描述Like",
      config: {
        initialValue: queryRule.descriptionLike,
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

    /** 角色类型s  */
    roleTypes: {
      name: 'roleTypes',
      isEnum: true,
      options: roleTypeOptions,
      isArray: true,
      label: "角色类型s",
      config: {
        initialValue: queryRule.roleTypes,
      }
    },

    /** showDateMin  */
    showDateMin: {
      name: 'showDateMin',
      label: "showDateMin",
      config: {
        initialValue: queryRule.showDateMin,
      }
    },

    /** showDateMax  */
    showDateMax: {
      name: 'showDateMax',
      label: "showDateMax",
      config: {
        initialValue: queryRule.showDateMax,
      }
    },

    /** showTimeMin  */
    showTimeMin: {
      name: 'showTimeMin',
      label: "showTimeMin",
      config: {
        initialValue: queryRule.showTimeMin,
      }
    },

    /** showTimeMax  */
    showTimeMax: {
      name: 'showTimeMax',
      label: "showTimeMax",
      config: {
        initialValue: queryRule.showTimeMax,
      }
    },

    /** showDateTimeMin  */
    showDateTimeMin: {
      name: 'showDateTimeMin',
      label: "showDateTimeMin",
      config: {
        initialValue: queryRule.showDateTimeMin,
      }
    },

    /** showDateTimeMax  */
    showDateTimeMax: {
      name: 'showDateTimeMax',
      label: "showDateTimeMax",
      config: {
        initialValue: queryRule.showDateTimeMax,
      }
    },

    }

    result.roleIds.editor = UIUtil.buildInputEditor(result.roleIds);
    result.roleNameLike.editor = UIUtil.buildInputEditor(result.roleNameLike);
    result.descriptionLike.editor = UIUtil.buildInputEditor(result.descriptionLike);
    result.createTimeMin.editor = UIUtil.buildTimeStampEditor(result.createTimeMin, TIMESTAMP_FORMAT);
    result.createTimeMax.editor = UIUtil.buildTimeStampEditor(result.createTimeMax, TIMESTAMP_FORMAT);
    result.updateTimeMin.editor = UIUtil.buildTimeStampEditor(result.updateTimeMin, TIMESTAMP_FORMAT);
    result.updateTimeMax.editor = UIUtil.buildTimeStampEditor(result.updateTimeMax, TIMESTAMP_FORMAT);
    result.roleTypes.editor = UIUtil.buildEnumEditor(result.roleTypes, roleTypeOptions);
    result.showDateMin.editor = UIUtil.buildInputEditor(result.showDateMin);
    result.showDateMax.editor = UIUtil.buildInputEditor(result.showDateMax);
    result.showTimeMin.editor = UIUtil.buildInputEditor(result.showTimeMin);
    result.showTimeMax.editor = UIUtil.buildInputEditor(result.showTimeMax);
    result.showDateTimeMin.editor = UIUtil.buildInputEditor(result.showDateTimeMin);
    result.showDateTimeMax.editor = UIUtil.buildInputEditor(result.showDateTimeMax);

    return result;
  }
}