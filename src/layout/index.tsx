import React from "react";
import MainRoutes from "./MainRoutes";

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

export default Layout;
