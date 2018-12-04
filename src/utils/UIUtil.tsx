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

  export const createFieldProps = (formItemConfig: FormItemConfig, formPropsUtils?) => {
    formPropsUtils = formPropsUtils || formItemConfig.formPropsUtils;
    return formPropsUtils.getFieldProps(formItemConfig.name, formItemConfig.config);
  }

  export interface InputEditorProps extends Partial<InputItemProps>, FormItemEditorProps {
  }

  export const BuildInputEditor = (props?: InputEditorProps) => {
    const {formItemConfig, ...customs} = props;
    return (
      <InputItem
        key={formItemConfig.name}
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
        value={formItemConfig.value}
      >
        {props.children || formItemConfig.label}
      </InputItem>
    )
  }

  export interface PasswordEditorProps extends InputEditorProps {
  }

  export const BuildPasswordEditor = (props?: PasswordEditorProps) => {
    props['type'] = 'password';
    return BuildInputEditor(props);
  }

  export interface HiddenEditorProps extends InputEditorProps {
  }

  export const BuildHiddenEditor = (props?: HiddenEditorProps) => {
    const {formItemConfig, ...customs} = props;
    return (
      <InputItem
        type="hidden"
        key={formItemConfig.name}
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
        value={formItemConfig.value}
      >
      </InputItem>
    )
  }

  export interface TextAreaEditorProps extends Partial<TextareaItemProps>, FormItemEditorProps {

  }

  export const BuildTextAreaEditor = (props?: TextAreaEditorProps) => {
    const {formItemConfig, ...customs} = props;
    return (
      <TextareaItem
        title={formItemConfig.label}
        key={formItemConfig.name}
        autoHeight
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
        value={formItemConfig.value}
      >
        {props.children || formItemConfig.label}
      </TextareaItem>
    )
  }

  export interface TimeStampEditorProps extends Partial<DatePickerProps>, FormItemEditorProps {

  }


  export const BuildTimeStampEditor = (props?: TimeStampEditorProps) => {
    const {formItemConfig, ...customs} = props;
    return (
      <DatePicker
        showTime
        locale={locale}
        format={formItemConfig.format}
        {...customs}
      />
    )
  }

  export interface DatePickerEditorProps extends DatePickerProps, FormItemEditorProps {
  }

  export const BuildDatePickerEditor = (props?: DatePickerEditorProps) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    return (<DatePicker locale={locale} format={formItemConfig.format} {...props}/>)
  }

  export interface TimePickerEditorProps extends FormItemEditorProps {
  }

  export const BuildTimePickerEditor = (props?: TimePickerEditorProps) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    return (<TimePicker format={formItemConfig.format} {...props}/>)
  }


  export interface EnumEditorProps extends Partial<AbstractPickerProps>, FormItemEditorProps {
  }

  export const BuildEnumEditor = (props?: EnumEditorProps) => {
    const {formItemConfig, ...customs} = props;
    const muti = formItemConfig.isArray ? {mode: "multiple"} : null;
    const optionProps = getOptionProps(formItemConfig.options);
    let initialValue = formItemConfig.config.initialValue;
    if (initialValue != null && !(initialValue instanceof Array)) {
      formItemConfig.config.initialValue = [initialValue];
      formItemConfig.value = [initialValue];
    }
    return (
      <Picker
        data={optionProps}
        title={formItemConfig.label}
        extra="请选择"
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
        value={formItemConfig.value}
      >
        {props.children || <List.Item arrow="down">{formItemConfig.label}</List.Item>}
      </Picker>
    )
  }

  export interface ImageEditorProps extends FormItemEditorProps {

  }

  export const BuildImageEditor = (props: ImageEditorProps) => {
    const formItemConfig: FormItemConfig = this.formItemConfig;
    return (<InputItem {...props}/>)
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
        <option value={option.value} key={key}>{option.title || option.value}
        </option>
      )
    });
    return result;
  }


}

export default UIUtil;

