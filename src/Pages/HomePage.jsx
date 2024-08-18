import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Box,
} from "@chakra-ui/react";
import { API } from "../API";

const HomePage = () => {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    await axios.get(`${API}/user/readAll`).then((res) => setData(res.data));
  };
  console.log(data);
  useEffect(() => {
    getUsers();
  }, []);
  const styles = {
    fontSize: "20px",
    color: "brown",
  };
  return (
    <Box
      id="App"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text
        sx={{
          textAlign: "center",
          padding: "30px 0",
          fontSize: "30px",
          fontFamily: "monospace",
          fontWeight: 200,
          color: "blue",
        }}
      >
        No of Users Registered
      </Text>
      <TableContainer
        sx={{
          width: "50%",
          border: "3px solid darkblue",
          marginLeft: "auto",
          marginRight: "auto",
          color: "darkgreen",
          padding: "20px",
        }}
      >
        <Table sx={{ fontSize: "20px", fontWeight: 500 }}>
          <Thead>
            <Tr>
              <Th sx={styles}>FirstName</Th>
              <Th sx={styles}>LastName</Th>
              <Th sx={styles}>Email</Th>
              <Th sx={styles}>Mobile</Th>
            </Tr>
          </Thead>
          {data.map((val, ind) => (
            <Tbody>
              <Tr>
                <Td>{val.firstname}</Td>
                <Td>{val.lastname}</Td>
                <Td>{val.email}</Td>
                <Td>{val.mobile}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HomePage;
