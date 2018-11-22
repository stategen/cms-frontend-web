/**
 *  Do not remove this unless you get business authorization.
 *  tradeCms states alias
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {LoginState} from "../interfaces/LoginFaces";
import {HomeState} from "../interfaces/HomeFaces";
import {UserState} from "../interfaces/UserFaces";
import {User_$userIdState} from "../interfaces/User_$userIdFaces";
import {RoleState} from "../interfaces/RoleFaces";
import {AppState} from "../interfaces/AppFaces";

export default interface StatesAlias {
  login: LoginState;
  home: HomeState;
  user: UserState;
  user_$userId: User_$userIdState;
  role: RoleState;
  app: AppState;
}