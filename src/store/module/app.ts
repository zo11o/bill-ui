import { IRoute } from "router/config";
import { IActions } from "../types";

const defaultApp: AppState = {
  routes: [],
  flattenRoutes: [],
  init: false,
};

const SET_SIDE_BAR_OPENED = "SET_SIDE_BAR_OPENED";
const SET_SIDE_BAR_ROUTES = "SET_SIDE_BAR_ROUTES";

export const setSideBarRouters = (routers: IRoute[]) => {
  console.log(routers);
  return {
    type: SET_SIDE_BAR_ROUTES,
    payload: routers,
  };
};
export interface AppState {
  routes: IRoute[];
  flattenRoutes: IRoute[];
  init: boolean;
}

const appReducer = (state = defaultApp, action: IActions<any>) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SIDE_BAR_OPENED:
      return {
        ...state,
        sidebar: payload,
      };

    default:
      return {
        ...defaultApp,
      };
  }
};

export default appReducer;
