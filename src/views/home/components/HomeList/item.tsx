import React from 'react';
import { IBillItem } from 'service/home/list';

interface IListItem {
  data: IBillItem;
}

function ListItem(props: IListItem) {
  const { data } = props;
  return (
    <div>
      {data.icon}
      {data.name}
      {data.value}
    </div>
  );
}

export default ListItem;
