/**
 *  Do not remove this unless you get business authorization.
 *  Topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT} from "@utils/DvaUtil";
import Topic from "../beans/Topic"
import {ColumnProps} from "antd/lib/table";
import moment from 'moment';

export interface TopicColumns<T> {
  /** author  */
  author?: ColumnProps<T>,

  /** replyCount  */
  replyCount?: ColumnProps<T>,

  /** topicId  */
  topicId?: ColumnProps<T>,

  /** authorId  */
  authorId?: ColumnProps<T>,

  /** topicType  */
  topicType?: ColumnProps<T>,

  /** content  */
  content?: ColumnProps<T>,

  /** title  */
  title?: ColumnProps<T>,

  /** lastReplyAt  TIMESTAMP*/
  lastReplyAt?: ColumnProps<T>,

  /** good  */
  good?: ColumnProps<T>,

  /** top  */
  top?: ColumnProps<T>,

  /** visitCount  */
  visitCount?: ColumnProps<T>,

  /** testTimestamp  TIMESTAMP*/
  testTimestamp?: ColumnProps<T>,

  /** testDatetime  TIMESTAMP*/
  testDatetime?: ColumnProps<T>,

  /** 测式日期  DATE*/
  testDate?: ColumnProps<T>,

  /** 测试时间  TIME*/
  testTime?: ColumnProps<T>,

  /** 创建时间  TIMESTAMP*/
  createTime?: ColumnProps<T>,

  /** 更新时间  TIMESTAMP*/
  updateTime?: ColumnProps<T>,

 /** 操作 */
 Operation?: ColumnProps<T>,

 [columnName: string]: ColumnProps<T>,

}

export const topicDefaultColumns: TopicColumns<Topic> = {

  /** author  */
  author: {
    title: 'author',
    dataIndex: 'author',
    key: 'author',
  },

  /** replyCount  */
  replyCount: {
    title: 'replyCount',
    dataIndex: 'replyCount',
    key: 'replyCount',
  },

  /** topicId  */
  topicId: {
    title: 'topicId',
    dataIndex: 'topicId',
    key: 'topicId',
  },

  /** authorId  */
  authorId: {
    title: 'authorId',
    dataIndex: 'authorId',
    key: 'authorId',
  },

  /** topicType  */
  topicType: {
    title: 'topicType',
    dataIndex: 'topicType',
    key: 'topicType',
  },

  /** content  */
  content: {
    title: 'content',
    dataIndex: 'content',
    key: 'content',
  },

  /** title  */
  title: {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },

  /** lastReplyAt  TIMESTAMP*/
  lastReplyAt: {
    title: 'lastReplyAt',
    dataIndex: 'lastReplyAt',
    key: 'lastReplyAt',
    render: (text: any, record: Topic, index: number) => record.lastReplyAt ? moment(record.lastReplyAt).format(TIMESTAMP_FORMAT) : null,
  },

  /** good  */
  good: {
    title: 'good',
    dataIndex: 'good',
    key: 'good',
  },

  /** top  */
  top: {
    title: 'top',
    dataIndex: 'top',
    key: 'top',
  },

  /** visitCount  */
  visitCount: {
    title: 'visitCount',
    dataIndex: 'visitCount',
    key: 'visitCount',
  },

  /** testTimestamp  TIMESTAMP*/
  testTimestamp: {
    title: 'testTimestamp',
    dataIndex: 'testTimestamp',
    key: 'testTimestamp',
    render: (text: any, record: Topic, index: number) => record.testTimestamp ? moment(record.testTimestamp).format(TIMESTAMP_FORMAT) : null,
  },

  /** testDatetime  TIMESTAMP*/
  testDatetime: {
    title: 'testDatetime',
    dataIndex: 'testDatetime',
    key: 'testDatetime',
    render: (text: any, record: Topic, index: number) => record.testDatetime ? moment(record.testDatetime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 测式日期  DATE*/
  testDate: {
    title: '测式日期',
    dataIndex: 'testDate',
    key: 'testDate',
    render: (text: any, record: Topic, index: number) => record.testDate ? moment(record.testDate).format(DATE_FORMAT) : null,
  },

  /** 测试时间  TIME*/
  testTime: {
    title: '测试时间',
    dataIndex: 'testTime',
    key: 'testTime',
    render: (text: any, record: Topic, index: number) => record.testTime ? moment(record.testTime).format(TIME_FORMAT) : null,
  },

  /** 创建时间  TIMESTAMP*/
  createTime: {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (text: any, record: Topic, index: number) => record.createTime ? moment(record.createTime).format(TIMESTAMP_FORMAT) : null,
  },

  /** 更新时间  TIMESTAMP*/
  updateTime: {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    render: (text: any, record: Topic, index: number) => record.updateTime ? moment(record.updateTime).format(TIMESTAMP_FORMAT) : null,
  },

}
