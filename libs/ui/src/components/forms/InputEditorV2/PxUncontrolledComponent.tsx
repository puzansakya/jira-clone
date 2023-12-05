import React from 'react';
import ReactQuill from 'react-quill';
import { When } from 'react-if';
import { Box, Button, Flex } from '@chakra-ui/react';
import { usePxInputEditor } from './usePxInputEditor';

interface PxUncontrolledComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
  onChange?: any;
}
export const PxUncontrolledComponent = (
  props: PxUncontrolledComponentProps
) => {
  const { onChangeRHF, value: rhfValue, ...rest } = props;
  const pzContext = usePxInputEditor();

  const {
    name,
    value, // this is user defined value for uncontrolled component
    onChange: _onChange,
  } = pzContext;

  const inputProps = {
    name,
  };

  const newVal = value || rhfValue;

  // LOCAL STATE
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [localValue, setLocalValue] = React.useState<string>('');

  // FUNCTIONS
  React.useEffect(() => {
    if (newVal) {
      setLocalValue(newVal);
    }
  }, [newVal]);

  const handleChange = (data: any) => {
    setLocalValue(data);
  };

  const handleSave = () => {
    _onChange?.(name, localValue);
    onChangeRHF?.(localValue);
    setEditMode(false);
  };

  const handleCancel = () => {
    setLocalValue(newVal);
    setEditMode(false);
  };

  return (
    <>
      <When condition={!editMode}>
        <Box mt={"-20px"}>
          <span
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: localValue }}
            onClick={() => {
              setEditMode(true);
            }}
          />
        </Box>
      </When>
      <When condition={editMode}>
        <ReactQuill
          test-id="text-editor"
          theme="snow"
          onChange={handleChange}
          {...inputProps}
          {...rest}
          value={localValue }
        />
        <Flex gap={2}>
          <Button
            bg="#005EEB"
            _hover={{ bg: '#0747A6' }}
            size="sm"
            fontWeight="normal"
            color="white"
            borderRadius="sm"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            size="sm"
            fontWeight="normal"
            borderRadius="sm"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Flex>
      </When>
    </>
  );
};
