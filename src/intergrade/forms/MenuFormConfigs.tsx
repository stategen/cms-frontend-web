/**
 *  Do not remove this unless you get business authorization.
 *  Menu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Menu from "../beans/Menu"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';
import {menuTypeOptions} from '../enums/MenuType';
import {visitCheckTypeOptions} from '../enums/VisitCheckType';

/** roleId */
const menu_roleId = {
  name: 'roleId',
  label: "roleId",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_roleId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_roleId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** checked */
const menu_checked = {
  name: 'checked',
  label: "checked",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_checked.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_checked;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 菜单ID */
const menu_menuId = {
  name: 'menuId',
  isId: true,
  label: "菜单ID",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_menuId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_menuId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 面包屑父ID menuId与bpid组成树图 */
const menu_bpid = {
  name: 'bpid',
  label: "面包屑父ID",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_bpid.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_bpid;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1 */
const menu_mpid = {
  name: 'mpid',
  label: "菜单父ID",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_mpid.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_mpid;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应的项目id */
const menu_projectName = {
  name: 'projectName',
  label: "对应的项目id",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_projectName;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应后台系统controlle名称 */
const menu_controllerName = {
  name: 'controllerName',
  label: "对应后台系统controlle名称",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_controllerName;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应后台系统method名称 */
const menu_methodName = {
  name: 'methodName',
  label: "对应后台系统method名称",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_methodName;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 对应的api路径 */
const menu_url = {
  name: 'url',
  label: "对应的api路径",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_url;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** icon */
const menu_icon = {
  name: 'icon',
  isImage: true,
  label: "icon",
  Editor: UIUtil.BuildImageEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.ImageEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_icon;
    props = {...props, formItemConfig};
    return UIUtil.BuildImageEditor(props);
  }

/** 名称 */
const menu_name = {
  name: 'name',
  label: "名称",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_name;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 路由路径 */
const menu_route = {
  name: 'route',
  label: "路由路径",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
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
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_route;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** menuType */
const menu_menuType = {
  name: 'menuType',
  isEnum: true,
  options: menuTypeOptions,
  label: "menuType",
  Editor: UIUtil.BuildEnumEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_menuType.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_menuType;
    props = {...props, formItemConfig};
    return UIUtil.BuildEnumEditor(props);
  }

/** checkType */
const menu_checkType = {
  name: 'checkType',
  isEnum: true,
  options: visitCheckTypeOptions,
  label: "checkType",
  Editor: UIUtil.BuildEnumEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_checkType.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_checkType;
    props = {...props, formItemConfig};
    return UIUtil.BuildEnumEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const menu_createTime = {
  name: 'createTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_createTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_createTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const menu_updateTime = {
  name: 'updateTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_updateTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_updateTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** id,和MenuId相同，为了生成树 */
const menu_id = {
  name: 'id',
  label: "id",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_id.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_id;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 打开顺序，前端model存储用 */
const menu_opendOrder = {
  name: 'opendOrder',
  hidden: true,
  label: "打开顺序",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
menu_opendOrder.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || menu_opendOrder;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

export interface MenuFormItemConfigMap extends FormItemConfigMap {
  /** roleId  */
  RoleId?: typeof menu_roleId & Partial<FormItemConfig>,

  /** checked  */
  Checked?: typeof menu_checked & Partial<FormItemConfig>,

  /** 菜单ID  */
  MenuId?: typeof menu_menuId & Partial<FormItemConfig>,

  /** 面包屑父ID menuId与bpid组成树图  */
  Bpid?: typeof menu_bpid & Partial<FormItemConfig>,

  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
  Mpid?: typeof menu_mpid & Partial<FormItemConfig>,

  /** 对应的项目id  */
  ProjectName?: typeof menu_projectName & Partial<FormItemConfig>,

  /** 对应后台系统controlle名称  */
  ControllerName?: typeof menu_controllerName & Partial<FormItemConfig>,

  /** 对应后台系统method名称  */
  MethodName?: typeof menu_methodName & Partial<FormItemConfig>,

  /** 对应的api路径  */
  Url?: typeof menu_url & Partial<FormItemConfig>,

  /** icon  */
  Icon?: typeof menu_icon & Partial<FormItemConfig>,

  /** 名称  */
  Name?: typeof menu_name & Partial<FormItemConfig>,

  /** 路由路径  */
  Route?: typeof menu_route & Partial<FormItemConfig>,

  /** menuType  */
  MenuType?: typeof menu_menuType & Partial<FormItemConfig>,

  /** checkType  */
  CheckType?: typeof menu_checkType & Partial<FormItemConfig>,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof menu_createTime & Partial<FormItemConfig>,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof menu_updateTime & Partial<FormItemConfig>,

  /** id,和MenuId相同，为了生成树  */
  Id?: typeof menu_id & Partial<FormItemConfig>,

  /** 打开顺序，前端model存储用  */
  OpendOrder?: typeof menu_opendOrder & Partial<FormItemConfig>,

}
export const getMenuFormItemConfigMap = (menu: Menu, form?: FormPropsUtils): MenuFormItemConfigMap => {
  /** roleId */
  menu_roleId.form = form;
  const menu_roleIdValue =menu.roleId;
  menu_roleId.config.initialValue = menu_roleIdValue;
  menu_roleId.data = menu_roleIdValue;
  /** checked */
  menu_checked.form = form;
  const menu_checkedValue =menu.checked;
  menu_checked.config.initialValue = menu_checkedValue;
  menu_checked.data = menu_checkedValue;
  /** 菜单ID */
  menu_menuId.form = form;
  const menu_menuIdValue =menu.menuId;
  menu_menuId.config.initialValue = menu_menuIdValue;
  menu_menuId.data = menu_menuIdValue;
  /** 面包屑父ID menuId与bpid组成树图 */
  menu_bpid.form = form;
  const menu_bpidValue =menu.bpid;
  menu_bpid.config.initialValue = menu_bpidValue;
  menu_bpid.data = menu_bpidValue;
  /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1 */
  menu_mpid.form = form;
  const menu_mpidValue =menu.mpid;
  menu_mpid.config.initialValue = menu_mpidValue;
  menu_mpid.data = menu_mpidValue;
  /** 对应的项目id */
  menu_projectName.form = form;
  const menu_projectNameValue =menu.projectName;
  menu_projectName.config.initialValue = menu_projectNameValue;
  menu_projectName.data = menu_projectNameValue;
  /** 对应后台系统controlle名称 */
  menu_controllerName.form = form;
  const menu_controllerNameValue =menu.controllerName;
  menu_controllerName.config.initialValue = menu_controllerNameValue;
  menu_controllerName.data = menu_controllerNameValue;
  /** 对应后台系统method名称 */
  menu_methodName.form = form;
  const menu_methodNameValue =menu.methodName;
  menu_methodName.config.initialValue = menu_methodNameValue;
  menu_methodName.data = menu_methodNameValue;
  /** 对应的api路径 */
  menu_url.form = form;
  const menu_urlValue =menu.url;
  menu_url.config.initialValue = menu_urlValue;
  menu_url.data = menu_urlValue;
  /** icon */
  menu_icon.form = form;
  const menu_iconValue =menu.icon;
  menu_icon.config.initialValue = menu_iconValue;
  menu_icon.data = menu_iconValue;
  /** 名称 */
  menu_name.form = form;
  const menu_nameValue =menu.name;
  menu_name.config.initialValue = menu_nameValue;
  menu_name.data = menu_nameValue;
  /** 路由路径 */
  menu_route.form = form;
  const menu_routeValue =menu.route;
  menu_route.config.initialValue = menu_routeValue;
  menu_route.data = menu_routeValue;
  /** menuType */
  menu_menuType.form = form;
  const menu_menuTypeValue =menu.menuType;
  menu_menuType.config.initialValue = menu_menuTypeValue;
  menu_menuType.data = menu_menuTypeValue;
  /** checkType */
  menu_checkType.form = form;
  const menu_checkTypeValue =menu.checkType;
  menu_checkType.config.initialValue = menu_checkTypeValue;
  menu_checkType.data = menu_checkTypeValue;
  /** 创建时间 TIMESTAMP*/
  menu_createTime.form = form;
  const menu_createTimeValue =menu.createTime ? moment(menu.createTime) : null;
  menu_createTime.config.initialValue = menu_createTimeValue;
  menu_createTime.data = menu_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  menu_updateTime.form = form;
  const menu_updateTimeValue =menu.updateTime ? moment(menu.updateTime) : null;
  menu_updateTime.config.initialValue = menu_updateTimeValue;
  menu_updateTime.data = menu_updateTimeValue;
  /** id,和MenuId相同，为了生成树 */
  menu_id.form = form;
  const menu_idValue =menu.id;
  menu_id.config.initialValue = menu_idValue;
  menu_id.data = menu_idValue;
  /** 打开顺序，前端model存储用 */
  menu_opendOrder.form = form;
  const menu_opendOrderValue =menu.opendOrder;
  menu_opendOrder.config.initialValue = menu_opendOrderValue;
  menu_opendOrder.data = menu_opendOrderValue;

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
    MenuType: menu_menuType,
    CheckType: menu_checkType,
    CreateTime: menu_createTime,
    UpdateTime: menu_updateTime,
    Id: menu_id,
    OpendOrder: menu_opendOrder,
  }
}


