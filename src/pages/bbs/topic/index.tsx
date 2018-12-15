/**
 *  Do not remove this unless you get business authorization.
 *  Bbs_topic
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import {connect} from 'dva';
import {Bbs_topicDispatch, bbs_topicEffects, Bbs_topicProps, bbs_topicReducers, Bbs_topicState} from '@i/interfaces/Bbs_topicFaces';
import Topic from "@i/beans/Topic";
import {topicDefaultColumns} from "@i/columns/TopicColumns";
import {Table, Modal, Col, Button, Popconfirm, Form} from "antd";
import Page from "@components/Page/Page";
import DropOption from "@components/DropOption/DropOption";
import {getTopicFormItemConfigMap, TopicFormItemConfigMap} from "@i/forms/TopicFormConfigs";
import {ConnectionPros, operateOptions, cleanSelectRowsProps, KeyValue,} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import {TableProps, TableRowSelection} from "antd/lib/table";
import Row from "antd/lib/grid/row";
import {Bbs_topicApiForms} from "@i/forms/Bbs_topicApiForms";
import StatesAlias from "@i/configs/tradeCms-statesAlias";
import UIUtil from "@utils/UIUtil";
import FormItem, {FormItemProps} from "antd/es/form/FormItem";
import {createModelPage} from "@components/QueryModal/QueryModal";
import Link from "umi/link";


const {confirm} = Modal;

type Bbs_topicPageProps = AppProps & Bbs_topicProps;

interface HandleMenuClick {
  (e, record: Topic, index: number): any;
}

const topicIdRender = (text: any, record: Topic, index: number) =>{
  return (
    <Link to={"#"} key={record.topicId} title={text}>
      {text}
    </Link>
  )
}
const bbs_topicPage = (props: Bbs_topicPageProps) => {
  const loading = props.loading;
  const dispatch = props.dispatch;
  const topicArea = props.bbs_topicState.topicArea;
  //自定义渲染
  topicDefaultColumns.topicId.render=topicIdRender;
  const topicColumns = Object.values(topicDefaultColumns);

  const onAdd = () => {
    const bbs_topicState: Bbs_topicState = {
      topicArea: {
        type: bbs_topicEffects.insert,
        index: -1,
        doEdit: true,
        cancelState: {
          type: bbs_topicReducers.updateState,
          doEdit: false,
        }
      }
    }
    dispatch(Bbs_topicDispatch.updateState_reducer(bbs_topicState));
  };

  const onDeleteItem = (index) => {
    const topic = props.bbs_topicState.topicArea.list[index];
    if (topic) {
      dispatch(Bbs_topicDispatch.delete_effect({topicId: topic.topicId}, cleanSelectRowsProps))
    }
  };


  const onEditItem = (index) => {
    dispatch(Bbs_topicDispatch.updateState_reducer({
      topicArea: {
        type: bbs_topicEffects.update,
        index,
        doEdit: true,
        cancelState: {
          type: bbs_topicReducers.updateState,
          doEdit: false,
          index: -1,
        }
      }
    }))
  };

  const handleMenuClick = function (e, record: Topic, index: number) {
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

  topicColumns.push({
    title: 'Operation',
    key: 'operation',
    width: 100,
    render: function (text, record: Topic, index: number) {
      return <DropOption key={index} onMenuClick={e => handleMenuClick(e, record, index)} menuOptions={operateOptions}/>
    },
  });

  let TopicEditorModalPage = null;
  if (topicArea.doEdit) {
    const index = topicArea.index;
    const isCreate = index < 0;
    const title = isCreate ? '创建' : '更新';
    const currentTopic: Topic = isCreate ? {} : topicArea.list[index];
    const topicFormConfigMap = getTopicFormItemConfigMap(currentTopic,props);
    //1.调整顺序，自动生成 1,2,3任选
    const topicFormConfigs = Object.values(topicFormConfigMap);
    //2.调整顺序
    // const topicFormConfigs: FormItemConfig[] = [];
    // topicFormConfigs.push(topicFormConfigMap.TopicName)
    // topicFormConfigs.push(topicFormConfigMap.TopicId)
    // topicFormConfigs.push(topicFormConfigMap.TopicType)
    TopicEditorModalPage = createModelPage(true, title, topicArea, dispatch, topicFormConfigs, null);

    //3.写定义组件
    // const customBuildFormItem: UIUtil.CustomBuildFormItem<TopicFormItemConfigMap> = (formItemPropsMap: KeyValue<TopicFormItemConfigMap, FormItemProps>) => {
    //   return (
    //     <>
    //       <FormItem
    //         {...formItemPropsMap.Bbs_topicId}
    //       >
    //       </FormItem>
    //
    //       <FormItem
    //         {...formItemPropsMap.Bbs_topicType}
    //       >
    //       </FormItem>
    //       <FormItem
    //         {...formItemPropsMap.Bbs_topicName}
    //       >
    //       </FormItem>
    //       <FormItem
    //         {...formItemPropsMap.Description}
    //       >
    //       </FormItem>
    //     </>
    //   )
    // }
    // TopicEditorModalPage = createModelPage(true, title, topicArea, dispatch, topicFormConfigMap, customBuildFormItem);
  }

  const onFilter = () => {
    dispatch(Bbs_topicDispatch.updateState_reducer({
      topicArea: {
        type: bbs_topicEffects.getTopicPageList,
        doQuery: true,
        cancelState: {
          type: bbs_topicReducers.updateState,
          doQuery: false,
        }
      }
    }));
  }


  let TopicQueryForm = null;
  if (topicArea.doQuery) {
    const title = 'Query';
    const topicPageListFormItemConfigMap = Bbs_topicApiForms.getGetTopicPageListFormItemConfigMap(topicArea.queryRule || {},props);
    const formItemConfigs = Object.values(topicPageListFormItemConfigMap);
    TopicQueryForm = createModelPage(false, title, topicArea, dispatch, formItemConfigs);
  }

  const rowSelection: TableRowSelection<Topic> = {
    onChange: (selectedRowKeys, selectedRows) => {
      const dispachData: Bbs_topicState = {
        topicArea: {
          selectedRowKeys
        }
      }
      dispatch(Bbs_topicDispatch.updateState_reducer(dispachData));
    },
    getCheckboxProps: (record) => ({
      disabled: false,//record.topicId === 'ADMIN',
      /*name: record.name,*/
    }),
  };

  const handleDeleteItems = () => {
    dispatch(Bbs_topicDispatch.deleteByTopicIds_effect({topicIds: topicArea.selectedRowKeys}, cleanSelectRowsProps));
  };

  const pagination = topicArea.pagination;
  if (pagination) {
    pagination.onChange = (page: number, pageSize?: number) => {
      dispatch(Bbs_topicDispatch.getTopicPageList_effect({...topicArea.queryRule, pageSize, page}));
    };
    pagination.showSizeChanger = true;
  }

  const tableProps: TableProps<Topic> = {
    rowSelection: rowSelection,
    bordered: true,
    rowKey: (topic: Topic) => topic.topicId,
    dataSource: topicArea.list,
    loading: loading.effects[bbs_topicEffects.getTopicPageList.toString()],
    columns: topicColumns,
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
            topicArea.selectedRowKeys.length > 0 &&
            <Popconfirm title="Are you sure delete these items?" placement="left" onConfirm={handleDeleteItems}>
              <Button type="primary" style={{marginLeft: 8}}>删除</Button>
              {'Selected '+topicArea.selectedRowKeys.length+' items' }
            </Popconfirm>
          }
        </Col>
      </Row>
      <Table {...tableProps} />
      {TopicEditorModalPage && <TopicEditorModalPage/>}
      {TopicQueryForm && <TopicQueryForm/>}
    </Page>
  )
};

const mapStateToProps = (states: StatesAlias & ConnectionPros): Bbs_topicPageProps => {
  const props: Bbs_topicPageProps = {
    appState: states.app,
    bbs_topicState: states.bbs_topic,
    loading: states.loading,
  }
  return props;
}

const Bbs_topicPage = connect(mapStateToProps)(bbs_topicPage);

export default Bbs_topicPage;
