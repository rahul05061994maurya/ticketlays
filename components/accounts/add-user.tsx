"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { addUser } from "../../utils/accounts/api";

export const AddUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const sumbitForm = function (onClose: any) {
    const formData = { email, fname, lname, mobile, password };
    addUser(formData);
    onClose();
  };

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Add User
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add User
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Email"
                    variant="bordered"
                    value={email}
                    onValueChange={setEmail}
                  />
                  <Input
                    label="First Name"
                    variant="bordered"
                    value={fname}
                    onValueChange={setFname}
                  />
                  <Input
                    label="Last Name"
                    variant="bordered"
                    value={lname}
                    onValueChange={setLname}
                  />
                  <Input
                    label="Phone Number"
                    variant="bordered"
                    value={mobile}
                    onValueChange={setMobile}
                  />

                  <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                    value={password}
                    onValueChange={setPassword}
                  />
                  {/* <Input
                    label="Confirm Password"
                    type="password"
                    variant="bordered"
                  /> */}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={() => sumbitForm(onClose)}>
                    Add User
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
