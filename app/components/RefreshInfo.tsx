import { Flex, Alert, AlertIcon } from "@chakra-ui/react";

export default function RefreshInfo() {
  return (
    <Flex id="refreshinfo" w="100%" position="fixed" top="0">
      <Alert status="info">
        <AlertIcon />
        Refresh page to restart demo & see choices
      </Alert>
    </Flex>
  );
}
