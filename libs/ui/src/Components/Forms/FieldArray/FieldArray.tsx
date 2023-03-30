import { useFieldArray } from 'react-hook-form';

interface FieldArrayProps {
  control: any;
  name: string;
  errors: string;
  renderField: any;
}

export const FieldArray = (props: FieldArrayProps) => {
  const { control, name, errors, renderField } = props;

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return renderField({ errors, name, fields, remove, append });
};

export default FieldArray;
