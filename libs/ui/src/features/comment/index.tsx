import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Kbd,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const CreateCommentInput = ({ value, handleSave, handleCancel }: any) => {
  const [localValue, setLocalValue] = React.useState();
  React.useEffect(() => {
    if (value) {
      setLocalValue(value);
    }
  }, [value]);

  return (
    <VStack align="start" w="full">
      <Textarea
        onChange={(e: any) => {
          setLocalValue(e.target.value);
        }}
        value={localValue}
        placeholder="Here is a sample placeholder"
        w="full"
      />
      <HStack spacing={2} mt={8}>
        <Button
          bg="brand.secondary"
          _hover={{ bg: 'brand.primary' }}
          size="sm"
          fontWeight="normal"
          color="white"
          type="submit"
          borderRadius="sm"
          onClick={() => handleSave(localValue)}
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
      </HStack>
    </VStack>
  );
};
const CreateComment = ({ createComment }: any) => {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <HStack align="start" spacing={2} w="full">
      <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      {editMode ? (
        <CreateCommentInput
          handleCancel={() => setEditMode(false)}
          handleSave={(comment: string) => {
            createComment(comment);
            setEditMode(false);
          }}
        />
      ) : (
        <VStack align="start" spacing={1} w="full">
          <Box
            w="full"
            border="1px"
            borderColor="gray.100"
            px={3}
            py={1}
            cursor="pointer"
            onClick={() => {
              return setEditMode(true);
            }}
          >
            Add a comment...
          </Box>
          <Text fontSize="sm">
            <Text as="strong"> Pro tip</Text>: press <Kbd>M</Kbd> to comment
          </Text>
        </VStack>
      )}
    </HStack>
  );
};

const CommentItem = ({ comment, updateComment }: any) => {
  const [editMode, setEditMode] = React.useState(false);

  const handleSave = (payload: string) => {
    setEditMode(false);
    updateComment({
      ...comment,
      body: payload,
    });
  };
  const handleCancel = () => {
    setEditMode(false);
  };
  return (
    <HStack align="start" spacing={2} w="full">
      <Avatar
        size="sm"
        name={`${comment?.commentBy?.firstName}${comment?.commentBy?.lastName}`}
        src={comment?.commentBy?.avatar}
      />
      <Flex direction="column" w="full">
        <HStack spacing={2}>
          <Text as="p">
            {comment?.commentBy?.firstName}
            {comment?.commentBy?.lastName}
          </Text>
          <Text as="p">{comment?.createdAt}</Text>
        </HStack>
        {editMode ? (
          <CreateCommentInput
            value={comment?.body}
            handleCancel={handleCancel}
            handleSave={(comment: string) => handleSave(comment)}
          />
        ) : (
          <>
            <Text>{comment.body}</Text>
            <HStack spacing={2}>
              <Text
                onClick={() => {
                  setEditMode(true);
                }}
              >
                Edit
              </Text>
              <Text>.</Text>
              <Text>Delete</Text>
            </HStack>
          </>
        )}
      </Flex>
    </HStack>
  );
};
const CommentList = ({ comments, updateComment }: any) => {
  // const _comments = [
  //   {
  //     id: 1,
  //     commentBy: { name: 'Lord Gaben', src: 'https://bit.ly/kent-c-dodds' },
  //     comment: `With Jira Software Server, you host Jira Software on your own hardware and customize your setup however you'd like. This is generally the best option for teams who need to manage all the details, have stricter requirements for data governance, and don't mind the additional complexity of hosting themselves.`,
  //     commentAt: 'a month ago',
  //   },
  // ];
  // return <pre>asd{JSON.stringify(comments, null, 2)}</pre>;
  return (
    <>
      {comments.map((comment: any) => (
        <CommentItem
          updateComment={updateComment}
          key={comment.id}
          comment={comment}
        />
      ))}
    </>
  );
};

const Comment = ({ createComment, updateComment, comments }: any) => {
  return (
    <>
      <Heading as="h3" fontSize="lg" mb={6}>
        Comments
      </Heading>
      <VStack align="start" spacing={6}>
        <CreateComment createComment={createComment} />
        <CommentList updateComment={updateComment} comments={comments} />
      </VStack>
    </>
  );
};

export default Comment;
