/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import {connect} from 'dva';
import {RoleDispatch, roleEffects, RoleProps, roleReducers, RoleState} from '@i/interfaces/RoleFaces';
import Role, {Role_ID} from "@i/beans/Role";
import {roleDefaultColumns} from "@i/columns/RoleColumns";
import {Table, Modal, Col, Button, Popconfirm} from "antd";
import Page from "@components/Page/Page";
import DropOption from "@components/DropOption/DropOption";
import {getRoleFormConfigs} from "@i/forms/RoleFormConfigs";
import {BaseProps, ConnectionPros, operateOptions, cleanSelectRowsProps} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import {TableProps, TableRowSelection} from "antd/lib/table";
import Row from "antd/lib/grid/row";
import {createModelPage} from "@components/QueryModal/QueryModal";
import {RoleApiForms} from "@i/forms/RoleApiForms";
import StatesAlias from "@i/configs/tradeCms-statesAlias";

const {confirm} = Modal;

type RolePageProps =AppProps & RoleProps;

const rolePage = (props: RolePageProps) => {
  const dispatch = props.dispatch;
  const pathname = props.location;
  const roleArea = props.roleState.roleArea;
  const roleColumns = Object.values(roleDefaultColumns);

  const onAdd = () => {
    const roleState: RoleState = {
      roleArea: {
        type: roleEffects.insert,
        item: {},
        doEdit: true,
        cancelState: {
          type: roleReducers.updateState,
          doEdit: false,
        }
      }
    }
    dispatch(RoleDispatch.updateState_reducer(roleState));
  };

  const onDeleteItem = (roleId) => {
    dispatch(RoleDispatch.delete_effect({roleId}, cleanSelectRowsProps))
  };


  const onEditItem = (role) => {
    dispatch(RoleDispatch.updateState_reducer({
      roleArea: {
        type: roleEffects.update,
        item: role,
        doEdit: true,
        cancelState: {
          type: roleReducers.updateState,
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
          onDeleteItem(record.roleId)
        },
      })
    }
  }

  roleColumns.push({
    title: 'Operation',
    key: 'operation',
    width: 100,
    render: (text, record: Role) => {
      return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={operateOptions}/>
    },
  });

  let RoleEditorModalPage = null;
  if (roleArea.doEdit) {
    const isCreate = roleArea.type === `${roleEffects.insert}`;
    const title = isCreate ? 'Create' : 'Update';
    const currentRole: Role = isCreate ? {} : roleArea.item;
    let roleFormConfigs = getRoleFormConfigs(currentRole);
    RoleEditorModalPage = createModelPage(true, title, roleArea, roleFormConfigs, Role_ID, dispatch);
  }

  const onFilter = () => {
    dispatch(RoleDispatch.updateState_reducer({
      roleArea: {
        type: roleEffects.getRolePageListByDefaultQuery,
        doQuery: true,
        cancelState: {
          type: roleReducers.updateState,
          doQuery: false,
        }
      }
    }));
  }


  let RoleQueryForm = null;
  if (roleArea.doQuery) {
    const title = 'Query';
    const filtersFormConfigs = RoleApiForms.getRolePageListByDefaultQueryFormConfigs(roleArea.queryRule ? roleArea.queryRule : {});
    RoleQueryForm = createModelPage(false, title, roleArea, filtersFormConfigs, "", dispatch);
  }

  const rowSelection: TableRowSelection<Role> = {
    onChange: (selectedRowKeys, selectedRows) => {
      const dispachData: RoleState = {
        roleArea: {
          selectedRowKeys
        }
      }
      dispatch(RoleDispatch.updateState_reducer(dispachData));
    },
    getCheckboxProps: (record) => ({
      disabled: record.roleId === 'ADMIN',
      /*name: record.name,*/
    }),
  };

  const handleDeleteItems = () => {
    dispatch(RoleDispatch.deleteByRoleIds_effect({roleIds: roleArea.selectedRowKeys}, cleanSelectRowsProps));
  };

  const pagination = roleArea.pagination;
  if (pagination) {
    pagination.onChange = (page: number, pageSize?: number) => {
      dispatch(RoleDispatch.getRolePageListByDefaultQuery_effect({...roleArea.queryRule, pageSize, page}));
    };
    pagination.showSizeChanger = true;
  }

  const tableProps: TableProps<Role> = {
    rowSelection: rowSelection,
    bordered: true,
    rowKey: (role: Role) => role.roleId,
    dataSource: roleArea.list,
    loading: loading.effects[`${roleEffects.getAll}`],
    columns: roleColumns,
    pagination: pagination,
  }


  return (
    <Page inner>
      <Row>
        <Col>
          <Button type="ghost" onClick={onAdd}>Create</Button>
          <Button type="ghost" onClick={onFilter}>Filter</Button>
          {
            roleArea.selectedRowKeys.length > 0 &&
            <Popconfirm title="Are you sure delete these items?" placement="left" onConfirm={handleDeleteItems}>
              <Button type="primary" style={{marginLeft: 8}}>Remove</Button>
              {`Selected ${roleArea.selectedRowKeys.length} items `}
            </Popconfirm>
          }
        </Col>
      </Row>
      <Table {...tableProps} />
      {RoleEditorModalPage && <RoleEditorModalPage/>}
      {RoleQueryForm && <RoleQueryForm/>}
    </Page>
  )
};

const RolePage = connect(({role: roleState, app: appState, loading}: StatesAlias & ConnectionPros) => ({
  roleState,
  appState,
  loading
}))(rolePage);

export default RolePage;
