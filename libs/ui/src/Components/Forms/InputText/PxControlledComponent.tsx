import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import * as fromHelpers from '../../../Helpers';
import * as fromFormHelpers from '../@form-helper';
import { PxControlledComponentProps } from './interface';
import { usePxInput } from './usePxInput';
import { PxUncontrollerComponent } from './PxUncontrollerComponent';

export const PxControlledComponent = (props: PxControlledComponentProps) => {
  const { control, rule, name, required } = usePxInput();
  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange } }) => (
        <PxUncontrollerComponent onChangeRHF={onChange} {...props} />
      )}
    />
  );
};
