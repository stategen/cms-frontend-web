/**
 *  Do not remove this unless you get business authorization.
 *  Province
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Province from "../beans/Province"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';

/** label */
const province_label = {
  name: 'label',
  label: "label",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
province_label.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_label;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** value */
const province_value = {
  name: 'value',
  label: "value",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
province_value.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_value;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** provinceId */
const province_provinceId = {
  name: 'provinceId',
  isId: true,
  label: "provinceId",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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
province_provinceId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_provinceId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** name */
const province_name = {
  name: 'name',
  label: "name",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 100,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
province_name.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_name;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** pycode */
const province_pycode = {
  name: 'pycode',
  label: "pycode",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 50,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
province_pycode.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_pycode;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const province_createTime = {
  name: 'createTime',
  hidden: true,
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
province_createTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_createTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const province_updateTime = {
  name: 'updateTime',
  hidden: true,
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
province_updateTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_updateTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** title */
const province_title = {
  name: 'title',
  label: "title",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
province_title.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || province_title;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

export interface ProvinceFormItemConfigMap extends FormItemConfigMap {
  /** label  */
  Label?: typeof province_label & Partial<FormItemConfig>,

  /** value  */
  Value?: typeof province_value & Partial<FormItemConfig>,

  /** provinceId  */
  ProvinceId?: typeof province_provinceId & Partial<FormItemConfig>,

  /** name  */
  Name?: typeof province_name & Partial<FormItemConfig>,

  /** pycode  */
  Pycode?: typeof province_pycode & Partial<FormItemConfig>,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof province_createTime & Partial<FormItemConfig>,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof province_updateTime & Partial<FormItemConfig>,

  /** title  */
  Title?: typeof province_title & Partial<FormItemConfig>,

}
export const getProvinceFormItemConfigMap = (province: Province, pagesProps: PagesProps): ProvinceFormItemConfigMap => {
  /** label */
  province_label.pagesProps = pagesProps;
  const province_labelValue =province.label;
  province_label.config.initialValue = province_labelValue;
  province_label.data = province_labelValue;
  /** value */
  province_value.pagesProps = pagesProps;
  const province_valueValue =province.value;
  province_value.config.initialValue = province_valueValue;
  province_value.data = province_valueValue;
  /** provinceId */
  province_provinceId.pagesProps = pagesProps;
  const province_provinceIdValue =province.provinceId;
  province_provinceId.config.initialValue = province_provinceIdValue;
  province_provinceId.data = province_provinceIdValue;
  /** name */
  province_name.pagesProps = pagesProps;
  const province_nameValue =province.name;
  province_name.config.initialValue = province_nameValue;
  province_name.data = province_nameValue;
  /** pycode */
  province_pycode.pagesProps = pagesProps;
  const province_pycodeValue =province.pycode;
  province_pycode.config.initialValue = province_pycodeValue;
  province_pycode.data = province_pycodeValue;
  /** 创建时间 TIMESTAMP*/
  province_createTime.pagesProps = pagesProps;
  const province_createTimeValue =province.createTime ? moment(province.createTime) : null;
  province_createTime.config.initialValue = province_createTimeValue;
  province_createTime.data = province_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  province_updateTime.pagesProps = pagesProps;
  const province_updateTimeValue =province.updateTime ? moment(province.updateTime) : null;
  province_updateTime.config.initialValue = province_updateTimeValue;
  province_updateTime.data = province_updateTimeValue;
  /** title */
  province_title.pagesProps = pagesProps;
  const province_titleValue =province.title;
  province_title.config.initialValue = province_titleValue;
  province_title.data = province_titleValue;

  return {
    Label: province_label,
    Value: province_value,
    ProvinceId: province_provinceId,
    Name: province_name,
    Pycode: province_pycode,
    CreateTime: province_createTime,
    UpdateTime: province_updateTime,
    Title: province_title,
  }
}


