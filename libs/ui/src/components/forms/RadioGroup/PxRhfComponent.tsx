import { usePxRadioGroup } from './usePxRadioGroup';
import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import * as fromHelpers from '../../../helpers';
import * as fromFormHelpers from '../@form-helper';
import { PxUncontrollerComponent } from './PxUnControlledComponent';

export const PxRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = usePxRadioGroup();
  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <PxUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};
