import { Stack, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack
      spacing={2}
      direction="column"
      align="center"
      justify="center"
      height="100px"
      width="80%"
      border="1px transparent solid"
      borderRadius="30px"
      backgroundColor="blue.500"
      margin="5px auto 20px auto"
    >
      <Heading color="white">Note Taking App</Heading>
      <Text color="white">Jot down to remember</Text>
    </Stack>
  );
};
export default Header;
