// LIBS
import { Controller } from 'react-hook-form';

// CHAKRA-UI
import {
  FormControl,
  FormHelperText,
  Input,
  InputProps,
} from '@chakra-ui/react';

// UTILITIES
import isEmpty from 'lodash/isEmpty';
import * as fromHelpers from '../../../Helpers';

// COMPONENTS
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import FormLabel from '../FormLabel/FormLabel';
import RenderWithLabelPosition from '../RenderWithLabelPosition/RenderWithLabelPosition';

// FORM HELPERS;
import * as fromFormHelpers from '../@form-helper';

/**
 * SOME TYPES ARE OMITTED BECAUSE IT EXISTS AND CONFLICTS WITH THE CHILD INTERFACE (TextInputComponentProps)
 */
type TextInputComponentProps = Pick<
  fromFormHelpers.BaseFormProps,
  'name' | 'value' | 'onChangeRHF' | 'onChange'
> &
  InputProps;

export const TextInputComponent = ({
  name,
  value,
  onChange: _onChange,
  onChangeRHF,
  ...rest
}: TextInputComponentProps) => {
  const handleChange = (e: any) => {
    const { value } = e.target;
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <Input
      test-id="text-input"
      value={value}
      onChange={handleChange}
      w="full"
      bg="white"
      {...rest}
    />
  );
};

type TextInputProps = { width?: any } & Omit<
  fromFormHelpers.BaseFormProps,
  'onChange'
> &
  InputProps;

export function TextInput(props: TextInputProps) {
  const {
    label,
    control,
    ignoreControl = false,
    required = false,
    showOptionalLabel = true,
    errors,
    rule,
    width,
    customLabel,
    labelPosition,
    errorMessage,
    ...rest
  } = props;
  /**
   * GET THE ERROR FROM ERRORS
   * LATER USE TO DISPLAY ERROR
   */
  const error =
    errorMessage ||
    (errors &&
      fromHelpers.resolveObjectValueByPath(errors, props.name)?.message);

  /**
   * IF USER PASSES OWN RULE,
   * MERGE THE RULE WITH DEFAULT RULE
   * AND OVERWRITE IT
   */
  let _rule = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  /**
   * IF NO CONTROL IS PROVIDED,
   * THEN USER IS USING THIS COMPONENT OUTSIDE FORM
   * NORMALYY AS FILTER OR CUSTOM USE CASE
   */
  const _ignoreControl = !control || ignoreControl;
  if (_ignoreControl) {
    return (
      <FormControl
        display="flex"
        flexDirection="column"
        gap={2}
        id={props.name}
        isRequired={required}
        style={{ width }}
      >
        <RenderWithLabelPosition
          labelPosition={labelPosition}
          label={<FormLabel label={`${label}`} customLabel={customLabel} />}
          inputComponent={<TextInputComponent {...rest} />}
        />
      </FormControl>
    );
  }

  /**
   * USE THE COMPONENT WITH IN FORM PROVIDER
   */
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      gap={1}
      id={props.name}
      isRequired={false}
      style={{ width }}
    >
      <RenderWithLabelPosition
        labelPosition={labelPosition}
        label={
          <FormLabel
            color="#000000b3"
            fontSize="14px"
            lineHeight="21px"
            label={label}
            customLabel={customLabel}
          />
        }
        inputComponent={
          <Controller
            control={control}
            name={props.name}
            rules={_rule}
            render={(controllerProps) => {
              const {
                field: { onChange: _onChange, value: _value },
              } = controllerProps;
              return (
                <TextInputComponent
                  {...rest}
                  value={_value}
                  onChangeRHF={_onChange}
                />
              );
            }}
          />
        }
        optionalPrompt={
          !required && showOptionalLabel ? (
            <FormHelperText
              m={0}
              pl="10px"
              color="gray.500"
              fontWeight="300"
              fontSize="14px"
            >
              optional
            </FormHelperText>
          ) : null
        }
        errorPrompt={
          <FormErrorLable py="2px" px={1} fontSize="14px" message={error} />
        }
      />
    </FormControl>
  );
}
export default TextInput;
