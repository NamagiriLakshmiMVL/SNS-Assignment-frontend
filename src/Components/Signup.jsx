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
import { Select } from "@chakra-ui/react";
import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../API";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const navigate = useNavigate();
  const submitHandler = async () => {
    setIsLoading(true);

    const userDetails = {
      firstname,
      lastname,
      mobile,
      role,
      email,
      password,
    };
    await axios.post(`${API}/user/register`, userDetails).then((res) => {
      res.data.message === "User Added Successfully"
        ? toast.success(res.data.message, {
            position: "top-center",
            autoClose: 1000,
          }) && navigate("/home")
        : toast.error(res.data.message, {
            position: "top-center",
            autoClose: 1000,
          });
    });
    setIsLoading(false);
  };
  return (
    <VStack spacing={"8px"}>
      {isLoading && <CircularProgress isIndeterminate color="green.300" />}
      <FormControl id="first-name" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input
          placeholder="Enter Your First Name"
          onChange={(e) => setFirstname(e.target.value)}
        />
      </FormControl>

      <FormControl id="last-name" isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input
          placeholder="Enter Your First Name"
          onChange={(e) => setLastname(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email ID</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="mobile" isRequired>
        <FormLabel>Mobile Number</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <FormControl id="role" isRequired>
        <FormLabel>Role</FormLabel>
        <Select variant="outline" onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="guest">Guest</option>
        </Select>
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
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
