import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import HomeHeader from './components/HomeHeader';
import HomeList from './components/HomeList';
import { IBillItem } from 'service/home/list';
import data from 'mock/demo';

import './index.less';

const ListData: IBillItem[] = [
  {
    id: '1',
    name: '账单1',
    value: '41',
    icon: 'house',
  },
  {
    id: '2',
    name: '账单2',
    value: '-12',
    icon: 'house',
  },
  {
    id: '3',
    name: '账单3',
    value: '-21',
    icon: 'house',
  },
];

function Home() {
  console.log(data);
  return (
    <div className={classnames('page-home')}>
      <HomeHeader />
      <div className={classnames('page-home__body')}>
        <div className={'page-home__body-tit'}>
          <div>01月20日 星期三</div>
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
