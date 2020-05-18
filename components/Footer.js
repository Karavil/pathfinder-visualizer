import React from "react";

import { Flex, Text } from "@chakra-ui/core";

const Footer = () => {
   return (
      <Flex
         p={1}
         bg="background"
         color="primary"
         justifyContent="center"
         alignItems="center"
         position="absolute"
         bottom="0"
         width="100%"
         shadow="0px -4px 20px -6px rgba(0,0,0,0.75);"
      >
         <Text>Made with ❤️ by Alp Karavil</Text>
      </Flex>
   );
};

export default Footer;
