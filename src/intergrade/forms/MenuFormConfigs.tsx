/**
 *  Do not remove this unless you get business authorization.
 *  Menu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Menu from "../beans/Menu"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils} from "@utils/DvaUtil";
import moment from 'moment';
import {visitCheckTypeOptions} from '../enums/VisitCheckType';
import {visitTypeOptions} from '../enums/VisitType';

/** roleId  */
const Menu_roleId = {
  name: 'roleId',
  label: "roleId",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_roleId.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_roleId};
    return UIUtil.buildInputEditor(props);
  }

/** checked  */
const Menu_checked = {
  name: 'checked',
  label: "checked",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_checked.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_checked};
    return UIUtil.buildInputEditor(props);
  }

/** 菜单ID  */
const Menu_menuId = {
  name: 'menuId',
  isId: true,
  label: "菜单ID",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_menuId.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_menuId};
    return UIUtil.buildInputEditor(props);
  }

/** 面包屑父ID menuId与bpid组成树图  */
const Menu_bpid = {
  name: 'bpid',
  label: "面包屑父ID",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_bpid.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_bpid};
    return UIUtil.buildInputEditor(props);
  }

/** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
const Menu_mpid = {
  name: 'mpid',
  label: "菜单父ID",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_mpid.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_mpid};
    return UIUtil.buildInputEditor(props);
  }

/** 对应的项目id  */
const Menu_projectName = {
  name: 'projectName',
  label: "对应的项目id",
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
Menu_projectName.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_projectName};
    return UIUtil.buildInputEditor(props);
  }

/** 对应后台系统controlle名称  */
const Menu_controllerName = {
  name: 'controllerName',
  label: "对应后台系统controlle名称",
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
Menu_controllerName.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_controllerName};
    return UIUtil.buildInputEditor(props);
  }

/** 对应后台系统method名称  */
const Menu_methodName = {
  name: 'methodName',
  label: "对应后台系统method名称",
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
Menu_methodName.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_methodName};
    return UIUtil.buildInputEditor(props);
  }

/** 对应的api路径  */
const Menu_url = {
  name: 'url',
  label: "对应的api路径",
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
Menu_url.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_url};
    return UIUtil.buildInputEditor(props);
  }

/** icon  */
const Menu_icon = {
  name: 'icon',
  isImage: true,
  label: "icon",
  type: "",
  editor: UIUtil.buildImageEditor,
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
Menu_icon.editor =
  (props: UIUtil.ImageEditorProps) => {
    props ={...props, formItemConfig: Menu_icon};
    return UIUtil.buildImageEditor(props);
  }

/** 名称  */
const Menu_name = {
  name: 'name',
  label: "名称",
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
Menu_name.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_name};
    return UIUtil.buildInputEditor(props);
  }

/** 路由路径  */
const Menu_route = {
  name: 'route',
  label: "路由路径",
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
Menu_route.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_route};
    return UIUtil.buildInputEditor(props);
  }

/** visitType  */
const Menu_visitType = {
  name: 'visitType',
  isEnum: true,
  options: visitTypeOptions,
  label: "visitType",
  type: "",
  editor: UIUtil.buildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_visitType.editor =
  (props: UIUtil.EnumEditorProps) => {
    props ={...props, formItemConfig: Menu_visitType};
    return UIUtil.buildEnumEditor(props);
  }

/** checkType  */
const Menu_checkType = {
  name: 'checkType',
  isEnum: true,
  options: visitCheckTypeOptions,
  label: "checkType",
  type: "",
  editor: UIUtil.buildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_checkType.editor =
  (props: UIUtil.EnumEditorProps) => {
    props ={...props, formItemConfig: Menu_checkType};
    return UIUtil.buildEnumEditor(props);
  }

/** 创建时间  TIMESTAMP*/
const Menu_createTime = {
  name: 'createTime',
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
Menu_createTime.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: Menu_createTime};
    return UIUtil.buildTimeStampEditor(props);
  }

/** 更新时间  TIMESTAMP*/
const Menu_updateTime = {
  name: 'updateTime',
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
Menu_updateTime.editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props ={...props, formItemConfig: Menu_updateTime};
    return UIUtil.buildTimeStampEditor(props);
  }

/** id,和MenuId相同，为了生成树  */
const Menu_id = {
  name: 'id',
  label: "id",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_id.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_id};
    return UIUtil.buildInputEditor(props);
  }

/** 打开顺序，前端model存储用  */
const Menu_opendOrder = {
  name: 'opendOrder',
  hidden: true,
  label: "打开顺序",
  type: "",
  editor: UIUtil.buildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
Menu_opendOrder.editor =
  (props: UIUtil.InputEditorProps) => {
    props ={...props, formItemConfig: Menu_opendOrder};
    return UIUtil.buildInputEditor(props);
  }

export interface MenuFormConfigs extends FormConfigs {
  /** roleId  */
  roleId?: typeof Menu_roleId & FormItemConfig,

  /** checked  */
  checked?: typeof Menu_checked & FormItemConfig,

  /** 菜单ID  */
  menuId?: typeof Menu_menuId & FormItemConfig,

  /** 面包屑父ID menuId与bpid组成树图  */
  bpid?: typeof Menu_bpid & FormItemConfig,

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  mpid?: typeof Menu_mpid & FormItemConfig,

  /** 对应的项目id  */
  projectName?: typeof Menu_projectName & FormItemConfig,

  /** 对应后台系统controlle名称  */
  controllerName?: typeof Menu_controllerName & FormItemConfig,

  /** 对应后台系统method名称  */
  methodName?: typeof Menu_methodName & FormItemConfig,

  /** 对应的api路径  */
  url?: typeof Menu_url & FormItemConfig,

  /** icon  */
  icon?: typeof Menu_icon & FormItemConfig,

  /** 名称  */
  name?: typeof Menu_name & FormItemConfig,

  /** 路由路径  */
  route?: typeof Menu_route & FormItemConfig,

  /** visitType  */
  visitType?: typeof Menu_visitType & FormItemConfig,

  /** checkType  */
  checkType?: typeof Menu_checkType & FormItemConfig,

  /** 创建时间  TIMESTAMP*/
  createTime?: typeof Menu_createTime & FormItemConfig,

  /** 更新时间  TIMESTAMP*/
  updateTime?: typeof Menu_updateTime & FormItemConfig,

  /** id,和MenuId相同，为了生成树  */
  id?: typeof Menu_id & FormItemConfig,

  /** 打开顺序，前端model存储用  */
  opendOrder?: typeof Menu_opendOrder & FormItemConfig,

  [columnName: string]: FormItemConfig,
}
export const getMenuFormConfigs = (menu: Menu, formPropsUtils?: FormPropsUtils): MenuFormConfigs => {
  /** roleId  */
  Menu_roleId.formPropsUtils = formPropsUtils;
  Menu_roleId.config.initialValue = menu.roleId;
  Menu_roleId.value = menu.roleId;
  /** checked  */
  Menu_checked.formPropsUtils = formPropsUtils;
  Menu_checked.config.initialValue = menu.checked;
  Menu_checked.value = menu.checked;
  /** 菜单ID  */
  Menu_menuId.formPropsUtils = formPropsUtils;
  Menu_menuId.config.initialValue = menu.menuId;
  Menu_menuId.value = menu.menuId;
  /** 面包屑父ID menuId与bpid组成树图  */
  Menu_bpid.formPropsUtils = formPropsUtils;
  Menu_bpid.config.initialValue = menu.bpid;
  Menu_bpid.value = menu.bpid;
  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  Menu_mpid.formPropsUtils = formPropsUtils;
  Menu_mpid.config.initialValue = menu.mpid;
  Menu_mpid.value = menu.mpid;
  /** 对应的项目id  */
  Menu_projectName.formPropsUtils = formPropsUtils;
  Menu_projectName.config.initialValue = menu.projectName;
  Menu_projectName.value = menu.projectName;
  /** 对应后台系统controlle名称  */
  Menu_controllerName.formPropsUtils = formPropsUtils;
  Menu_controllerName.config.initialValue = menu.controllerName;
  Menu_controllerName.value = menu.controllerName;
  /** 对应后台系统method名称  */
  Menu_methodName.formPropsUtils = formPropsUtils;
  Menu_methodName.config.initialValue = menu.methodName;
  Menu_methodName.value = menu.methodName;
  /** 对应的api路径  */
  Menu_url.formPropsUtils = formPropsUtils;
  Menu_url.config.initialValue = menu.url;
  Menu_url.value = menu.url;
  /** icon  */
  Menu_icon.formPropsUtils = formPropsUtils;
  Menu_icon.config.initialValue = menu.icon;
  Menu_icon.value = menu.icon;
  /** 名称  */
  Menu_name.formPropsUtils = formPropsUtils;
  Menu_name.config.initialValue = menu.name;
  Menu_name.value = menu.name;
  /** 路由路径  */
  Menu_route.formPropsUtils = formPropsUtils;
  Menu_route.config.initialValue = menu.route;
  Menu_route.value = menu.route;
  /** visitType  */
  Menu_visitType.formPropsUtils = formPropsUtils;
  Menu_visitType.config.initialValue = menu.visitType;
  Menu_visitType.value = menu.visitType;
  /** checkType  */
  Menu_checkType.formPropsUtils = formPropsUtils;
  Menu_checkType.config.initialValue = menu.checkType;
  Menu_checkType.value = menu.checkType;
  /** 创建时间  TIMESTAMP*/
  Menu_createTime.formPropsUtils = formPropsUtils;
  Menu_createTime.config.initialValue = menu.createTime ? moment(menu.createTime) : null;
  Menu_createTime.value = menu.createTime ? moment(menu.createTime) : null;
  /** 更新时间  TIMESTAMP*/
  Menu_updateTime.formPropsUtils = formPropsUtils;
  Menu_updateTime.config.initialValue = menu.updateTime ? moment(menu.updateTime) : null;
  Menu_updateTime.value = menu.updateTime ? moment(menu.updateTime) : null;
  /** id,和MenuId相同，为了生成树  */
  Menu_id.formPropsUtils = formPropsUtils;
  Menu_id.config.initialValue = menu.id;
  Menu_id.value = menu.id;
  /** 打开顺序，前端model存储用  */
  Menu_opendOrder.formPropsUtils = formPropsUtils;
  Menu_opendOrder.config.initialValue = menu.opendOrder;
  Menu_opendOrder.value = menu.opendOrder;

  return {
    roleId: Menu_roleId,
    checked: Menu_checked,
    menuId: Menu_menuId,
    bpid: Menu_bpid,
    mpid: Menu_mpid,
    projectName: Menu_projectName,
    controllerName: Menu_controllerName,
    methodName: Menu_methodName,
    url: Menu_url,
    icon: Menu_icon,
    name: Menu_name,
    route: Menu_route,
    visitType: Menu_visitType,
    checkType: Menu_checkType,
    createTime: Menu_createTime,
    updateTime: Menu_updateTime,
    id: Menu_id,
    opendOrder: Menu_opendOrder,
  }
}


