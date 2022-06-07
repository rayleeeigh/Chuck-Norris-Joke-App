import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";

export default function Card ({value, category, id}:{value:string, category: string, id:string}) {
    return (
        <Box p="8" mt="2vh" bg="white" w="25vw" h="30vh" shadow="md" overflow="auto" position="relative" fontSize="1vw">
            <Flex mb="2">
                <AiFillThunderbolt color="#cfb995"/><Heading size='md' fontSize="2vw">{category}</Heading>
            </Flex>
            {value}
            <Flex color="#cfb995" right="0" position="absolute" bottom="0" pr="4" pb="4">
                <Link href={`/joke-details/${id}`}>
                    <Text _hover={{textDecoration: "underline"}} style={{cursor: "pointer"}}>See Stats →</Text>
                </Link>
            </Flex>
        </Box>
    )
}