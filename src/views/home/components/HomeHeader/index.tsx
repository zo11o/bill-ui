import React, { useState } from 'react';
import classnames from 'classnames';
import './index.less';
import { DatePicker, Icon } from 'antd-mobile';
import dateJs from 'utils/date';

const toDay = new Date();

function HomePage() {
  const [nowDate, setDate] = useState(new Date(Date.now()));

  return (
    <div className={classnames('p-cmp-home-header')}>
      <div className="header">周罗记账</div>
      <div className={classnames('main')}>
        <div className="item data">
          <div className="tit">{dateJs(nowDate).format('YYYY年')} </div>
          <DatePicker
            mode="month"
            title="选择月份"
            extra="Optional"
            value={nowDate}
            format={'YYYY-MM'}
            onChange={(date) => setDate(date)}
            className={'my-am-date'}
            maxDate={toDay}
          >
            <div className="info">
              {dateJs(nowDate).format('MM月')} <Icon type="down" size={'xs'} />
            </div>
          </DatePicker>
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
