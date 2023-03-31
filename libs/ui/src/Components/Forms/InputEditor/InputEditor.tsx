import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// LIBS
import { Controller } from 'react-hook-form';

// CHAKRA-UI
import { FormControl, FormHelperText } from '@chakra-ui/react';

// UTILITIES
import isEmpty from 'lodash/isEmpty';
import * as fromHelpers from '../../../Helpers';

// COMPONENTS
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import FormLabel from '../FormLabel/FormLabel';
import RenderWithLabelPosition from '../RenderWithLabelPosition/RenderWithLabelPosition';

// FORM HELPERS;
import * as fromFormHelpers from '../@form-helper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputEditorComponentProps {}

const InputEditorComponent = (props: any) => {
  const { name, value, onChangeRHF, onChange2 } = props;
  const handleChange = (value: any) => {
    onChange2 && onChange2(name, value);
    onChangeRHF && onChangeRHF(value);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ReactQuill theme="snow" value={value || ''} onChange={handleChange} />
  );
};

/* eslint-disable-next-line */
export interface InputEditorProps {}

export function InputEditor(props: any) {
  const {
    label = 'Sample label',
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
          inputComponent={<InputEditorComponent {...rest} />}
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
                <InputEditorComponent
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
