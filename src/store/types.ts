import { AppState } from './module/app';
import { Settings } from './module/settings';

export type IStoreState = {
  app: AppState;
  settings: Settings;
};

export type IActions<T> = {
  type: string;
  payload: T;
};
