/**
 *  Do not remove this unless you get business authorization.
 *  User
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import {mergeObjects} from "@utils/DvaUtil";
import {userDefaultModel} from "@i/models/UserDefaultModel";
import {UserModel} from "@i/interfaces/UserFaces";
import UserApis from "@i/apis/UserApis";
import {userCustomState} from './UserCustomFaces';
import AntdPageList from "@i/beans/AntdPageList";
import RoleType from "@i/enums/RoleType";
import User from "@i/beans/User";

const userModel: UserModel = userDefaultModel;
userModel.state=mergeObjects(userModel.state,userCustomState);

export default userModel;