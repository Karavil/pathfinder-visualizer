import React from "react";

import { Flex, Text } from "@chakra-ui/core";

const Footer = () => {
   return (
      <Flex
         p={2}
         bg="primary"
         color="background"
         justifyContent="center"
         alignItems="center"
         width="100%"
         position="absolute"
         bottom="0"
         shadow="0px -4px 40px -6px rgba(0,0,0,0.25);"
      >
         <Text>Made with ❤️ by Alp Karavil</Text>
      </Flex>
   );
};

export default Footer;
