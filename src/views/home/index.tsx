import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import HomeHeader from './components/HomeHeader';
import HomeList from './components/HomeList';
import data from 'mock/demo';
import date, { DayNumber, DAY_MAP } from 'utils/date';

import './index.less';
import { IBillList } from 'service/home/list';

const ListData: IBillList = data.data;

const formatDate = () => {
  return `${date().format('YYYY年MM月DD日')}  ${DAY_MAP[date().day() as DayNumber]}`;
};

function Home() {
  formatDate();
  return (
    <div className={classnames('page-home')}>
      <HomeHeader />
      <div className={classnames('page-home__body')}>
        <div className={'page-home__body-tit'}>
          <div className="page-home__body-tit--left">{formatDate()}</div>
          <div>支出16.33</div>
        </div>
        <div className="page-home__body-list">
          <HomeList sourceData={ListData}></HomeList>
        </div>
      </div>
    </div>
  );
}

export default connect(() => ({}))(Home);
