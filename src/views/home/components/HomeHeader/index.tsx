import React from 'react';
import classnames from 'classnames';
import './index.less';

function HomePage() {
  return (
    <div className={classnames('p-cmp-home-header')}>
      <div className="header">周罗记账</div>
      <div className={classnames('main')}>
        <div className="item data">
          <div className="tit">2021 年</div>
          <div className="info">01 月</div>
        </div>
        <div className="item">
          <div className="tit">收入</div>
          <div className="info in">0.00</div>
        </div>
        <div className="item out">
          <div className="tit">支出</div>
          <div className="info out">0.00</div>
        </div>
      </div>
      <div className={classnames('bar')}>
        <div className="item">账单</div>
        <div className="item">记账</div>
        <div className="item">理财</div>
      </div>
    </div>
  );
}

export default HomePage;
