/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Role from "../beans/Role"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

/** 角色ID */
const role_roleId = {
  name: 'roleId',
  isId: true,
  label: "角色ID",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
role_roleId.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: role_roleId};
    return UIUtil.BuildInputEditor(props);
  }

/** 角色名称 */
const role_roleName = {
  name: 'roleName',
  label: "角色名称",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
role_roleName.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: role_roleName};
    return UIUtil.BuildInputEditor(props);
  }

/** 描述 */
const role_description = {
  name: 'description',
  label: "描述",
  type: "",
  Editor: UIUtil.BuildInputEditor,
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
role_description.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: role_description};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const role_createTime = {
  name: 'createTime',
  hidden: true,
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
role_createTime.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: role_createTime};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const role_updateTime = {
  name: 'updateTime',
  hidden: true,
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  type: "",
  Editor: UIUtil.BuildTimeStampEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
role_updateTime.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: role_updateTime};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** roleType */
const role_roleType = {
  name: 'roleType',
  isEnum: true,
  options: roleTypeOptions,
  label: "roleType",
  type: "",
  Editor: UIUtil.BuildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
role_roleType.Editor =
  (props: UIUtil.EnumEditorProps) => {
    props = {...props, formItemConfig: role_roleType};
    return UIUtil.BuildEnumEditor(props);
  }

export interface RoleFormConfigs extends FormConfigs {
  /** 角色ID  */
  RoleId?: typeof role_roleId & FormItemConfig,

  /** 角色名称  */
  RoleName?: typeof role_roleName & FormItemConfig,

  /** 描述  */
  Description?: typeof role_description & FormItemConfig,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof role_createTime & FormItemConfig,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof role_updateTime & FormItemConfig,

  /** roleType  */
  RoleType?: typeof role_roleType & FormItemConfig,

}
export const getRoleFormConfigs = (role: Role, formPropsUtils?: FormPropsUtils): RoleFormConfigs => {
  /** 角色ID */
  role_roleId.formPropsUtils = formPropsUtils;
  const role_roleIdValue =role.roleId;
  role_roleId.config.initialValue = role_roleIdValue;
  role_roleId.value = role_roleIdValue;
  /** 角色名称 */
  role_roleName.formPropsUtils = formPropsUtils;
  const role_roleNameValue =role.roleName;
  role_roleName.config.initialValue = role_roleNameValue;
  role_roleName.value = role_roleNameValue;
  /** 描述 */
  role_description.formPropsUtils = formPropsUtils;
  const role_descriptionValue =role.description;
  role_description.config.initialValue = role_descriptionValue;
  role_description.value = role_descriptionValue;
  /** 创建时间 TIMESTAMP*/
  role_createTime.formPropsUtils = formPropsUtils;
  const role_createTimeValue =role.createTime ? moment(role.createTime) : null;
  role_createTime.config.initialValue = role_createTimeValue;
  role_createTime.value = role_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  role_updateTime.formPropsUtils = formPropsUtils;
  const role_updateTimeValue =role.updateTime ? moment(role.updateTime) : null;
  role_updateTime.config.initialValue = role_updateTimeValue;
  role_updateTime.value = role_updateTimeValue;
  /** roleType */
  role_roleType.formPropsUtils = formPropsUtils;
  const role_roleTypeValue =role.roleType;
  role_roleType.config.initialValue = role_roleTypeValue;
  role_roleType.value = role_roleTypeValue;

  return {
    RoleId: role_roleId,
    RoleName: role_roleName,
    Description: role_description,
    CreateTime: role_createTime,
    UpdateTime: role_updateTime,
    RoleType: role_roleType,
  }
}


