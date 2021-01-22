import { request } from 'api/request';

export type MenuSearchParams = {
  name?: string;
  id?: number;
};

export type Demo = {
  name?: string;
};

export function apiGetMenuList(params?: MenuSearchParams) {
  return request<Demo>({
    method: 'GET',
    url: '/test',
    params,
  });
}
