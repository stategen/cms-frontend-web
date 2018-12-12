/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import {connect} from 'dva';
import {UserDispatch, userEffects, UserProps, userReducers, UserState} from '@i/interfaces/UserFaces';
import User from "@i/beans/User";
import {userDefaultColumns} from "@i/columns/UserColumns";
import {Table, Modal, Col, Button, Popconfirm, Form} from "antd";
import Page from "@components/Page/Page";
import DropOption from "@components/DropOption/DropOption";
import {getUserFormItemConfigMap, UserFormItemConfigMap} from "@i/forms/UserFormConfigs";
import {ConnectionPros, operateOptions, cleanSelectRowsProps, KeyValue,} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import {TableProps, TableRowSelection} from "antd/lib/table";
import Row from "antd/lib/grid/row";
import {UserApiForms} from "@i/forms/UserApiForms";
import StatesAlias from "@i/configs/tradeCms-statesAlias";
import UIUtil from "@utils/UIUtil";
import FormItem, {FormItemProps} from "antd/es/form/FormItem";
import {createModelPage} from "@components/QueryModal/QueryModal";
import Link from "umi/link";


const {confirm} = Modal;

type UserPageProps = AppProps & UserProps;

interface HandleMenuClick {
  (e, record: User, index: number): any;
}

const userIdRender = (text: any, record: User, index: number) =>{
  return (
    <Link to={"#"} key={record.userId} title={text}>
      {text}
    </Link>
  )
}
const userPage = (props: UserPageProps) => {
  const loading = props.loading;
  const dispatch = props.dispatch;
  const userArea = props.userState.userArea;
  //自定义渲染
  userDefaultColumns.userId.render=userIdRender;
  const userColumns = Object.values(userDefaultColumns);

  const onAdd = () => {
    const userState: UserState = {
      userArea: {
        type: userEffects.insert,
        index: -1,
        doEdit: true,
        cancelState: {
          type: userReducers.updateState,
          doEdit: false,
        }
      }
    }
    dispatch(UserDispatch.updateState_reducer(userState));
  };

  const onDeleteItem = (index) => {
    const user = props.userState.userArea.list[index];
    if (user) {
      dispatch(UserDispatch.delete_effect({userId: user.userId}, cleanSelectRowsProps))
    }
  };


  const onEditItem = (index) => {
    dispatch(UserDispatch.updateState_reducer({
      userArea: {
        type: userEffects.update,
        index,
        doEdit: true,
        cancelState: {
          type: userReducers.updateState,
          doEdit: false,
          index: -1,
        }
      }
    }))
  };

  const handleMenuClick = function (e, record: User, index: number) {
    if (e.key === 'Update') {
      onEditItem(index);
    } else if (e.key === 'Delete') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk: () => {
          onDeleteItem(index)
        },
      })
    }
  } as HandleMenuClick;

  userColumns.push({
    title: 'Operation',
    key: 'operation',
    width: 100,
    render: function (text, record: User, index: number) {
      return <DropOption key={index} onMenuClick={e => handleMenuClick(e, record, index)} menuOptions={operateOptions}/>
    },
  });

  let UserEditorModalPage = null;
  if (userArea.doEdit) {
    const index = userArea.index;
    const isCreate = index < 0;
    const title = isCreate ? '创建' : '更新';
    const currentUser: User = isCreate ? {} : userArea.list[index];
    const userFormConfigMap = getUserFormItemConfigMap(currentUser);
    //1.调整顺序，自动生成 1,2,3任选
    const userFormConfigs = Object.values(userFormConfigMap);
    //2.调整顺序
    // const userFormConfigs: FormItemConfig[] = [];
    // userFormConfigs.push(userFormConfigMap.UserName)
    // userFormConfigs.push(userFormConfigMap.UserId)
    // userFormConfigs.push(userFormConfigMap.UserType)
    UserEditorModalPage = createModelPage(true, title, userArea, dispatch, userFormConfigs, null);

    //3.写定义组件
    // const customBuildFormItem: UIUtil.CustomBuildFormItem<UserFormItemConfigMap> = (formItemPropsMap: KeyValue<UserFormItemConfigMap, FormItemProps>) => {
    //   return (
    //     <>
    //       <FormItem
    //         {...formItemPropsMap.UserId}
    //       >
    //       </FormItem>
    //
    //       <FormItem
    //         {...formItemPropsMap.UserType}
    //       >
    //       </FormItem>
    //       <FormItem
    //         {...formItemPropsMap.UserName}
    //       >
    //       </FormItem>
    //       <FormItem
    //         {...formItemPropsMap.Description}
    //       >
    //       </FormItem>
    //     </>
    //   )
    // }
    // UserEditorModalPage = createModelPage(true, title, userArea, dispatch, userFormConfigMap, customBuildFormItem);
  }

  const onFilter = () => {
    dispatch(UserDispatch.updateState_reducer({
      userArea: {
        type: userEffects.getUserPageList,
        doQuery: true,
        cancelState: {
          type: userReducers.updateState,
          doQuery: false,
        }
      }
    }));
  }


  let UserQueryForm = null;
  if (userArea.doQuery) {
    const title = 'Query';
    const userPageListFormItemConfigMap = UserApiForms.getGetUserPageListFormItemConfigMap(userArea.queryRule ? userArea.queryRule : {});
    const formItemConfigs = Object.values(userPageListFormItemConfigMap);
    UserQueryForm = createModelPage(false, title, userArea, dispatch, formItemConfigs);
  }

  const rowSelection: TableRowSelection<User> = {
    onChange: (selectedRowKeys, selectedRows) => {
      const dispachData: UserState = {
        userArea: {
          selectedRowKeys
        }
      }
      dispatch(UserDispatch.updateState_reducer(dispachData));
    },
    getCheckboxProps: (record) => ({
      disabled: false,//record.userId === 'ADMIN',
      /*name: record.name,*/
    }),
  };

  const handleDeleteItems = () => {
    dispatch(UserDispatch.deleteByUserIds_effect({userIds: userArea.selectedRowKeys}, cleanSelectRowsProps));
  };

  const pagination = userArea.pagination;
  if (pagination) {
    pagination.onChange = (page: number, pageSize?: number) => {
      dispatch(UserDispatch.getUserPageList_effect({...userArea.queryRule, pageSize, page}));
    };
    pagination.showSizeChanger = true;
  }

  const tableProps: TableProps<User> = {
    rowSelection: rowSelection,
    bordered: true,
    rowKey: (user: User) => user.userId,
    dataSource: userArea.list,
    loading: loading.effects[userEffects.getUserPageList.toString()],
    columns: userColumns,
    pagination: pagination,
  }


  return (
    <Page
      inner>
      <Row>
        <Col>
          <Button type="ghost" onClick={onAdd}>创建</Button>
          <Button type="ghost" onClick={onFilter}>查询</Button>
          {
            userArea.selectedRowKeys.length > 0 &&
            <Popconfirm title="Are you sure delete these items?" placement="left" onConfirm={handleDeleteItems}>
              <Button type="primary" style={{marginLeft: 8}}>删除</Button>
              {'Selected '+userArea.selectedRowKeys.length+' items' }
            </Popconfirm>
          }
        </Col>
      </Row>
      <Table {...tableProps} />
      {UserEditorModalPage && <UserEditorModalPage/>}
      {UserQueryForm && <UserQueryForm/>}
    </Page>
  )
};

const mapStateToProps = (states: StatesAlias & ConnectionPros): UserPageProps => {
  const props: UserPageProps = {
    appState: states.app,
    userState: states.user,
    loading: states.loading,
  }
  return props;
}

const UserPage = connect(mapStateToProps)(userPage);

export default UserPage;
