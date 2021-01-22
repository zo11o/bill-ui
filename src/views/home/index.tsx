import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import HomeHeader from './components/HomeHeader';
import HomeList from './components/HomeList';
import data from 'mock/demo';

import './index.less';
import { IBillList } from 'service/home/list';

const ListData: IBillList = data.data;

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
