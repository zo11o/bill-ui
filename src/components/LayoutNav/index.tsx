import React from 'react';
import classnames from 'classnames';
import './style/index.less';
import { IRoute } from 'router/config';
import { getNavRoutes } from 'router/utils';

function LayoutNav(props: IRoute) {
  console.log(props.meta.navKey);
  const navRoutes = getNavRoutes().sort((a, b) =>
    a.meta.navKey && b.meta.navKey ? a.meta.navKey - b.meta.navKey : -1,
  );
  const renderTabNav = () => {
    return (
      <div className={classnames('cmp__nav')}>
        {navRoutes.map((o, i) => (
          <div
            className={classnames({
              'cmp__nav-item': true,
            })}
            key={o.path + String(i)}
          >
            <i>{i}</i>
            <span>{o.meta.title}</span>
          </div>
        ))}
      </div>
    );
  };

  return <>{renderTabNav()}</>;
}

export default LayoutNav;
