import { Avatar, Flex, Text } from "@chakra-ui/react";

const Message = ({ ownMessage }) => {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Text maxW={"350px"} bg={"blue.400"} p={1} borderRadius={"md"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            eligendi facere mollitia obcaecati, voluptate ducimus sequi natus,
            explicabo totam praesentium nisi, assumenda nam repellendus fuga
            veritatis magnam laborum alias adipisci!
          </Text>
          <Avatar src="/" w={7} h={7} />
        </Flex>
      ) : (
        <Flex gap={2} alignSelf={"flex-start"}>
          <Avatar src="/" w={7} h={7} />
          <Text
            maxW={"350px"}
            bg={"gray.400"}
            p={1}
            borderRadius={"md"}
            color={"black"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            eligendi facere mollitia obcaecati, voluptate ducimus sequi natus
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Message;
