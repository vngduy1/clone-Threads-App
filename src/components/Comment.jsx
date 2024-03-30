import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comment = ({ comment, createAt, likes, username, avatar }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={avatar} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              {username ? username : "username"}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize="sm" color={"gray.light"}>
                {createAt ? createAt : ""}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          {/* comment */}
          <Text>{comment ? comment : "comment"} </Text>
          <Actions liked={liked} setLiked={setLiked} />
          <Text fontSize={"sm"} color={"gray.light"}>
            {(likes ? likes : 0) + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comment;
