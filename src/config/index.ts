export interface Config {
  BASENAME?: string;
  // 请求成功码
  SUCCESS_CODE: number;
  // 登录过期，或者未登录
  LOGIN_EXPIRE: number;

  TOKEN_KEY: string;

  theme: "dark" | "light";

  title: string;
}

const AppConfig: Config = {
  BASENAME: "/my-bill",
  SUCCESS_CODE: 200,
  LOGIN_EXPIRE: 400,
  TOKEN_KEY: "bill-token-tey",
  theme: "light",
  title: "My Bill",
};

export default AppConfig;
