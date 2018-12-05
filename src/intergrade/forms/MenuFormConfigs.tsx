/**
 *  Do not remove this unless you get business authorization.
 *  Menu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Menu from "../beans/Menu"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormConfigs, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';
import {visitCheckTypeOptions} from '../enums/VisitCheckType';
import {visitTypeOptions} from '../enums/VisitType';

/** roleId */
const menu_roleId = {
  name: 'roleId',
  label: "roleId",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_roleId.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_roleId};
    return UIUtil.BuildInputEditor(props);
  }

/** checked */
const menu_checked = {
  name: 'checked',
  label: "checked",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_checked.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_checked};
    return UIUtil.BuildInputEditor(props);
  }

/** 菜单ID */
const menu_menuId = {
  name: 'menuId',
  isId: true,
  label: "菜单ID",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_menuId.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_menuId};
    return UIUtil.BuildInputEditor(props);
  }

/** 面包屑父ID menuId与bpid组成树图 */
const menu_bpid = {
  name: 'bpid',
  label: "面包屑父ID",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_bpid.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_bpid};
    return UIUtil.BuildInputEditor(props);
  }

/** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1 */
const menu_mpid = {
  name: 'mpid',
  label: "菜单父ID",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_mpid.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_mpid};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应的项目id */
const menu_projectName = {
  name: 'projectName',
  label: "对应的项目id",
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
menu_projectName.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_projectName};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应后台系统controlle名称 */
const menu_controllerName = {
  name: 'controllerName',
  label: "对应后台系统controlle名称",
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
menu_controllerName.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_controllerName};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应后台系统method名称 */
const menu_methodName = {
  name: 'methodName',
  label: "对应后台系统method名称",
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
menu_methodName.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_methodName};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应的api路径 */
const menu_url = {
  name: 'url',
  label: "对应的api路径",
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
menu_url.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_url};
    return UIUtil.BuildInputEditor(props);
  }

/** icon */
const menu_icon = {
  name: 'icon',
  isImage: true,
  label: "icon",
  type: "",
  Editor: UIUtil.BuildImageEditor,
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
menu_icon.Editor =
  (props: UIUtil.ImageEditorProps) => {
    props = {...props, formItemConfig: menu_icon};
    return UIUtil.BuildImageEditor(props);
  }

/** 名称 */
const menu_name = {
  name: 'name',
  label: "名称",
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
menu_name.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_name};
    return UIUtil.BuildInputEditor(props);
  }

/** 路由路径 */
const menu_route = {
  name: 'route',
  label: "路由路径",
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
menu_route.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_route};
    return UIUtil.BuildInputEditor(props);
  }

/** visitType */
const menu_visitType = {
  name: 'visitType',
  isEnum: true,
  options: visitTypeOptions,
  label: "visitType",
  type: "",
  Editor: UIUtil.BuildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_visitType.Editor =
  (props: UIUtil.EnumEditorProps) => {
    props = {...props, formItemConfig: menu_visitType};
    return UIUtil.BuildEnumEditor(props);
  }

/** checkType */
const menu_checkType = {
  name: 'checkType',
  isEnum: true,
  options: visitCheckTypeOptions,
  label: "checkType",
  type: "",
  Editor: UIUtil.BuildEnumEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_checkType.Editor =
  (props: UIUtil.EnumEditorProps) => {
    props = {...props, formItemConfig: menu_checkType};
    return UIUtil.BuildEnumEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const menu_createTime = {
  name: 'createTime',
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
menu_createTime.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: menu_createTime};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const menu_updateTime = {
  name: 'updateTime',
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
menu_updateTime.Editor =
  (props: UIUtil.TimeStampEditorProps) => {
    props = {...props, formItemConfig: menu_updateTime};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** id,和MenuId相同，为了生成树 */
const menu_id = {
  name: 'id',
  label: "id",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_id.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_id};
    return UIUtil.BuildInputEditor(props);
  }

/** 打开顺序，前端model存储用 */
const menu_opendOrder = {
  name: 'opendOrder',
  hidden: true,
  label: "打开顺序",
  type: "",
  Editor: UIUtil.BuildInputEditor,
  value: null,
  formPropsUtils: null,
  config: {
    initialValue: null,
  }
};
menu_opendOrder.Editor =
  (props: UIUtil.InputEditorProps) => {
    props = {...props, formItemConfig: menu_opendOrder};
    return UIUtil.BuildInputEditor(props);
  }

export interface MenuFormConfigs extends FormConfigs {
  /** roleId  */
  RoleId?: typeof menu_roleId & FormItemConfig,

  /** checked  */
  Checked?: typeof menu_checked & FormItemConfig,

  /** 菜单ID  */
  MenuId?: typeof menu_menuId & FormItemConfig,

  /** 面包屑父ID menuId与bpid组成树图  */
  Bpid?: typeof menu_bpid & FormItemConfig,

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  Mpid?: typeof menu_mpid & FormItemConfig,

  /** 对应的项目id  */
  ProjectName?: typeof menu_projectName & FormItemConfig,

  /** 对应后台系统controlle名称  */
  ControllerName?: typeof menu_controllerName & FormItemConfig,

  /** 对应后台系统method名称  */
  MethodName?: typeof menu_methodName & FormItemConfig,

  /** 对应的api路径  */
  Url?: typeof menu_url & FormItemConfig,

  /** icon  */
  Icon?: typeof menu_icon & FormItemConfig,

  /** 名称  */
  Name?: typeof menu_name & FormItemConfig,

  /** 路由路径  */
  Route?: typeof menu_route & FormItemConfig,

  /** visitType  */
  VisitType?: typeof menu_visitType & FormItemConfig,

  /** checkType  */
  CheckType?: typeof menu_checkType & FormItemConfig,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof menu_createTime & FormItemConfig,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof menu_updateTime & FormItemConfig,

  /** id,和MenuId相同，为了生成树  */
  Id?: typeof menu_id & FormItemConfig,

  /** 打开顺序，前端model存储用  */
  OpendOrder?: typeof menu_opendOrder & FormItemConfig,

}
export const getMenuFormConfigs = (menu: Menu, formPropsUtils?: FormPropsUtils): MenuFormConfigs => {
  /** roleId */
  menu_roleId.formPropsUtils = formPropsUtils;
  const menu_roleIdValue =menu.roleId;
  menu_roleId.config.initialValue = menu_roleIdValue;
  menu_roleId.value = menu_roleIdValue;
  /** checked */
  menu_checked.formPropsUtils = formPropsUtils;
  const menu_checkedValue =menu.checked;
  menu_checked.config.initialValue = menu_checkedValue;
  menu_checked.value = menu_checkedValue;
  /** 菜单ID */
  menu_menuId.formPropsUtils = formPropsUtils;
  const menu_menuIdValue =menu.menuId;
  menu_menuId.config.initialValue = menu_menuIdValue;
  menu_menuId.value = menu_menuIdValue;
  /** 面包屑父ID menuId与bpid组成树图 */
  menu_bpid.formPropsUtils = formPropsUtils;
  const menu_bpidValue =menu.bpid;
  menu_bpid.config.initialValue = menu_bpidValue;
  menu_bpid.value = menu_bpidValue;
  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1 */
  menu_mpid.formPropsUtils = formPropsUtils;
  const menu_mpidValue =menu.mpid;
  menu_mpid.config.initialValue = menu_mpidValue;
  menu_mpid.value = menu_mpidValue;
  /** 对应的项目id */
  menu_projectName.formPropsUtils = formPropsUtils;
  const menu_projectNameValue =menu.projectName;
  menu_projectName.config.initialValue = menu_projectNameValue;
  menu_projectName.value = menu_projectNameValue;
  /** 对应后台系统controlle名称 */
  menu_controllerName.formPropsUtils = formPropsUtils;
  const menu_controllerNameValue =menu.controllerName;
  menu_controllerName.config.initialValue = menu_controllerNameValue;
  menu_controllerName.value = menu_controllerNameValue;
  /** 对应后台系统method名称 */
  menu_methodName.formPropsUtils = formPropsUtils;
  const menu_methodNameValue =menu.methodName;
  menu_methodName.config.initialValue = menu_methodNameValue;
  menu_methodName.value = menu_methodNameValue;
  /** 对应的api路径 */
  menu_url.formPropsUtils = formPropsUtils;
  const menu_urlValue =menu.url;
  menu_url.config.initialValue = menu_urlValue;
  menu_url.value = menu_urlValue;
  /** icon */
  menu_icon.formPropsUtils = formPropsUtils;
  const menu_iconValue =menu.icon;
  menu_icon.config.initialValue = menu_iconValue;
  menu_icon.value = menu_iconValue;
  /** 名称 */
  menu_name.formPropsUtils = formPropsUtils;
  const menu_nameValue =menu.name;
  menu_name.config.initialValue = menu_nameValue;
  menu_name.value = menu_nameValue;
  /** 路由路径 */
  menu_route.formPropsUtils = formPropsUtils;
  const menu_routeValue =menu.route;
  menu_route.config.initialValue = menu_routeValue;
  menu_route.value = menu_routeValue;
  /** visitType */
  menu_visitType.formPropsUtils = formPropsUtils;
  const menu_visitTypeValue =menu.visitType;
  menu_visitType.config.initialValue = menu_visitTypeValue;
  menu_visitType.value = menu_visitTypeValue;
  /** checkType */
  menu_checkType.formPropsUtils = formPropsUtils;
  const menu_checkTypeValue =menu.checkType;
  menu_checkType.config.initialValue = menu_checkTypeValue;
  menu_checkType.value = menu_checkTypeValue;
  /** 创建时间 TIMESTAMP*/
  menu_createTime.formPropsUtils = formPropsUtils;
  const menu_createTimeValue =menu.createTime ? moment(menu.createTime) : null;
  menu_createTime.config.initialValue = menu_createTimeValue;
  menu_createTime.value = menu_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  menu_updateTime.formPropsUtils = formPropsUtils;
  const menu_updateTimeValue =menu.updateTime ? moment(menu.updateTime) : null;
  menu_updateTime.config.initialValue = menu_updateTimeValue;
  menu_updateTime.value = menu_updateTimeValue;
  /** id,和MenuId相同，为了生成树 */
  menu_id.formPropsUtils = formPropsUtils;
  const menu_idValue =menu.id;
  menu_id.config.initialValue = menu_idValue;
  menu_id.value = menu_idValue;
  /** 打开顺序，前端model存储用 */
  menu_opendOrder.formPropsUtils = formPropsUtils;
  const menu_opendOrderValue =menu.opendOrder;
  menu_opendOrder.config.initialValue = menu_opendOrderValue;
  menu_opendOrder.value = menu_opendOrderValue;

  return {
    RoleId: menu_roleId,
    Checked: menu_checked,
    MenuId: menu_menuId,
    Bpid: menu_bpid,
    Mpid: menu_mpid,
    ProjectName: menu_projectName,
    ControllerName: menu_controllerName,
    MethodName: menu_methodName,
    Url: menu_url,
    Icon: menu_icon,
    Name: menu_name,
    Route: menu_route,
    VisitType: menu_visitType,
    CheckType: menu_checkType,
    CreateTime: menu_createTime,
    UpdateTime: menu_updateTime,
    Id: menu_id,
    OpendOrder: menu_opendOrder,
  }
}


