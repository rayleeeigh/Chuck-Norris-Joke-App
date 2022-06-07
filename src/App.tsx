import Homepage from "./pages/Homepage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import JokeDetails from "./pages/JokeDetails";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import SplashScreen from "./components/SplashScreen";

export const App = () => {
  return(
    <Box position="relative" bg="#ecebe9">
      <Header/>
      <SplashScreen/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="joke-details/:id" element={<JokeDetails />}/>
    </Routes>
  </BrowserRouter>
  </Box>
  )
}

export default App;
