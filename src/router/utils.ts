import routes from "./index";
import { IRoute } from "./config";
import route from "./routers/system";

/**
 * 这里将 路由解析成三个数组
 * 第一个：最外层路由，例如 Layout UserLayout
 * 第二个：系统路由，例如 Login Register RegisterResult
 * 第三个：业务路由，为 / 路由下的业务路由
 */
export const layoutRouteList = getLayoutRouteList();
export const businessRouteList = getBusinessRouteList();

/**
 * 根据 depp 参数将路由变为一维
 * @param routeList
 * @param deep
 * @param auth
 */
export function flattenRoute(
  routeList: IRoute[],
  deep: boolean,
  auth: boolean
): IRoute[] {
  const result: IRoute[] = [];
  for (let i = 0; i < routeList.length; i++) {
    const route = routeList[i];

    result.push({
      ...route,
      auth: typeof route.auth !== "undefined" ? route.auth : auth,
    });

    if (route.children && deep) {
      result.push(...flattenRoute(route.children, deep, auth));
    }
  }
  return result;
}

/**
 * 获取布局路由
 */
export function getLayoutRouteList() {
  return flattenRoute(routes, false, false);
}

/**
 * 业务路由
 */
export function getBusinessRouteList(): IRoute[] {
  const routeList = routes.filter((route) => route.path === "/");
  if (routeList.length) {
    return flattenRoute(routeList, true, false);
  }

  return [];
}
