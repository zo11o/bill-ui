import React from 'react';
import type { IBillItem } from 'service/home/list';
import ListItem from './item';

interface HomeListProps {
  sourceData: IBillItem[];
}

function HomeList(props: HomeListProps) {
  const { sourceData } = props;

  return (
    <div>
      {sourceData.map((o) => (
        <ListItem data={o} key={o.id} />
      ))}
    </div>
  );
}

export default HomeList;
