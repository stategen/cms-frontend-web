/**
 *  Do not remove this unless you get business authorization.
 *  tradeCms states alias
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {RoleState} from "../interfaces/RoleFaces";
import {UserState} from "../interfaces/UserFaces";
import {DashboardState} from "../interfaces/DashboardFaces";
import {AppState} from "../interfaces/AppFaces";
import {LoginState} from "../interfaces/LoginFaces";
import {User$userIdState} from "../interfaces/User$userIdFaces";

export default interface StatesAlias {
  role: RoleState;
  user: UserState;
  dashboard: DashboardState;
  app: AppState;
  login: LoginState;
  user$userId: User$userIdState;
}