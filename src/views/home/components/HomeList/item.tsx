import React from 'react';
import { IBillItem } from 'service/home/list';
import classnames from 'classnames';
import './item.less';

interface IListItem {
  data: IBillItem;
}

function ListItem(props: IListItem) {
  const { data } = props;
  return (
    <div className={classnames('p-cmp-home-list__item')}>
      <div>
        <span className="iconfont icon-home"></span>
      </div>
      <div className={classnames('p-cmp-home-list__item--right')}>
        <span>{data.name}</span>
        <span>{data.value}</span>
      </div>
    </div>
  );
}

export default ListItem;
