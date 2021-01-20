import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import HomeHeader from './components/HomeHeader';

function Home(props: any) {
  console.log(props);
  return (
    <div className={classnames('page-home')}>
      <HomeHeader />
    </div>
  );
}

export default connect(() => ({}))(Home);
