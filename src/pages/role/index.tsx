/**
 *  Do not remove this unless you get business authorization.
 *  Role
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import {connect} from 'dva';
import {RoleDispatch, roleEffects, RoleProps, roleReducers, RoleState} from '@i/interfaces/RoleFaces';
import Role from "@i/beans/Role";
import {roleDefaultColumns} from "@i/columns/RoleColumns";
import {Table, Modal, Col, Button, Popconfirm, Form} from "antd";
import Page from "@components/Page/Page";
import DropOption from "@components/DropOption/DropOption";
import {getRoleFormItemConfigMap, RoleFormItemConfigMap} from "@i/forms/RoleFormConfigs";
import {ConnectionPros, operateOptions, cleanSelectRowsProps, KeyValue,} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import {TableProps, TableRowSelection} from "antd/lib/table";
import Row from "antd/lib/grid/row";
import {RoleApiForms} from "@i/forms/RoleApiForms";
import StatesAlias from "@i/configs/tradeCms-statesAlias";
import UIUtil from "@utils/UIUtil";
import FormItem, {FormItemProps} from "antd/es/form/FormItem";
import {createModelPage} from "@components/QueryModal/QueryModal";
import * as React from "react";
import Link from "umi/link";


const {confirm} = Modal;

type RolePageProps = AppProps & RoleProps;

interface HandleMenuClick {
  (e, record: Role, index: number): any;
}

const roleIdRender = (text: any, record: Role, index: number) =>{
  return (
    <Link to={"#"} key={record.roleId} title={text}>
      {text}
    </Link>
  )
}

const rolePage = (props: RolePageProps) => {
  const loading = props.loading;
  const dispatch = props.dispatch;
  const roleArea = props.roleState.roleArea;
  //自定义渲染
  roleDefaultColumns.roleId.render=roleIdRender;
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
    const title = isCreate ? '创建' : '更新';
    const currentRole: Role = isCreate ? {} : roleArea.list[index];
    const roleFormConfigMap = getRoleFormItemConfigMap(currentRole);
    //1.调整顺序，自动生成 1,2,3任选
    const roleFormConfigs = Object.values(roleFormConfigMap);
    //2.调整顺序
    // const roleFormConfigs: FormItemConfig[] = [];
    // roleFormConfigs.push(roleFormConfigMap.RoleName)
    // roleFormConfigs.push(roleFormConfigMap.RoleId)
    // roleFormConfigs.push(roleFormConfigMap.RoleType)
    RoleEditorModalPage = createModelPage(true, title, roleArea, dispatch, roleFormConfigs, null);

    //3.写定义组件
    // const customBuildFormItem: UIUtil.CustomBuildFormItem<RoleFormItemConfigMap> = (formItemPropsMap: KeyValue<RoleFormItemConfigMap, FormItemProps>) => {
    //   return (
    //     <>
    //       <FormItem
    //         {...formItemPropsMap.RoleId}
    //       >
    //       </FormItem>
    //
    //       <FormItem
    //         {...formItemPropsMap.RoleType}
    //       >
    //       </FormItem>
    //       <FormItem
    //         {...formItemPropsMap.RoleName}
    //       >
    //       </FormItem>
    //       <FormItem
    //         {...formItemPropsMap.Description}
    //       >
    //       </FormItem>
    //     </>
    //   )
    // }
    // RoleEditorModalPage = createModelPage(true, title, roleArea, dispatch, roleFormConfigMap, customBuildFormItem);
  }

  const onFilter = () => {
    dispatch(RoleDispatch.updateState_reducer({
      roleArea: {
        type: roleEffects.getRolePageList,
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
    const rolePageListFormItemConfigMap = RoleApiForms.getGetRolePageListFormItemConfigMap(roleArea.queryRule ? roleArea.queryRule : {});
    const formItemConfigs = Object.values(rolePageListFormItemConfigMap);
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
      dispatch(RoleDispatch.getRolePageList_effect({...roleArea.queryRule, pageSize, page}));
    };
    pagination.showSizeChanger = true;
  }

  const tableProps: TableProps<Role> = {
    rowSelection: rowSelection,
    bordered: true,
    rowKey: (role: Role) => role.roleId,
    dataSource: roleArea.list,
    loading: loading.effects[roleEffects.getRolePageList.toString()],
    columns: roleColumns,
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
            roleArea.selectedRowKeys.length > 0 &&
            <Popconfirm title="Are you sure delete these items?" placement="left" onConfirm={handleDeleteItems}>
              <Button type="primary" style={{marginLeft: 8}}>删除</Button>
              {'Selected '+roleArea.selectedRowKeys.length+' items' }
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
  const props: RolePageProps = {
    appState: states.app,
    roleState: states.role,
    loading: states.loading,
  }
  return props;
}

const RolePage = connect(mapStateToProps)(rolePage);

export default RolePage;
