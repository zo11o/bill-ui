export type IRouteBase = {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  // 路由信息
  meta: IRouteMeta;
  // 是否校验权限，false 为不校验，不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
};

export type IRouteMeta = {
  title: string;
  icon?: string;
  // 是否导航页面 安装大小排序 越小越靠前 不存在即不是导航页面
  navKey?: number;
};

export type IRoute = {
  children?: IRoute[];
} & IRouteBase;
