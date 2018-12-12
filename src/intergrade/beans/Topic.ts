/**
 *  Do not remove this unless you get business authorization.
 *  Topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import User from "../beans/User";
import {Bean} from "@utils/DvaUtil";

/** topicId */
export const Topic_ID: string = 'topicId';

export enum TopicFields {
  /** author */
  author = 'author',
  /** replyCount */
  replyCount = 'replyCount',
  /** topicId */
  topicId = 'topicId',
  /** authorId */
  authorId = 'authorId',
  /** topicType */
  topicType = 'topicType',
  /** content */
  content = 'content',
  /** title */
  title = 'title',
  /** lastReplyAt */
  lastReplyAt = 'lastReplyAt',
  /** good */
  good = 'good',
  /** top */
  top = 'top',
  /** visitCount */
  visitCount = 'visitCount',
  /** testTimestamp */
  testTimestamp = 'testTimestamp',
  /** testDatetime */
  testDatetime = 'testDatetime',
  /** testDate */
  testDate = 'testDate',
  /** testTime */
  testTime = 'testTime',
  /** createTime */
  createTime = 'createTime',
  /** updateTime */
  updateTime = 'updateTime',
  /** deleteFlag */
  deleteFlag = 'deleteFlag',
}

export default interface Topic extends Bean {

  /** author */
  author?: User;

  /** replyCount */
  replyCount?: number;

  /** topicId */
  topicId?: string;

  /** authorId */
  authorId?: string;

  /** topicType */
  topicType?: string;

  /** content */
  content?: string;

  /** title */
  title?: string;

  /** lastReplyAt */
  lastReplyAt?: Date;

  /** good */
  good?: number;

  /** top */
  top?: number;

  /** visitCount */
  visitCount?: number;

  /** testTimestamp */
  testTimestamp?: Date;

  /** testDatetime */
  testDatetime?: Date;

  /** 测式日期 */
  testDate?: Date;

  /** 测试时间 */
  testTime?: Date;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

}

