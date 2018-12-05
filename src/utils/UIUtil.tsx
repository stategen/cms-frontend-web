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
import {
  FormConfigs, FormItemEditorProps, FormProps, FormPropsUtils, getMomentDate,
  getOptionProps
} from "@utils/DvaUtil";
import {default as FormItem, FormItemProps} from "antd/es/form/FormItem";
import {WrappedFormUtils} from "antd/es/form/Form";
import {TextAreaProps} from 'antd/es/input/TextArea';

const { TextArea } = Input;

namespace UIUtil {

  export const createFieldProps = (formItemConfig: FormItemConfig, formPropsUtils?) => {
    formPropsUtils = formPropsUtils || formItemConfig.formPropsUtils;
    return formPropsUtils.getFieldProps(formItemConfig.name, formItemConfig.config);
  }

  export interface InputEditorProps extends Partial<InputProps>, FormItemEditorProps {
  }

  export const BuildInputEditor = (props?: InputEditorProps) => {
    const {formItemConfig, ...customs} = props;
    return (
      <Input
        key={formItemConfig.name}
        value={formItemConfig.value}
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
      >
        {props.children || formItemConfig.label}
      </Input>
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
      <Input
        type="hidden"
        key={formItemConfig.name}
        value={formItemConfig.value}
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
      >
      </Input>
    )
  }

  export interface TextareaEditorProps extends Partial<TextAreaProps>, FormItemEditorProps {

  }

  export const BuildTextareaEditor = (props?: TextareaEditorProps) => {
    const {formItemConfig, ...customs} = props;
    return (
      <TextArea
        title={formItemConfig.label}
        key={formItemConfig.name}
        autoHeight
        value={formItemConfig.value}
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
      >
        {props.children || formItemConfig.label}
      </TextArea>
    )
  }

  export interface TimeStampEditorProps extends Partial<DatePickerProps>, FormItemEditorProps {

  }


  export const BuildTimeStampEditor = (props?: TimeStampEditorProps) => {
    const {formItemConfig, ...customs} = props;
    return (
      <DatePicker
        clear
        title={formItemConfig.label}
        mode="datetime"
        format={formItemConfig.format}
        locale={locale}
        value={formItemConfig.value}
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
      >
        {props.children || <List.Item arrow="down">{formItemConfig.label}</List.Item>}
      </DatePicker>
    )
  }

  export interface DatePickerEditorProps extends DatePickerProps, FormItemEditorProps {
  }

  export const BuildDatePickerEditor = (props?: DatePickerEditorProps) => {
    return (
      <BuildTimeStampEditor
        mode="date"
        {...props}
      >
      </BuildTimeStampEditor>
    )
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
        value={formItemConfig.value}
        {...customs}
        {...UIUtil.createFieldProps(formItemConfig)}
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

