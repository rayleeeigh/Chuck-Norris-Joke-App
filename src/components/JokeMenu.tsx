import { Box, Grid } from "@chakra-ui/react";
import Item from "./Item";

export default function JokeMenu(){
    return(
        <Box w= "100vw" px="8vw" my="4vw">
            <Grid templateColumns='repeat(8, 1fr)' gap="2">
                <Item title='EXPLICIT' color='white' bg="#ff5b5b" border=''/>
                <Item title='MOVIE' color='white' bg="#ff915b" border=''/>
                <Item title='MUSIC' color='white' bg="#ffb35b" border=''/>
                <Item title='DEV' color='white' bg="#ffdf5b" border=''/>
                <Item title='HISTORY' color='white' bg="#8fe360" border=''/>
                <Item title='CELEBRITY' color='white' bg="#57e690" border=''/>
                <Item title='FOOD' color='white' bg="#57dbe6" border=''/>
                <Item title='RELIGION' color='#cfb995' bg="white" border="#cfb995"/>
                <Item title='SPORT' color='white' bg="#ff5b5b" border=''/>
                <Item title='SCIENCE' color='white' bg="#ff915b" border=''/>
                <Item title='POLITICAL' color='white' bg="#ffb35b" border=''/>
                <Item title='MONEY' color='white' bg="#ffdf5b" border=''/>
                <Item title='CAREER' color='white' bg="#8fe360" border=''/>
                <Item title='ANIMAL' color='white' bg="#57e690" border=''/> 
                <Item title='TRAVEL' color='white' bg="#57dbe6" border=''/> 
                <Item title='FASHION' color='#cfb995' bg="white" border="#cfb995"/> 
            </Grid>
        </Box>
    )
}