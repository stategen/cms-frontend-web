/**
 *  Do not remove this unless you get business authorization.
 *  Bbs_topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AntdPageList from "../beans/AntdPageList";
import {PaginationProps} from "antd/lib/pagination";
import Topic from "../beans/Topic";
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, FormPropsUtils, TemporalType} from "@utils/DvaUtil";
import moment from 'moment';

/** topicId */
const getTopicPageList_topicId = {
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
getTopicPageList_topicId.Editor =
  (props?: UIUtil.HiddenEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_topicId;
    props = {...props, formItemConfig};
    return UIUtil.BuildHiddenEditor(props);
  }

/** topicIds */
const getTopicPageList_topicIds = {
  name: 'topicIds',
  isArray: true,
  label: "topicIds",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_topicIds.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_topicIds;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** authorId */
const getTopicPageList_authorId = {
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
getTopicPageList_authorId.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_authorId;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** authorIds */
const getTopicPageList_authorIds = {
  name: 'authorIds',
  isArray: true,
  label: "authorIds",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_authorIds.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_authorIds;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** topicType */
const getTopicPageList_topicType = {
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
getTopicPageList_topicType.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_topicType;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** topicTypes */
const getTopicPageList_topicTypes = {
  name: 'topicTypes',
  isArray: true,
  label: "topicTypes",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_topicTypes.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_topicTypes;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** content */
const getTopicPageList_content = {
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
getTopicPageList_content.Editor =
  (props?: UIUtil.TextareaEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_content;
    props = {...props, formItemConfig};
    return UIUtil.BuildTextareaEditor(props);
  }

/** contentLike */
const getTopicPageList_contentLike = {
  name: 'contentLike',
  label: "contentLike",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_contentLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_contentLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** title */
const getTopicPageList_title = {
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
getTopicPageList_title.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_title;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** titleLike */
const getTopicPageList_titleLike = {
  name: 'titleLike',
  label: "titleLike",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_titleLike.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_titleLike;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** lastReplyAtMin TIMESTAMP*/
const getTopicPageList_lastReplyAtMin = {
  name: 'lastReplyAtMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "lastReplyAtMin",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_lastReplyAtMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_lastReplyAtMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** lastReplyAtMax TIMESTAMP*/
const getTopicPageList_lastReplyAtMax = {
  name: 'lastReplyAtMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "lastReplyAtMax",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_lastReplyAtMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_lastReplyAtMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** goodMin */
const getTopicPageList_goodMin = {
  name: 'goodMin',
  label: "goodMin",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_goodMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_goodMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** goodMax */
const getTopicPageList_goodMax = {
  name: 'goodMax',
  label: "goodMax",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_goodMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_goodMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** topMin */
const getTopicPageList_topMin = {
  name: 'topMin',
  label: "topMin",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_topMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_topMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** topMax */
const getTopicPageList_topMax = {
  name: 'topMax',
  label: "topMax",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_topMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_topMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** visitCountMin */
const getTopicPageList_visitCountMin = {
  name: 'visitCountMin',
  label: "visitCountMin",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_visitCountMin.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_visitCountMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** visitCountMax */
const getTopicPageList_visitCountMax = {
  name: 'visitCountMax',
  label: "visitCountMax",
  Editor: UIUtil.BuildInputEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_visitCountMax.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_visitCountMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }

/** testTimestampMin TIMESTAMP*/
const getTopicPageList_testTimestampMin = {
  name: 'testTimestampMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "testTimestampMin",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testTimestampMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testTimestampMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** testTimestampMax TIMESTAMP*/
const getTopicPageList_testTimestampMax = {
  name: 'testTimestampMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "testTimestampMax",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testTimestampMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testTimestampMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** testDatetimeMin TIMESTAMP*/
const getTopicPageList_testDatetimeMin = {
  name: 'testDatetimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "testDatetimeMin",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testDatetimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testDatetimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** testDatetimeMax TIMESTAMP*/
const getTopicPageList_testDatetimeMax = {
  name: 'testDatetimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "testDatetimeMax",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testDatetimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testDatetimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 测式日期Min DATE*/
const getTopicPageList_testDateMin = {
  name: 'testDateMin',
  temporalType : TemporalType.DATE,
  format: DATE_FORMAT,
  label: "测式日期Min",
  Editor: UIUtil.BuildDatePickerEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testDateMin.Editor =
  (props?: UIUtil.DatePickerEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testDateMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildDatePickerEditor(props);
  }

/** 测式日期Max DATE*/
const getTopicPageList_testDateMax = {
  name: 'testDateMax',
  temporalType : TemporalType.DATE,
  format: DATE_FORMAT,
  label: "测式日期Max",
  Editor: UIUtil.BuildDatePickerEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testDateMax.Editor =
  (props?: UIUtil.DatePickerEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testDateMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildDatePickerEditor(props);
  }

/** 测试时间Min TIME*/
const getTopicPageList_testTimeMin = {
  name: 'testTimeMin',
  temporalType : TemporalType.TIME,
  format: TIME_FORMAT,
  label: "测试时间Min",
  Editor: UIUtil.BuildTimePickerEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testTimeMin.Editor =
  (props?: UIUtil.TimePickerEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimePickerEditor(props);
  }

/** 测试时间Max TIME*/
const getTopicPageList_testTimeMax = {
  name: 'testTimeMax',
  temporalType : TemporalType.TIME,
  format: TIME_FORMAT,
  label: "测试时间Max",
  Editor: UIUtil.BuildTimePickerEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_testTimeMax.Editor =
  (props?: UIUtil.TimePickerEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_testTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimePickerEditor(props);
  }

/** 创建时间Min TIMESTAMP*/
const getTopicPageList_createTimeMin = {
  name: 'createTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Min",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_createTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_createTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 创建时间Max TIMESTAMP*/
const getTopicPageList_createTimeMax = {
  name: 'createTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "创建时间Max",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_createTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_createTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Min TIMESTAMP*/
const getTopicPageList_updateTimeMin = {
  name: 'updateTimeMin',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Min",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_updateTimeMin.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_updateTimeMin;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }

/** 更新时间Max TIMESTAMP*/
const getTopicPageList_updateTimeMax = {
  name: 'updateTimeMax',
  temporalType : TemporalType.TIMESTAMP,
  format: TIMESTAMP_FORMAT,
  label: "更新时间Max",
  Editor: UIUtil.BuildTimeStampEditor,
  data: null,
  form: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_updateTimeMax.Editor =
  (props?: UIUtil.TimeStampEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_updateTimeMax;
    props = {...props, formItemConfig};
    return UIUtil.BuildTimeStampEditor(props);
  }


export namespace Bbs_topicApiForms {
  export interface Bbs_topicApiGetTopicPageListFormItemConfigMap extends FormItemConfigMap {
    /** topicId  */
    TopicId?: typeof getTopicPageList_topicId & Partial<FormItemConfig>,
    /** topicIds  */
    TopicIds?: typeof getTopicPageList_topicIds & Partial<FormItemConfig>,
    /** authorId  */
    AuthorId?: typeof getTopicPageList_authorId & Partial<FormItemConfig>,
    /** authorIds  */
    AuthorIds?: typeof getTopicPageList_authorIds & Partial<FormItemConfig>,
    /** topicType  */
    TopicType?: typeof getTopicPageList_topicType & Partial<FormItemConfig>,
    /** topicTypes  */
    TopicTypes?: typeof getTopicPageList_topicTypes & Partial<FormItemConfig>,
    /** content  */
    Content?: typeof getTopicPageList_content & Partial<FormItemConfig>,
    /** contentLike  */
    ContentLike?: typeof getTopicPageList_contentLike & Partial<FormItemConfig>,
    /** title  */
    Title?: typeof getTopicPageList_title & Partial<FormItemConfig>,
    /** titleLike  */
    TitleLike?: typeof getTopicPageList_titleLike & Partial<FormItemConfig>,
    /** lastReplyAtMin  TIMESTAMP*/
    LastReplyAtMin?: typeof getTopicPageList_lastReplyAtMin & Partial<FormItemConfig>,
    /** lastReplyAtMax  TIMESTAMP*/
    LastReplyAtMax?: typeof getTopicPageList_lastReplyAtMax & Partial<FormItemConfig>,
    /** goodMin  */
    GoodMin?: typeof getTopicPageList_goodMin & Partial<FormItemConfig>,
    /** goodMax  */
    GoodMax?: typeof getTopicPageList_goodMax & Partial<FormItemConfig>,
    /** topMin  */
    TopMin?: typeof getTopicPageList_topMin & Partial<FormItemConfig>,
    /** topMax  */
    TopMax?: typeof getTopicPageList_topMax & Partial<FormItemConfig>,
    /** visitCountMin  */
    VisitCountMin?: typeof getTopicPageList_visitCountMin & Partial<FormItemConfig>,
    /** visitCountMax  */
    VisitCountMax?: typeof getTopicPageList_visitCountMax & Partial<FormItemConfig>,
    /** testTimestampMin  TIMESTAMP*/
    TestTimestampMin?: typeof getTopicPageList_testTimestampMin & Partial<FormItemConfig>,
    /** testTimestampMax  TIMESTAMP*/
    TestTimestampMax?: typeof getTopicPageList_testTimestampMax & Partial<FormItemConfig>,
    /** testDatetimeMin  TIMESTAMP*/
    TestDatetimeMin?: typeof getTopicPageList_testDatetimeMin & Partial<FormItemConfig>,
    /** testDatetimeMax  TIMESTAMP*/
    TestDatetimeMax?: typeof getTopicPageList_testDatetimeMax & Partial<FormItemConfig>,
    /** 测式日期Min  DATE*/
    TestDateMin?: typeof getTopicPageList_testDateMin & Partial<FormItemConfig>,
    /** 测式日期Max  DATE*/
    TestDateMax?: typeof getTopicPageList_testDateMax & Partial<FormItemConfig>,
    /** 测试时间Min  TIME*/
    TestTimeMin?: typeof getTopicPageList_testTimeMin & Partial<FormItemConfig>,
    /** 测试时间Max  TIME*/
    TestTimeMax?: typeof getTopicPageList_testTimeMax & Partial<FormItemConfig>,
    /** 创建时间Min  TIMESTAMP*/
    CreateTimeMin?: typeof getTopicPageList_createTimeMin & Partial<FormItemConfig>,
    /** 创建时间Max  TIMESTAMP*/
    CreateTimeMax?: typeof getTopicPageList_createTimeMax & Partial<FormItemConfig>,
    /** 更新时间Min  TIMESTAMP*/
    UpdateTimeMin?: typeof getTopicPageList_updateTimeMin & Partial<FormItemConfig>,
    /** 更新时间Max  TIMESTAMP*/
    UpdateTimeMax?: typeof getTopicPageList_updateTimeMax & Partial<FormItemConfig>,
  }

  export const getGetTopicPageListFormItemConfigMap = (queryRule: ObjectMap<any> = {}, form?: FormPropsUtils): Bbs_topicApiGetTopicPageListFormItemConfigMap => {
    /** topicId */
    getTopicPageList_topicId.form = form;
    const getTopicPageList_topicIdValue =queryRule.topicId;
    getTopicPageList_topicId.config.initialValue = getTopicPageList_topicIdValue;
    getTopicPageList_topicId.data = getTopicPageList_topicIdValue;
    /** topicIds */
    getTopicPageList_topicIds.form = form;
    const getTopicPageList_topicIdsValue =queryRule.topicIds;
    getTopicPageList_topicIds.config.initialValue = getTopicPageList_topicIdsValue;
    getTopicPageList_topicIds.data = getTopicPageList_topicIdsValue;
    /** authorId */
    getTopicPageList_authorId.form = form;
    const getTopicPageList_authorIdValue =queryRule.authorId;
    getTopicPageList_authorId.config.initialValue = getTopicPageList_authorIdValue;
    getTopicPageList_authorId.data = getTopicPageList_authorIdValue;
    /** authorIds */
    getTopicPageList_authorIds.form = form;
    const getTopicPageList_authorIdsValue =queryRule.authorIds;
    getTopicPageList_authorIds.config.initialValue = getTopicPageList_authorIdsValue;
    getTopicPageList_authorIds.data = getTopicPageList_authorIdsValue;
    /** topicType */
    getTopicPageList_topicType.form = form;
    const getTopicPageList_topicTypeValue =queryRule.topicType;
    getTopicPageList_topicType.config.initialValue = getTopicPageList_topicTypeValue;
    getTopicPageList_topicType.data = getTopicPageList_topicTypeValue;
    /** topicTypes */
    getTopicPageList_topicTypes.form = form;
    const getTopicPageList_topicTypesValue =queryRule.topicTypes;
    getTopicPageList_topicTypes.config.initialValue = getTopicPageList_topicTypesValue;
    getTopicPageList_topicTypes.data = getTopicPageList_topicTypesValue;
    /** content */
    getTopicPageList_content.form = form;
    const getTopicPageList_contentValue =queryRule.content;
    getTopicPageList_content.config.initialValue = getTopicPageList_contentValue;
    getTopicPageList_content.data = getTopicPageList_contentValue;
    /** contentLike */
    getTopicPageList_contentLike.form = form;
    const getTopicPageList_contentLikeValue =queryRule.contentLike;
    getTopicPageList_contentLike.config.initialValue = getTopicPageList_contentLikeValue;
    getTopicPageList_contentLike.data = getTopicPageList_contentLikeValue;
    /** title */
    getTopicPageList_title.form = form;
    const getTopicPageList_titleValue =queryRule.title;
    getTopicPageList_title.config.initialValue = getTopicPageList_titleValue;
    getTopicPageList_title.data = getTopicPageList_titleValue;
    /** titleLike */
    getTopicPageList_titleLike.form = form;
    const getTopicPageList_titleLikeValue =queryRule.titleLike;
    getTopicPageList_titleLike.config.initialValue = getTopicPageList_titleLikeValue;
    getTopicPageList_titleLike.data = getTopicPageList_titleLikeValue;
    /** lastReplyAtMin TIMESTAMP*/
    getTopicPageList_lastReplyAtMin.form = form;
    const getTopicPageList_lastReplyAtMinValue =queryRule.lastReplyAtMin ? moment(queryRule.lastReplyAtMin) : null;
    getTopicPageList_lastReplyAtMin.config.initialValue = getTopicPageList_lastReplyAtMinValue;
    getTopicPageList_lastReplyAtMin.data = getTopicPageList_lastReplyAtMinValue;
    /** lastReplyAtMax TIMESTAMP*/
    getTopicPageList_lastReplyAtMax.form = form;
    const getTopicPageList_lastReplyAtMaxValue =queryRule.lastReplyAtMax ? moment(queryRule.lastReplyAtMax) : null;
    getTopicPageList_lastReplyAtMax.config.initialValue = getTopicPageList_lastReplyAtMaxValue;
    getTopicPageList_lastReplyAtMax.data = getTopicPageList_lastReplyAtMaxValue;
    /** goodMin */
    getTopicPageList_goodMin.form = form;
    const getTopicPageList_goodMinValue =queryRule.goodMin;
    getTopicPageList_goodMin.config.initialValue = getTopicPageList_goodMinValue;
    getTopicPageList_goodMin.data = getTopicPageList_goodMinValue;
    /** goodMax */
    getTopicPageList_goodMax.form = form;
    const getTopicPageList_goodMaxValue =queryRule.goodMax;
    getTopicPageList_goodMax.config.initialValue = getTopicPageList_goodMaxValue;
    getTopicPageList_goodMax.data = getTopicPageList_goodMaxValue;
    /** topMin */
    getTopicPageList_topMin.form = form;
    const getTopicPageList_topMinValue =queryRule.topMin;
    getTopicPageList_topMin.config.initialValue = getTopicPageList_topMinValue;
    getTopicPageList_topMin.data = getTopicPageList_topMinValue;
    /** topMax */
    getTopicPageList_topMax.form = form;
    const getTopicPageList_topMaxValue =queryRule.topMax;
    getTopicPageList_topMax.config.initialValue = getTopicPageList_topMaxValue;
    getTopicPageList_topMax.data = getTopicPageList_topMaxValue;
    /** visitCountMin */
    getTopicPageList_visitCountMin.form = form;
    const getTopicPageList_visitCountMinValue =queryRule.visitCountMin;
    getTopicPageList_visitCountMin.config.initialValue = getTopicPageList_visitCountMinValue;
    getTopicPageList_visitCountMin.data = getTopicPageList_visitCountMinValue;
    /** visitCountMax */
    getTopicPageList_visitCountMax.form = form;
    const getTopicPageList_visitCountMaxValue =queryRule.visitCountMax;
    getTopicPageList_visitCountMax.config.initialValue = getTopicPageList_visitCountMaxValue;
    getTopicPageList_visitCountMax.data = getTopicPageList_visitCountMaxValue;
    /** testTimestampMin TIMESTAMP*/
    getTopicPageList_testTimestampMin.form = form;
    const getTopicPageList_testTimestampMinValue =queryRule.testTimestampMin ? moment(queryRule.testTimestampMin) : null;
    getTopicPageList_testTimestampMin.config.initialValue = getTopicPageList_testTimestampMinValue;
    getTopicPageList_testTimestampMin.data = getTopicPageList_testTimestampMinValue;
    /** testTimestampMax TIMESTAMP*/
    getTopicPageList_testTimestampMax.form = form;
    const getTopicPageList_testTimestampMaxValue =queryRule.testTimestampMax ? moment(queryRule.testTimestampMax) : null;
    getTopicPageList_testTimestampMax.config.initialValue = getTopicPageList_testTimestampMaxValue;
    getTopicPageList_testTimestampMax.data = getTopicPageList_testTimestampMaxValue;
    /** testDatetimeMin TIMESTAMP*/
    getTopicPageList_testDatetimeMin.form = form;
    const getTopicPageList_testDatetimeMinValue =queryRule.testDatetimeMin ? moment(queryRule.testDatetimeMin) : null;
    getTopicPageList_testDatetimeMin.config.initialValue = getTopicPageList_testDatetimeMinValue;
    getTopicPageList_testDatetimeMin.data = getTopicPageList_testDatetimeMinValue;
    /** testDatetimeMax TIMESTAMP*/
    getTopicPageList_testDatetimeMax.form = form;
    const getTopicPageList_testDatetimeMaxValue =queryRule.testDatetimeMax ? moment(queryRule.testDatetimeMax) : null;
    getTopicPageList_testDatetimeMax.config.initialValue = getTopicPageList_testDatetimeMaxValue;
    getTopicPageList_testDatetimeMax.data = getTopicPageList_testDatetimeMaxValue;
    /** 测式日期Min DATE*/
    getTopicPageList_testDateMin.form = form;
    const getTopicPageList_testDateMinValue =queryRule.testDateMin ? moment(queryRule.testDateMin) : null;
    getTopicPageList_testDateMin.config.initialValue = getTopicPageList_testDateMinValue;
    getTopicPageList_testDateMin.data = getTopicPageList_testDateMinValue;
    /** 测式日期Max DATE*/
    getTopicPageList_testDateMax.form = form;
    const getTopicPageList_testDateMaxValue =queryRule.testDateMax ? moment(queryRule.testDateMax) : null;
    getTopicPageList_testDateMax.config.initialValue = getTopicPageList_testDateMaxValue;
    getTopicPageList_testDateMax.data = getTopicPageList_testDateMaxValue;
    /** 测试时间Min TIME*/
    getTopicPageList_testTimeMin.form = form;
    const getTopicPageList_testTimeMinValue =queryRule.testTimeMin ? moment(queryRule.testTimeMin) : null;
    getTopicPageList_testTimeMin.config.initialValue = getTopicPageList_testTimeMinValue;
    getTopicPageList_testTimeMin.data = getTopicPageList_testTimeMinValue;
    /** 测试时间Max TIME*/
    getTopicPageList_testTimeMax.form = form;
    const getTopicPageList_testTimeMaxValue =queryRule.testTimeMax ? moment(queryRule.testTimeMax) : null;
    getTopicPageList_testTimeMax.config.initialValue = getTopicPageList_testTimeMaxValue;
    getTopicPageList_testTimeMax.data = getTopicPageList_testTimeMaxValue;
    /** 创建时间Min TIMESTAMP*/
    getTopicPageList_createTimeMin.form = form;
    const getTopicPageList_createTimeMinValue =queryRule.createTimeMin ? moment(queryRule.createTimeMin) : null;
    getTopicPageList_createTimeMin.config.initialValue = getTopicPageList_createTimeMinValue;
    getTopicPageList_createTimeMin.data = getTopicPageList_createTimeMinValue;
    /** 创建时间Max TIMESTAMP*/
    getTopicPageList_createTimeMax.form = form;
    const getTopicPageList_createTimeMaxValue =queryRule.createTimeMax ? moment(queryRule.createTimeMax) : null;
    getTopicPageList_createTimeMax.config.initialValue = getTopicPageList_createTimeMaxValue;
    getTopicPageList_createTimeMax.data = getTopicPageList_createTimeMaxValue;
    /** 更新时间Min TIMESTAMP*/
    getTopicPageList_updateTimeMin.form = form;
    const getTopicPageList_updateTimeMinValue =queryRule.updateTimeMin ? moment(queryRule.updateTimeMin) : null;
    getTopicPageList_updateTimeMin.config.initialValue = getTopicPageList_updateTimeMinValue;
    getTopicPageList_updateTimeMin.data = getTopicPageList_updateTimeMinValue;
    /** 更新时间Max TIMESTAMP*/
    getTopicPageList_updateTimeMax.form = form;
    const getTopicPageList_updateTimeMaxValue =queryRule.updateTimeMax ? moment(queryRule.updateTimeMax) : null;
    getTopicPageList_updateTimeMax.config.initialValue = getTopicPageList_updateTimeMaxValue;
    getTopicPageList_updateTimeMax.data = getTopicPageList_updateTimeMaxValue;

    return {
      TopicId: getTopicPageList_topicId,
      TopicIds: getTopicPageList_topicIds,
      AuthorId: getTopicPageList_authorId,
      AuthorIds: getTopicPageList_authorIds,
      TopicType: getTopicPageList_topicType,
      TopicTypes: getTopicPageList_topicTypes,
      Content: getTopicPageList_content,
      ContentLike: getTopicPageList_contentLike,
      Title: getTopicPageList_title,
      TitleLike: getTopicPageList_titleLike,
      LastReplyAtMin: getTopicPageList_lastReplyAtMin,
      LastReplyAtMax: getTopicPageList_lastReplyAtMax,
      GoodMin: getTopicPageList_goodMin,
      GoodMax: getTopicPageList_goodMax,
      TopMin: getTopicPageList_topMin,
      TopMax: getTopicPageList_topMax,
      VisitCountMin: getTopicPageList_visitCountMin,
      VisitCountMax: getTopicPageList_visitCountMax,
      TestTimestampMin: getTopicPageList_testTimestampMin,
      TestTimestampMax: getTopicPageList_testTimestampMax,
      TestDatetimeMin: getTopicPageList_testDatetimeMin,
      TestDatetimeMax: getTopicPageList_testDatetimeMax,
      TestDateMin: getTopicPageList_testDateMin,
      TestDateMax: getTopicPageList_testDateMax,
      TestTimeMin: getTopicPageList_testTimeMin,
      TestTimeMax: getTopicPageList_testTimeMax,
      CreateTimeMin: getTopicPageList_createTimeMin,
      CreateTimeMax: getTopicPageList_createTimeMax,
      UpdateTimeMin: getTopicPageList_updateTimeMin,
      UpdateTimeMax: getTopicPageList_updateTimeMax,
    }
  }
}