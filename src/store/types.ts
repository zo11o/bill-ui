import type { AppState } from './module/app';

export type IStoreState = {
  app: AppState;
};

export type IActions<T> = {
  type: string;
  payload: T;
};
