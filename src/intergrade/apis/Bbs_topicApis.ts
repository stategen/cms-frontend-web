/**
 *  Do not remove this unless you get business authorization.
 *  Bbs_topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import AntdPageList from "../beans/AntdPageList";
import {PaginationProps} from "antd/lib/pagination";
import Topic from "../beans/Topic";
import {apiUrlKey} from "../configs/tradeCms-config";

export default class Bbs_topicApis {
  /**
   * GET /api/topic/delete
   * 
   */
  static delete(params: { topicId?: string }): string {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/topic/delete';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/topic/deleteByTopicIds
   * 
   */
  static deleteByTopicIds(params: { topicIds?: string[] }): string[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/topic/deleteByTopicIds';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/topic/getTopicPageList
   * 
   */
  static getTopicPageList(params: { topicId?: string, topicIds?: string[], authorId?: string, authorIds?: string[], topicType?: string, topicTypes?: string[], content?: string, contentLike?: string, title?: string, titleLike?: string, lastReplyAtMin?: Date, lastReplyAtMax?: Date, goodMin?: number, goodMax?: number, topMin?: number, topMax?: number, visitCountMin?: number, visitCountMax?: number, testTimestampMin?: Date, testTimestampMax?: Date, testDatetimeMin?: Date, testDatetimeMax?: Date, testDateMin?: Date, testDateMax?: Date, testTimeMin?: Date, testTimeMax?: Date, createTimeMin?: Date, createTimeMax?: Date, updateTimeMin?: Date, updateTimeMax?: Date, page?: number, pageSize?: number }): AntdPageList<Topic> {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/topic/getTopicPageList';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/topic/insert
   * 
   */
  static insert(params: { topicId?: string, authorId?: string, topicType?: string, content?: string, title?: string, lastReplyAt?: string, good?: string, top?: string, visitCount?: number, createAt?: string, testTimestamp?: Date, testDatetime?: Date, testDate?: Date, testTime?: Date }): Topic {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/topic/insert';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

  /**
   * GET /api/topic/update
   * 
   */
  static update(params: { authorId?: string, topicType?: string, content?: string, title?: string, lastReplyAt?: string, good?: string, top?: string, visitCount?: number, createAt?: string, testTimestamp?: Date, testDatetime?: Date, testDate?: Date, testTime?: Date, topicId?: string }): Topic {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/topic/update';
    requestInit.data = params;
    requestInit.method = Method.GET;
    return Net.fetch(requestInit);
  }

}