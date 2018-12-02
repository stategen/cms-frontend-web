import React from 'react'
import {Input, DatePicker, TimePicker, Select} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {Options, FormItemConfigs} from "./DvaUtil";
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

  export const createFieldProps = (formItemConfigs: FormItemConfigs,formPropsUtils?) => {
    formPropsUtils =formPropsUtils || formItemConfigs.formPropsUtils;
    return formPropsUtils.getFieldProps(formItemConfigs.name, formItemConfigs.config);
  }


  export const buildInputEditor = (props) => {
    console.log(props)
    const {formItemConfigs, ...othersProps} = props;
    return (
      <InputItem
        key={formItemConfigs.name}
        {...othersProps}
        {...UIUtil.createFieldProps(formItemConfigs)}
      >
      </InputItem>
    )
  }

  export const buildTimeStampEditor = (props) => {
    const formItemConfigs: FormItemConfigs = this.formItemConfigs;
    return (<DatePicker showTime locale={locale} format={formItemConfigs.format} {...props}/>)
  }

  export const buildTimePickerEditor = (props) => {
    const formItemConfigs: FormItemConfigs = this.formItemConfigs;
    return (<TimePicker format={formItemConfigs.format} {...props}/>)
  }

  export const buildDatePickerEditor = (props) => {
    const formItemConfigs: FormItemConfigs = this.formItemConfigs;
    return (<DatePicker locale={locale} format={formItemConfigs.format} {...props}/>)
  }

  export const buildEnumEditor = (props) => {
    const formItemConfigs: FormItemConfigs = this.formItemConfigs;
    const muti = formItemConfigs.isArray ? {mode: "multiple"} : null;
    return (
      <Select {...muti} style={{width: 150}} {...props}>
        {UIUtil.makeSelectOptions(formItemConfigs.options)}
      </Select>
    )
  }

  export const buildImageEditor = (props) => {
    const formItemConfigs: FormItemConfigs = this.formItemConfigs;
    return (<InputItem {...props}/>)
  }

  export const buildFormItem = (formItemConfigs: FormItemConfigs, wrappedForm: WrappedFormUtils, formItemProps: FormItemProps) => {
    return (
      <FormItem {...formItemProps} key={formItemConfigs.name} label={formItemConfigs.label}>
        {wrappedForm.getFieldDecorator(formItemConfigs.name, formItemConfigs.config)(formItemConfigs.editor)}
      </FormItem>
    )
  }

  export const buildFormItems = (formConfigs: FormConfigs, wrappedForm: WrappedFormUtils, formItemProps: FormItemProps) => {
    let formItems = Object.keys(formConfigs).map((fieldName: string) => {
      const formItemConfigs: FormItemConfigs = formConfigs[fieldName];
      if (formItemConfigs.isId || formItemConfigs.hidden) {
        return;
      }
      return UIUtil.buildFormItem(formItemConfigs, wrappedForm, formItemProps)

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
