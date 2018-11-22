import {mergeObjects} from "@utils/DvaUtil";
import {user_$userIdDefaultModel} from "@i/models/User_$userIdDefaultModel";
import {user_$userIdEffects, User_$userIdModel, user_$userIdReducers} from "@i/interfaces/User_$userIdFaces";
import User_$userIdApis from "@i/apis/User_$userIdApis";
import {user_$userIdCustomState} from './User_$userIdCustomFaces';
import User from "@i/beans/User";
import pathToRegexp from "path-to-regexp";

const user_$userIdModel: User_$userIdModel = user_$userIdDefaultModel;
user_$userIdModel.state=mergeObjects(user_$userIdModel.state,user_$userIdCustomState);


user_$userIdModel.reducers.querySuccess = (state, {payload}) => {
  const {user} = payload
  return {
    ...state,
    user,
  }
};

user_$userIdModel.effects.getUserById = function* ({payload}, {call, put, select}) {
  const user: User = yield call(User_$userIdApis.getUserById, payload);
  if (user) {
    yield put({
      type: user_$userIdReducers.querySuccess,
      payload: {
        user,
      },
    })
  }
}


user_$userIdModel.subscriptions.setup = ({dispatch, history}) => {
  history.listen(({pathname}) => {
    const match = pathToRegexp(user_$userIdModel.pathname).exec(pathname)
    if (match) {
      dispatch({type: user_$userIdEffects.getUserById, payload: {userId: match[1]}})
    }
  })
};


/*mergeObjects(abstractModel, user$userIdModel);*/

export default user_$userIdModel;
