import {Table, Form, Modal, Col, Button, Popconfirm,} from "antd";
import {
  BaseState, Bean, optimizeFieldPostValues, Dispatch, FormItemConfigMap,
  AreaState, Payload, FormItemConfig, commonFormItemLayout, KeyValue
} from "@utils/DvaUtil";
import {ModalFuncProps} from "antd/lib/modal";
import {FormItemProps} from "antd/lib/form/FormItem";
import {FormComponentProps} from "antd/lib/form/Form";
import {FormProps} from "antd/lib/form";
import UIUtil from "@utils/UIUtil";

const FormItem = Form.Item;
const {confirm} = Modal;


export const createModelPage = <T extends Bean>
(isEditor: boolean, title: string, areaState: AreaState<T>, dispatch: Dispatch,
 formItemConfigs: FormItemConfig[] | FormItemConfigMap, customBuildFormItem?: UIUtil.CustomBuildFormItem<FormItemConfigMap>) => {
  const modalPage = (props: FormProps) => {
    let formItems = null
    if (formItemConfigs instanceof Array) {
      formItems = UIUtil.buildFormItems(formItemConfigs, props.form, commonFormItemLayout);
    } else {
      const createrMap = UIUtil.buildFormItemsCreatorMap(formItemConfigs, props.form, {width:"100%"});
      formItems = customBuildFormItem(createrMap);
    }

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
          if (isEditor) {
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
        <Form
          {...formProps}>
          {formItems}
        </Form>
      </Modal>
    )
  }

  return Form.create()(modalPage);
}
