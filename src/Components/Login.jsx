import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../API";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async () => {
    setIsLoading(true);
    const userDetails = {
      email,
      password,
    };
    await axios.post(`${API}/user/login`, userDetails).then((res) => {
      res.data.message === "Login Success"
        ? toast.success(res.data.message, {
            position: "top-center",
            autoClose: 1000,
          }) && navigate("/home")
        : toast.error(res.data.message, {
            position: "top-center",
            autoClose: 1000,
          });
      setIsLoading(false);
    });
  };
  return (
    <VStack spacing={"5px"}>
      {isLoading && <CircularProgress isIndeterminate color="green.300" />}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
