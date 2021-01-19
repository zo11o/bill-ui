import React from 'react';
import classnames from 'classnames';
import './style/index.less';
import { getNavRoutes } from 'router/utils';
import { NavLink } from 'react-router-dom';

function LayoutNav() {
  const navRoutes = getNavRoutes().sort((a, b) =>
    a.meta.navKey && b.meta.navKey ? a.meta.navKey - b.meta.navKey : -1,
  );
  const renderTabNav = () => {
    return (
      <div className={classnames('cmp__nav')}>
        {navRoutes.map((o, i) => (
          <NavLink
            to={o.path}
            className={classnames({
              'cmp__nav-item': true,
              'cmp__nav-item--active': true,
            })}
            key={o.path + String(i)}
          >
            <i className={classnames('cmp__nav-icon', `iconfont icon-${o.meta.icon}`)}></i>
            <span>{o.meta.title}</span>
          </NavLink>
        ))}
      </div>
    );
  };

  return <>{renderTabNav()}</>;
}

export default LayoutNav;
