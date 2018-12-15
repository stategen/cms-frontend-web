import {PaginationProps} from "antd/lib/pagination/Pagination";
import {call as Call, put as Put} from 'redux-saga/effects';
import React from 'react';
import {GetFieldDecoratorOptions} from "antd/lib/form/Form";
import {OptionProps} from "antd/es/select";
import {ReactElement} from "react";
import {WrappedFormUtils} from "antd/lib/form/Form";
import {History} from "history";
import {Key} from "path-to-regexp";
import {FormItemProps} from "antd/lib/form/FormItem";

export const TIME_FORMAT = "HH:mm:ss";
export const DATE_FORMAT = "YYYY-MM-DD";
export const TIMESTAMP_FORMAT = "YYYY-MM-DD HH:mm:ss";
import moment from 'moment';
import {AppProps, AppState} from "@i/interfaces/AppFaces";

export enum TemporalType {
  TIME = "TIME",
  DATE = "",
  TIMESTAMP = "TIMESTAMP",
}

export type KeyValue<T, V> = {
  [key in keyof T]?: V;
  }

export interface KeyProps {
  key?: string;
}


export interface Action {
  type: any,
  payload?: Payload | any;
  error?: boolean;

  [propName: string]: any,
}

export interface RouteOrders {
  [route: string]: number
}

export interface Options extends KeyValue<Options, OptionProps> {
  _None?: {
    value?: any,
    title?: string,
  },
}

export type Reducer<S> = (state: S, action: Action) => S;

/*export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): Promise<T>;
}*/

export interface Dispatch {
  (action: Action): Promise<Action> | any;
}

export interface SelectFun {
  (StatesAlias): any;
}

export type select = (SelectFun);

export interface SagaCommands {
  put?: typeof Put,
  call?: typeof Call,
  select?: select,
  take: Function,
  cancel: Function,

  [key: string]: any,
}

export interface BaseState {

}

export interface AreaState<T> {
  areaName?: string,
  list?: T[],
  index?: number,
  pagination?: PaginationProps;
  selectedRowKeys?: any[],
  doEdit?: boolean;
  doQuery?: boolean,
  queryRule?: any,
  type?: any,
  cancelState?: AreaState<T>,
}

export const initAreaState: AreaState<any> = {
  list: [],
  pagination: {},
  selectedRowKeys: [],
  doEdit: false,
  doQuery: false,
  type: null,
  index: null,
}

/*interfaces*/
export interface Payload {
  areaExtraProps__?: AreaState<any>;
  stateExtraProps__?: BaseState;

  [propName: string]: any,
}

export interface Bean {
}

export interface Reducers<S> {
  updateState?: Reducer<S>,
}

export interface Effect {
  ({type, payload, error}: Action, {put, call, select}: SagaCommands): any,
}

export interface Effects {
}

export interface SubscriptionPros {
  dispatch?: Dispatch,
  history?: History,
}

export interface Subscription {
  ({dispatch, history}: SubscriptionPros): any;
}

export interface SetupProps {
  pathname?: string,
  match?: RegExpExecArray;
  keys?: Key[]
}

export interface SetupParamsFun {
  (setupProps: SetupProps): any;
}

export interface Subscriptions {
  [subscription: string]: Subscription;
}

export interface DvaModel {
  pathname?: string;
  namespace?: string;
  state?: any;
  subscriptions?: Subscriptions;
  reducers?: Reducers<any>;
  effects?: Effects;
  getInitState?: () => any;
}

export interface IModel<S, R extends Reducers<S>, E extends Effects> extends DvaModel {
  state?: S;
  reducers?: R;
  effects?: E,
}

export interface RouterReduxPushPros {
  pathname?: string;
  search ?: any;
}

export const modelPathsProxy = function <T>(dvaModel: DvaModel): T {
  let proxyObj: DvaModel = <DvaModel> {namespace: dvaModel.namespace};
  let namespace = proxyObj.namespace;
  const handleGet = {
    get: function (reducersOrEffects, propertyName, proxyed) {
      let path = reducersOrEffects[propertyName];
      if (path !== undefined) {
        return path;
      }
      path = namespace + "/" + propertyName;
      (<any>reducersOrEffects)[propertyName] = path;
      return path;
    }
  };

  const result: T = new Proxy(proxyObj, handleGet);
  return result;
}

export const abstractModel: IModel<any, Reducers<any>, Effects> = {
  reducers: {
    updateState(state: BaseState, {payload}) {
      return mergeObjects(
        state,
        payload,
      )
    },
  },
}


export interface DvaLocation extends Location {
  key?: string,
  query?: {};
}

export interface DvaPageElement {
  location?: DvaLocation;
  children?: ReactElement<any>[];
}

export interface LoadingProps {
  effects?: any;
  models?: any;
}

export interface ConnectionPros {
  location?: DvaLocation,
  dispatch?: Dispatch,
  loading?: LoadingProps
  children?: React.ReactNode,
}


export interface FormItemEditorProps {
  formItemConfig?: FormItemConfig,
  children?: React.ReactNode,
  Editor?: (props) => any,
}

export interface PagesProps extends Partial<AppProps>, Partial<FormProps>, Partial<ConnectionPros> {
  form?: FormPropsUtils,
  dispatch?: Dispatch;
  appState?: AppState;
}

export interface FormItemConfig {
  name?: string,
  hidden?: boolean,
  isId?: boolean,
  isEnum?: boolean,
  isImage?: boolean,
  label?: string,
  isArray?: boolean,
  format?: string,
  // options?: Options,
  data?: any,
  temporalType?: string,
  optionProvidor?: string,
  config?: GetFieldDecoratorOptions,
  /*Editor?: (props) => any,*/
  /*type?: string,*/
  pagesProps?: PagesProps;
}

export class BaseCommand {
  static updateState_type(payload) {
    return {type: "updateState", payload};
  }
}

export interface FormItemConfigMap extends KeyValue<FormItemConfigMap, FormItemConfig> {
}

export interface ObjectMap<T extends {}> {
  [propName: string]: T
}

export const makeMap = <T extends {}>(target: T[], idKeyName: string): ObjectMap<T> => {
  let map = {};
  target.forEach((item) => {
    let keyValue = item[idKeyName];
    map[keyValue] = item;
  });
  return map;
}

export const makeIndexMap = (target: {}[], idKeyName: string) => {
  let idIndexMap = {};
  target.forEach((item, index) => {
    let keyValue = item[idKeyName];
    idIndexMap[keyValue] = index;
  });
  return idIndexMap;
}

export const makerArray = (source: {} | {}[]) => {
  let sourceArray = null;
  if (!(source instanceof Array)) {
    sourceArray = new Array(1);
    sourceArray[0] = source;
  } else {
    sourceArray = source;
  }
  return sourceArray;
}

export const updateArray = (sources: any[], dest: {} | {}[], idKeyName: string) => {
  let result = Array.from(sources);
  let idIndexMap = makeIndexMap(result, idKeyName);
  let sourceArray = makerArray(dest);
  sourceArray.forEach((item) => {
    let keyValue = item[idKeyName];
    let forUpdateIndex = idIndexMap[keyValue];
    if (forUpdateIndex != null) {
      let newItem = {...result[forUpdateIndex], ...item};
      result[forUpdateIndex] = newItem;
    } else {
      let num = result.push(item);
      idIndexMap[keyValue] = num;
    }
  });

  return result;
}

export const delateArray = (sources: {}[], dest: string | string[] | {}, idKeyName: string) => {
  let sourceArray = makerArray(dest);
  let map = {};
  let result = [];
  sourceArray.forEach((item) => {
    if (!(item instanceof Object)) {
      map[item] = item;
    } else {
      let key = item[idKeyName];
      map[key] = key;
    }
  });

  sources.forEach((item) => {
    let key = item[idKeyName];
    if (key != null) {
      let findKey = map[key];
      if (findKey == null) {
        result.push(item);
      }
    }
  });
  return result;
}

export const getMomentDate = (value) => {
  if (value == null) {
    return value;
  } else if (value._isAMomentObject) {
    return moment(value).toDate();
  }
  return value;
}

export const optimizeFieldPostValues = (dest: {}) => {
  Object.keys(dest).forEach((key) => {
    let item = dest[key];
    if (item == null) {
      delete dest[key];
    } else if (item._isAMomentObject) {
      dest[key] = item.valueOf();
    } else if (item instanceof Date) {
      dest[key] = item.valueOf();
    }
  });
}


export const mergeObjects = (...sources) => {
  if (!sources || sources.length == 1) {
    return sources;
  }

  const result = {...sources[0]};
  let i = 0;
  while (i < sources.length - 1) {
    i++;
    const dest = sources[i];
    if (dest != null) {
      for (let key in dest) {
        const destItem = dest[key];
        if (destItem != null) {
          if (!(destItem instanceof Array)) {
            const sourceItem = result[key];
            if (sourceItem && sourceItem instanceof Object) {
              if (destItem instanceof Object) {
                result[key] = mergeObjects(sourceItem, destItem);
                continue;
              }
            }
          }
        }
        result[key] = destItem;
      }
    }
  }
  return result;
}


export const operateOptions = [{key: 'Update', name: 'Update'}, {key: 'Delete', name: 'Delete'}];

export const cleanSelectRowsProps: AreaState<any> = {
  selectedRowKeys: [],
};

export interface FormPropsUtils extends WrappedFormUtils {
}

export interface FormProps {
  form?: FormPropsUtils;
}

export const commonFormItemLayout: FormItemProps = {
  labelCol: {
    xs: {span: 48},
    sm: {span: 12},
  },

  wrapperCol: {
    xs: {span: 48},
    sm: {span: 12},
  },
};

export function uncapFirst(str){
  return str.replace(/(\w)/,function(v){return v.toLowerCase()});
}







