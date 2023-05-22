import { Button, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { Else, If, Then } from 'react-if';
import { InputEditor } from 'ui';

interface EditorProps extends Record<string, any> {
  control: any;
  errors: any;
}
const Editor = (props: EditorProps) => {
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const descriptionValue = props?.getValues('description');
  return (
    <If condition={editMode}>
      <Then>
        <InputEditor name="description" label="Description" required {...props}>
          <InputEditor.FormControl>
            <Flex gap={2}>
              <InputEditor.FormLabel />
              <InputEditor.HelperText />
            </Flex>
            <InputEditor.ControllerComponent />
            <InputEditor.ErrorLabel />
          </InputEditor.FormControl>
        </InputEditor>
        <HStack spacing={2} mt={8}>
          <Button
            bg="brand.secondary"
            _hover={{ bg: 'brand.primary' }}
            size="sm"
            fontWeight="normal"
            color="white"
            type="submit"
            borderRadius="sm"
            onClick={() => {
              setEditMode(false);
            }}
          >
            Save
          </Button>
          <Button
            size="sm"
            fontWeight="normal"
            borderRadius="sm"
            onClick={() => {
              setEditMode(false);
            }}
          >
            Cancel
          </Button>
        </HStack>
      </Then>
      <Else>
        <span
          onClick={() => {
            setEditMode(true);
          }}
          dangerouslySetInnerHTML={{ __html: descriptionValue }}
        />
      </Else>
    </If>
  );
};

export default Editor;
