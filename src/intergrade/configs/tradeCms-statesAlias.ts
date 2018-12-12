/**
 *  Do not remove this unless you get business authorization.
 *  tradeCms states alias
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {User_$userIdState} from "../interfaces/User_$userIdFaces";
import {LoginState} from "../interfaces/LoginFaces";
import {AppState} from "../interfaces/AppFaces";
import {Bbs_topicState} from "../interfaces/Bbs_topicFaces";
import {RoleState} from "../interfaces/RoleFaces";
import {HomeState} from "../interfaces/HomeFaces";
import {UserState} from "../interfaces/UserFaces";

export default interface StatesAlias {
  user_$userId: User_$userIdState;
  login: LoginState;
  app: AppState;
  bbs_topic: Bbs_topicState;
  role: RoleState;
  home: HomeState;
  user: UserState;
}