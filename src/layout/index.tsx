import React, { Suspense } from 'react';
import MainRoutes from './MainRoutes';
import { connect } from 'react-redux';
import Spin from 'components/Spin';
import LayoutNav from 'components/LayoutNav';
import classnames from 'classnames';
import type { Settings } from 'store/module/settings';
import './index.less';
import type { IStoreState } from 'store/types';

type LayoutProps = {
  colorWeak: Settings['colorWeak'];
};

function Layout(props: LayoutProps) {
  console.log(props);
  return (
    <>
      <section
        className={classnames({
          layout: true,
        })}
      >
        <section className={classnames('layout__main')}>
          <div className={classnames('layout__main__body')}>
            <Suspense fallback={<Spin size="large" className="layout__loading" />}>
              <MainRoutes />
            </Suspense>
          </div>
          <div
            className={classnames({
              layout__main__nav: true,
            })}
          >
            <LayoutNav />
          </div>
        </section>
      </section>
    </>
  );
}

export default connect(({ settings: { colorWeak } }: IStoreState) => ({
  colorWeak,
}))(Layout);
