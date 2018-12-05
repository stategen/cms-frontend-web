import React from 'react'
import { connect } from 'dva'
import { Button, Row, Form } from 'antd'
import { config } from '@utils/index'
import styles from './index.less'
import {ConnectionPros, FormProps} from "@utils/DvaUtil";
import {FormComponentProps} from "antd/lib/form/Form";
import {LoginDispatch, LoginProps} from "@i/interfaces/LoginFaces";
import UIUtil from "@utils/UIUtil";
import {LoginApiForms} from "@i/forms/LoginApiForms";
import {AppProps} from "@i/interfaces/AppFaces";
import StatesAlias from "@i/configs/tradeCms-statesAlias";

// const FormItem = Form.Item

type LoginPageProps =AppProps & LoginProps & FormProps;

const loginPage = (props: LoginPageProps) => {
  const form = props.form;
  const dispatch = props.dispatch;
  function handleOk () {
    form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch(LoginDispatch.login_effect(values));
      // dispatch({ type: 'login/login', payload: values })
    })
  }
  const loginFormConfigs = LoginApiForms.getLoginFormConfigs({},form);
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



const mapStateToProps = (states: StatesAlias & ConnectionPros) : LoginPageProps =>{
  let result: LoginPageProps = {
    appState: states.app,
    loginState: states.login,
    loading: states.loading,
  }
  return result;
}

const LoginPage = connect(mapStateToProps)(Form.create()(loginPage));

export default LoginPage;
