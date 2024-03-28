import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";

import Actions from "../components/Actions";
import { useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      {/* header */}
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerburg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerburg
            </Text>
            <Image src="/verified.png" w={"4"} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      {/* body */}
      <Text my={3}>Let's talk about Threads.</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>

      {/* icon like */}
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"}>238 replies</Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      {/* icon waving */}
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>
            <MdOutlineWavingHand />
          </Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />

      {/* comment */}
      <Comment
        comment="Looks really good!"
        createAt="2d"
        likes={100}
        username="abramov"
        avatar="https://bit.ly/dan-abramov"
      />
      <Comment
        comment="Amazing "
        createAt="1d"
        likes={21}
        username="kola"
        avatar="'https://bit.ly/tioluwani-kolawole"
      />
      <Comment
        comment="Looks very good!"
        createAt="20h"
        likes={12}
        username="kent"
        avatar="https://bit.ly/kent-c-dodds"
      />
    </>
  );
};

export default PostPage;
