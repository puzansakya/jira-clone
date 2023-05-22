import Select from 'react-select';
import AssigneeDropdown from './components/AssigneeDropdown';
import { usePxMultiSelect } from './usePxMultiSelect';

interface PxUncontrollerComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
}
export const PxUncontrollerComponent = (
  props: PxUncontrollerComponentProps
) => {
  const { onChangeRHF, value: rhfValue } = props;

  const pxContext = usePxMultiSelect();

  // explicit passing:
  // custom handle change

  // props passed:
  // name: '',
  // value: null,
  // options: null,
  // ...contextRest

  // props omited:
  // onChange: undefined,
  // label: 'Sample label',
  // control: undefined,
  // errors: undefined,
  // required: false,
  // rule: undefined,

  const {
    name,
    options,
    label,
    control,
    errors,
    required,
    rule,

    // this is user defined value for uncontrolled component
    value,
    onChange: _onChange,

    ...contextRest
  } = pxContext;

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value ?? [];

  const inputProps = {
    name,
    value: valueNormalized,
    options,
    ...contextRest,
  };

  /**
   * name
   * value
   * options
   * onchange
   */

  return <AssigneeDropdown onChange2={handleChange} {...inputProps} />;
};
