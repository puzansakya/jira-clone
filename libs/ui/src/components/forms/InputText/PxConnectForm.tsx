import { useFormContext } from 'react-hook-form';
import { PxConnectFormProps } from './interface';

export const PxConnectForm = (props: PxConnectFormProps) => {
  const { children } = props;
  const methods = useFormContext();

  return children({ ...methods });
};
