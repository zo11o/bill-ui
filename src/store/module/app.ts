import { IRoute } from "router/config";
import { flattenRoute } from "router/utils";
import { IActions } from "../types";

const SET_SIDE_BAR_OPENED = "SET_SIDE_BAR_OPENED";

export interface AppState {
  routes: IRoute[];
  flattenRoutes: IRoute[];
  init: boolean;
}

const defaultApp: AppState = {
  routes: [],
  flattenRoutes: [],
  init: false,
};

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
