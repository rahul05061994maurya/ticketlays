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
import { DeleteIcon } from "../icons/table/delete-icon";
import { deleteData } from "../../utils/accounts/api";
const DeleteModel = (props: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const deleteUser = function (onClose: any) {
    deleteData(props.id);
    onClose();
  };
  return (
    <div>
      <>
        <Button onPress={onOpen} isIconOnly color="danger">
          <DeleteIcon size={20} fill="#fff" />
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
                <ModalBody>Are you sure you want to delete the user</ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={() => deleteUser(onClose)}>
                    Delete
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

export default DeleteModel;
