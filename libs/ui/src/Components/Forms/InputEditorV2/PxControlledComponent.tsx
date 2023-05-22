import { isEmpty } from 'lodash';
import { Controller } from 'react-hook-form';
import * as fromHelpers from '../../../Helpers';
import * as fromFormHelpers from '../@form-helper';
import { PxUncontrolledComponent } from './PxUncontrolledComponent';
import { usePxInputEditor } from './usePxInputEditor';

type PxControlledComponentProps = Record<string, any>;

export const PxControlledComponent = (props: PxControlledComponentProps) => {
  const { control, rule, name, required } = usePxInputEditor();
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
        <PxUncontrolledComponent
          value={value}
          onChangeRHF={onChange}
          {...props}
        />
      )}
    />
  );
};
