/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Role from "../beans/Role"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
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

export const getRoleFormConfigs = (role: Role): RoleFormConfigs => {
  const result: RoleFormConfigs = {
    /** 角色ID  */
    roleId: {
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
    },
    /** 角色名称  */
    roleName: {
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
    },
    /** 描述  */
    description: {
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
    },
    /** 创建时间  TIMESTAMP*/
    createTime: {
      name: 'createTime',
      hidden: true,
      format: TIMESTAMP_FORMAT,
      label: "创建时间",
      config: {
        initialValue: role.createTime ? moment(role.createTime) : null,
      }
    },
    /** 更新时间  TIMESTAMP*/
    updateTime: {
      name: 'updateTime',
      hidden: true,
      format: TIMESTAMP_FORMAT,
      label: "更新时间",
      config: {
        initialValue: role.updateTime ? moment(role.updateTime) : null,
      }
    },
    /** roleType  */
    roleType: {
      name: 'roleType',
      isEnum: true,
      options: roleTypeOptions,
      label: "roleType",
      config: {
        initialValue: role.roleType,
      }
    },
  }


  result.roleId.editor = UIUtil.buildInputEditor(result.roleId);
  result.roleName.editor = UIUtil.buildInputEditor(result.roleName);
  result.description.editor = UIUtil.buildInputEditor(result.description);
  result.createTime.editor = UIUtil.buildTimeStampEditor(result.createTime, TIMESTAMP_FORMAT);
  result.updateTime.editor = UIUtil.buildTimeStampEditor(result.updateTime, TIMESTAMP_FORMAT);
  result.roleType.editor = UIUtil.buildEnumEditor(result.roleType, roleTypeOptions);

  return result;
}


