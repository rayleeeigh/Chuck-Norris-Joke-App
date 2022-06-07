import { Box, Image, Input, Text, Flex, InputRightElement, InputGroup, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import bgimg from '../assets/assets_Homework_Front-End_01/bitmap.png'
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";

interface Joke{
    id: string;
    categories: string;
    value: string;
    likes: number;
    dislikes: number
  }

export default function SplashScreen(){

    const [result, setResult] = useState<Array<Joke>>([]);

    function search(query:string){
        if(query!==''){
            axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`).then((response)=>{
                if(response!=null){
                    setResult(response.data.result);
                }
                else{
                    setResult([]);
                }
            })
        }
        else{
            setResult([]);
        }
    }

    return(
    <Box position="relative" w="100vw">
        <Image src={bgimg}/>
        <Flex color="white" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" flexDirection="column" alignItems="center">
        <Text color="#cfb995" fontSize="4vw">The Joke Bible</Text>
        <Text fontSize="2vw">Daily Laugh for you and yours</Text>
        <InputGroup my="2vh">
            <Input onChange={e=>search(e.target.value)} maxW="100vw" minW="40vw" placeholder="How can we make you laugh today?" borderRadius="0"/>
            <InputRightElement children={<SearchIcon/>} />
        </InputGroup>
        <Box display={(result.length === 0)?'none':'block'} bg="white" maxW="100vw" minW="40vw" overflow="auto">
            <UnorderedList listStyleType="none" h="10vh" color="black">
            {result.map((res)=>(
                <ListItem><Link href={`/joke-details/${res.id}`}>{res.value}</Link></ListItem>
            ))}
            </UnorderedList>
        </Box>
        </Flex>
    </Box>
    )
}
