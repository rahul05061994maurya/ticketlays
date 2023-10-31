"use client";

import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";
import { getData } from "../../utils/accounts/api";

interface ColumnsDataProps {
  name: string;
  uid: string;
}
interface UsersDataProps {
  id: number;
  name: string;
  role: string;
  team: string;
  status: string;
  age: string;
  avatar: string;
  email: string;
}

export const TableWrapper = () => {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);

  const getaccountUserData = async function () {
    const users = await getData();
    setUsersData(users);
  };

  useEffect(() => {
    getaccountUserData();
  }, []);

  return (
    <div className=" w-full flex flex-col gap-4">
      {usersData.length !== 0 && (
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={usersData}>
            {(item) => (
              <TableRow>
                {(columnKey) => (
                  <TableCell>
                    {RenderCell({ user: item, columnKey: columnKey })}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
