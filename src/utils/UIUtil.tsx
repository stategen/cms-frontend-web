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
import {FormItemEditorProps,  KeyValue} from "@utils/DvaUtil";
import FormItem,{FormItemProps} from "antd/es/form/FormItem";
import {WrappedFormUtils} from "antd/es/form/Form";
import {TextAreaProps} from 'antd/es/input/TextArea';
import {TimePickerProps} from 'antd/es/time-picker';


const {TextArea} = Input;

namespace UIUtil {
  export type InputEditorProps = Partial<InputProps> & FormItemEditorProps

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

  export type PasswordEditorProps = InputEditorProps;

  export const BuildPasswordEditor = (props?: PasswordEditorProps) => {
    props['type'] = 'password';
    return BuildInputEditor(props);
  }

  export type HiddenEditorProps = InputEditorProps;

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

  export type TextareaEditorProps = Partial<TextAreaProps> & FormItemEditorProps;

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

  export type TimeStampEditorProps = Partial<DatePickerProps> & FormItemEditorProps;


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

  export type DatePickerEditorProps = Partial<DatePickerProps> &  FormItemEditorProps;

  export const BuildDatePickerEditor = (props?: DatePickerEditorProps) => {
    return (
      <BuildTimeStampEditor
        {...props}
      >
      </BuildTimeStampEditor>
    )
  }

  export type TimePickerEditorProps = Partial<TimePickerProps> & FormItemEditorProps

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

  export const makeSelectOptions = (options: Options = {}) => {
    const result = Object.values(options).map((option, key) => {
      return (
        <Select.Option value={option.value} key={`${option.value}`}>{option.title || option.value}
        </Select.Option>
      )
    });
    return result;
  }

  export type EnumEditorProps = Partial<SelectProps> & FormItemEditorProps;

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

  export type ImageEditorProps = FormItemEditorProps;

  export const BuildImageEditor = (props: ImageEditorProps) => {
    const {formItemConfig, Editor, ...customs} = props;
    return (<Input {...customs}/>)
  }


  export function CreateFormItem(props: FormItemProps & FormItemConfig & FormItemEditorProps) {
    const {formItemConfig, Editor, isArray, isId, isEnum, isImage, ...customs} = props;
    return (
      <FormItem
        {...customs}
      >
      </FormItem>
    )
  }

  export function buildFormItems(formItemConfigs: FormItemConfig[], form: WrappedFormUtils, formItemProps: FormItemProps) {
    const result = formItemConfigs.map((formItemConfig: FormItemConfig) => {
      form = form || formItemConfig.form;
      return (
        <CreateFormItem
          {...formItemProps}
          key={formItemConfig.name}
          label={formItemConfig.label}
        >
          {form.getFieldDecorator(formItemConfig.name, formItemConfig.config)(formItemConfig["Editor"](formItemConfig))}
        </CreateFormItem>
      )
    });
    return result;
  }

  export type CustomBuildFormItem<T> = (formItemPropsMap: KeyValue<T, FormItemProps>) => any;

  export function buildFormItemsCreatorMap<T>(FormItemConfigMap: KeyValue<T, FormItemConfig>, form: WrappedFormUtils, formItemProps: FormItemProps): KeyValue<T, FormItemProps> {
    const result = {};
    Object.keys(FormItemConfigMap).forEach((fieldName: string) => {
      const formItemConfig: FormItemConfig = FormItemConfigMap[fieldName];
      result[fieldName] = {
        ...formItemProps,
        key: formItemConfig.name,
        label: formItemConfig.label,
        children: form.getFieldDecorator(formItemConfig.name, formItemConfig.config)(formItemConfig["Editor"](formItemConfig))
      }
    });
    return result;
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

}


export default UIUtil;

