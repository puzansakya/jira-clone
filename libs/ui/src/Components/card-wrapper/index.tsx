import { Card } from 'ui';

interface CardWrapperProps {
  routeEnum: any;
  blocks: any[];
}
export const CardWrapper = (props: CardWrapperProps) => {
  const { routeEnum, blocks } = props;
  return (
    <>
      {blocks.map((block: any, index: any) => (
        <Card
          routeEnum={routeEnum}
          key={block.id}
          block={block}
          index={index}
        />
      ))}
    </>
  );
};
