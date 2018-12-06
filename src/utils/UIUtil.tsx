import React from 'react'
import {Input, DatePicker, TimePicker, Select, Form} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {Options, FormItemConfig} from "./DvaUtil";
import Menu from "@i/beans/Menu";
import Icon from "antd/lib/icon";
import Link from "umi/link";
import {InputProps} from "antd/lib/input";
import {DatePickerProps} from "antd/lib/date-picker/interface";
import {SelectProps} from "antd/lib/select";
import {LinkProps} from "react-router-dom";
import {FormItemConfigs, FormItemEditorProps} from "@utils/DvaUtil";
import {FormItemProps} from "antd/es/form/FormItem";
import {WrappedFormUtils} from "antd/es/form/Form";
import {TextAreaProps} from 'antd/es/input/TextArea';
import {TimePickerProps} from 'antd/es/time-picker';


const {TextArea} = Input;
const FormItem = Form.Item;

namespace UIUtil {


  export interface InputEditorProps extends Partial<InputProps>, FormItemEditorProps {
  }

  export const BuildInputEditor = (props?: InputEditorProps) => {
    const {formItemConfig, Editor, ...customs} = props;
    return (
      <Input
        key={formItemConfig.name}
        {...customs}
      >
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
    const {formItemConfig, Editor, ...customs} = props;
    return (
      <Input
        type="hidden"
        key={formItemConfig.name}
        {...customs}
      >
      </Input>
    )
  }

  export interface TextareaEditorProps extends Partial<TextAreaProps>, FormItemEditorProps {

  }

  export const BuildTextareaEditor = (props?: TextareaEditorProps) => {
    const {formItemConfig, Editor, ...customs} = props;
    return (
      <TextArea
        title={formItemConfig.label}
        key={formItemConfig.name}
        {...customs}
      >
      </TextArea>
    )
  }

  export interface TimeStampEditorProps extends Partial<DatePickerProps>, FormItemEditorProps {

  }


  export const BuildTimeStampEditor = (props?: TimeStampEditorProps) => {
    const {formItemConfig, Editor, ...customs} = props;
    return (
      <DatePicker
        format={formItemConfig.format}
        locale={locale}
        {...customs}
      >
        {props.children}
      </DatePicker>
    )
  }

  export interface DatePickerEditorProps extends DatePickerProps, FormItemEditorProps {
  }

  export const BuildDatePickerEditor = (props?: DatePickerEditorProps) => {
    return (
      <BuildTimeStampEditor
        {...props}
      >
      </BuildTimeStampEditor>
    )
  }

  export interface TimePickerEditorProps extends Partial<TimePickerProps>, FormItemEditorProps {
  }

  export const BuildTimePickerEditor = (props?: TimePickerEditorProps) => {
    const {formItemConfig, Editor, ...customs} = props;
    return (
      <TimePicker
        format={formItemConfig.format}
        {...customs}
      >
      </TimePicker>
    )
  }


  export interface EnumEditorProps extends Partial<SelectProps>, FormItemEditorProps {
  }

  export const BuildEnumEditor = (props?: EnumEditorProps) => {
    const {formItemConfig, Editor, ...customs} = props;
    const muti = formItemConfig.isArray ? {mode: "multiple"} : null;
    return (
      <Select
        {...muti}
        {...customs}
      >
        {props.children || makeSelectOptions(formItemConfig.options)}
      </Select>
    )
  }

  export interface ImageEditorProps extends FormItemEditorProps {

  }

  export const BuildImageEditor = (props: ImageEditorProps) => {
    const {formItemConfig, Editor, ...customs} = props;
    return (<Input {...customs}/>)
  }

  export const buildFormItem = (formItemConfig: FormItemConfig, form: WrappedFormUtils, formItemProps: FormItemProps) => {
    form = form || formItemConfig.form;
    return (
      <FormItem
        {...formItemProps}
        key={formItemConfig.name}
        label={formItemConfig.label}>
        {form.getFieldDecorator(formItemConfig.name, formItemConfig.config)(formItemConfig["Editor"](formItemConfig))}
      </FormItem>
    )
  }

  export const buildFormItems = (formItemConfigs: FormItemConfigs, form: WrappedFormUtils, formItemProps: FormItemProps) => {
    let formItems = Object.keys(formItemConfigs).map((fieldName: string) => {
      const formItemConfig: FormItemConfig = formItemConfigs[fieldName];
      return UIUtil.buildFormItem(formItemConfig, form, formItemProps)
    });
    return formItems;
  }

  export interface LinkFixedProps extends Partial<LinkProps> {
    to?: string;
  }

  export const buildLink = (menu: Menu = {}, props?: LinkFixedProps) => {
    let route = (menu.route || '#');
    // props =props || {to:route};
    const width = {style: {width: 10}};

    return (
      <Link
        to={route}
        key={menu.route}
        {...width}
        {...props}
      >
        <Icon type={menu.icon}/>
        {menu.name}
      </Link>
    )
  }

  export const makeSelectOptions = (options: Options = {}) => {
    const result = Object.values(options).map((option, key) => {
      return (
        <Select.Option value={option.value} key={`${option.value}`}>{option.title || option.value}
        </Select.Option>
      )
    });
    return result;
  }


}

export default UIUtil;

