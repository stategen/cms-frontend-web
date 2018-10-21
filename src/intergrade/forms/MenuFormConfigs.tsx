/**
 *  Do not remove this unless you get business authorization.
 *  Menu
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import Menu from "../beans/Menu"
import UIUtil from "@utils/UIUtil";
import {FormItemConfigs,FormConfigs , ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
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

export const getMenuFormConfigs = (menu: Menu): MenuFormConfigs => {
  const result: MenuFormConfigs = {
    /** roleId  */
    roleId: {
      name: 'roleId',
      label: "roleId",
      config: {
        initialValue: menu.roleId,
      }
    },
    /** checked  */
    checked: {
      name: 'checked',
      label: "checked",
      config: {
        initialValue: menu.checked,
      }
    },
    /** 菜单ID  */
    menuId: {
      name: 'menuId',
      isId: true,
      label: "菜单ID",
      config: {
        initialValue: menu.menuId,
      }
    },
    /** 面包屑父ID menuId与bpid组成树图  */
    bpid: {
      name: 'bpid',
      label: "面包屑父ID",
      config: {
        initialValue: menu.bpid,
      }
    },
    /** 菜单父ID 大部分情况下与bpid相同，当为动态目录时，mpid=-1  */
    mpid: {
      name: 'mpid',
      label: "菜单父ID",
      config: {
        initialValue: menu.mpid,
      }
    },
    /** 对应的项目id  */
    projectName: {
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
    },
    /** 对应后台系统controlle名称  */
    controllerName: {
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
    },
    /** 对应后台系统method名称  */
    methodName: {
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
    },
    /** 对应的api路径  */
    url: {
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
    },
    /** icon  */
    icon: {
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
    },
    /** 名称  */
    name: {
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
    },
    /** 路由路径  */
    route: {
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
    },
    /** visitType  */
    visitType: {
      name: 'visitType',
      isEnum: true,
      options: visitTypeOptions,
      label: "visitType",
      config: {
        initialValue: menu.visitType,
      }
    },
    /** checkType  */
    checkType: {
      name: 'checkType',
      isEnum: true,
      options: visitCheckTypeOptions,
      label: "checkType",
      config: {
        initialValue: menu.checkType,
      }
    },
    /** 创建时间  TIMESTAMP*/
    createTime: {
      name: 'createTime',
      format: TIMESTAMP_FORMAT,
      label: "创建时间",
      config: {
        initialValue: menu.createTime ? moment(menu.createTime) : null,
      }
    },
    /** 更新时间  TIMESTAMP*/
    updateTime: {
      name: 'updateTime',
      format: TIMESTAMP_FORMAT,
      label: "更新时间",
      config: {
        initialValue: menu.updateTime ? moment(menu.updateTime) : null,
      }
    },
    /** id,和MenuId相同，为了生成树  */
    id: {
      name: 'id',
      label: "id",
      config: {
        initialValue: menu.id,
      }
    },
    /** 打开顺序，前端model存储用  */
    opendOrder: {
      name: 'opendOrder',
      hidden: true,
      label: "打开顺序",
      config: {
        initialValue: menu.opendOrder,
      }
    },
  }


  result.roleId.editor = UIUtil.buildInputEditor(result.roleId);
  result.checked.editor = UIUtil.buildInputEditor(result.checked);
  result.menuId.editor = UIUtil.buildInputEditor(result.menuId);
  result.bpid.editor = UIUtil.buildInputEditor(result.bpid);
  result.mpid.editor = UIUtil.buildInputEditor(result.mpid);
  result.projectName.editor = UIUtil.buildInputEditor(result.projectName);
  result.controllerName.editor = UIUtil.buildInputEditor(result.controllerName);
  result.methodName.editor = UIUtil.buildInputEditor(result.methodName);
  result.url.editor = UIUtil.buildInputEditor(result.url);
  result.icon.editor = UIUtil.buildImageEditor(result.icon);
  result.name.editor = UIUtil.buildInputEditor(result.name);
  result.route.editor = UIUtil.buildInputEditor(result.route);
  result.visitType.editor = UIUtil.buildEnumEditor(result.visitType, visitTypeOptions);
  result.checkType.editor = UIUtil.buildEnumEditor(result.checkType, visitCheckTypeOptions);
  result.createTime.editor = UIUtil.buildTimeStampEditor(result.createTime, TIMESTAMP_FORMAT);
  result.updateTime.editor = UIUtil.buildTimeStampEditor(result.updateTime, TIMESTAMP_FORMAT);
  result.id.editor = UIUtil.buildInputEditor(result.id);
  result.opendOrder.editor = UIUtil.buildInputEditor(result.opendOrder);

  return result;
}


