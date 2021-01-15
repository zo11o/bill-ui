import React from "react";
import MainRoutes from "./MainRoutes";
import { connect } from "react-redux";
import { Button } from "antd-mobile";

interface LayoutProps {}

function Layout(props: LayoutProps) {
  return (
    <>
      <Button>你好</Button>
      <MainRoutes />
      <nav>
        <li>首页</li>
        <li>列表</li>
        <li>中心</li>
      </nav>
    </>
  );
}

export default connect(() => ({}))(Layout);
