import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, Image, ListItem, Skeleton, Spinner, Stack, Text, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Like from '../assets/assets_Homework_Front-End_02/hand.png'
import Unlike from '../assets/assets_Homework_Front-End_02/hand-copy.png'

interface Joke{
    id: string;
    categories: string;
    value: string;
    likes: number;
    dislikes: number
}

export default function JokeDetails(){
    const [likeStatus, setLikeStatus] = useState<boolean>(false);
    const [dislikeStatus, setDislikeStatus] = useState<boolean>(false);
    const [joke, setJoke] = useState<Joke>({} as Joke);
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/search?query=all').then(function (response){
          response.data.result.map((res: { categories: Array<string>; id: string; value: string, likes: number, dislikes:number })=>{
            if(res.categories.length > 0 && res.id === id){
                console.table(res)
                setJoke({categories: res.categories[0], id: res.id, value: res.value, likes: 0, dislikes:0})
            }
          })
        });
      },[])

      function likeJoke(){
        (likeStatus)?setJoke({...joke, likes: 0}):setJoke({...joke, likes: 1});
        setLikeStatus(!likeStatus)
      }
      function dislikeJoke(){
        (dislikeStatus)?setJoke({...joke, dislikes: 0}):setJoke({...joke, dislikes: 1});
        setDislikeStatus(!dislikeStatus)
      }

    return (
        <Flex w="100vw">
            <Box w="70vw" h="100vh" px="8vw">
                <Box w="60vw" bg="white" shadow="lg" h="50vh" mt="20vh" ml="2vw" p="8">
                    {JSON.stringify(joke)==='{}'?
                    <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                    </Stack>:
                    <>
                        <Flex justifyContent="center" alignItems="center" w="12vw" h="4vh" bg="green.500" borderRadius="100" textAlign="center" color="white"><StarIcon mr="1vw"/> {joke.categories}</Flex>
                        <Heading py="2vh">Chuck Norris Joke</Heading>
                        <Text>{joke.value}</Text>
                    </>}
                </Box>
                <Flex w="60vw" h="19vh" mt="1vh" ml="2vw" p="8">
                    <Flex flexDirection="column" alignItems="center" justifyContent="center">
                        <Flex justifyContent="center" alignItems="center" bg={(likeStatus)?'green':'green.400'} h="6vh" w="6vh" borderRadius="100">
                            <Image style={{cursor:'pointer'}} onClick={likeJoke} src={Like}/>
                        </Flex>
                        <Text>{joke.likes}</Text>
                    </Flex>
                    <Flex flexDirection="column" alignItems="center" justifyContent="center">
                        <Flex mx="2vh" justifyContent="center" alignItems="center" bg={(dislikeStatus)?'red':'red.400'} h="6vh" w="6vh" borderRadius="100">
                            <Image style={{cursor:'pointer'}} onClick={dislikeJoke} src={Unlike}/>
                        </Flex>
                        <Text>{joke.dislikes}</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box w="30vw" h="100vh">
                <Box w="20vw" bg="white" shadow="lg" h="70vh" mt="20vh" ml="2vw" p="8">
                    <Text fontSize="1vw" fontWeight="bold">THE TOP 10 JOKES OF THE WEEK</Text>
                    <UnorderedList my="2vh">
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </Flex>
    )
}