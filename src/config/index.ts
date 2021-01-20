export type Config = {
  BASENAME?: string;
  // 请求成功码
  SUCCESS_CODE: number;
  // 登录过期，或者未登录
  LOGIN_EXPIRE: number;

  TOKEN_KEY: string;

  theme: 'dark' | 'light';

  title: string;

  API_URL: string;

  // 是否开启色弱模式
  colorWeak: boolean;
};

const AppConfig: Config = {
  BASENAME: '/bill-ui',
  SUCCESS_CODE: 200,
  LOGIN_EXPIRE: 400,
  TOKEN_KEY: 'bill-token-tey',
  theme: 'light',
  title: 'My Bill',
  API_URL: 'https://www.landluck.com.cn/react-ant-admin-api',
  // 是否开启色弱模式
  colorWeak: false,
};

export default AppConfig;
