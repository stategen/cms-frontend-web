import pathToRegexp from "path-to-regexp";
import {RouteOrders} from "@utils/DvaUtil";

export default class RouteUtil {

  static getRealPathname(pathname: string): string {
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return pathname;
  }

  static isRoutMatchPathname(route, pathname: string):RegExpExecArray {
    let match = pathToRegexp(route || '').exec(pathname);
    return match;
  }

  static isRouteOpend(routeOrders:RouteOrders, pathname: string): boolean {
    if (pathname) {
      pathname = this.getRealPathname(pathname);
      const routes = Object.keys(routeOrders);
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i]
        if (this.isRoutMatchPathname(route, pathname)) {
          return true
        }
      }
    }
    return false;
  }


  static getNextMaxOpendOrder(routeOrders: RouteOrders): number {
    //1留给dashborad
    let maxOpendOrder = 1;
    const values = Object.values(routeOrders);
    const maxOrder=Math.max(maxOpendOrder, ...values) + 1;
    return maxOrder;
  }



  static checkNotExistAndGetNextOrder(routeOrders:RouteOrders, route: string): number {
    if (route) {
      if (!routeOrders[route]) {
        const nextMaxOpendOrder = this.getNextMaxOpendOrder(routeOrders);
        return nextMaxOpendOrder;
      }
    }
    return null;
  }

  static checkAndGetPreOrder(opendOrders :RouteOrders, inactiveRoute: string): string {
    let maxOpendOrder = 0;
    let route = null;
    Object.keys(opendOrders).forEach((tempRoute) => {
      if (inactiveRoute !== tempRoute) {
        const temp = opendOrders[tempRoute];
        if (temp > maxOpendOrder) {
          maxOpendOrder = temp;
          route = tempRoute;
        }
      }
    });

    return route;
  }
}

