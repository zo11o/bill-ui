import React, { Suspense } from 'react';
import MainRoutes from './MainRoutes';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Spin from 'components/Spin';

function Layout() {
  return (
    <>
      <section
        className={classNames({
          layout: true,
        })}
      >
        <section className={classNames('layout__main')}>
          <Suspense fallback={<Spin size="large" className="layout__loading" />}>
            <MainRoutes />
          </Suspense>
        </section>
      </section>
    </>
  );
}

export default connect(() => ({}))(Layout);
