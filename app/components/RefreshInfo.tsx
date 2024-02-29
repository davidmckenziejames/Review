import { Flex, Alert, AlertIcon } from "@chakra-ui/react";

export default function RefreshInfo() {
  return (
    <Flex id="refreshinfo" w="100%" position="fixed" top="0" zIndex="1000">
      <Alert
        status="info"
        fontSize="14px"
        fontWeight="500"
        py="8px"
        justifyContent="center"
      >
        <AlertIcon width="18px" marginRight="8px" />
        Refresh page to restart demo & see choices
      </Alert>
    </Flex>
  );
}
