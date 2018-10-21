/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import {connect} from 'dva';
import {UserDispatch, userEffects, UserProps, userReducers, UserState} from '@i/interfaces/UserFaces';
import User, {User_ID} from "@i/beans/User";
import {userDefaultColumns} from "@i/columns/UserColumns";
import {Table, Modal, Col, Button, Popconfirm} from "antd";
import Page from "@components/Page/Page";
import DropOption from "@components/DropOption/DropOption";
import {getUserFormConfigs} from "@i/forms/UserFormConfigs";
import {BaseProps, ConnectionPros, operateOptions, cleanSelectRowsProps} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import {TableProps, TableRowSelection} from "antd/lib/table";
import Row from "antd/lib/grid/row";
import {createModelPage} from "@components/QueryModal/QueryModal";
import {UserApiForms} from "@i/forms/UserApiForms";
import StatesAlias from "@i/configs/tradeCms-statesAlias";

const {confirm} = Modal;

const userPage = ({location, dispatch, userState, appState, loading}: UserProps & AppProps & BaseProps) => {
  const {pathname} = location;
  const userArea = userState.userArea;
  const userColumns = Object.values(userDefaultColumns);

  const onAdd = () => {
    const userState: UserState = {
      userArea: {
        type: userEffects.insert,
        item: {},
        doEdit: true,
        cancelState: {
          type: userReducers.updateState,
          doEdit: false,
        }
      }
    }
    dispatch(UserDispatch.updateState_reducer(userState));
  };

  const onDeleteItem = (userId) => {
    dispatch(UserDispatch.delete_effect({userId}, cleanSelectRowsProps))
  };


  const onEditItem = (user) => {
    dispatch(UserDispatch.updateState_reducer({
      userArea: {
        type: userEffects.update,
        item: user,
        doEdit: true,
        cancelState: {
          type: userReducers.updateState,
          doEdit: false,
        }
      }
    }))
  };

  const handleMenuClick = (record, e) => {
    if (e.key === 'Update') {
      onEditItem(record);
    } else if (e.key === 'Delete') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk: () => {
          onDeleteItem(record.userId)
        },
      })
    }
  }

  userColumns.push({
    title: 'Operation',
    key: 'operation',
    width: 100,
    render: (text, record: User) => {
      return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={operateOptions}/>
    },
  });

  let UserEditorModalPage = null;
  if (userArea.doEdit) {
    const isCreate = userArea.type === `${userEffects.insert}`;
    const title = isCreate ? 'Create' : 'Update';
    const currentUser: User = isCreate ? {} : userArea.item;
    let userFormConfigs = getUserFormConfigs(currentUser);
    UserEditorModalPage = createModelPage(true, title, userArea, userFormConfigs, User_ID, dispatch);
  }

  const onFilter = () => {
    dispatch(UserDispatch.updateState_reducer({
      userArea: {
        type: userEffects.getUserPageListByDefaultQuery,
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
    const filtersFormConfigs = UserApiForms.getUserPageListByDefaultQueryFormConfigs(userArea.queryRule ? userArea.queryRule : {});
    UserQueryForm = createModelPage(false, title, userArea, filtersFormConfigs, "", dispatch);
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
      disabled: record.userId === 'ADMIN',
      /*name: record.name,*/
    }),
  };

  const handleDeleteItems = () => {
    dispatch(UserDispatch.deleteByUserIds_effect({userIds: userArea.selectedRowKeys}, cleanSelectRowsProps));
  };

  const pagination = userArea.pagination;
  if (pagination) {
    pagination.onChange = (page: number, pageSize?: number) => {
      dispatch(UserDispatch.getUserPageListByDefaultQuery_effect({...userArea.queryRule, pageSize, page}));
    };
    pagination.showSizeChanger = true;
  }

  const tableProps: TableProps<User> = {
    rowSelection: rowSelection,
    bordered: true,
    rowKey: (user: User) => user.userId,
    dataSource: userArea.list,
    loading: loading.effects[`${userEffects.getAll}`],
    columns: userColumns,
    pagination: pagination,
  }


  return (
    <Page inner>
      <Row>
        <Col>
          <Button type="ghost" onClick={onAdd}>Create</Button>
          <Button type="ghost" onClick={onFilter}>Filter</Button>
          {
            userArea.selectedRowKeys.length > 0 &&
            <Popconfirm title="Are you sure delete these items?" placement="left" onConfirm={handleDeleteItems}>
              <Button type="primary" style={{marginLeft: 8}}>Remove</Button>
              {`Selected ${userArea.selectedRowKeys.length} items `}
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

const UserPage = connect(({user: userState, app: appState, loading}: StatesAlias & ConnectionPros) => ({
  userState,
  appState,
  loading
}))(userPage);

export default UserPage;
