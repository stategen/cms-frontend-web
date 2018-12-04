/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Role from "../beans/Role"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 角色ID  */
const Role_roleId = {
  name: 'roleId',
  isId: true,
  label: "角色ID",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
Role_roleId.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Role_roleId};
    return UIUtil.buildInputEditor(props);
  }

/** 角色名称  */
const Role_roleName = {
  name: 'roleName',
  label: "角色名称",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        required: true,
        message: "{javax.validation.constraints.NotNull.message}",
      },
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
Role_roleName.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Role_roleName};
    return UIUtil.buildInputEditor(props);
  }

/** 描述  */
const Role_description = {
  name: 'description',
  label: "描述",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
    rules: [
      {
        required: true,
        message: "{javax.validation.constraints.NotNull.message}",
      },
      {
        max: 255,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
Role_description.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Role_description};
    return UIUtil.buildInputEditor(props);
  }

/** 创建时间  TIMESTAMP*/
const Role_createTime = {
  name: 'createTime',
  hidden: true,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Role_createTime.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: Role_createTime};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 更新时间  TIMESTAMP*/
const Role_updateTime = {
  name: 'updateTime',
  hidden: true,
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  type: "",
  editor: UIUtil.buildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Role_updateTime.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: Role_updateTime};
    return UIUtil.buildTimeStampEditor(props);
  }

/** roleType  */
const Role_roleType = {
  name: 'roleType',
  isEnum: true,
  options: roleTypeOptions,
  label: "roleType",
  type: "",
  editor: UIUtil.buildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Role_roleType.editor =
  (props: UIUtil.EnumEditorProps) => {
    props ={...props, formItemConfig: Role_roleType};
    return UIUtil.buildEnumEditor(props);
  }

export interface RoleFormConfigs extends FormConfigs {
  /** 角色ID  */
  roleId?: typeof Role_roleId & FormItemConfig,

  /** 角色名称  */
  roleName?: typeof Role_roleName & FormItemConfig,

  /** 描述  */
  description?: typeof Role_description & FormItemConfig,

  /** 创建时间  TIMESTAMP*/
  createTime?: typeof Role_createTime & FormItemConfig,

  /** 更新时间  TIMESTAMP*/
  updateTime?: typeof Role_updateTime & FormItemConfig,

  /** roleType  */
  roleType?: typeof Role_roleType & FormItemConfig,

  [columnName: string]: FormItemConfig,
}
export const getRoleFormConfigs = (role: Role, formPropsUtils?: FormPropsUtils): RoleFormConfigs => {
  /** 角色ID  */
  Role_roleId.formPropsUtils = formPropsUtils;
  Role_roleId.config.initialValue = role.roleId;
  Role_roleId.value = role.roleId;
  /** 角色名称  */
  Role_roleName.formPropsUtils = formPropsUtils;
  Role_roleName.config.initialValue = role.roleName;
  Role_roleName.value = role.roleName;
  /** 描述  */
  Role_description.formPropsUtils = formPropsUtils;
  Role_description.config.initialValue = role.description;
  Role_description.value = role.description;
  /** 创建时间  TIMESTAMP*/
  Role_createTime.formPropsUtils = formPropsUtils;
  Role_createTime.config.initialValue = role.createTime ? moment(role.createTime) : null;
  Role_createTime.value = role.createTime ? moment(role.createTime) : null;
  /** 更新时间  TIMESTAMP*/
  Role_updateTime.formPropsUtils = formPropsUtils;
  Role_updateTime.config.initialValue = role.updateTime ? moment(role.updateTime) : null;
  Role_updateTime.value = role.updateTime ? moment(role.updateTime) : null;
  /** roleType  */
  Role_roleType.formPropsUtils = formPropsUtils;
  Role_roleType.config.initialValue = role.roleType;
  Role_roleType.value = role.roleType;

  return {
    roleId: Role_roleId,
    roleName: Role_roleName,
    description: Role_description,
    createTime: Role_createTime,
    updateTime: Role_updateTime,
    roleType: Role_roleType,
  }
}


