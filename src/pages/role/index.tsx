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
import {Table, Modal, Col, Button, Popconfirm, Form} from "antd";
import Page from "@components/Page/Page";
import DropOption from "@components/DropOption/DropOption";
import {getRoleFormItemConfigMap, RoleFormItemConfigMap} from "@i/forms/RoleFormConfigs";
import {
  ConnectionPros, operateOptions, cleanSelectRowsProps, optimizeFieldPostValues,
  FormItemConfigMap, Bean, AreaState, Dispatch, FormProps, BaseState, commonFormItemLayout, FormItemConfig, KeyValue,
  CreateFun
} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import {TableProps, TableRowSelection} from "antd/lib/table";
import Row from "antd/lib/grid/row";
import {RoleApiForms} from "@i/forms/RoleApiForms";
import StatesAlias from "@i/configs/tradeCms-statesAlias";
import UIUtil from "@utils/UIUtil";
import FormItem,{FormItemProps} from "antd/es/form/FormItem";
import {createModelPage} from "@components/QueryModal/QueryModal";


const {confirm} = Modal;

type RolePageProps = AppProps & RoleProps;

interface HandleMenuClick {
  (e, record: Role, index: number): any;
}

const rolePage = (props: RolePageProps) => {
  const loading = props.loading;
  const dispatch = props.dispatch;
  const roleArea = props.roleState.roleArea;
  const roleColumns = Object.values(roleDefaultColumns);

  const onAdd = () => {
    const roleState: RoleState = {
      roleArea: {
        type: roleEffects.insert,
        index: -1,
        doEdit: true,
        cancelState: {
          type: roleReducers.updateState,
          doEdit: false,
        }
      }
    }
    dispatch(RoleDispatch.updateState_reducer(roleState));
  };

  const onDeleteItem = (index) => {
    const role = props.roleState.roleArea.list[index];
    if (role) {
      dispatch(RoleDispatch.delete_effect({roleId: role.roleId}, cleanSelectRowsProps))
    }
  };


  const onEditItem = (index) => {
    dispatch(RoleDispatch.updateState_reducer({
      roleArea: {
        type: roleEffects.update,
        index,
        doEdit: true,
        cancelState: {
          type: roleReducers.updateState,
          doEdit: false,
          index: -1,
        }
      }
    }))
  };

  const handleMenuClick = function (e, record: Role, index: number) {
    console.log(e, record, index)
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

  roleColumns.push({
    title: 'Operation',
    key: 'operation',
    width: 100,
    render: function (text, record: Role, index: number) {
      return <DropOption key={index} onMenuClick={e => handleMenuClick(e, record, index)} menuOptions={operateOptions}/>
    },
  });

  let RoleEditorModalPage = null;
  if (roleArea.doEdit) {
    const index = roleArea.index;
    const isCreate = index < 0;
    const title = isCreate ? 'Create' : 'Update';
    const currentRole: Role = isCreate ? {} : roleArea.list[index];
    const roleFormConfigMap = getRoleFormItemConfigMap(currentRole);
    // const roleFormConfigs = Object.values(roleFormConfigMap);
    // const roleFormConfigs: FormItemConfig[] = [];
    // roleFormConfigs.push(roleFormConfigMap.RoleName)
    // roleFormConfigs.push(roleFormConfigMap.RoleId)
    // roleFormConfigs.push(roleFormConfigMap.RoleType)
    // RoleEditorModalPage = createModelPage(true, title, roleArea, dispatch, roleFormConfigs, null);

    const customBuildFormItem: UIUtil.CustomBuildFormItem<RoleFormItemConfigMap> = (formItemPropsMap: KeyValue<RoleFormItemConfigMap, FormItemProps>) => {
      return (
        <>
          <FormItem
            {...formItemPropsMap.RoleId}
          >
          </FormItem>

          <Row>
            <Col span={12}>
              <FormItem
                {...formItemPropsMap.RoleType}
              >
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemPropsMap.RoleName}
              >
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemPropsMap.Description}
              >
              </FormItem>
            </Col>
          </Row>
        </>

      )
    }

    RoleEditorModalPage = createModelPage(true, title, roleArea, dispatch, roleFormConfigMap, customBuildFormItem);
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
    const rolePageListByDefaultQueryFormItemConfigMap = RoleApiForms.getGetRolePageListByDefaultQueryFormItemConfigMap(roleArea.queryRule ? roleArea.queryRule : {});
    const formItemConfigs = Object.values(rolePageListByDefaultQueryFormItemConfigMap);
    RoleQueryForm = createModelPage(false, title, roleArea, dispatch, formItemConfigs);
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
    <Page
      inner>
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

const mapStateToProps = (states: StatesAlias & ConnectionPros): RolePageProps => {
  const result: RolePageProps = {
    appState: states.app,
    roleState: states.role,
    loading: states.loading,
  }
  return result;
}

const RolePage = connect(mapStateToProps)(rolePage);

export default RolePage;
