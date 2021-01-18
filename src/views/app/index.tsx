import './index.scss';
import type { FC, ReactElement } from 'react';

type IProps = {};

type defaultProps = {
  children: FC<ReactElement>;
};

function Layout(props: any) {
  return (
    <div className="app">
      {/* <header className="app-header">你好啊</header> */}
      <div className="app-body">{props.children}</div>
      <nav className="app-nav">
        <li>总览</li>
        <li>列表</li>
        <li>个人中心</li>
      </nav>
    </div>
  );
}

function R() {
  return <div>这里是内容</div>;
}

function App() {
  return (
    <div>
      {/* {process.env.REACT_APP_TOKEN}
      {process.env.NODE_ENV}
      {process.env.REACT_APP_VERSION} */}
      <Layout>
        <R></R>
      </Layout>
    </div>
  );
}

export default App;
