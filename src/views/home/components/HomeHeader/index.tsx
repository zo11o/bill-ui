import React from 'react';
import classnames from 'classnames';
import './index.less';

function HomePage() {
  return (
    <div className={classnames('p-cmp')}>
      <div className={classnames('p-cmp__main')}>
        <div className="p-cmp__main-item p-cmp__main-data">
          <div>2021 年</div>
          <div>01 月</div>
        </div>
        <div className="p-cmp__main-item p-cmp__main-out">支出</div>
        <div className="p-cmp__main-item p-cmp__main-int">收入</div>
      </div>
      <div className={classnames('p-cmp__bar')}>这里是栏目</div>
    </div>
  );
}

export default HomePage;
