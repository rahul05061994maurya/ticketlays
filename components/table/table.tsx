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
import React, { useEffect } from "react";
import { columns, users, ColoumsProps, UsersProps } from "./data";
import { RenderCell } from "./render-cell";
import { RenderCell1 } from "./render-cell1";
import { useAccountData } from "../../services/accounts";
import { ReportsProps } from "../utils/reports";

interface Prosp {
  users: any[];
  // users:UsersProps[]
  // columns: ColoumsProps[];
  columns: any[];
  page?: string;
}
export const TableWrapper = ({ users, columns, page }: Prosp) => {
  const { data, isLoading } = useAccountData("");

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table
        aria-label="Example table with custom cells"
        removeWrapper={page === "report" ? true : false}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={page === "report" ? column.key : column.uid}
              hideHeader={page === "report" ? false : column.uid === "actions"}
              align={
                page === "report"
                  ? "center"
                  : column.uid === "actions"
                  ? "center"
                  : "start"
              }
            >
              {page === "report" ? column.label : column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody items={users}>
          {(item) => (
            <TableRow key={page === "report" ? item.Trans_Id : item.id}>
              {(columnKey) => (
                <TableCell>
                  {page === "report"
                    ? RenderCell1({ user: item, columnKey: columnKey })
                    : RenderCell({ user: item, columnKey: columnKey })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
