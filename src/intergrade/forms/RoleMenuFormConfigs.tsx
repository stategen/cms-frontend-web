/**
 *  Do not remove this unless you get business authorization.
 *  RoleMenu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import RoleMenu from "../beans/RoleMenu"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';

/** id */
const roleMenu_id = {
  name: 'id',
  isId: true,
  label: "id",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
roleMenu_id.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || roleMenu_id;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** roleId */
const roleMenu_roleId = {
  name: 'roleId',
  label: "roleId",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 32,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
roleMenu_roleId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || roleMenu_roleId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** menuId */
const roleMenu_menuId = {
  name: 'menuId',
  label: "menuId",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
roleMenu_menuId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || roleMenu_menuId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 数据创建时间 TIMESTAMP*/
const roleMenu_createTime = {
  name: 'createTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "数据创建时间",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
roleMenu_createTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || roleMenu_createTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 数据更新时间 TIMESTAMP*/
const roleMenu_updateTime = {
  name: 'updateTime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "数据更新时间",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
roleMenu_updateTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || roleMenu_updateTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

export interface RoleMenuFormItemConfigMap extends FormItemConfigMap {
  /** id  */
  Id?: typeof roleMenu_id & Partial<FormItemConfig>,

  /** roleId  */
  RoleId?: typeof roleMenu_roleId & Partial<FormItemConfig>,

  /** menuId  */
  MenuId?: typeof roleMenu_menuId & Partial<FormItemConfig>,

  /** 数据创建时间  TIMESTAMP*/
  CreateTime?: typeof roleMenu_createTime & Partial<FormItemConfig>,

  /** 数据更新时间  TIMESTAMP*/
  UpdateTime?: typeof roleMenu_updateTime & Partial<FormItemConfig>,

}
export const getRoleMenuFormItemConfigMap = (roleMenu: RoleMenu, pagesProps: PagesProps): RoleMenuFormItemConfigMap => {
  /** id */
  roleMenu_id.pagesProps = pagesProps;
  const roleMenu_idValue =roleMenu.id;
  roleMenu_id.config.initialValue = roleMenu_idValue;
  roleMenu_id.data = roleMenu_idValue;
  /** roleId */
  roleMenu_roleId.pagesProps = pagesProps;
  const roleMenu_roleIdValue =roleMenu.roleId;
  roleMenu_roleId.config.initialValue = roleMenu_roleIdValue;
  roleMenu_roleId.data = roleMenu_roleIdValue;
  /** menuId */
  roleMenu_menuId.pagesProps = pagesProps;
  const roleMenu_menuIdValue =roleMenu.menuId;
  roleMenu_menuId.config.initialValue = roleMenu_menuIdValue;
  roleMenu_menuId.data = roleMenu_menuIdValue;
  /** 数据创建时间 TIMESTAMP*/
  roleMenu_createTime.pagesProps = pagesProps;
  const roleMenu_createTimeValue =roleMenu.createTime ? moment(roleMenu.createTime) : null;
  roleMenu_createTime.config.initialValue = roleMenu_createTimeValue;
  roleMenu_createTime.data = roleMenu_createTimeValue;
  /** 数据更新时间 TIMESTAMP*/
  roleMenu_updateTime.pagesProps = pagesProps;
  const roleMenu_updateTimeValue =roleMenu.updateTime ? moment(roleMenu.updateTime) : null;
  roleMenu_updateTime.config.initialValue = roleMenu_updateTimeValue;
  roleMenu_updateTime.data = roleMenu_updateTimeValue;

  return {
    Id: roleMenu_id,
    RoleId: roleMenu_roleId,
    MenuId: roleMenu_menuId,
    CreateTime: roleMenu_createTime,
    UpdateTime: roleMenu_updateTime,
  }
}


