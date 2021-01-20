import type { Reducer } from 'redux';
import type { IActions } from 'store/types';
import AdminConfig from 'config';

type MenuTheme = 'dark' | 'light';

export type Settings = {
  theme: MenuTheme;
  colorWeak: boolean;
};

const defaults: Settings = {
  colorWeak: AdminConfig.colorWeak,
  theme: AdminConfig.theme,
};

const UPDATE_SETTINSG = 'UPDATE_SETTINSG';

const settingsReducer: Reducer<Settings, IActions<any>> = (
  state = defaults,
  action: IActions<any>,
) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SETTINSG:
      return {
        ...payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default settingsReducer;
