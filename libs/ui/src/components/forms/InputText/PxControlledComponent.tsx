import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import * as fromHelpers from '../../../helpers';
import * as fromFormHelpers from '../@form-helper';
import { PxControlledComponentProps } from './interface';
import { usePxInput } from './usePxInput';
import {PxDebouncedUncontrollerComponent, PxUncontrollerComponent} from './PxUncontrollerComponent';

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

export const PxDebouncedControlledComponent = (props: PxControlledComponentProps) => {
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
            render={({ field: { onChange, value } }) => (
                <PxDebouncedUncontrollerComponent
                    value={value}
                    onChangeRHF={onChange}
                    {...props}
                />
            )}
        />
    );
};
