import React from "react";
import MainRoutes from "./MainRoutes";
import { connect } from "react-redux";

function Layout() {
  return (
    <>
      <MainRoutes />
      <nav>
        <li>首页</li>
        <li>列表</li>
        <li>中心</li>
      </nav>
    </>
  );
}

export default connect()(Layout);
