/**
 *  Do not remove this unless you get business authorization.
 *  Topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Topic from "../beans/Topic"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';

/** author */
const topic_author = {
  name: 'author',
  label: "author",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_author.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_author;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** replyCount */
const topic_replyCount = {
  name: 'replyCount',
  label: "replyCount",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_replyCount.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_replyCount;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** topicId */
const topic_topicId = {
  name: 'topicId',
  isId: true,
  label: "topicId",
  type: "hidden",
  Editor: UIUtil.BuildHiddenEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
topic_topicId.Editor =
  (props?: UIUtil.HiddenEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_topicId;
    props = {...props, formItemConfig};
    return UIUtil.BuildHiddenEditor(props);
  }

/** authorId */
const topic_authorId = {
  name: 'authorId',
  label: "authorId",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
topic_authorId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_authorId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** topicType */
const topic_topicType = {
  name: 'topicType',
  label: "topicType",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
topic_topicType.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_topicType;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** content */
const topic_content = {
  name: 'content',
  label: "content",
  type: "textarea",
  Editor: UIUtil.BuildTextareaEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 65535,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
topic_content.Editor =
  (props?: UIUtil.TextareaEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_content;
    props = {...props, formItemConfig};
    return UIUtil.BuildTextareaEditor(props);
  }

/** title */
const topic_title = {
  name: 'title',
  label: "title",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
    rules: [
      {
        max: 64,
        message: "{javax.validation.constraints.Max.message}",
      },
    ],
  }
};
topic_title.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_title;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** lastReplyAt TIMESTAMP*/
const topic_lastReplyAt = {
  name: 'lastReplyAt',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "lastReplyAt",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_lastReplyAt.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_lastReplyAt;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** good */
const topic_good = {
  name: 'good',
  label: "good",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_good.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_good;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** top */
const topic_top = {
  name: 'top',
  label: "top",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_top.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_top;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** visitCount */
const topic_visitCount = {
  name: 'visitCount',
  label: "visitCount",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_visitCount.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_visitCount;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** testTimestamp TIMESTAMP*/
const topic_testTimestamp = {
  name: 'testTimestamp',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "testTimestamp",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_testTimestamp.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_testTimestamp;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** testDatetime TIMESTAMP*/
const topic_testDatetime = {
  name: 'testDatetime',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "testDatetime",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_testDatetime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_testDatetime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 测式日期 DATE*/
const topic_testDate = {
  name: 'testDate',
  temporalType : TemporalType.DATE,
  format: DATE_FORMAT,
  label: "测式日期",
  Editor: UIUtil.BuildDatePickerEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_testDate.Editor =
  (props?: UIUtil.DatePickerEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_testDate;
    props = {...props, formItemConfig};
    return UIUtil.BuildDatePickerEditor(props);
  }

/** 测试时间 TIME*/
const topic_testTime = {
  name: 'testTime',
  temporalType : TemporalType.TIME,
  format: TIME_FORMAT,
  label: "测试时间",
  Editor: UIUtil.BuildTimePickerEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_testTime.Editor =
  (props?: UIUtil.TimePickerEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_testTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimePickerEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const topic_createTime = {
  name: 'createTime',
  hidden: true,
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_createTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_createTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间 TIMESTAMP*/
const topic_updateTime = {
  name: 'updateTime',
  hidden: true,
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
topic_updateTime.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_updateTime;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

export interface TopicFormItemConfigMap extends FormItemConfigMap {
  /** author  */
  Author?: typeof topic_author & Partial<FormItemConfig>,

  /** replyCount  */
  ReplyCount?: typeof topic_replyCount & Partial<FormItemConfig>,

  /** topicId  */
  TopicId?: typeof topic_topicId & Partial<FormItemConfig>,

  /** authorId  */
  AuthorId?: typeof topic_authorId & Partial<FormItemConfig>,

  /** topicType  */
  TopicType?: typeof topic_topicType & Partial<FormItemConfig>,

  /** content  */
  Content?: typeof topic_content & Partial<FormItemConfig>,

  /** title  */
  Title?: typeof topic_title & Partial<FormItemConfig>,

  /** lastReplyAt  TIMESTAMP*/
  LastReplyAt?: typeof topic_lastReplyAt & Partial<FormItemConfig>,

  /** good  */
  Good?: typeof topic_good & Partial<FormItemConfig>,

  /** top  */
  Top?: typeof topic_top & Partial<FormItemConfig>,

  /** visitCount  */
  VisitCount?: typeof topic_visitCount & Partial<FormItemConfig>,

  /** testTimestamp  TIMESTAMP*/
  TestTimestamp?: typeof topic_testTimestamp & Partial<FormItemConfig>,

  /** testDatetime  TIMESTAMP*/
  TestDatetime?: typeof topic_testDatetime & Partial<FormItemConfig>,

  /** 测式日期  DATE*/
  TestDate?: typeof topic_testDate & Partial<FormItemConfig>,

  /** 测试时间  TIME*/
  TestTime?: typeof topic_testTime & Partial<FormItemConfig>,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof topic_createTime & Partial<FormItemConfig>,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof topic_updateTime & Partial<FormItemConfig>,

}
export const getTopicFormItemConfigMap = (topic: Topic, form?: FormPropsUtils): TopicFormItemConfigMap => {
  /** author */
  topic_author.form = form;
  const topic_authorValue =topic.author;
  topic_author.config.initialValue = topic_authorValue;
  topic_author.data = topic_authorValue;
  /** replyCount */
  topic_replyCount.form = form;
  const topic_replyCountValue =topic.replyCount;
  topic_replyCount.config.initialValue = topic_replyCountValue;
  topic_replyCount.data = topic_replyCountValue;
  /** topicId */
  topic_topicId.form = form;
  const topic_topicIdValue =topic.topicId;
  topic_topicId.config.initialValue = topic_topicIdValue;
  topic_topicId.data = topic_topicIdValue;
  /** authorId */
  topic_authorId.form = form;
  const topic_authorIdValue =topic.authorId;
  topic_authorId.config.initialValue = topic_authorIdValue;
  topic_authorId.data = topic_authorIdValue;
  /** topicType */
  topic_topicType.form = form;
  const topic_topicTypeValue =topic.topicType;
  topic_topicType.config.initialValue = topic_topicTypeValue;
  topic_topicType.data = topic_topicTypeValue;
  /** content */
  topic_content.form = form;
  const topic_contentValue =topic.content;
  topic_content.config.initialValue = topic_contentValue;
  topic_content.data = topic_contentValue;
  /** title */
  topic_title.form = form;
  const topic_titleValue =topic.title;
  topic_title.config.initialValue = topic_titleValue;
  topic_title.data = topic_titleValue;
  /** lastReplyAt TIMESTAMP*/
  topic_lastReplyAt.form = form;
  const topic_lastReplyAtValue =topic.lastReplyAt ? moment(topic.lastReplyAt) : null;
  topic_lastReplyAt.config.initialValue = topic_lastReplyAtValue;
  topic_lastReplyAt.data = topic_lastReplyAtValue;
  /** good */
  topic_good.form = form;
  const topic_goodValue =topic.good;
  topic_good.config.initialValue = topic_goodValue;
  topic_good.data = topic_goodValue;
  /** top */
  topic_top.form = form;
  const topic_topValue =topic.top;
  topic_top.config.initialValue = topic_topValue;
  topic_top.data = topic_topValue;
  /** visitCount */
  topic_visitCount.form = form;
  const topic_visitCountValue =topic.visitCount;
  topic_visitCount.config.initialValue = topic_visitCountValue;
  topic_visitCount.data = topic_visitCountValue;
  /** testTimestamp TIMESTAMP*/
  topic_testTimestamp.form = form;
  const topic_testTimestampValue =topic.testTimestamp ? moment(topic.testTimestamp) : null;
  topic_testTimestamp.config.initialValue = topic_testTimestampValue;
  topic_testTimestamp.data = topic_testTimestampValue;
  /** testDatetime TIMESTAMP*/
  topic_testDatetime.form = form;
  const topic_testDatetimeValue =topic.testDatetime ? moment(topic.testDatetime) : null;
  topic_testDatetime.config.initialValue = topic_testDatetimeValue;
  topic_testDatetime.data = topic_testDatetimeValue;
  /** 测式日期 DATE*/
  topic_testDate.form = form;
  const topic_testDateValue =topic.testDate ? moment(topic.testDate) : null;
  topic_testDate.config.initialValue = topic_testDateValue;
  topic_testDate.data = topic_testDateValue;
  /** 测试时间 TIME*/
  topic_testTime.form = form;
  const topic_testTimeValue =topic.testTime ? moment(topic.testTime) : null;
  topic_testTime.config.initialValue = topic_testTimeValue;
  topic_testTime.data = topic_testTimeValue;
  /** 创建时间 TIMESTAMP*/
  topic_createTime.form = form;
  const topic_createTimeValue =topic.createTime ? moment(topic.createTime) : null;
  topic_createTime.config.initialValue = topic_createTimeValue;
  topic_createTime.data = topic_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  topic_updateTime.form = form;
  const topic_updateTimeValue =topic.updateTime ? moment(topic.updateTime) : null;
  topic_updateTime.config.initialValue = topic_updateTimeValue;
  topic_updateTime.data = topic_updateTimeValue;

  return {
    Author: topic_author,
    ReplyCount: topic_replyCount,
    TopicId: topic_topicId,
    AuthorId: topic_authorId,
    TopicType: topic_topicType,
    Content: topic_content,
    Title: topic_title,
    LastReplyAt: topic_lastReplyAt,
    Good: topic_good,
    Top: topic_top,
    VisitCount: topic_visitCount,
    TestTimestamp: topic_testTimestamp,
    TestDatetime: topic_testDatetime,
    TestDate: topic_testDate,
    TestTime: topic_testTime,
    CreateTime: topic_createTime,
    UpdateTime: topic_updateTime,
  }
}


