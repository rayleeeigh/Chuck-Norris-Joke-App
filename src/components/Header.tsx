import React from 'react';
import {
  Flex,
  Text,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FiUser } from "react-icons/fi";

export default function Header () {
    return (
        <Flex bg="#303030" w="100vw" h="8vh" alignItems="center" justifyContent="right">
            <Text color="white" fontSize="1vw" px="2vw">SO FUNKTIONIERT'S</Text>
            <Text color="white" fontSize="1vw" px="2vw">SONDERANGEBOTE</Text>
            <Menu>
            <MenuButton leftIcon={<FiUser />} px="2vw" fontSize="1vw" bg="#303030" _hover={{bg: "#cfb995"}} _active={{bg: "#cfb995"}} color="white" as={Button} rightIcon={<ChevronDownIcon />}>
                MEIN BEREICH
            </MenuButton>
            <MenuList>
                <MenuItem>My Published Jokes</MenuItem>
                <MenuItem>My Saved Jokes</MenuItem>
                <MenuItem>Account Information</MenuItem>
                <MenuItem>Publish New Joke</MenuItem>
            </MenuList>
            </Menu>
            <Text color="white" px="4vw"/>
        </Flex>
    )
}