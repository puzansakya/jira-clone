import { isEmpty } from 'lodash';
import { Controller } from 'react-hook-form';
import * as fromHelpers from '../../../helpers';
import * as fromFormHelpers from '../@form-helper';
import { PxControlledComponentProps } from './interface';
import { PxUncontrollerComponent } from './PxUncontrolledComponent';
import { usePxInputEditable } from './usePxInputEditable';

export const PxControlledComponent = (props: PxControlledComponentProps) => {
  const { control, rule, name, required } = usePxInputEditable();
  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => (
        <PxUncontrollerComponent
          value={value}
          onChangeRHF={onChange}
          {...props}
        />
      )}
    />
  );
};
