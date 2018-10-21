/**
 *  Do not remove this unless you get business authorization.
 *  tradeCms states alias
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  鐢� [stategen.progen]浠ｇ爜鐢熸垚鍣ㄥ垱寤猴紝涓嶈鎵嬪姩淇敼,鍚﹀垯灏嗗湪涓嬫鍒涘缓鏃惰嚜鍔ㄨ鐩�
 */
import {LoginState} from "../interfaces/LoginFaces";
import {DashboardState} from "../interfaces/DashboardFaces";
import {AppState} from "../interfaces/AppFaces";
import {RoleState} from "../interfaces/RoleFaces";
import {UserState} from "../interfaces/UserFaces";
import {User$userIdState} from "../interfaces/User$userIdFaces";

export default interface StatesAlias {
  login: LoginState;
  dashboard: DashboardState;
  app: AppState;
  role: RoleState;
  user: UserState;
  user$userId: User$userIdState;
}