import type { IRoute } from 'router/config';
import { flattenRoute } from 'router/utils';
import type { IActions } from '../types';

export type AppState = {
  routes: IRoute[];
  flattenRoutes: IRoute[];
  init: boolean;
};

const defaultApp: AppState = {
  routes: [],
  flattenRoutes: [],
  init: false,
};

const SET_SIDE_BAR_OPENED = 'SET_SIDE_BAR_OPENED';
const SET_SIDE_BAR_ROUTES = 'SET_SIDE_BAR_ROUTES';

export const setSideBarRoutes = (routers: IRoute[]) => ({
  type: SET_SIDE_BAR_ROUTES,
  payload: routers,
});

const appReducer = (state = defaultApp, action: IActions<any>) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SIDE_BAR_OPENED:
      return {
        ...state,
        sidebar: payload,
      };

    case SET_SIDE_BAR_ROUTES:
      return {
        ...state,
        routes: payload,
        flattenRoutes: flattenRoute(payload, true, false),
        init: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default appReducer;
