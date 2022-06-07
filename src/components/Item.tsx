import { GridItem } from "@chakra-ui/react";

export const Item = ({title, bg, color, border}:{title:string, bg:string, color:string, border:string}) =>{
    return(
        <GridItem style={{cursor:"pointer"}} color={color} fontWeight="bold" border={`solid 1px ${border}`} fontSize="1vw" w='8vw' h='8vh' bg={bg} display="flex" justifyContent="center" alignItems="center">
            {title}
        </GridItem>
    )
}

export default Item;