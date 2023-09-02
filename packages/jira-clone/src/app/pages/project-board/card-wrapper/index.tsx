import React  from 'react';
import Card   from '../card';

export const CardWrapper = React.memo((props: any) => {
  
  return props.blocks.map((block: any, index: any) => (
    <Card
      key                        = {block.id}
      block                      = {block}
      index                      = {index}
    />
  ));
});

export default CardWrapper;
