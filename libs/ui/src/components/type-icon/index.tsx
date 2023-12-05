import {
  BsFillBookmarkFill,
  BsFillCheckSquareFill,
  BsFillExclamationOctagonFill,
} from 'react-icons/bs';
import { Case, Default, Switch } from 'react-if';

interface TypeIconProps {
  type: string;
}

export const TypeIcon = (props: TypeIconProps) => {
  const { type } = props;
  return (
    <Switch>
      <Case condition={type?.toLowerCase() === 'story'}>
        <BsFillCheckSquareFill size="16px" color="#4fade6" />
      </Case>
      <Case condition={type?.toLowerCase() === 'bug'}>
        <BsFillExclamationOctagonFill size="16px" color="#e44d42" />
      </Case>
      <Default>
        <BsFillBookmarkFill size="16px" color="#65ba43" />
      </Default>
    </Switch>
  );
};
