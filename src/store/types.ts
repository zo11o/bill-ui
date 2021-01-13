import { AppState } from "./module/app";

export interface IStoreState {
  app: AppState;
}

export interface IActions<T> {
  type: string;
  payload: T;
}
