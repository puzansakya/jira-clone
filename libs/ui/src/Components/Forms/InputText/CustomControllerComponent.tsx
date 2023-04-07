import isEmpty from 'lodash/isEmpty';
import { Controller } from 'react-hook-form';
import * as fromHelpers from '../../../Helpers';
import * as fromFormHelpers from '../@form-helper';
import Component from './Component';
import { useInputText } from './useInputText';

const CustomControllerComponent = (props: any) => {
  const { name, control, rule, required } = useInputText();

  let _rule = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={(controllerProps) => {
        const {
          field: { onChange: _onChange, value: _value },
        } = controllerProps;
        return <Component value={_value} onChangeRHF={_onChange} {...props} />;
      }}
    />
  );
};

export default CustomControllerComponent;
