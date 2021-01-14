import { request } from "api/request";
export interface MenuSearchParams {
  name?: string;
  id?: number;
}

export interface Demo {
  name?: string;
}

export function apiGetMenuList(params?: MenuSearchParams) {
  return request<Demo>({
    method: "GET",
    url: "/menu",
    params,
  });
}
