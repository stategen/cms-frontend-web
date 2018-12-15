/**
 *  Do not remove this unless you get business authorization.
 *  Bbs_topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AntdPageList from "../beans/AntdPageList";
import {PaginationProps} from "antd/lib/pagination";
import Topic from "../beans/Topic";
import TopicType from "../enums/TopicType";
import UIUtil from "@utils/UIUtil";
import {FormItemConfig, FormItemConfigMap, ObjectMap, TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, TemporalType, PagesProps} from "@utils/DvaUtil";
import moment from 'moment';
import {topicTypeOptions} from '../enums/TopicType';

/** topicIds */
const getTopicPageList_topicIds = {
  name: 'topicIds',
  isArray: true,
  label: "topicIds",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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

/** authorIds */
const getTopicPageList_authorIds = {
  name: 'authorIds',
  isArray: true,
  label: "authorIds",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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
getTopicPageList_topicType.Editor =
  (props?: UIUtil.EnumEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_topicType;
    props = {...props, formItemConfig};
    return UIUtil.BuildEnumEditor(props);
  }

/** topicTypes */
const getTopicPageList_topicTypes = {
  name: 'topicTypes',
  isArray: true,
  label: "topicTypes",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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

/** title */
const getTopicPageList_title = {
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
  pagesProps: null,
  data: null,
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

/** visitCountMin */
const getTopicPageList_visitCountMin = {
  name: 'visitCountMin',
  label: "visitCountMin",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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
  pagesProps: null,
  data: null,
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

/** provinceIds */
const getTopicPageList_provinceIds = {
  name: 'provinceIds',
  isArray: true,
  label: "provinceIds",
  optionProvidor: "Province",
  Editor: UIUtil.BuildSelectEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_provinceIds.Editor =
  (props?: UIUtil.SelectEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_provinceIds;
    props = {...props, formItemConfig};
    return UIUtil.BuildSelectEditor(props);
  }

/** cityIds */
const getTopicPageList_cityIds = {
  name: 'cityIds',
  isArray: true,
  label: "cityIds",
  Editor: UIUtil.BuildInputEditor,
  pagesProps: null,
  data: null,
  config: {
    initialValue: null,
  }
};
getTopicPageList_cityIds.Editor =
  (props?: UIUtil.InputEditorProps) => {
    let formItemConfig = props ? props.formItemConfig : null;
    formItemConfig = formItemConfig || getTopicPageList_cityIds;
    props = {...props, formItemConfig};
    return UIUtil.BuildInputEditor(props);
  }


export namespace Bbs_topicApiForms {
  export interface Bbs_topicApiGetTopicPageListFormItemConfigMap extends FormItemConfigMap {
    /** topicIds  */
    TopicIds?: typeof getTopicPageList_topicIds & Partial<FormItemConfig>,
    /** authorIds  */
    AuthorIds?: typeof getTopicPageList_authorIds & Partial<FormItemConfig>,
    /** topicType  */
    TopicType?: typeof getTopicPageList_topicType & Partial<FormItemConfig>,
    /** topicTypes  */
    TopicTypes?: typeof getTopicPageList_topicTypes & Partial<FormItemConfig>,
    /** title  */
    Title?: typeof getTopicPageList_title & Partial<FormItemConfig>,
    /** titleLike  */
    TitleLike?: typeof getTopicPageList_titleLike & Partial<FormItemConfig>,
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
    /** provinceIds  */
    ProvinceIds?: typeof getTopicPageList_provinceIds & Partial<FormItemConfig>,
    /** cityIds  */
    CityIds?: typeof getTopicPageList_cityIds & Partial<FormItemConfig>,
  }

  export const getGetTopicPageListFormItemConfigMap = (queryRule: ObjectMap<any> = {}, pagesProps: PagesProps): Bbs_topicApiGetTopicPageListFormItemConfigMap => {
    /** topicIds */
    getTopicPageList_topicIds.pagesProps = pagesProps;
    const getTopicPageList_topicIdsValue =queryRule.topicIds;
    getTopicPageList_topicIds.config.initialValue = getTopicPageList_topicIdsValue;
    getTopicPageList_topicIds.data = getTopicPageList_topicIdsValue;
    /** authorIds */
    getTopicPageList_authorIds.pagesProps = pagesProps;
    const getTopicPageList_authorIdsValue =queryRule.authorIds;
    getTopicPageList_authorIds.config.initialValue = getTopicPageList_authorIdsValue;
    getTopicPageList_authorIds.data = getTopicPageList_authorIdsValue;
    /** topicType */
    getTopicPageList_topicType.pagesProps = pagesProps;
    const getTopicPageList_topicTypeValue =queryRule.topicType;
    getTopicPageList_topicType.config.initialValue = getTopicPageList_topicTypeValue;
    getTopicPageList_topicType.data = getTopicPageList_topicTypeValue;
    /** topicTypes */
    getTopicPageList_topicTypes.pagesProps = pagesProps;
    const getTopicPageList_topicTypesValue =queryRule.topicTypes;
    getTopicPageList_topicTypes.config.initialValue = getTopicPageList_topicTypesValue;
    getTopicPageList_topicTypes.data = getTopicPageList_topicTypesValue;
    /** title */
    getTopicPageList_title.pagesProps = pagesProps;
    const getTopicPageList_titleValue =queryRule.title;
    getTopicPageList_title.config.initialValue = getTopicPageList_titleValue;
    getTopicPageList_title.data = getTopicPageList_titleValue;
    /** titleLike */
    getTopicPageList_titleLike.pagesProps = pagesProps;
    const getTopicPageList_titleLikeValue =queryRule.titleLike;
    getTopicPageList_titleLike.config.initialValue = getTopicPageList_titleLikeValue;
    getTopicPageList_titleLike.data = getTopicPageList_titleLikeValue;
    /** visitCountMin */
    getTopicPageList_visitCountMin.pagesProps = pagesProps;
    const getTopicPageList_visitCountMinValue =queryRule.visitCountMin;
    getTopicPageList_visitCountMin.config.initialValue = getTopicPageList_visitCountMinValue;
    getTopicPageList_visitCountMin.data = getTopicPageList_visitCountMinValue;
    /** visitCountMax */
    getTopicPageList_visitCountMax.pagesProps = pagesProps;
    const getTopicPageList_visitCountMaxValue =queryRule.visitCountMax;
    getTopicPageList_visitCountMax.config.initialValue = getTopicPageList_visitCountMaxValue;
    getTopicPageList_visitCountMax.data = getTopicPageList_visitCountMaxValue;
    /** testTimestampMin TIMESTAMP*/
    getTopicPageList_testTimestampMin.pagesProps = pagesProps;
    const getTopicPageList_testTimestampMinValue =queryRule.testTimestampMin ? moment(queryRule.testTimestampMin) : null;
    getTopicPageList_testTimestampMin.config.initialValue = getTopicPageList_testTimestampMinValue;
    getTopicPageList_testTimestampMin.data = getTopicPageList_testTimestampMinValue;
    /** testTimestampMax TIMESTAMP*/
    getTopicPageList_testTimestampMax.pagesProps = pagesProps;
    const getTopicPageList_testTimestampMaxValue =queryRule.testTimestampMax ? moment(queryRule.testTimestampMax) : null;
    getTopicPageList_testTimestampMax.config.initialValue = getTopicPageList_testTimestampMaxValue;
    getTopicPageList_testTimestampMax.data = getTopicPageList_testTimestampMaxValue;
    /** testDatetimeMin TIMESTAMP*/
    getTopicPageList_testDatetimeMin.pagesProps = pagesProps;
    const getTopicPageList_testDatetimeMinValue =queryRule.testDatetimeMin ? moment(queryRule.testDatetimeMin) : null;
    getTopicPageList_testDatetimeMin.config.initialValue = getTopicPageList_testDatetimeMinValue;
    getTopicPageList_testDatetimeMin.data = getTopicPageList_testDatetimeMinValue;
    /** testDatetimeMax TIMESTAMP*/
    getTopicPageList_testDatetimeMax.pagesProps = pagesProps;
    const getTopicPageList_testDatetimeMaxValue =queryRule.testDatetimeMax ? moment(queryRule.testDatetimeMax) : null;
    getTopicPageList_testDatetimeMax.config.initialValue = getTopicPageList_testDatetimeMaxValue;
    getTopicPageList_testDatetimeMax.data = getTopicPageList_testDatetimeMaxValue;
    /** 测式日期Min DATE*/
    getTopicPageList_testDateMin.pagesProps = pagesProps;
    const getTopicPageList_testDateMinValue =queryRule.testDateMin ? moment(queryRule.testDateMin) : null;
    getTopicPageList_testDateMin.config.initialValue = getTopicPageList_testDateMinValue;
    getTopicPageList_testDateMin.data = getTopicPageList_testDateMinValue;
    /** 测式日期Max DATE*/
    getTopicPageList_testDateMax.pagesProps = pagesProps;
    const getTopicPageList_testDateMaxValue =queryRule.testDateMax ? moment(queryRule.testDateMax) : null;
    getTopicPageList_testDateMax.config.initialValue = getTopicPageList_testDateMaxValue;
    getTopicPageList_testDateMax.data = getTopicPageList_testDateMaxValue;
    /** 测试时间Min TIME*/
    getTopicPageList_testTimeMin.pagesProps = pagesProps;
    const getTopicPageList_testTimeMinValue =queryRule.testTimeMin ? moment(queryRule.testTimeMin) : null;
    getTopicPageList_testTimeMin.config.initialValue = getTopicPageList_testTimeMinValue;
    getTopicPageList_testTimeMin.data = getTopicPageList_testTimeMinValue;
    /** 测试时间Max TIME*/
    getTopicPageList_testTimeMax.pagesProps = pagesProps;
    const getTopicPageList_testTimeMaxValue =queryRule.testTimeMax ? moment(queryRule.testTimeMax) : null;
    getTopicPageList_testTimeMax.config.initialValue = getTopicPageList_testTimeMaxValue;
    getTopicPageList_testTimeMax.data = getTopicPageList_testTimeMaxValue;
    /** provinceIds */
    getTopicPageList_provinceIds.pagesProps = pagesProps;
    const getTopicPageList_provinceIdsValue =queryRule.provinceIds;
    getTopicPageList_provinceIds.config.initialValue = getTopicPageList_provinceIdsValue;
    getTopicPageList_provinceIds.data = getTopicPageList_provinceIdsValue;
    /** cityIds */
    getTopicPageList_cityIds.pagesProps = pagesProps;
    const getTopicPageList_cityIdsValue =queryRule.cityIds;
    getTopicPageList_cityIds.config.initialValue = getTopicPageList_cityIdsValue;
    getTopicPageList_cityIds.data = getTopicPageList_cityIdsValue;

    return {
      TopicIds: getTopicPageList_topicIds,
      AuthorIds: getTopicPageList_authorIds,
      TopicType: getTopicPageList_topicType,
      TopicTypes: getTopicPageList_topicTypes,
      Title: getTopicPageList_title,
      TitleLike: getTopicPageList_titleLike,
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
      ProvinceIds: getTopicPageList_provinceIds,
      CityIds: getTopicPageList_cityIds,
    }
  }
}