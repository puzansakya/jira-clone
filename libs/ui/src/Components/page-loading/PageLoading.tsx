import { Flex, Spinner } from '@chakra-ui/react';
export const PageLoading = (props: any) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="full"
      h={`${props.h || '100vh'}`}
    >
      <Spinner color="brand.primary" />
    </Flex>
  );
};

export default PageLoading;
