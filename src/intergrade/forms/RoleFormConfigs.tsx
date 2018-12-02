/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Role from "../beans/Role"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {roleTypeOptions} from '../enums/RoleType';

export interface RoleFormConfigs extends FormConfigs {
  /** 角色ID  */
  roleId?: FormItemConfigs,

  /** 角色名称  */
  roleName?: FormItemConfigs,

  /** 描述  */
  description?: FormItemConfigs,

  /** 创建时间  TIMESTAMP*/
  createTime?: FormItemConfigs,

  /** 更新时间  TIMESTAMP*/
  updateTime?: FormItemConfigs,

  /** roleType  */
  roleType?: FormItemConfigs,

  [columnName: string]: FormItemConfigs,

}

export const getRoleFormConfigs = (role: Role, formPropsUtils?: FormPropsUtils): RoleFormConfigs => {
  const _ ={formPropsUtils: formPropsUtils, createFormItemProps: UIUtil.createFormItemProps};
  /** 角色ID  */
  const roleId: FormItemConfigs = {
    ..._,
    name: 'roleId',
    isId: true,
    label: "角色ID",
    config: {
      initialValue: role.roleId,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 角色名称  */
  const roleName: FormItemConfigs = {
    ..._,
    name: 'roleName',
    label: "角色名称",
    config: {
      initialValue: role.roleName,
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

  /** 描述  */
  const description: FormItemConfigs = {
    ..._,
    name: 'description',
    label: "描述",
    config: {
      initialValue: role.description,
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

  /** 创建时间  TIMESTAMP*/
  const createTime: FormItemConfigs = {
    ..._,
    name: 'createTime',
    hidden: true,
    format: TIMESTAMP_FORMAT,
    label: "创建时间",
    config: {
      initialValue: role.createTime ? moment(role.createTime) : null,
    }
  };

  /** 更新时间  TIMESTAMP*/
  const updateTime: FormItemConfigs = {
    ..._,
    name: 'updateTime',
    hidden: true,
    format: TIMESTAMP_FORMAT,
    label: "更新时间",
    config: {
      initialValue: role.updateTime ? moment(role.updateTime) : null,
    }
  };

  /** roleType  */
  const roleType: FormItemConfigs = {
    ..._,
    name: 'roleType',
    isEnum: true,
    options: roleTypeOptions,
    label: "roleType",
    config: {
      initialValue: role.roleType,
    }
  };

  roleId.editor = UIUtil.buildInputEditor;
  roleName.editor = UIUtil.buildInputEditor;
  description.editor = UIUtil.buildInputEditor;
  createTime.editor = UIUtil.buildTimeStampEditor;
  createTime.format = TIMESTAMP_FORMAT;
  updateTime.editor = UIUtil.buildTimeStampEditor;
  updateTime.format = TIMESTAMP_FORMAT;
  roleType.editor = UIUtil.buildEnumEditor;
  roleType.options = roleTypeOptions;

  return {
    roleId,
    roleName,
    description,
    createTime,
    updateTime,
    roleType,
  }
}


