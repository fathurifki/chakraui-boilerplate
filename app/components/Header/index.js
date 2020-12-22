import React from 'react';
import { Container, Box, Flex, Heading } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../theme/ColorModeSwitcher';

export const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [headerState, setHeaderState] = React.useState({});
  return (
    <Box as="header" py={6}>
      <Container maxW="4xl" px={4}>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Heading size="lg"> Header </Heading>
          </Flex>

          <Flex>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
