import {
  Box,
  Button,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  InputEditor,
  InputStatusMultiSelect,
  InputText,
  TimeTracking,
} from 'ui';
import Comment from './comment';

const DetailBody = () => {
  return (
    <HStack spacing={10} alignItems="start">
      <Box width="60%" flexShrink={0}>
        <Editable
          _hover={{ bg: 'gray.100' }}
          defaultValue="You can use rich text with images in issue descriptions."
          fontSize="2xl"
        >
          <EditablePreview borderRadius="sm" />
          <EditableInput
            border="1px solid"
            borderColor="blue.500"
            outline="transparent"
            p={1}
          />
        </Editable>

        <InputEditor name="description" label="Description" required>
          <InputEditor.FormControl>
            <Flex gap={2}>
              <InputEditor.FormLabel />
              <InputEditor.HelperText />
            </Flex>
            <InputEditor.Component />
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
          >
            Save
          </Button>
          <Button
            size="sm"
            fontWeight="normal"
            // onClick={() => { }}
            borderRadius="sm"
          >
            Cancel
          </Button>
        </HStack>
        <Box mt={10}>
          <Comment />
        </Box>
      </Box>
      <Box width="40%">
        <VStack spacing={6} mt={6}>
          <InputStatusMultiSelect
            label="STATUS"
            name="reactSelectMulti"
            options={[
              { value: '1', label: 'Done', bg: 'green.500', color: 'white' },
              {
                value: '2',
                label: 'Backlog',
                bg: 'gray.300',
                color: 'gray.900',
              },
              {
                value: '3',
                label: 'Selected For Development',
                bg: 'gray.300',
                color: 'gray.900',
              },
              {
                value: '4',
                label: 'In Progress',
                bg: 'blue.500',
                color: 'white',
              },
            ]}
            required
          >
            <InputStatusMultiSelect.FormControl>
              <Flex gap={2}>
                <InputStatusMultiSelect.FormLabel />
                <InputStatusMultiSelect.HelperText />
              </Flex>
              <InputStatusMultiSelect.Component />
              <InputStatusMultiSelect.ErrorLabel />
            </InputStatusMultiSelect.FormControl>
          </InputStatusMultiSelect>

          <InputStatusMultiSelect
            label="ASSIGNEES"
            name="assignee"
            options={[
              {
                value: '1',
                label: 'Lord Gaben',
                src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
              },
              {
                value: '2',
                label: 'Baby Yoda',
                src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
              },
              {
                value: '3',
                label: 'Pickle Rick',
                src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
              },
            ]}
            required
          >
            <InputStatusMultiSelect.FormControl>
              <Flex gap={2}>
                <InputStatusMultiSelect.FormLabel />
                <InputStatusMultiSelect.HelperText />
              </Flex>
              <InputStatusMultiSelect.AssigneeComponent />
              <InputStatusMultiSelect.ErrorLabel />
            </InputStatusMultiSelect.FormControl>
          </InputStatusMultiSelect>

          <InputStatusMultiSelect
            label="REPORTER"
            name="reporter"
            options={[
              {
                value: '1',
                label: 'Lord Gaben',
                src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
              },
              {
                value: '2',
                label: 'Baby Yoda',
                src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
              },
              {
                value: '3',
                label: 'Pickle Rick',
                src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
              },
            ]}
            required
          >
            <InputStatusMultiSelect.FormControl>
              <Flex gap={2}>
                <InputStatusMultiSelect.FormLabel />
                <InputStatusMultiSelect.HelperText />
              </Flex>
              <InputStatusMultiSelect.ReporterComponent />
              <InputStatusMultiSelect.ErrorLabel />
            </InputStatusMultiSelect.FormControl>
          </InputStatusMultiSelect>

          <InputStatusMultiSelect
            label="PRIORITY"
            name="priority"
            options={[
              { value: 'highest', label: 'Highest', icon: 'up' },
              { value: 'high', label: 'High', icon: 'up' },
              { value: 'medium', label: 'Medium', icon: 'up' },
              { value: 'low', label: 'Low', icon: 'down' },
              { value: 'lowest', label: 'Lowest', icon: 'down' },
            ]}
            required
          >
            <InputStatusMultiSelect.FormControl>
              <Flex gap={2}>
                <InputStatusMultiSelect.FormLabel />
                <InputStatusMultiSelect.HelperText />
              </Flex>
              <InputStatusMultiSelect.PriorityComponent />
              <InputStatusMultiSelect.ErrorLabel />
            </InputStatusMultiSelect.FormControl>
          </InputStatusMultiSelect>

          <InputText name="asdf" label="ORIGINAL ESTIMATE (HOURS)" required>
            <InputText.FormControl>
              <Flex gap={2}>
                <InputText.FormLabel />
                <InputText.HelperText />
              </Flex>
              <InputText.Component
                size="sm"
                color="brand.label"
                borderColor="gray.300"
              />
              <InputText.ErrorLabel />
            </InputText.FormControl>
          </InputText>

          <TimeTracking
            value={{
              timeSpent: 5,
              timeEstimated: 20,
            }}
          />
        </VStack>
        <Divider borderColor="gray.400" mt={5} />
        <Text> Create at 6 months ago</Text>
        <Text> Updated at 6 months ago</Text>
      </Box>
    </HStack>
  );
};
export default DetailBody;
