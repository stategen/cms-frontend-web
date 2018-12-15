/**
 *  Do not remove this unless you get business authorization.
 *  Topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Topic from "../beans/Topic"
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';
import {topicTypeOptions} from '../enums/TopicType';

/** author */
const topic_author = {
  name: 'author',
  label: "author",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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

/** city */
const topic_city = {
  name: 'city',
  label: "city",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
topic_city.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_city;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** province */
const topic_province = {
  name: 'province',
  label: "province",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
topic_province.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_province;
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  isEnum: true,
  options: topicTypeOptions,
  label: "topicType",
  Editor: UIUtil.BuildEnumEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
topic_topicType.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_topicType;
    props = {...props, formItemConfig};
    return UIUtil.BuildEnumEditor(props);
  }

/** content */
const topic_content = {
  name: 'content',
  label: "content",
  type: "textarea",
  Editor: UIUtil.BuildTextareaEditor,
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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

/** provinceId */
const topic_provinceId = {
  name: 'provinceId',
  label: "provinceId",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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
topic_provinceId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_provinceId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** cityId */
const topic_cityId = {
  name: 'cityId',
  label: "cityId",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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
topic_cityId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || topic_cityId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** 创建时间 TIMESTAMP*/
const topic_createTime = {
  name: 'createTime',
  hidden: true,
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间",
  Editor: UIUtil.BuildTimeStampEditor,
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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

  /** city  */
  City?: typeof topic_city & Partial<FormItemConfig>,

  /** province  */
  Province?: typeof topic_province & Partial<FormItemConfig>,

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

  /** provinceId  */
  ProvinceId?: typeof topic_provinceId & Partial<FormItemConfig>,

  /** cityId  */
  CityId?: typeof topic_cityId & Partial<FormItemConfig>,

  /** 创建时间  TIMESTAMP*/
  CreateTime?: typeof topic_createTime & Partial<FormItemConfig>,

  /** 更新时间  TIMESTAMP*/
  UpdateTime?: typeof topic_updateTime & Partial<FormItemConfig>,

}
export const getTopicFormItemConfigMap = (topic: Topic, pagesProps: PagesProps): TopicFormItemConfigMap => {
  /** author */
  topic_author.pagesProps = pagesProps;
  const topic_authorValue =topic.author;
  topic_author.config.initialValue = topic_authorValue;
  topic_author.data = topic_authorValue;
  /** replyCount */
  topic_replyCount.pagesProps = pagesProps;
  const topic_replyCountValue =topic.replyCount;
  topic_replyCount.config.initialValue = topic_replyCountValue;
  topic_replyCount.data = topic_replyCountValue;
  /** city */
  topic_city.pagesProps = pagesProps;
  const topic_cityValue =topic.city;
  topic_city.config.initialValue = topic_cityValue;
  topic_city.data = topic_cityValue;
  /** province */
  topic_province.pagesProps = pagesProps;
  const topic_provinceValue =topic.province;
  topic_province.config.initialValue = topic_provinceValue;
  topic_province.data = topic_provinceValue;
  /** topicId */
  topic_topicId.pagesProps = pagesProps;
  const topic_topicIdValue =topic.topicId;
  topic_topicId.config.initialValue = topic_topicIdValue;
  topic_topicId.data = topic_topicIdValue;
  /** authorId */
  topic_authorId.pagesProps = pagesProps;
  const topic_authorIdValue =topic.authorId;
  topic_authorId.config.initialValue = topic_authorIdValue;
  topic_authorId.data = topic_authorIdValue;
  /** topicType */
  topic_topicType.pagesProps = pagesProps;
  const topic_topicTypeValue =topic.topicType;
  topic_topicType.config.initialValue = topic_topicTypeValue;
  topic_topicType.data = topic_topicTypeValue;
  /** content */
  topic_content.pagesProps = pagesProps;
  const topic_contentValue =topic.content;
  topic_content.config.initialValue = topic_contentValue;
  topic_content.data = topic_contentValue;
  /** title */
  topic_title.pagesProps = pagesProps;
  const topic_titleValue =topic.title;
  topic_title.config.initialValue = topic_titleValue;
  topic_title.data = topic_titleValue;
  /** lastReplyAt TIMESTAMP*/
  topic_lastReplyAt.pagesProps = pagesProps;
  const topic_lastReplyAtValue =topic.lastReplyAt ? moment(topic.lastReplyAt) : null;
  topic_lastReplyAt.config.initialValue = topic_lastReplyAtValue;
  topic_lastReplyAt.data = topic_lastReplyAtValue;
  /** good */
  topic_good.pagesProps = pagesProps;
  const topic_goodValue =topic.good;
  topic_good.config.initialValue = topic_goodValue;
  topic_good.data = topic_goodValue;
  /** top */
  topic_top.pagesProps = pagesProps;
  const topic_topValue =topic.top;
  topic_top.config.initialValue = topic_topValue;
  topic_top.data = topic_topValue;
  /** visitCount */
  topic_visitCount.pagesProps = pagesProps;
  const topic_visitCountValue =topic.visitCount;
  topic_visitCount.config.initialValue = topic_visitCountValue;
  topic_visitCount.data = topic_visitCountValue;
  /** testTimestamp TIMESTAMP*/
  topic_testTimestamp.pagesProps = pagesProps;
  const topic_testTimestampValue =topic.testTimestamp ? moment(topic.testTimestamp) : null;
  topic_testTimestamp.config.initialValue = topic_testTimestampValue;
  topic_testTimestamp.data = topic_testTimestampValue;
  /** testDatetime TIMESTAMP*/
  topic_testDatetime.pagesProps = pagesProps;
  const topic_testDatetimeValue =topic.testDatetime ? moment(topic.testDatetime) : null;
  topic_testDatetime.config.initialValue = topic_testDatetimeValue;
  topic_testDatetime.data = topic_testDatetimeValue;
  /** 测式日期 DATE*/
  topic_testDate.pagesProps = pagesProps;
  const topic_testDateValue =topic.testDate ? moment(topic.testDate) : null;
  topic_testDate.config.initialValue = topic_testDateValue;
  topic_testDate.data = topic_testDateValue;
  /** 测试时间 TIME*/
  topic_testTime.pagesProps = pagesProps;
  const topic_testTimeValue =topic.testTime ? moment(topic.testTime) : null;
  topic_testTime.config.initialValue = topic_testTimeValue;
  topic_testTime.data = topic_testTimeValue;
  /** provinceId */
  topic_provinceId.pagesProps = pagesProps;
  const topic_provinceIdValue =topic.provinceId;
  topic_provinceId.config.initialValue = topic_provinceIdValue;
  topic_provinceId.data = topic_provinceIdValue;
  /** cityId */
  topic_cityId.pagesProps = pagesProps;
  const topic_cityIdValue =topic.cityId;
  topic_cityId.config.initialValue = topic_cityIdValue;
  topic_cityId.data = topic_cityIdValue;
  /** 创建时间 TIMESTAMP*/
  topic_createTime.pagesProps = pagesProps;
  const topic_createTimeValue =topic.createTime ? moment(topic.createTime) : null;
  topic_createTime.config.initialValue = topic_createTimeValue;
  topic_createTime.data = topic_createTimeValue;
  /** 更新时间 TIMESTAMP*/
  topic_updateTime.pagesProps = pagesProps;
  const topic_updateTimeValue =topic.updateTime ? moment(topic.updateTime) : null;
  topic_updateTime.config.initialValue = topic_updateTimeValue;
  topic_updateTime.data = topic_updateTimeValue;

  return {
    Author: topic_author,
    ReplyCount: topic_replyCount,
    City: topic_city,
    Province: topic_province,
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
    ProvinceId: topic_provinceId,
    CityId: topic_cityId,
    CreateTime: topic_createTime,
    UpdateTime: topic_updateTime,
  }
}


