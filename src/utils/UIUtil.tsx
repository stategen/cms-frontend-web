import React from 'react'
import {Input, DatePicker, TimePicker, Select} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {Options, FormItemConfig} from "./DvaUtil";
import Menu from "@i/beans/Menu";
import Icon from "antd/lib/icon";
import Link from "umi/link";
import {InputProps} from "antd/lib/input";
import {DatePickerProps} from "antd/lib/date-picker/interface";
import {TimePickerProps} from "antd/lib/time-picker";
import {SelectProps} from "antd/lib/select";
import {LinkProps} from "react-router-dom";
import {FormConfigs, FormProps, FormPropsUtils} from "@utils/DvaUtil";
import {default as FormItem, FormItemProps} from "antd/lib/form/FormItem";
import {WrappedFormUtils} from "antd/lib/form/Form";

namespace UIUtil {

  export const createFieldProps = (formItemConfig: FormItemConfig,formPropsUtils?) => {
    formPropsUtils =formPropsUtils || formItemConfig.formPropsUtils;
    return formPropsUtils.getFieldProps(formItemConfig.name, formItemConfig.config);
  }


  export const buildInputEditor = (props) => {
    console.log(props)
    const {formItemConfig, ...othersProps} = props;
    return (
      <Input
        key={formItemConfig.name}
        {...othersProps}
        {...UIUtil.createFieldProps(formItemConfig)}
      >
      </Input>
    )
  }

  export const buildTimeStampEditor = (props) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    return (<DatePicker showTime locale={locale} format={formItemConfig.format} {...props}/>)
  }

  export const buildTimePickerEditor = (props) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    return (<TimePicker format={formItemConfig.format} {...props}/>)
  }

  export const buildDatePickerEditor = (props) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    return (<DatePicker locale={locale} format={formItemConfig.format} {...props}/>)
  }

  export const buildEnumEditor = (props) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    const muti = formItemConfig.isArray ? {mode: "multiple"} : null;
    return (
      <Select {...muti} style={{width: 150}} {...props}>
        {UIUtil.makeSelectOptions(formItemConfig.options)}
      </Select>
    )
  }

  export const buildImageEditor = (props) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    return (<Input {...props}/>)
  }

  export const buildFormItem = (formItemConfig: FormItemConfig, wrappedForm: WrappedFormUtils, formItemProps: FormItemProps) => {
    return (
      <FormItem {...formItemProps} key={formItemConfig.name} label={formItemConfig.label}>
        {wrappedForm.getFieldDecorator(formItemConfig.name, formItemConfig.config)(formItemConfig.editor)}
      </FormItem>
    )
  }

  export const buildFormItems = (formConfigs: FormConfigs, wrappedForm: WrappedFormUtils, formItemProps: FormItemProps) => {
    let formItems = Object.keys(formConfigs).map((fieldName: string) => {
      const formItemConfig: FormItemConfig = formConfigs[fieldName];
      if (formItemConfig.isId || formItemConfig.hidden) {
        return;
      }
      return UIUtil.buildFormItem(formItemConfig, wrappedForm, formItemProps)

    });
    return formItems;
  }

  export const buildLink = (menu: Menu = {}, props: LinkProps = null) => {
    let route = (menu.route || '#');
    // props =props || {to:route};

    return <Link to={route} style={{width: 10}} key={menu.route} {...props} >
      <Icon type={menu.icon}/>
      {menu.name}
    </Link>
  }

  export const makeSelectOptions = (options: Options = {}) => {
    const result = Object.values(options).map((option, key) => {
      return (
        <Select.Option value={option.value} key={key}>{option.title || option.value}
        </Select.Option>
      )
    });
    return result;
  }


}

export default UIUtil;
