/**
 *  Do not remove this unless you get business authorization.
 *  City
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import City from "../beans/City"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';

/** label */
const city_label = {
  name: 'label',
  label: "label",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
city_label.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_label;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** value */
const city_value = {
  name: 'value',
  label: "value",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
city_value.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_value;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** cityId */
const city_cityId = {
  name: 'cityId',
  isId: true,
  label: "cityId",
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
city_cityId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_cityId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** name */
const city_name = {
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
city_name.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_name;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** pycode */
const city_pycode = {
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
city_pycode.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_pycode;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** provinceId */
const city_provinceId = {
  name: 'provinceId',
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
city_provinceId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_provinceId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** postcode */
const city_postcode = {
  name: 'postcode',
  label: "postcode",
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
city_postcode.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_postcode;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** areacode */
const city_areacode = {
  name: 'areacode',
  label: "areacode",
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
city_areacode.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_areacode;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const city_createTime = {
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
city_createTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_createTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const city_updateTime = {
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
city_updateTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_updateTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** title */
const city_title = {
  name: 'title',
  label: "title",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
city_title.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || city_title;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

export interface CityFormItemConfigMap extends FormItemConfigMap {
  /** label  */
  Label?: typeof city_label & Partial<FormItemConfig>,

  /** value  */
  Value?: typeof city_value & Partial<FormItemConfig>,

  /** cityId  */
  CityId?: typeof city_cityId & Partial<FormItemConfig>,

  /** name  */
  Name?: typeof city_name & Partial<FormItemConfig>,

  /** pycode  */
  Pycode?: typeof city_pycode & Partial<FormItemConfig>,

  /** provinceId  */
  ProvinceId?: typeof city_provinceId & Partial<FormItemConfig>,

  /** postcode  */
  Postcode?: typeof city_postcode & Partial<FormItemConfig>,

  /** areacode  */
  Areacode?: typeof city_areacode & Partial<FormItemConfig>,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof city_createTime & Partial<FormItemConfig>,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof city_updateTime & Partial<FormItemConfig>,

  /** title  */
  Title?: typeof city_title & Partial<FormItemConfig>,

}
export const getCityFormItemConfigMap = (city: City, pagesProps: PagesProps): CityFormItemConfigMap => {
  /** label */
  city_label.pagesProps = pagesProps;
  const city_labelValue =city.label;
  city_label.config.initialValue = city_labelValue;
  city_label.data = city_labelValue;
  /** value */
  city_value.pagesProps = pagesProps;
  const city_valueValue =city.value;
  city_value.config.initialValue = city_valueValue;
  city_value.data = city_valueValue;
  /** cityId */
  city_cityId.pagesProps = pagesProps;
  const city_cityIdValue =city.cityId;
  city_cityId.config.initialValue = city_cityIdValue;
  city_cityId.data = city_cityIdValue;
  /** name */
  city_name.pagesProps = pagesProps;
  const city_nameValue =city.name;
  city_name.config.initialValue = city_nameValue;
  city_name.data = city_nameValue;
  /** pycode */
  city_pycode.pagesProps = pagesProps;
  const city_pycodeValue =city.pycode;
  city_pycode.config.initialValue = city_pycodeValue;
  city_pycode.data = city_pycodeValue;
  /** provinceId */
  city_provinceId.pagesProps = pagesProps;
  const city_provinceIdValue =city.provinceId;
  city_provinceId.config.initialValue = city_provinceIdValue;
  city_provinceId.data = city_provinceIdValue;
  /** postcode */
  city_postcode.pagesProps = pagesProps;
  const city_postcodeValue =city.postcode;
  city_postcode.config.initialValue = city_postcodeValue;
  city_postcode.data = city_postcodeValue;
  /** areacode */
  city_areacode.pagesProps = pagesProps;
  const city_areacodeValue =city.areacode;
  city_areacode.config.initialValue = city_areacodeValue;
  city_areacode.data = city_areacodeValue;
  /** 创建时间 TIMESTAMP*/
  city_createTime.pagesProps = pagesProps;
  const city_createTimeValue =city.createTime ? moment(city.createTime) : null;
  city_createTime.config.initialValue = city_createTimeValue;
  city_createTime.data = city_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  city_updateTime.pagesProps = pagesProps;
  const city_updateTimeValue =city.updateTime ? moment(city.updateTime) : null;
  city_updateTime.config.initialValue = city_updateTimeValue;
  city_updateTime.data = city_updateTimeValue;
  /** title */
  city_title.pagesProps = pagesProps;
  const city_titleValue =city.title;
  city_title.config.initialValue = city_titleValue;
  city_title.data = city_titleValue;

  return {
    Label: city_label,
    Value: city_value,
    CityId: city_cityId,
    Name: city_name,
    Pycode: city_pycode,
    ProvinceId: city_provinceId,
    Postcode: city_postcode,
    Areacode: city_areacode,
    CreateTime: city_createTime,
    UpdateTime: city_updateTime,
    Title: city_title,
  }
}


