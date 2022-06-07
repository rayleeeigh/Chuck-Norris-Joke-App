import { Button, Center, Flex, Grid, GridItem, Spinner} from '@chakra-ui/react';
import JokeMenu from '../components/JokeMenu';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

interface Joke{
  id: string;
  categories: string;
  value: string;
  likes: number;
  dislikes: number
}

export const Homepage = () => {
  const [categorized, setCategorized] = useState<Array<Joke>>([]);
  const [uncategorized, setUncategorized] = useState<Array<Joke>>([]);
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/search?query=all').then(function (response){
      console.table(response.data.result)
      response.data.result.map((res: { categories: Array<string>; id: string; value: string }, index:number)=>{
        if(res.categories.length > 0){
         setCategorized(categorized=>[...categorized, {id: res.id, categories: res.categories[0], value: res.value, likes: 0, dislikes: 0}])
        }
        if(index>=count && index<count+9){
          setCards(cards=>[...cards,<GridItem key={res.id}><Card id={res.id} value={res.value} category={res.categories[0]}/></GridItem>])
        }
        else{
          setUncategorized(uncategorized=>[...uncategorized, {id: res.id, categories: 'Uncategorized', value: res.value, likes: 0, dislikes: 0}])
        }
      })
  });
  },[])

  function viewMore(){
    let countChange = count+9;
    setCount(count+9)
    categorized.map((card,index)=>{
      if(index>=countChange && index<countChange+9){
        setCards(cards=>[...cards,<GridItem key={card.id}><Card id={card.id} value={card.value} category={card.categories}/></GridItem>])
      }
    })
  }

  return(
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <JokeMenu/>
        {cards.length===0?
          <Center>
            <Spinner/>
          </Center>:
          <Grid templateColumns='repeat(3, 1fr)' gap={12}>
            {cards}
          </Grid>
        }
        <Flex w="100vw" justifyContent="center" alignItems="center" my="8vh">
          <Button border="1px solid #cfb995" bg="white" color="#cfb995" onClick={viewMore}>View More ↓</Button>
        </Flex>
      </Flex>
  )
}

export default Homepage;
