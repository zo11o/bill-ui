import React, { Suspense } from 'react';
import MainRoutes from './MainRoutes';
import { connect } from 'react-redux';
import Spin from 'components/Spin';
import LayoutNav from 'components/LayoutNav';
import classnames from 'classnames';

function Layout() {
  return (
    <>
      <section
        className={classnames({
          layout: true,
        })}
      >
        <section className={classnames('layout__main')}>
          <Suspense fallback={<Spin size="large" className="layout__loading" />}>
            <MainRoutes />
          </Suspense>
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

export default connect(() => ({}))(Layout);
