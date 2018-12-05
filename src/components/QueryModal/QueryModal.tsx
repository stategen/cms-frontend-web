import {Table, Form, Modal, Col, Button, Popconfirm,} from "antd";
import {
  BaseState, Bean, optimizeFieldPostValues, Dispatch, FormItemConfigs,
  AreaState, Payload, FormItemConfig
} from "@utils/DvaUtil";
import {ModalFuncProps} from "antd/lib/modal";
import {FormItemProps} from "antd/lib/form/FormItem";
import {FormComponentProps} from "antd/lib/form/Form";
import {FormProps} from "antd/lib/form";
import UIUtil from "@utils/UIUtil";

const FormItem =Form.Item;
const {confirm} = Modal;

const formItemLayout: FormItemProps = {
  labelCol: {
    xs: {span: 48},
    sm: {span: 12},
  },

  wrapperCol: {
    xs: {span: 48},
    sm: {span: 12},
  },
};

export const createModelPage = <T extends Bean, F extends FormItemConfigs>
(isEditor: boolean, title: string, areaState: AreaState<T>, formItemConfigs: F, idkey: String | any, dispatch: Dispatch) => {
  const modalPage = (props: FormProps) => {
    let formItems=UIUtil.buildFormItems(formItemConfigs,props.form,formItemLayout)
    // let formItems = Object.keys(formItemConfigs).map((fieldName:string) => {
    //   const formItemConfig:FormItemConfig = formItemConfigs[fieldName];
    //   if (formItemConfig.isId || formItemConfig.hidden) {
    //     return;
    //   }
    //
    //   return (
    //     <FormItem {...formItemLayout} key={fieldName} label={formItemConfig.label}>
    //       {props.form.getFieldDecorator(formItemConfig.name, formItemConfig.config)(formItemConfig.editor)}
    //     </FormItem>
    //   )
    // });

    const modalProps: ModalFuncProps = {
      width: 800,
      visible: isEditor ? areaState.doEdit : areaState.doQuery,
      title,
      maskClosable: false,
      /*confirmLoading: loading.effects[`${roleArea.modalType}`],*/
      /*wrapClassName: 'vertical-center-modal',*/
      onOk: (e) => {
        e.preventDefault();
        props.form.validateFields((errors, fieldsValue) => {
          if (errors) {
            return;
          }
          const dest = props.form.getFieldsValue();
          const areaExtraProps: AreaState<T> = {}
          optimizeFieldPostValues(dest);
          if (isEditor) {
            areaState.item[idkey] ? dest[idkey] = areaState.item[idkey] : null;
            areaExtraProps.doEdit = false;
          } else {
            areaExtraProps.queryRule = dest;
            areaExtraProps.doQuery = false;
          }

          const payload = {...dest, areaExtraProps__: areaExtraProps};
          dispatch({
            type: areaState.type,
            payload: payload,
          })
        })
      },
      onCancel: () => {
        const areaName = areaState.areaName;
        const dispatchState: BaseState = {
          [areaName]: areaState.cancelState,
        }
        dispatch({
          type: areaState.cancelState.type,
          payload: dispatchState,
        })
      },
    }

    const formProps: FormProps = {
      layout: "inline",
    }


    return (
      <Modal {...modalProps}>
        <Form {...formProps}>
          {formItems}
        </Form>
      </Modal>
    )
  }

  return Form.create()(modalPage);
}
