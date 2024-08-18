import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const LoginPage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        m="40px 0 15px 0"
        textAlign={"center"}
        width={"100%"}
        color={"black"}
        border={"1px solid darkgray"}
        backgroundColor={"lightgray"}
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab sx={{ color: "black", fontWeight: "bold" }}>Login</Tab>
            <Tab sx={{ color: "black", fontWeight: "bold" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default LoginPage;
