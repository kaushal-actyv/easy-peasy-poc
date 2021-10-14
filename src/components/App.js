import "../App.css";

import NavBar from "./navbar.js";
import React, { Component } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

import { useStore, useStoreActions } from "easy-peasy";

import { submitForm } from "../services";
import { validateForm } from "../validation";

export const App = () => {
  const [outletName, setOutletName] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isInvalidForm, setIsInvalidForm] = React.useState(false);

  // getting the action functions
  const setDistributorInfo = useStoreActions(
    (actions) => actions.setDistributorInfo
  );
  const fetchTodos = useStoreActions((actions) => actions.fetchTodos);
  const fetchVendors = useStoreActions((actions) => actions.fetchVendor);

  React.useEffect(() => {
    fetchTodos(); // calling the action function (similar to dispatch)
    fetchVendors();
    // eslint-disable-next-line
  }, []);

  // reading store data
  const distributorInfo = useStore((state) => state.distributorInfo);

  const handleSubmit = () => {
    const payload = { outletName, ownerName, address, email, phone };
    const isValid = validateForm(payload);
    if (isValid) {
      setIsInvalidForm(false);
      setDistributorInfo(payload);
      submitForm(payload);
    } else {
      setIsInvalidForm(true);
    }
  };

  return (
    <ChakraProvider>
      <React.Fragment>
        <NavBar />

        <Box m="10" alignItems="center" justifyContent="center">
          <FormControl id="owner-name" isRequired>
            <FormLabel>Owner Name</FormLabel>
            <Input
              placeholder="Owner Name"
              value={ownerName}
              onChange={(event) => {
                setOwnerName(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="outlet-name" isRequired>
            <FormLabel>Outlet Name</FormLabel>
            <Input
              placeholder="Outlet Name"
              value={outletName}
              onChange={(event) => {
                setOutletName(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Id</FormLabel>
            <Input
              placeholder="Email Id"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input
              placeholder="Phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="Address"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </FormControl>
          <Center m="10">
            <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
              Submit
            </Button>
          </Center>
          {isInvalidForm && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Invalid Input!</AlertTitle>
              <AlertDescription>Please enter correct details.</AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          )}
        </Box>
      </React.Fragment>
    </ChakraProvider>
  );
};
