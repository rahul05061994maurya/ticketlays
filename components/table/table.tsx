"use client";

import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { columns, users, reportData, reportColumn } from "./data";
import { RenderCell } from "./render-cell";
import { getData } from "../../utils/accounts/api";

interface ColumnsDataProps {
  name: string;
  uid: string;
}

interface ReportColumnProps {
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

interface ReportDataProps {
  BackgroundColor: string,
     Trans_Id: string,
     Bkg_Id: string,
     Bkg_Commit: string,
     Pay_Status: string,
     Appl_Name: string,
     Cinema_Name: string,
     Screen_Name: string,
     Event_Name: string,
     Trans_Date: string,
     Show_Date: string,
     Show_Date_Disp: string,
     Ticket_Qty: string,
     Ticketwise_Qty: string,
     Seat_Info: string,
     Ticket_Amt: string,
     Item_Desc: string,
     ItemWise_Amt: string,
     ItemWise_Qty: string,
     Inv_Qty: string,
     Inv_Amt: string,
     Additional_Desc: string,
     Add_strAmt: string,
     Add_Charges: string,
     Cinema_DiscAmt: string,
     Cinema_OfferCode: string,
     ETicket_Status: string,
     SocialDistancing_count: string,
}
export const TableWrapper = (props:any) => {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);

  const getaccountUserData = async function () {
    const users = await getData();
    setUsersData(users);
  };

  useEffect(() => {
    getaccountUserData();
  }, []);

  return (
    // <div className=" w-full flex flex-col gap-4">
    //   {usersData.length !== 0 && (
    //     <Table aria-label="Example table with custom cells">
    //       <TableHeader columns={columns}>
    //         {(column) => (
    //           <TableColumn
    //             key={column.uid}
    //             hideHeader={column.uid === "actions"}
    //             align={column.uid === "actions" ? "center" : "start"}
    //           >
    //             {column.name}
    //           </TableColumn>
    //         )}
    //       </TableHeader>
    //       <TableBody items={usersData}>
    //         {(item) => (
    //           <TableRow>
    //             {(columnKey) => (
    //               <TableCell>
    //                 {RenderCell({ user: item, columnKey: columnKey })}
    //               </TableCell>
    //             )}
    //           </TableRow>
    //         )}
    //       </TableBody>
    //     </Table>
    //   )}
    // </div>

    <div className=" w-full flex flex-col gap-4">
      {usersData.length !== 0 && (
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={reportColumn}>
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
          <TableBody items={reportData}>
            {(item) => (
              <TableRow key={item.Trans_Id}>
                {(columnKey) => (
                  <TableCell>
                   {getKeyValue(item, columnKey)}
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
