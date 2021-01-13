export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export interface PageQueryParams {
  page: number;
  size: number;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}
