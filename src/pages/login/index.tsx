import React from 'react'
import { connect } from 'dva'
import { Button, Row, Form } from 'antd'
import { config } from '@utils/index'
import styles from './index.less'
import {ConnectionPros} from "@utils/DvaUtil";
import {FormComponentProps} from "antd/lib/form/Form";
import {LoginDispatch} from "@i/interfaces/LoginFaces";
import UIUtil from "@utils/UIUtil";
import {LoginApiForms} from "@i/forms/LoginApiForms";

// const FormItem = Form.Item

const loginPage = ({ loading,  dispatch,  form} : ConnectionPros & FormComponentProps) => {
  function handleOk () {
    form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch(LoginDispatch.login_effect(values));
      // dispatch({ type: 'login/login', payload: values })
    })
  }
  const loginFormConfigs = LoginApiForms.loginFormConfigs();
  loginFormConfigs.password.editor =UIUtil.buildInputEditor(null,{type:'password'});
  const formItems = UIUtil.buildFormItems(loginFormConfigs,form,null);

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt="logo" src={config.logo} />
        <span>{config.name}</span>
      </div>
      <form>
        {formItems}
        <Row>
          <Button type="primary" onClick={handleOk} loading={loading.effects.login}>
            Sign in
          </Button>
          <p>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </Row>

      </form>
    </div>
  )
}


export default connect(({ loading }:ConnectionPros) => ({ loading }))(Form.create()(loginPage))
