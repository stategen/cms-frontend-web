/**
 *  Do not remove this unless you get business authorization.
 *  Menu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Menu from "../beans/Menu"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {visitCheckTypeOptions} from '../enums/VisitCheckType';
import {visitTypeOptions} from '../enums/VisitType';

export interface MenuFormConfigs extends FormConfigs {
  /** roleId  */
  roleId?: FormItemConfigs,

  /** checked  */
  checked?: FormItemConfigs,

  /** 菜单ID  */
  menuId?: FormItemConfigs,

  /** 面包屑父ID menuId与bpid组成树图  */
  bpid?: FormItemConfigs,

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  mpid?: FormItemConfigs,

  /** 对应的项目id  */
  projectName?: FormItemConfigs,

  /** 对应后台系统controlle名称  */
  controllerName?: FormItemConfigs,

  /** 对应后台系统method名称  */
  methodName?: FormItemConfigs,

  /** 对应的api路径  */
  url?: FormItemConfigs,

  /** icon  */
  icon?: FormItemConfigs,

  /** 名称  */
  name?: FormItemConfigs,

  /** 路由路径  */
  route?: FormItemConfigs,

  /** visitType  */
  visitType?: FormItemConfigs,

  /** checkType  */
  checkType?: FormItemConfigs,

  /** 创建时间  TIMESTAMP*/
  createTime?: FormItemConfigs,

  /** 更新时间  TIMESTAMP*/
  updateTime?: FormItemConfigs,

  /** id,和MenuId相同，为了生成树  */
  id?: FormItemConfigs,

  /** 打开顺序，前端model存储用  */
  opendOrder?: FormItemConfigs,

  [columnName: string]: FormItemConfigs,

}

export const getMenuFormConfigs = (menu: Menu, formPropsUtils?: FormPropsUtils): MenuFormConfigs => {
  const _ ={formPropsUtils: formPropsUtils, createFormItemProps: UIUtil.createFormItemProps};
  /** roleId  */
  const roleId: FormItemConfigs = {
    ..._,
    name: 'roleId',
    label: "roleId",
    config: {
      initialValue: menu.roleId,
    }
  };

  /** checked  */
  const checked: FormItemConfigs = {
    ..._,
    name: 'checked',
    label: "checked",
    config: {
      initialValue: menu.checked,
    }
  };

  /** 菜单ID  */
  const menuId: FormItemConfigs = {
    ..._,
    name: 'menuId',
    isId: true,
    label: "菜单ID",
    config: {
      initialValue: menu.menuId,
    }
  };

  /** 面包屑父ID menuId与bpid组成树图  */
  const bpid: FormItemConfigs = {
    ..._,
    name: 'bpid',
    label: "面包屑父ID",
    config: {
      initialValue: menu.bpid,
    }
  };

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  const mpid: FormItemConfigs = {
    ..._,
    name: 'mpid',
    label: "菜单父ID",
    config: {
      initialValue: menu.mpid,
    }
  };

  /** 对应的项目id  */
  const projectName: FormItemConfigs = {
    ..._,
    name: 'projectName',
    label: "对应的项目id",
    config: {
      initialValue: menu.projectName,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 对应后台系统controlle名称  */
  const controllerName: FormItemConfigs = {
    ..._,
    name: 'controllerName',
    label: "对应后台系统controlle名称",
    config: {
      initialValue: menu.controllerName,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 对应后台系统method名称  */
  const methodName: FormItemConfigs = {
    ..._,
    name: 'methodName',
    label: "对应后台系统method名称",
    config: {
      initialValue: menu.methodName,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 对应的api路径  */
  const url: FormItemConfigs = {
    ..._,
    name: 'url',
    label: "对应的api路径",
    config: {
      initialValue: menu.url,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** icon  */
  const icon: FormItemConfigs = {
    ..._,
    name: 'icon',
    isImage: true,
    label: "icon",
    config: {
      initialValue: menu.icon,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 名称  */
  const name: FormItemConfigs = {
    ..._,
    name: 'name',
    label: "名称",
    config: {
      initialValue: menu.name,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** 路由路径  */
  const route: FormItemConfigs = {
    ..._,
    name: 'route',
    label: "路由路径",
    config: {
      initialValue: menu.route,
      rules: [
        {
          max: 64,
          message: "{javax.validation.constraints.Max.message}",
        },
      ],
    }
  };

  /** visitType  */
  const visitType: FormItemConfigs = {
    ..._,
    name: 'visitType',
    isEnum: true,
    options: visitTypeOptions,
    label: "visitType",
    config: {
      initialValue: menu.visitType,
    }
  };

  /** checkType  */
  const checkType: FormItemConfigs = {
    ..._,
    name: 'checkType',
    isEnum: true,
    options: visitCheckTypeOptions,
    label: "checkType",
    config: {
      initialValue: menu.checkType,
    }
  };

  /** 创建时间  TIMESTAMP*/
  const createTime: FormItemConfigs = {
    ..._,
    name: 'createTime',
    format: TIMESTAMP_FORMAT,
    label: "创建时间",
    config: {
      initialValue: menu.createTime ? moment(menu.createTime) : null,
    }
  };

  /** 更新时间  TIMESTAMP*/
  const updateTime: FormItemConfigs = {
    ..._,
    name: 'updateTime',
    format: TIMESTAMP_FORMAT,
    label: "更新时间",
    config: {
      initialValue: menu.updateTime ? moment(menu.updateTime) : null,
    }
  };

  /** id,和MenuId相同，为了生成树  */
  const id: FormItemConfigs = {
    ..._,
    name: 'id',
    label: "id",
    config: {
      initialValue: menu.id,
    }
  };

  /** 打开顺序，前端model存储用  */
  const opendOrder: FormItemConfigs = {
    ..._,
    name: 'opendOrder',
    hidden: true,
    label: "打开顺序",
    config: {
      initialValue: menu.opendOrder,
    }
  };

  roleId.editor = UIUtil.buildInputEditor;
  checked.editor = UIUtil.buildInputEditor;
  menuId.editor = UIUtil.buildInputEditor;
  bpid.editor = UIUtil.buildInputEditor;
  mpid.editor = UIUtil.buildInputEditor;
  projectName.editor = UIUtil.buildInputEditor;
  controllerName.editor = UIUtil.buildInputEditor;
  methodName.editor = UIUtil.buildInputEditor;
  url.editor = UIUtil.buildInputEditor;
  icon.editor = UIUtil.buildImageEditor;
  name.editor = UIUtil.buildInputEditor;
  route.editor = UIUtil.buildInputEditor;
  visitType.editor = UIUtil.buildEnumEditor;
  visitType.options = visitTypeOptions;
  checkType.editor = UIUtil.buildEnumEditor;
  checkType.options = visitCheckTypeOptions;
  createTime.editor = UIUtil.buildTimeStampEditor;
  createTime.format = TIMESTAMP_FORMAT;
  updateTime.editor = UIUtil.buildTimeStampEditor;
  updateTime.format = TIMESTAMP_FORMAT;
  id.editor = UIUtil.buildInputEditor;
  opendOrder.editor = UIUtil.buildInputEditor;

  return {
    roleId,
    checked,
    menuId,
    bpid,
    mpid,
    projectName,
    controllerName,
    methodName,
    url,
    icon,
    name,
    route,
    visitType,
    checkType,
    createTime,
    updateTime,
    id,
    opendOrder,
  }
}


