import FormLabel from '../FormLabel/FormLabel';
import { useInputText } from './useInputText';

const CustomFormLabel = (props: any) => {
  const { label, customLabel } = useInputText();
  return <FormLabel label={`${label}`} customLabel={customLabel} {...props} />;
};

export default CustomFormLabel;
